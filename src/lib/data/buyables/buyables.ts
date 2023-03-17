import { Bank } from 'oldschooljs';

import { soteSkillRequirements } from '../../../mahoji/lib/abstracted_commands/zalcanoCommand';
import { chompyHats, MAX_QP } from '../../constants';
import { CombatCannonItemBank } from '../../minions/data/combatConstants';
import { Favours } from '../../minions/data/kourendFavour';
import { MinigameName } from '../../settings/settings';
import { getToaKCs } from '../../simulation/toa';
import { Skills } from '../../types';
import { allTeamCapes } from '../misc';
import { aerialFishBuyables } from './aerialFishBuyables';
import { canifisClothes } from './canifisClothes';
import { capeBuyables } from './capes';
import { castleWarsBuyables } from './castleWars';
import { fremennikClothes } from './frem';
import { gnomeClothes } from './gnomeClothes';
import { guardiansOfTheRiftBuyables } from './guardiansOfTheRifBuyables';
import { mairinsMarketBuyables } from './mairinsMarketBuyables';
import { miningBuyables } from './mining';
import { godCapes, perduBuyables, prayerBooks } from './perdu';
import { runeBuyables } from './runes';
import { shootingStarsBuyables } from './shootingStarsBuyables';
import { skillCapeBuyables } from './skillCapeBuyables';
import { slayerBuyables } from './slayerBuyables';
import { troubleBrewingBuyables } from './troubleBrewingShop';

export interface Buyable {
	name: string;
	outputItems?: Bank | ((user: MUser) => Bank);
	qpRequired?: number;
	gpCost?: number;
	itemCost?: Bank;
	aliases?: string[];
	skillsNeeded?: Skills;
	requiredFavour?: Favours;
	restockTime?: number;
	minigameScoreReq?: [MinigameName, number];
	ironmanPrice?: number;
	collectionLogReqs?: number[];
	customReq?: (user: MUser) => Promise<[true] | [false, string]>;
}

const randomEventBuyables: Buyable[] = [
	{
		name: 'Prince outfit',
		itemCost: new Bank().add('Frog token', 1),
		outputItems: new Bank().add('Prince tunic', 1).add('Prince leggings', 1)
	},
	{
		name: 'Princess outfit',
		itemCost: new Bank().add('Frog token', 1),
		outputItems: new Bank().add('Princess blouse', 1).add('Princess skirt', 1)
	},
	{
		name: 'Frog mask',
		itemCost: new Bank().add('Frog token', 1),
		outputItems: new Bank().add('Frog mask', 1)
	}
];

const ironmenBuyables: Buyable[] = ['Ironman helm', 'Ironman platebody', 'Ironman platelegs'].map(str => ({
	name: str,
	customReq: async (user: MUser) => {
		return user.isIronman ? [true] : [false, 'Only ironmen can buy this.'];
	},
	gpCost: 1000
}));

const ichCapes = [
	["Icthlarin's shroud (tier 1)", 100],
	["Icthlarin's shroud (tier 2)", 500],
	["Icthlarin's shroud (tier 3)", 1000],
	["Icthlarin's shroud (tier 4)", 1500],
	["Icthlarin's shroud (tier 5)", 2000],
	["Icthlarin's hood (tier 5)", 2000]
] as const;

const toaCapes: Buyable[] = [];

for (const [capeName, kcReq] of ichCapes) {
	toaCapes.push({
		name: capeName,
		gpCost: kcReq * 10,
		customReq: async (user: MUser) => {
			const toaKCs = await getToaKCs(user);
			return toaKCs.normalKC + toaKCs.expertKC >= kcReq
				? [true]
				: [false, `You need a combined amount of ${kcReq} Normal/Expert Tombs of Amascut KCs to buy this.`];
		}
	});
}

