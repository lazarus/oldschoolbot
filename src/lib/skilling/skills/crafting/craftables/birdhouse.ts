import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Craftable } from '../../../types';

const Birdhouse: Craftable[] = [
	{
		name: 'Bird house',
		id: itemID('Bird house'),
		level: 5,
		xp: 15,
		inputItems: new Bank().add('Logs').add('Clockwork'),
		tickRate: 2
	},
	{
		name: 'Oak bird house',
		id: itemID('Oak bird house'),
		level: 15,
		xp: 20,
		inputItems: new Bank().add('Oak logs').add('Clockwork'),
		tickRate: 2
	},
	{
		name: 'Willow bird house',
		id: itemID('Willow bird house'),
		level: 25,
		xp: 25,
		inputItems: new Bank().add('Willow logs').add('Clockwork'),
		tickRate: 2
	},
	{
		name: 'Teak bird house',
		id: itemID('Teak bird house'),
		level: 35,
		xp: 30,
		inputItems: new Bank().add('Teak logs').add('Clockwork'),
		tickRate: 2
	},
	{
		name: 'Maple bird house',
		id: itemID('Maple bird house'),
		level: 45,
		xp: 35,
		inputItems: new Bank().add('Clockwork').add('Maple logs'),
		tickRate: 2
	},
	{
		name: 'Mahogany bird house',
		id: itemID('Mahogany bird house'),
		level: 50,
		xp: 40,
		inputItems: new Bank().add('Clockwork').add('Mahogany logs'),
		tickRate: 2
	},
	{
		name: 'Yew bird house',
		id: itemID('Yew bird house'),
		level: 60,
		xp: 45,
		inputItems: new Bank().add('Clockwork').add('Yew logs'),
		tickRate: 2
	},
	{
		name: 'Magic bird house',
		id: itemID('Magic bird house'),
		level: 75,
		xp: 50,
		inputItems: new Bank().add('Clockwork').add('Magic logs'),
		tickRate: 2
	},
	{
		name: 'Redwood bird house',
		id: itemID('Redwood bird house'),
		level: 90,
		xp: 55,
		inputItems: new Bank().add('Clockwork').add('Redwood logs'),
		tickRate: 2
	}
];

export default Birdhouse;
