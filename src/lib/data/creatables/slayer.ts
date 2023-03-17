import { Bank } from 'oldschooljs';
import { toKMB } from 'oldschooljs/dist/util/util';

import { SlayerTaskUnlocksEnum } from '../../slayer/slayerUnlocks';
import { Createable } from '../createables';

export const slayerCreatables: Createable[] = [
	{
		name: 'Dark totem',
		inputItems: new Bank().add('Dark totem base', 1).add('Dark totem middle', 1).add('Dark totem top', 1),
		outputItems: new Bank().add('Dark totem'),
		GPCost: 0
	},
	{
		name: 'Dragon hunter lance',
		inputItems: new Bank().add("Hydra's claw", 1).add('Zamorakian hasta', 1),
		outputItems: new Bank().add('Dragon hunter lance'),
		GPCost: 0
	},
	{
		name: 'Ferocious gloves',
		inputItems: new Bank().add('Hydra leather', 1),
		outputItems: new Bank().add('Ferocious gloves'),
		GPCost: 0
	},
	{
		name: 'Revert ferocious gloves',
		inputItems: new Bank().add('Ferocious gloves', 1),
		outputItems: new Bank().add('Hydra leather'),
		GPCost: 0,
		noCl: true
	},
	{
		name: 'Uncut zenyte',
		inputItems: new Bank().add('Onyx', 1).add('Zenyte shard', 1),
		outputItems: new Bank().add('Uncut zenyte'),
		GPCost: 0
	},
	{
		name: 'Neitiznot faceguard',
		inputItems: new Bank().add('Basilisk jaw', 1).add('Helm of neitiznot', 1),
		outputItems: new Bank().add('Neitiznot faceguard'),
		GPCost: 0
	},
	{
		name: 'Revert neitiznot faceguard',
		inputItems: new Bank().add('Neitiznot faceguard'),
		outputItems: new Bank().add('Basilisk jaw', 1).add('Helm of neitiznot', 1),
		GPCost: 0
	},
	{
		name: 'Arclight',
		inputItems: new Bank().add('Darklight', 1).add('Ancient shard', 3),
		outputItems: new Bank().add('Arclight'),
		GPCost: 0
	},
	{
		name: 'Boots of brimstone',
		inputItems: new Bank().add("Drake's claw", 1).add('Boots of stone', 1),
		outputItems: new Bank().add('Boots of brimstone'),
		GPCost: 0
	},
	{
		name: 'Devout boots',
		inputItems: new Bank().add("Drake's tooth", 1).add('Holy sandals', 1),
		outputItems: new Bank().add('Devout boots'),
		GPCost: 0
	},
	{
		name: 'Uncharged toxic trident',
		inputItems: new Bank().add('Magic fang', 1).add('Uncharged trident', 1),
		outputItems: new Bank().add('Uncharged toxic trident'),
		GPCost: 0
	},
	{
		name: "Bryophyta's staff",
		inputItems: new Bank().add('Nature rune', 1000).add("Bryophyta's essence", 1).add('Battlestaff', 1),
		outputItems: new Bank().add("Bryophyta's staff"),
		GPCost: 0
	},
	{
		name: 'Toxic staff (uncharged)',
		inputItems: new Bank().add('Magic fang', 1).add('Staff of the dead', 1),
		outputItems: new Bank().add('Toxic staff (uncharged)'),
		GPCost: 0
	},
	{
		name: 'Abyssal tentacle',
		inputItems: new Bank().add('Kraken tentacle', 1).add('Abyssal whip', 1),
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
		inputItems: new Bank().add("Hydra's eye", 1).add("Hydra's fang", 1).add("Hydra's heart", 1),
		outputItems: new Bank().add('Brimstone ring'),
		GPCost: 0
	},
	{
		name: 'Guardian boots',
		inputItems: new Bank().add('Black tourmaline core', 1).add('Bandos boots', 1),
		outputItems: new Bank().add('Guardian boots'),
		GPCost: 0
	},
	{
		name: 'Abyssal bludgeon',
		inputItems: new Bank().add('Bludgeon claw', 1).add('Bludgeon spine', 1).add('Bludgeon axon', 1),
		outputItems: new Bank().add('Abyssal bludgeon'),
		GPCost: 0
	},
	{
		name: 'Uncharged black mask',
		inputItems: new Bank().add('Black mask (10)', 1),
		outputItems: new Bank().add('Black mask'),
		GPCost: 0
	},
	{
		name: 'Slayer ring (8)',
		inputItems: new Bank().add('Gold bar', 1).add('Enchanted gem', 1),
		outputItems: new Bank().add('Slayer ring (8)'),
		GPCost: 0,
		requiredSkills: {
			crafting: 75
		},
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.RingBling]
	},
	{
		name: 'Slayer ring (eternal)',
		inputItems: new Bank().add('Gold bar', 1).add('Eternal gem', 1),
		outputItems: new Bank().add('Slayer ring (eternal)'),
		GPCost: 0,
		requiredSkills: {
			crafting: 75
		},
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.RingBling]
	},
	{
		name: 'Slayer helmet',
		inputItems: new Bank()
			.add('Black mask', 1)
			.add('Earmuffs', 1)
			.add('Facemask', 1)
			.add('Nose peg', 1)
			.add('Spiny helmet', 1)
			.add('Enchanted gem', 1),
		requiredSkills: {
			crafting: 55
		},
		outputItems: new Bank().add('Slayer helmet'),
		GPCost: 0,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.MalevolentMasquerade]
	},
	{
		name: 'Slayer helmet (i)',
		inputItems: new Bank()
			.add('Black mask (i)', 1)
			.add('Earmuffs', 1)
			.add('Facemask', 1)
			.add('Nose peg', 1)
			.add('Spiny helmet', 1)
			.add('Enchanted gem', 1),
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
		outputItems: new Bank()
			.add('Black mask', 1)
			.add('Earmuffs', 1)
			.add('Facemask', 1)
			.add('Nose peg', 1)
			.add('Spiny helmet', 1)
			.add('Enchanted gem', 1),
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
		outputItems: new Bank()
			.add('Black mask (i)', 1)
			.add('Earmuffs', 1)
			.add('Facemask', 1)
			.add('Nose peg', 1)
			.add('Spiny helmet', 1)
			.add('Enchanted gem', 1),
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
