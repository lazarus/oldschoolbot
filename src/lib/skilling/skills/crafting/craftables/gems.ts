import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Craftable } from '../../../types';

const Gems: Craftable[] = [
	{
		name: 'Opal',
		id: itemID('Opal'),
		level: 1,
		xp: 15,
		inputItems: new Bank().add('Uncut opal'),
		tickRate: 2,
		crushChance: [122 / (98 * 256), 129 / 256]
	},
	{
		name: 'Jade',
		id: itemID('Jade'),
		level: 13,
		xp: 20,
		inputItems: new Bank().add('Uncut Jade'),
		tickRate: 2,
		crushChance: [145 / (98 * 256), 101 / 256]
	},
	{
		name: 'Red topaz',
		id: itemID('Red topaz'),
		level: 16,
		xp: 25,
		inputItems: new Bank().add('Uncut red topaz'),
		tickRate: 2,
		crushChance: [150 / (98 * 256), 91 / 256]
	},
	{
		name: 'Sapphire',
		id: itemID('Sapphire'),
		level: 20,
		xp: 50,
		inputItems: new Bank().add('Uncut sapphire'),
		tickRate: 2
	},
	{
		name: 'Emerald',
		id: itemID('Emerald'),
		level: 27,
		xp: 67.5,
		inputItems: new Bank().add('Uncut emerald'),
		tickRate: 2
	},
	{
		name: 'Ruby',
		id: itemID('Ruby'),
		level: 34,
		xp: 85,
		inputItems: new Bank().add('Uncut ruby'),
		tickRate: 2
	},
	{
		name: 'Diamond',
		id: itemID('Diamond'),
		level: 43,
		xp: 107.5,
		inputItems: new Bank().add('Uncut diamond'),
		tickRate: 2
	},
	{
		name: 'Dragonstone',
		id: itemID('Dragonstone'),
		level: 55,
		xp: 137.5,
		inputItems: new Bank().add('Uncut dragonstone'),
		tickRate: 2
	},
	{
		name: 'Onyx',
		id: itemID('Onyx'),
		level: 67,
		xp: 167.5,
		inputItems: new Bank().add('Uncut onyx'),
		tickRate: 2
	},
	{
		name: 'Zenyte',
		id: itemID('Zenyte'),
		level: 89,
		xp: 200,
		inputItems: new Bank().add('Uncut zenyte'),
		tickRate: 2
	}
];

export default Gems;
