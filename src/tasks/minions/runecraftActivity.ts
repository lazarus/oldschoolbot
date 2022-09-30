import { increaseNumByPercent, Time } from 'e';
import { Bank } from 'oldschooljs';

import { Emoji, Events, MIN_LENGTH_FOR_PET } from '../../lib/constants';
import Runecraft from '../../lib/skilling/skills/runecraft';
import { SkillsEnum } from '../../lib/skilling/types';
import { RunecraftActivityTaskOptions } from '../../lib/types/minions';
import { roll, skillingPetDropRate } from '../../lib/util';
import { handleTripFinish } from '../../lib/util/handleTripFinish';
import { calcMaxRCQuantity } from '../../mahoji/mahojiSettings';

export const runecraftTask: MinionTask = {
	type: 'Runecraft',
	async run(data: RunecraftActivityTaskOptions) {
		const { runeID, essenceQuantity, userID, channelID, imbueCasts, duration, daeyaltEssence } = data;
		const user = await mUserFetch(userID);

		const rune = Runecraft.Runes.find(_rune => _rune.id === runeID)!;

		const quantityPerEssence = calcMaxRCQuantity(rune, user);
		let runeQuantity = essenceQuantity * quantityPerEssence;
		if (rune.name === 'Elder rune') {
			runeQuantity = Math.max(1, Math.floor(runeQuantity / 3));
		}

		let runeXP = rune.xp;

		if (daeyaltEssence) {
			runeXP = rune.xp * 1.5;
		}

		let xpReceived = essenceQuantity * runeXP;

		const hasMaster = user.hasEquipped(
			[
				'Master runecrafter hat',
				'Master runecrafter robe',
				'Master runecrafter skirt',
				'Master runecrafter boots'
			],
			true
		);
		if (hasMaster) {
			xpReceived = increaseNumByPercent(xpReceived, 10);
		}
		const magicXpReceived = imbueCasts * 86;

		let xpRes = `\n${await user.addXP({
			skillName: SkillsEnum.Runecraft,
			amount: xpReceived,
			duration
		})}`;
		if (magicXpReceived > 0) {
			xpRes += `\n${await user.addXP({ skillName: SkillsEnum.Magic, amount: magicXpReceived, duration })}`;
		}

		let str = `${user}, ${user.minionName} finished crafting ${runeQuantity} ${rune.name}. ${xpRes}`;
		if (hasMaster) {
			str += 'You received 10% bonus XP from your Master runecrafter outfit.';
		}
		const loot = new Bank({
			[rune.id]: runeQuantity
		});

		if (duration >= MIN_LENGTH_FOR_PET) {
			const minutes = duration / Time.Minute;
			if (roll(Math.floor(5000 / minutes))) {
				str +=
					'\n**<:obis:787028036792614974> An enchantment guardian takes note of your prowess in runecrafting and elects to join you.**';
				loot.add('Obis');
			}
		}

		const { petDropRate } = skillingPetDropRate(user, SkillsEnum.Runecraft, 1_795_758);
		if (roll(petDropRate / essenceQuantity)) {
			loot.add('Rift guardian');
			str += "\nYou have a funny feeling you're being followed...";
			globalClient.emit(
				Events.ServerNotification,
				`${Emoji.Runecraft} **${user.usernameOrMention}'s** minion, ${
					user.minionName
				}, just received a Rift guardian while crafting ${rune.name}s at level ${user.skillLevel(
					SkillsEnum.Runecraft
				)} Runecrafting!`
			);
		}

		if (daeyaltEssence) {
			str += '\nYou are gaining 50% more Runecrafting XP due to using Daeyalt Essence.';
		}

		str += `\n\nYou received: ${loot}.`;

		await transactItems({
			userID: user.id,
			collectionLog: true,
			itemsToAdd: loot
		});

		handleTripFinish(user, channelID, str, undefined, data, loot);
	}
};