const tobCapes: Buyable[] = [
	{
		name: 'Sinhaza shroud tier 1',
		gpCost: 100_000,
		minigameScoreReq: ['tob', 100]
	},
	{
		name: 'Sinhaza shroud tier 2',
		gpCost: 500_000,
		minigameScoreReq: ['tob', 500]
	},
	{
		name: 'Sinhaza shroud tier 3',
		gpCost: 500_000,
		minigameScoreReq: ['tob', 1000]
	},
	{
		name: 'Sinhaza shroud tier 4',
		gpCost: 500_000,
		minigameScoreReq: ['tob', 1500]
	},
	{
		name: 'Sinhaza shroud tier 5',
		gpCost: 500_000,
		minigameScoreReq: ['tob', 2000]
	}
];

const cmCapes: Buyable[] = [
	{
		name: "Xeric's guard",
		gpCost: 100_000,
		minigameScoreReq: ['raids_challenge_mode', 100]
	},
	{
		name: "Xeric's warrior",
		gpCost: 500_000,
		minigameScoreReq: ['raids_challenge_mode', 500]
	},
	{
		name: "Xeric's sentinel",
		gpCost: 1_000_000,
		minigameScoreReq: ['raids_challenge_mode', 1000]
	},
	{
		name: "Xeric's general",
		gpCost: 1_500_000,
		minigameScoreReq: ['raids_challenge_mode', 1500]
	},
	{
		name: "Xeric's champion",
		gpCost: 2_000_000,
		minigameScoreReq: ['raids_challenge_mode', 2000]
	}
];

const constructionBuyables: Buyable[] = [
	{ name: 'Bolt of cloth', outputItems: new Bank().add('Bolt of cloth'), gpCost: 5000 },
	{
		name: 'Limestone brick',
		gpCost: 1000,
		ironmanPrice: 40
	},
	{
		name: 'Gold leaf',
		gpCost: 500_000,
		ironmanPrice: 130_000
	},
	{
		name: 'Marble block',
		gpCost: 1_000_000,
		ironmanPrice: 325_000
	},
	{
		name: 'Magic stone',
		gpCost: 4_000_000,
		ironmanPrice: 975_000
	},
	{
		name: 'Red dye',
		gpCost: 100_000,
		ironmanPrice: 25
	},
	{
		name: 'Skull',
		gpCost: 100_000
	},
	{
		name: 'Fairy enchantment',
		gpCost: 100_000,
		ironmanPrice: 100,
		qpRequired: 23
	},
	{
		name: 'Arceuus signet',
		gpCost: 100_000,
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Ancient signet',
		gpCost: 100_000,
		qpRequired: 105
	},
	{
		name: 'Lunar signet',
		gpCost: 100_000,
		qpRequired: 52
	},
	{
		name: 'Bucket of water',
		gpCost: 500,
		ironmanPrice: 7
	}
];

const sepulchreBuyables: Buyable[] = [
	{
		name: 'Hallowed crystal shard',
		itemCost: new Bank().add('Hallowed mark')
	},
	{
		name: 'Hallowed token',
		itemCost: new Bank().add('Hallowed mark', 10)
	},
	{
		name: 'Hallowed grapple',
		itemCost: new Bank().add('Hallowed mark', 100)
	},
	{
		name: 'Hallowed focus',
		itemCost: new Bank().add('Hallowed mark', 100)
	},
	{
		name: 'Hallowed symbol',
		itemCost: new Bank().add('Hallowed mark', 100)
	},
	{
		name: 'Hallowed hammer',
		itemCost: new Bank().add('Hallowed mark', 100)
	},
	{
		name: 'Hallowed sack',
		itemCost: new Bank().add('Hallowed mark', 100)
	},
	{
		name: 'Hallowed ring',
		itemCost: new Bank().add('Hallowed mark', 250)
	},
	{
		name: 'Dark dye',
		itemCost: new Bank().add('Hallowed mark', 300)
	},
	{
		name: 'Dark acorn',
		outputItems: new Bank().add('Dark acorn'),
		itemCost: new Bank().add('Hallowed mark', 3000)
	},
	{
		name: 'Dark squirrel',
		itemCost: new Bank().add('Dark acorn').add('Giant squirrel')
	}
];

