import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const lmsCreatables: Createable[] = [
	// Granite mauls
	{
		name: 'Granite maul (or)',
		inputItems: new Bank().add('Granite maul', 1).add('Granite clamp', 1),
		outputItems: new Bank().add('Granite maul (or)')
	},
	{
		name: 'Granite maul (ornate handle)',
		inputItems: new Bank().add('Granite maul', 1).add('Ornate maul handle', 1),
		outputItems: new Bank().add('Granite maul (ornate handle)')
	},
	{
		name: 'Granite maul (or) (ornate handle)',
		inputItems: new Bank().add('Granite maul (ornate handle)', 1).add('Granite clamp', 1),
		outputItems: new Bank().add('Granite maul (or) (ornate handle)')
	},
	/**
	 *
	 * Upgrade kits
	 *
	 */
	{
		name: 'Mystic steam staff (or) (lms)',
		inputItems: new Bank().add('Mystic steam staff', 1).add('Steam staff upgrade kit', 1),
		outputItems: new Bank().add('Mystic steam staff (or)')
	},
	{
		name: 'Revert mystic steam staff (or)',
		inputItems: new Bank().add('Mystic steam staff (or)', 1),
		outputItems: new Bank().add('Mystic steam staff'),
		noCl: true
	},
	//
	{
		name: 'Steam battlestaff (or)',
		inputItems: new Bank().add('Steam battlestaff', 1).add('Steam staff upgrade kit', 1),
		outputItems: new Bank().add('Steam battlestaff (or)')
	},
	{
		name: 'Revert steam battlestaff (or)',
		inputItems: new Bank().add('Steam battlestaff (or)', 1),
		outputItems: new Bank().add('Steam battlestaff'),
		noCl: true
	},
	//
	{
		name: 'Mystic lava staff (or) (lms)',
		inputItems: new Bank().add('Mystic lava staff', 1).add('Lava staff upgrade kit', 1),
		outputItems: new Bank().add('Mystic lava staff (or)')
	},
	{
		name: 'Revert mystic lava staff (or)',
		inputItems: new Bank().add('Mystic lava staff (or)', 1),
		outputItems: new Bank().add('Mystic lava staff'),
		noCl: true
	},
	//
	{
		name: 'Lava battlestaff (or)',
		inputItems: new Bank().add('Lava battlestaff', 1).add('Lava staff upgrade kit', 1),
		outputItems: new Bank().add('Lava battlestaff (or)')
	},
	{
		name: 'Revert lava battlestaff (or)',
		inputItems: new Bank().add('Lava battlestaff (or)', 1),
		outputItems: new Bank().add('Lava battlestaff'),
		noCl: true
	},
	//
	{
		name: 'Dragon pickaxe (upgraded)',
		inputItems: new Bank().add('Dragon pickaxe', 1).add('Dragon pickaxe upgrade kit', 1),
		outputItems: new Bank().add('Dragon pickaxe (upgraded)')
	},
	{
		name: 'Revert dragon pickaxe (upgraded)',
		inputItems: new Bank().add('Dragon pickaxe (upgraded)', 1),
		outputItems: new Bank().add('Dragon pickaxe'),
		noCl: true
	},
	//
	{
		name: 'Malediction ward (or)',
		inputItems: new Bank().add('Malediction ward', 1).add('Ward upgrade kit', 1),
		outputItems: new Bank().add('Malediction ward (or)')
	},
	{
		name: 'Revert malediction ward (or)',
		inputItems: new Bank().add('Malediction ward (or)', 1),
		outputItems: new Bank().add('Malediction ward'),
		noCl: true
	},
	//
	{
		name: 'Odium ward (or)',
		inputItems: new Bank().add('Odium ward', 1).add('Ward upgrade kit', 1),
		outputItems: new Bank().add('Odium ward (or)')
	},
	{
		name: 'Revert odium ward (or)',
		inputItems: new Bank().add('Odium ward (or)', 1),
		outputItems: new Bank().add('Odium ward'),
		noCl: true
	},
	/**
	 *
	 * Paints
	 *
	 */
	{
		name: 'Dark bow (green)',
		inputItems: new Bank().add('Dark bow', 1).add('Green dark bow paint', 1),
		outputItems: new Bank().add('Dark bow (green)')
	},
	{
		name: 'Revert dark bow (green)',
		inputItems: new Bank().add('Dark bow (green)', 1),
		outputItems: new Bank().add('Dark bow'),
		noCl: true
	},
	//
	{
		name: 'Dark bow (blue)',
		inputItems: new Bank().add('Dark bow', 1).add('Blue dark bow paint', 1),
		outputItems: new Bank().add('Dark bow (blue)')
	},
	{
		name: 'Revert dark bow (blue)',
		inputItems: new Bank().add('Dark bow (blue)', 1),
		outputItems: new Bank().add('Dark bow'),
		noCl: true
	},
	//
	{
		name: 'Dark bow (yellow)',
		inputItems: new Bank().add('Dark bow', 1).add('Yellow dark bow paint', 1),
		outputItems: new Bank().add('Dark bow (yellow)')
	},
	{
		name: 'Revert dark bow (yellow)',
		inputItems: new Bank().add('Dark bow (yellow)', 1),
		outputItems: new Bank().add('Dark bow'),
		noCl: true
	},
	//
	{
		name: 'Dark bow (white)',
		inputItems: new Bank().add('Dark bow', 1).add('White dark bow paint', 1),
		outputItems: new Bank().add('Dark bow (white)')
	},
	{
		name: 'Revert dark bow (white)',
		inputItems: new Bank().add('Dark bow (white)', 1),
		outputItems: new Bank().add('Dark bow'),
		noCl: true
	},
	/**
	 *
	 * Mixes
	 *
	 */
	{
		name: 'Volcanic abyssal whip',
		inputItems: new Bank().add('Abyssal whip', 1).add('Volcanic whip mix', 1),
		outputItems: new Bank().add('Volcanic abyssal whip')
	},
	{
		name: 'Revert volcanic abyssal whip',
		inputItems: new Bank().add('Volcanic abyssal whip', 1),
		outputItems: new Bank().add('Abyssal whip'),
		noCl: true
	},
	//
	{
		name: 'Frozen abyssal whip',
		inputItems: new Bank().add('Abyssal whip', 1).add('Frozen whip mix', 1),
		outputItems: new Bank().add('Frozen abyssal whip')
	},
	{
		name: 'Revert frozen abyssal whip',
		inputItems: new Bank().add('Frozen abyssal whip', 1),
		outputItems: new Bank().add('Abyssal whip'),
		noCl: true
	},
	/**
	 *
	 * Other
	 *
	 */
	{
		name: 'Staff of balance',
		inputItems: new Bank().add('Staff of the dead', 1).add('Guthixian icon', 1),
		outputItems: new Bank().add('Staff of balance')
	},
	{
		name: "Saradomin's blessed sword",
		inputItems: new Bank().add('Saradomin sword', 1).add("Saradomin's tear", 1),
		outputItems: new Bank().add("Saradomin's blessed sword")
	},
	{
		name: 'Magic shortbow (i)',
		inputItems: new Bank().add('Magic shortbow', 1).add('Magic shortbow scroll', 1),
		outputItems: new Bank().add('Magic shortbow (i)')
	},
	{
		name: 'Looting bag',
		inputItems: new Bank().add('Looting bag note', 1),
		outputItems: new Bank().add('Looting bag')
	},
	{
		name: 'Rune pouch',
		inputItems: new Bank().add('Rune pouch note', 1),
		outputItems: new Bank().add('Rune pouch')
	}
];
