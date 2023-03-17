import { Bank } from 'oldschooljs';
import { toKMB } from 'oldschooljs/dist/util/util';

import { SlayerTaskUnlocksEnum } from '../../slayer/slayerUnlocks';
import { Createable } from '../createables';

export const slayerCreatables: Createable[] = [
	{
		name: 'Dark totem',
		inputItems: new Bank({
			'Dark totem base': 1,
			'Dark totem middle': 1,
			'Dark totem top': 1
		}),
		outputItems: new Bank().add('Dark totem'),
		GPCost: 0
	},
	{
		name: 'Dragon hunter lance',
		inputItems: new Bank({
			"Hydra's claw": 1,
			'Zamorakian hasta': 1
		}),
		outputItems: new Bank().add('Dragon hunter lance'),
		GPCost: 0
	},
	{
		name: 'Ferocious gloves',
		inputItems: new Bank({
			'Hydra leather': 1
		}),
		outputItems: new Bank().add('Ferocious gloves'),
		GPCost: 0
	},
	{
		name: 'Revert ferocious gloves',
		inputItems: new Bank({
			'Ferocious gloves': 1
		}),
		outputItems: new Bank().add('Hydra leather'),
		GPCost: 0,
		noCl: true
	},
	{
		name: 'Uncut zenyte',
		inputItems: new Bank({
			Onyx: 1,
			'Zenyte shard': 1
		}),
		outputItems: new Bank().add('Uncut zenyte'),
		GPCost: 0
	},
	{
		name: 'Neitiznot faceguard',
		inputItems: new Bank({
			'Basilisk jaw': 1,
			'Helm of neitiznot': 1
		}),
		outputItems: new Bank().add('Neitiznot faceguard'),
		GPCost: 0
	},
	{
		name: 'Revert neitiznot faceguard',
		inputItems: new Bank().add('Neitiznot faceguard'),
		outputItems: new Bank({
			'Basilisk jaw': 1,
			'Helm of neitiznot': 1
		}),
		GPCost: 0
	},
	{
		name: 'Arclight',
		inputItems: new Bank({
			Darklight: 1,
			'Ancient shard': 3
		}),
		outputItems: new Bank().add('Arclight'),
		GPCost: 0
	},
	{
		name: 'Boots of brimstone',
		inputItems: new Bank({
			"Drake's claw": 1,
			'Boots of stone': 1
		}),
		outputItems: new Bank().add('Boots of brimstone'),
		GPCost: 0
	},
	{
		name: 'Devout boots',
		inputItems: new Bank({
			"Drake's tooth": 1,
			'Holy sandals': 1
		}),
		outputItems: new Bank().add('Devout boots'),
		GPCost: 0
	},
	{
		name: 'Uncharged toxic trident',
		inputItems: new Bank({
			'Magic fang': 1,
			'Uncharged trident': 1
		}),
		outputItems: new Bank().add('Uncharged toxic trident'),
		GPCost: 0
	},
	{
		name: "Bryophyta's staff",
		inputItems: new Bank({
			'Nature rune': 1000,
			"Bryophyta's essence": 1,
			Battlestaff: 1
		}),
		outputItems: new Bank().add("Bryophyta's staff"),
		GPCost: 0
	},
	{
		name: 'Toxic staff (uncharged)',
		inputItems: new Bank({
			'Magic fang': 1,
			'Staff of the dead': 1
		}),
		outputItems: new Bank().add('Toxic staff (uncharged)'),
		GPCost: 0
	},
	{
		name: 'Abyssal tentacle',
		inputItems: new Bank({
			'Kraken tentacle': 1,
			'Abyssal whip': 1
		}),
		outputItems: new Bank().add('Abyssal tentacle'),
		GPCost: 0,
		maxCanOwn: 1,
		onCreate: async (qty, user) => {
			await user.update({ tentacle_charges: { increment: 10_000 * qty } });
			return {
				result: true,
				message: `Your Abyssal tentacle was given ${toKMB(
					10_000 * qty
				)} charges.\nUse \`/minion charge\` to add more.`
			};
		}
	},
	{
		name: 'Brimstone ring',
		inputItems: new Bank({
			"Hydra's eye": 1,
			"Hydra's fang": 1,
			"Hydra's heart": 1
		}),
		outputItems: new Bank().add('Brimstone ring'),
		GPCost: 0
	},
	{
		name: 'Guardian boots',
		inputItems: new Bank({
			'Black tourmaline core': 1,
			'Bandos boots': 1
		}),
		outputItems: new Bank().add('Guardian boots'),
		GPCost: 0
	},
	{
		name: 'Abyssal bludgeon',
		inputItems: new Bank({
			'Bludgeon claw': 1,
			'Bludgeon spine': 1,
			'Bludgeon axon': 1
		}),
		outputItems: new Bank().add('Abyssal bludgeon'),
		GPCost: 0
	},
	{
		name: 'Uncharged black mask',
		inputItems: new Bank({
			'Black mask (10)': 1
		}),
		outputItems: new Bank().add('Black mask'),
		GPCost: 0
	},
	{
		name: 'Slayer ring (8)',
		inputItems: new Bank({
			'Gold bar': 1,
			'Enchanted gem': 1
		}),
		outputItems: new Bank().add('Slayer ring (8)'),
		GPCost: 0,
		requiredSkills: {
			crafting: 75
		},
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.RingBling]
	},
	{
		name: 'Slayer ring (eternal)',
		inputItems: new Bank({
			'Gold bar': 1,
			'Eternal gem': 1
		}),
		outputItems: new Bank().add('Slayer ring (eternal)'),
		GPCost: 0,
		requiredSkills: {
			crafting: 75
		},
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.RingBling]
	},
	{
		name: 'Slayer helmet',
		inputItems: new Bank({
			'Black mask': 1,
			Earmuffs: 1,
			Facemask: 1,
			'Nose peg': 1,
			'Spiny helmet': 1,
			'Enchanted gem': 1
		}),
		requiredSkills: {
			crafting: 55
		},
		outputItems: new Bank().add('Slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade]
	},
	{
		name: 'Slayer helmet (i)',
		inputItems: new Bank({
			'Black mask (i)': 1,
			Earmuffs: 1,
			Facemask: 1,
			'Nose peg': 1,
			'Spiny helmet': 1,
			'Enchanted gem': 1
		}),
		outputItems: new Bank().add('Slayer helmet (i)'),
		GPCost: 0,
		requiredSkills: {
			crafting: 55
		},
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade]
	},
	{
		name: 'Revert slayer helmet',
		inputItems: new Bank().add('Slayer helmet'),
		outputItems: new Bank({
			'Black mask': 1,
			Earmuffs: 1,
			Facemask: 1,
			'Nose peg': 1,
			'Spiny helmet': 1,
			'Enchanted gem': 1
		}),
		requiredSkills: {
			crafting: 55
		},
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade],
		noCl: true
	},
	{
		name: 'Revert slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)'),
		outputItems: new Bank({
			'Black mask (i)': 1,
			Earmuffs: 1,
			Facemask: 1,
			'Nose peg': 1,
			'Spiny helmet': 1,
			'Enchanted gem': 1
		}),
		requiredSkills: {
			crafting: 55
		},
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade],
		noCl: true
	},
	{
		name: 'Black slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Kbd heads'),
		outputItems: new Bank().add('Black slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KingBlackBonnet]
	},
	{
		name: 'Black slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Kbd heads'),
		outputItems: new Bank().add('Black slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KingBlackBonnet]
	},
	{
		name: 'Revert black slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Kbd heads'),
		inputItems: new Bank().add('Black slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KingBlackBonnet],
		noCl: true
	},
	{
		name: 'Revert black slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Kbd heads'),
		inputItems: new Bank().add('Black slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KingBlackBonnet],
		noCl: true
	},
	{
		name: 'Green slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Kq head'),
		outputItems: new Bank().add('Green slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KalphiteKhat]
	},
	{
		name: 'Green slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Kq head'),
		outputItems: new Bank().add('Green slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KalphiteKhat]
	},
	{
		name: 'Revert green slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Kq head'),
		inputItems: new Bank().add('Green slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KalphiteKhat],
		noCl: true
	},
	{
		name: 'Revert green slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Kq head'),
		inputItems: new Bank().add('Green slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.KalphiteKhat],
		noCl: true
	},
	{
		name: 'Red slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Abyssal head'),
		outputItems: new Bank().add('Red slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UnholyHelmet]
	},
	{
		name: 'Red slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Abyssal head'),
		outputItems: new Bank().add('Red slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UnholyHelmet]
	},
	{
		name: 'Revert red slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Abyssal head'),
		inputItems: new Bank().add('Red slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UnholyHelmet],
		noCl: true
	},
	{
		name: 'Revert red slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Abyssal head'),
		inputItems: new Bank().add('Red slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UnholyHelmet],
		noCl: true
	},
	{
		name: 'Purple slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Dark claw'),
		outputItems: new Bank().add('Purple slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.DarkMantle]
	},
	{
		name: 'Purple slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Dark claw'),
		outputItems: new Bank().add('Purple slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.DarkMantle]
	},
	{
		name: 'Revert purple slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Dark claw'),
		inputItems: new Bank().add('Purple slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.DarkMantle],
		noCl: true
	},
	{
		name: 'Revert purple slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Dark claw'),
		inputItems: new Bank().add('Purple slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.DarkMantle],
		noCl: true
	},
	{
		name: 'Turquoise slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add("Vorkath's head"),
		outputItems: new Bank().add('Turquoise slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UndeadHead]
	},
	{
		name: 'Turquoise slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add("Vorkath's head"),
		outputItems: new Bank().add('Turquoise slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UndeadHead]
	},
	{
		name: 'Revert turquoise slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add("Vorkath's head"),
		inputItems: new Bank().add('Turquoise slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UndeadHead],
		noCl: true
	},
	{
		name: 'Revert turquoise slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add("Vorkath's head"),
		inputItems: new Bank().add('Turquoise slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UndeadHead],
		noCl: true
	},
	{
		name: 'Hydra slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Alchemical hydra heads'),
		outputItems: new Bank().add('Hydra slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UseMoreHead]
	},
	{
		name: 'Hydra slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Alchemical hydra heads'),
		outputItems: new Bank().add('Hydra slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UseMoreHead]
	},
	{
		name: 'Revert hydra slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Alchemical hydra heads'),
		inputItems: new Bank().add('Hydra slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UseMoreHead],
		noCl: true
	},
	{
		name: 'Revert hydra slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Alchemical hydra heads'),
		inputItems: new Bank().add('Hydra slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.UseMoreHead],
		noCl: true
	},
	{
		name: 'Twisted slayer helmet',
		inputItems: new Bank().add('Slayer helmet').add('Twisted horns'),
		outputItems: new Bank().add('Twisted slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.TwistedVision]
	},
	{
		name: 'Twisted slayer helmet (i)',
		inputItems: new Bank().add('Slayer helmet (i)').add('Twisted horns'),
		outputItems: new Bank().add('Twisted slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.TwistedVision]
	},
	{
		name: 'Revert twisted slayer helmet',
		outputItems: new Bank().add('Slayer helmet').add('Twisted horns'),
		inputItems: new Bank().add('Twisted slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.TwistedVision],
		noCl: true
	},
	{
		name: 'Revert twisted slayer helmet (i)',
		outputItems: new Bank().add('Slayer helmet (i)').add('Twisted horns'),
		inputItems: new Bank().add('Twisted slayer helmet (i)'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade, SlayerTaskUnlocksEnum.TwistedVision],
		noCl: true
	}
];