const hunterBuyables: Buyable[] = [
	{
		name: 'Butterfly jar',
		gpCost: 500
	},
	{
		name: 'Magic box',
		gpCost: 1500
	}
];

const magicBuyables: Buyable[] = [
	{
		name: 'Mystic hat',
		gpCost: 15_000,
		skillsNeeded: {
			magic: 66
		}
	},
	{
		name: 'Mystic robe top',
		gpCost: 120_000,
		skillsNeeded: {
			magic: 66
		}
	},
	{
		name: 'Mystic robe bottom',
		gpCost: 80_000,
		skillsNeeded: {
			magic: 66
		}
	},
	{
		name: 'Mystic gloves',
		gpCost: 10_000,
		skillsNeeded: {
			magic: 66
		}
	},
	{
		name: 'Mystic boots',
		gpCost: 10_000,
		skillsNeeded: {
			magic: 66
		}
	}
];

const questBuyables: Buyable[] = [
	{
		name: 'Goldsmith gauntlets',
		outputItems: new Bank().add('Goldsmith gauntlets', 1),
		qpRequired: 25,
		gpCost: 1_000_000,
		ironmanPrice: 25_000
	},
	{
		name: 'Cooking gauntlets',
		qpRequired: 25,
		gpCost: 1_000_000,
		ironmanPrice: 25_000
	},
	{
		name: 'Anti-dragon shield',
		qpRequired: 35,
		gpCost: 10_000
	},
	{
		name: 'Hardleather gloves',
		qpRequired: 5,
		gpCost: 50_000,
		ironmanPrice: 65
	},
	{
		name: 'Bronze gloves',
		qpRequired: 10,
		gpCost: 100_000,
		ironmanPrice: 130
	},
	{
		name: 'Iron gloves',
		qpRequired: 20,
		gpCost: 200_000,
		ironmanPrice: 325
	},
	{
		name: 'Steel gloves',
		qpRequired: 25,
		gpCost: 300_000,
		ironmanPrice: 650
	},
	{
		name: 'Black gloves',
		qpRequired: 35,
		gpCost: 400_000,
		ironmanPrice: 1000
	},
	{
		name: 'Mithril gloves',
		qpRequired: 50,
		gpCost: 500_000,
		ironmanPrice: 2000
	},
	{
		name: 'Adamant gloves',
		qpRequired: 65,
		gpCost: 600_000,
		ironmanPrice: 3250
	},
	{
		name: 'Rune gloves',
		outputItems: new Bank().add('Rune gloves', 1),
		qpRequired: 85,
		gpCost: 700_000,
		ironmanPrice: 6500
	},
	{
		name: 'Dragon gloves',
		qpRequired: 107,
		gpCost: 850_000,
		ironmanPrice: 130_000
	},
	{
		name: 'Barrows gloves',
		qpRequired: 175,
		gpCost: 1_000_000,
		ironmanPrice: 130_000
	},
	{
		name: 'Helm of neitiznot',
		qpRequired: 75,
		gpCost: 500_000,
		ironmanPrice: 50_000
	},
	{
		name: 'Magic secateurs',
		qpRequired: 40,
		gpCost: 2_500_000,
		ironmanPrice: 40_000
	},
	{
		name: "Iban's staff",
		aliases: ['iban'],
		qpRequired: 30,
		gpCost: 300_000
	},
	{
		name: 'Barrelchest anchor',
		aliases: ['anchor'],
		qpRequired: 30,
		gpCost: 2_000_000
	},
	{
		name: 'Mythical cape',
		gpCost: 1_000_000,
		qpRequired: 205,
		ironmanPrice: 10_000
	},
	{
		name: 'Mind shield',
		gpCost: 100_000,
		qpRequired: 35
	},
	{
		name: 'Dwarven helmet',
		gpCost: 100_000,
		qpRequired: 52
	},
	{
		name: 'Amulet of accuracy',
		gpCost: 50_000,
		qpRequired: 5
	},
	{
		name: 'Cape of legends',
		gpCost: 250_000,
		qpRequired: 105
	},
	{
		name: 'Bearhead',
		gpCost: 1_000_000,
		qpRequired: 105
	},
	{
		name: 'Bonesack',
		gpCost: 1_000_000,
		qpRequired: 82
	},
	{
		name: 'Ram skull helm',
		gpCost: 1_000_000,
		qpRequired: 82
	},
	{
		name: 'Monkey',
		outputItems: new Bank().add(19_556, 1),
		gpCost: 1_000_000,
		qpRequired: 182
	},
	{
		name: 'Rat pole',
		gpCost: 200_000,
		qpRequired: 85
	},
	{
		name: 'Silverlight',
		gpCost: 50_000,
		qpRequired: 3
	},
	{
		name: 'Darklight',
		gpCost: 200_000,
		qpRequired: 58
	},
	{
		name: 'Lunar Outfit',
		outputItems: new Bank()
			.add('Lunar boots', 1)
			.add('Lunar cape', 1)
			.add('Lunar gloves', 1)
			.add('Lunar helm', 1)
			.add('Lunar legs', 1)
			.add('Lunar torso', 1)
			.add('Lunar amulet', 1)
			.add('Lunar ring', 1)
			.add('Lunar staff', 1),
		gpCost: 5_000_000,
		qpRequired: 120
	},
	{
		name: 'Moonclan Outfit',
		outputItems: new Bank()
			.add('Moonclan boots', 1)
			.add('Moonclan cape', 1)
			.add('Moonclan gloves', 1)
			.add('Moonclan helm', 1)
			.add('Moonclan hat', 1)
			.add('Moonclan skirt', 1)
			.add('Moonclan armour', 1),
		gpCost: 5_000_000,
		qpRequired: 120
	},
	{
		name: 'Jester Outfit',
		outputItems: new Bank()
			.add('Silly jester hat', 1)
			.add('Silly jester top', 1)
			.add('Silly jester tights', 1)
			.add('Silly jester boots', 1),
		gpCost: 5_000_000,
		qpRequired: 89
	},
	{
		name: 'Ardougne Knight Outfit',
		outputItems: new Bank()
			.add('Ardougne knight helm', 1)
			.add('Ardougne knight platebody', 1)
			.add('Ardougne knight platelegs', 1),
		gpCost: 5_000_000,
		qpRequired: 200
	},
	{
		name: 'Desert Outfit',
		outputItems: new Bank()
			.add('Fez', 1)
			.add('Desert top', 1)
			.add('Desert legs', 1)
			.add('Desert robes', 1)
			.add('Desert boots', 1)
			.add('Desert shirt', 1)
			.add('Desert robe', 1),
		gpCost: 1_000_000,
		qpRequired: 20
	},
	{
		name: 'Pirate boots',
		outputItems: new Bank().add('Pirate boots', 1),
		gpCost: 100_000,
		qpRequired: 20
	},
	{
		name: 'Vyrewatch outfit',
		outputItems: new Bank().add('Vyrewatch top', 1).add('Vyrewatch legs', 1).add('Vyrewatch shoes', 1),
		gpCost: 1_000_000,
		qpRequired: 92
	},
	{
		name: 'Climbing boots',
		outputItems: new Bank().add('Climbing boots', 1),
		gpCost: 100_000,
		qpRequired: 20
	},
	{
		name: 'Warrior helm',
		gpCost: 780_000,
		qpRequired: 60,
		ironmanPrice: 78_000
	},
	{
		name: 'Berserker helm',
		gpCost: 780_000,
		qpRequired: 60,
		ironmanPrice: 78_000
	},
	{
		name: 'Archer helm',
		gpCost: 780_000,
		qpRequired: 60,
		ironmanPrice: 78_000
	},
	{
		name: 'Farseer helm',
		gpCost: 780_000,
		qpRequired: 60,
		ironmanPrice: 78_000
	},
	{
		name: "Doctor's hat",
		gpCost: 60_000,
		qpRequired: 60
	},
	{
		name: 'Medical gown',
		gpCost: 60_000,
		qpRequired: 60
	},
	{
		name: 'Ring of charos',
		gpCost: 100_000,
		qpRequired: 60
	},
	{
		name: 'Nurse hat',
		gpCost: 60_000,
		qpRequired: 60
	},
	{
		name: 'Holy wrench',
		gpCost: 70_000,
		qpRequired: 70
	},
	{
		name: 'Initiate outfit',
		outputItems: new Bank().add('Initiate sallet', 1).add('Initiate hauberk', 1).add('Initiate cuisse', 1),
		gpCost: 250_000,
		qpRequired: 35
	},
	{
		name: 'Proselyte outfit',
		outputItems: new Bank()
			.add('Proselyte sallet', 1)
			.add('Proselyte hauberk', 1)
			.add('Proselyte cuisse', 1)
			.add('Proselyte tasset', 1),
		gpCost: 500_000,
		qpRequired: 75
	},
	{
		name: 'Excalibur',
		gpCost: 50_000,
		qpRequired: 15
	},
	{
		name: 'Bomber jacket',
		gpCost: 50_000,
		qpRequired: 21
	},
	{
		name: 'Bomber cap',
		gpCost: 50_000,
		qpRequired: 21
	},
	{
		name: 'Pet rock',
		gpCost: 500_000,
		qpRequired: 60
	},
	{
		name: 'Dwarf multicannon',
		outputItems: CombatCannonItemBank,
		gpCost: 10_000_000,
		qpRequired: 5,
		ironmanPrice: 750_000
	},
	{
		name: 'Cannon barrels',
		gpCost: 2_500_000,
		qpRequired: 5,
		ironmanPrice: 200_625
	},
	{
		name: 'Cannon base',
		gpCost: 2_500_000,
		qpRequired: 5,
		ironmanPrice: 200_625
	},
	{
		name: 'Cannon furnace',
		gpCost: 2_500_000,
		qpRequired: 5,
		ironmanPrice: 200_625
	},
	{
		name: 'Cannon stand',
		gpCost: 2_500_000,
		qpRequired: 5,
		ironmanPrice: 200_625
	},
	{
		name: 'Elemental shield',
		gpCost: 2_500_000,
		qpRequired: 25,
		ironmanPrice: 2000
	},
	{
		name: 'Royal seed pod',
		gpCost: 2_500_000,
		qpRequired: 175,
		ironmanPrice: 2000
	}
];

