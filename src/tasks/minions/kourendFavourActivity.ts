import { Bank } from 'oldschooljs';

import { KourendFavourActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';
import { KourendFavours, UserKourendFavour } from './../../lib/minions/data/kourendFavour';

export const kourendTask: MinionTask = {
	type: 'KourendFavour',
	async run(data: KourendFavourActivityTaskOptions) {
		let { quantity, userID, channelID } = data;
		const favour = KourendFavours.find(i => i.name === data.favour)!;
		const user = await mUserFetch(userID);
		const favourPoints = favour.pointsGain * quantity;
		let shayzienDone = false;
		let totalPoints: number | undefined = undefined;
		const currentUserFavour = user.kourendFavour;
		for (const [key, value] of Object.entries(currentUserFavour) as [keyof UserKourendFavour, number][]) {
			if (key.toLowerCase() === favour.name.toLowerCase()) {
				totalPoints = Math.min(Number(value) + favourPoints, 100);
				currentUserFavour[key] = totalPoints;
				await user.update({
					kourend_favour: currentUserFavour as any
				});
				if (key === 'Shayzien' && totalPoints === 100) shayzienDone = true;
				break;
			}
		}
		const confirmedFavour = KourendFavours.find(i => i.name === favour.name)!;
		const loot = confirmedFavour.itemsReceived?.clone().multiply(quantity);
		if (shayzienDone && loot) {
			loot.add(
				new Bank()
					.add('Shayzien boots (1)', 5)
					.add('Shayzien gloves (1)', 5)
					.add('Shayzien greaves (1)', 5)
					.add('Shayzien helm (1)', 5)
					.add('Shayzien platebody (1)', 5)
					.add('Shayzien boots (2)', 5)
					.add('Shayzien gloves (2)', 5)
					.add('Shayzien greaves (2)', 5)
					.add('Shayzien helm (2)', 5)
					.add('Shayzien platebody (2)', 5)
					.add('Shayzien boots (3)', 5)
					.add('Shayzien gloves (3)', 5)
					.add('Shayzien greaves (3)', 5)
					.add('Shayzien helm (3)', 5)
					.add('Shayzien platebody (3)', 5)
					.add('Shayzien boots (4)', 5)
					.add('Shayzien gloves (4)', 5)
					.add('Shayzien greaves (4)', 5)
					.add('Shayzien helm (4)', 5)
					.add('Shayzien platebody (4)', 5)
					.add('Shayzien boots (5)', 5)
					.add('Shayzien gloves (5)', 5)
					.add('Shayzien greaves (5)', 5)
					.add('Shayzien helm (5)', 5)
					.add('Shayzien body (5)', 5)
			);
		}
		if (loot) {
			await transactItems({
				userID: user.id,
				collectionLog: true,
				itemsToAdd: loot
			});
		}

		let str = `${user}, ${user.minionName} finished gaining ${favour.name} Favour, adding ${favourPoints}%.${
			totalPoints ? ` You now have a total of ${totalPoints}%.` : ''
		}${loot ? ` You also received ${loot}.` : ''}`;

		handleTripFinish(user, channelID, str, undefined, data, loot ?? null);
	}
};
