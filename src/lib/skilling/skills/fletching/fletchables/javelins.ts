import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Fletchable } from '../../../types';

const Javelins: Fletchable[] = [
	{
		name: 'Bronze javelin',
		id: itemID('Bronze javelin'),
		level: 3,
		xp: 1,
		inputItems: new Bank().add('Bronze javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Iron javelin',
		id: itemID('Iron javelin'),
		level: 17,
		xp: 2,
		inputItems: new Bank().add('Iron javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Steel javelin',
		id: itemID('Steel javelin'),
		level: 32,
		xp: 5,
		inputItems: new Bank().add('Steel javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Mithril javelin',
		id: itemID('Mithril javelin'),
		level: 47,
		xp: 8,
		inputItems: new Bank().add('Mithril javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Adamant javelin',
		id: itemID('Adamant javelin'),
		level: 62,
		xp: 10,
		inputItems: new Bank().add('Adamant javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Rune javelin',
		id: itemID('Rune javelin'),
		level: 77,
		xp: 12.4,
		inputItems: new Bank().add('Rune javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Amethyst javelin',
		id: itemID('Amethyst javelin'),
		level: 84,
		xp: 13.5,
		inputItems: new Bank().add('Amethyst javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	},
	{
		name: 'Dragon javelin',
		id: itemID('Dragon javelin'),
		level: 92,
		xp: 15,
		inputItems: new Bank().add('Dragon javelin heads').add('Javelin shaft'),
		tickRate: 0.13
	}
];

export default Javelins;