const noveltyFood: Buyable[] = [
	{
		name: 'Beer',
		gpCost: 1_000_000
	},
	{
		name: 'Vodka',
		gpCost: 1_000_000
	},
	{
		name: 'Gin',
		gpCost: 1_000_000
	}
];

const Buyables: Buyable[] = [
	{
		name: 'Quest point cape',
		outputItems: new Bank().add('Quest point cape').add('Quest point hood'),
		aliases: ['quest cape'],
		qpRequired: MAX_QP,
		gpCost: 99_000
	},
	{
		name: 'Fishing Bait',
		aliases: ['fishing bait'],
		gpCost: 20,
		ironmanPrice: 3
	},
	{
		name: 'Jug of Water',
		aliases: ['jug of water', 'jugs of water'],
		gpCost: 100
	},
	{
		name: 'Feather',
		aliases: ['feather'],
		gpCost: 50,
		ironmanPrice: 2
	},
	{
		name: 'Shield right half',
		aliases: ['shield right half', 'right shield'],
		qpRequired: 111,
		gpCost: 1_000_000
	},
	{
		name: 'Dragon metal shard',
		aliases: ['metal shard'],
		qpRequired: 205,
		gpCost: 2_500_000
	},
	{
		name: 'Eye of newt',
		aliases: ['eye of newt', 'newt eye'],
		gpCost: 300,
		ironmanPrice: 3
	},
	{
		name: 'Vial of water',
		aliases: ['vial of water'],
		gpCost: 60,
		ironmanPrice: 3
	},
	{
		name: 'Vial',
		aliases: ['vial'],
		gpCost: 30,
		ironmanPrice: 2
	},
	{
		name: 'Bucket',
		gpCost: 30,
		ironmanPrice: 5
	},
	{
		name: 'Cup of hot water',
		aliases: ['cup of hot water', 'hot water'],
		gpCost: 1500
	},
	{
		name: 'Chocolate bar',
		aliases: ['chocolate bar', 'chocolate'],
		gpCost: 1000
	},
	{
		name: 'Ball of wool',
		aliases: ['wool ball', 'ball wool'],
		gpCost: 300
	},
	{
		name: 'Compost',
		gpCost: 400
	},
	{
		name: 'Amylase pack',
		outputItems: new Bank().add('Amylase crystal', 100),
		itemCost: new Bank().add('Mark of grace', 10)
	},
	{
		name: 'Dragon scimitar',
		gpCost: 500_000,
		qpRequired: 105
	},
	{
		name: 'Fishbowl pet',
		outputItems: new Bank().add(6672, 1),
		gpCost: 500_000
	},
	{
		name: 'Potato with cheese',
		gpCost: 650,
		skillsNeeded: {
			attack: 65,
			strength: 65
		}
	},
	{
		name: 'Torstol',
		itemCost: new Bank().add('Torstol potion (unf)')
	},
	{
		name: 'Ogre bow',
		gpCost: 10_000
	},
	{
		name: 'Salve amulet',
		gpCost: 200_000,
		skillsNeeded: {
			crafting: 35
		},
		qpRequired: 58
	},
	{
		name: 'Sandworms',
		gpCost: 500
	},
	{
		name: 'Granite Body',
		gpCost: 95_000,
		minigameScoreReq: ['barb_assault', 10]
	},
	{
		name: 'Raw shark',
		itemCost: new Bank().add('Minnow', 40),
		outputItems: new Bank().add('Raw shark', 1)
	},
	{
		name: 'Bronze pickaxe',
		gpCost: 500,
		ironmanPrice: 1
	},
	{
		name: 'Iron pickaxe',
		gpCost: 1000,
		ironmanPrice: 140
	},
	{
		name: 'Steel pickaxe',
		gpCost: 2000,
		ironmanPrice: 500
	},
	{
		name: 'Mithril pickaxe',
		gpCost: 5000,
		ironmanPrice: 1300
	},
	{
		name: 'Adamant pickaxe',
		gpCost: 10_000,
		ironmanPrice: 3200
	},
	{
		name: 'Rune pickaxe',
		gpCost: 100_000,
		ironmanPrice: 32_000
	},
	{
		name: 'Flower crown',
		itemCost: new Bank().add('Coins', 5000),
		outputItems: new Bank().add('Flower crown', 1)
	},
	{
		name: 'Mithril seeds',
		gpCost: 3000,
		ironmanPrice: 600,
		outputItems: new Bank().add('Mithril seeds', 1)
	},
	{
		name: 'Brown apron',
		gpCost: 1000,
		ironmanPrice: 100
	},
	{
		name: 'White apron',
		gpCost: 1000,
		ironmanPrice: 100
	},
	{
		name: 'Pink skirt',
		gpCost: 1000,
		ironmanPrice: 2
	},
	{
		name: 'Bull roarer',
		gpCost: 1000,
		ironmanPrice: 100
	},
	{
		name: 'Rolling pin',
		gpCost: 50_000,
		ironmanPrice: 18_720
	},
	{
		name: 'Adamant halberd',
		gpCost: 100_000,
		ironmanPrice: 9600,
		qpRequired: 150,
		skillsNeeded: soteSkillRequirements
	},
	...[
		'Pirate bandana (white)',
		'Stripy pirate shirt (white)',
		'Pirate leggings (white)',
		'Pirate bandana (blue)',
		'Stripy pirate shirt (blue)',
		'Pirate leggings (blue)',
		'Pirate bandana (brown)',
		'Stripy pirate shirt (brown)',
		'Pirate leggings (brown)',
		'Pirate bandana (red)',
		'Stripy pirate shirt (red)',
		'Pirate leggings (red)'
	].map(i => ({
		name: i,
		gpCost: 2000,
		ironmanPrice: 100
	})),
	...[
		'Ghostly boots',
		'Ghostly cloak',
		'Ghostly gloves',
		'Ghostly hood',
		'Ghostly robe top',
		'Ghostly robe bottom',
		'Shadow sword'
	].map(i => ({
		name: i,
		gpCost: 10_000,
		qpRequired: 10
	})),
	{
		name: 'Menaphite purple outfit',
		gpCost: 5000,
		ironmanPrice: 600,
		outputItems: new Bank()
			.add('Menaphite purple hat', 1)
			.add('Menaphite purple top', 1)
			.add('Menaphite purple robe', 1)
			.add('Menaphite purple kilt', 1)
	},
	{
		name: 'Menaphite red outfit',
		gpCost: 5000,
		ironmanPrice: 600,
		outputItems: new Bank()
			.add('Menaphite red hat', 1)
			.add('Menaphite red top', 1)
			.add('Menaphite red robe', 1)
			.add('Menaphite red kilt', 1)
	},
	{
		name: 'Bone club',
		gpCost: 1000
	},
	{
		name: 'Bone spear',
		gpCost: 1000
	},
	{
		name: 'Bone dagger',
		gpCost: 2500
	},
	{
		name: 'Dorgeshuun crossbow',
		gpCost: 2500
	},
	{
		name: 'Crystal bow',
		gpCost: 900_000
	},
	{
		name: 'Bronze axe',
		gpCost: 500,
		ironmanPrice: 16
	},
	{
		name: 'Iron axe',
		gpCost: 1000,
		ironmanPrice: 56
	},
	{
		name: 'Steel axe',
		gpCost: 2000,
		ironmanPrice: 200
	},
	{
		name: 'Broken coffin',
		gpCost: 2000
	},
	{
		name: 'Keris partisan',
		gpCost: 100_000,
		ironmanPrice: 60_000,
		qpRequired: 172
	},
	{
		name: 'Mask of rebirth',
		gpCost: 100_000,
		ironmanPrice: 10_000,
		qpRequired: 172,
		customReq: async (user: MUser) => {
			const toaKCs = await getToaKCs(user);
			return toaKCs.expertKC >= 25 ? [true] : [false, 'You need a 25 Expert KC in Tombs of Amascut to buy this.'];
		}
	},
	...sepulchreBuyables,
	...constructionBuyables,
	...hunterBuyables,
	...magicBuyables,
	...questBuyables,
	...noveltyFood,
	...fremennikClothes,
	...gnomeClothes,
	...canifisClothes,
	...castleWarsBuyables,
	...cmCapes,
	...slayerBuyables,
	...capeBuyables,
	...miningBuyables,
	...runeBuyables,
	...randomEventBuyables,
	...tobCapes,
	...perduBuyables,
	...prayerBooks,
	...godCapes,
	...skillCapeBuyables,
	...aerialFishBuyables,
	...troubleBrewingBuyables,
	...ironmenBuyables,
	...shootingStarsBuyables,
	...guardiansOfTheRiftBuyables,
	...toaCapes,
	...mairinsMarketBuyables
];

for (const [chompyHat, qty] of chompyHats) {
	Buyables.push({
		name: chompyHat.name,
		outputItems: new Bank().add(chompyHat.id),
		gpCost: qty * 44,
		minigameScoreReq: ['big_chompy_bird_hunting', qty]
	});
}

for (const cape of allTeamCapes) {
	Buyables.push({
		name: cape.name,
		outputItems: new Bank().add(cape.id),
		gpCost: 1000
	});
}

export default Buyables;
