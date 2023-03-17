import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Fletchable } from '../../../types';

const TippedBolts: Fletchable[] = [
	{
		name: 'Opal bolts',
		id: itemID('Opal bolts'),
		level: 11,
		xp: 1.6,
		inputItems: new Bank().add('Opal bolt tips').add('Bronze bolts'),
		tickRate: 0.2
	},
	{
		name: 'Pearl bolts',
		id: itemID('Pearl bolts'),
		level: 41,
		xp: 3.2,
		inputItems: new Bank().add('Pearl bolt tips').add('Iron bolts'),
		tickRate: 0.2
	},
	{
		name: 'Topaz bolts',
		id: itemID('Topaz bolts'),
		level: 48,
		xp: 4,
		inputItems: new Bank().add('Topaz bolt tips').add('Steel bolts'),
		tickRate: 0.2
	},
	{
		name: 'Sapphire bolts',
		id: itemID('Sapphire bolts'),
		level: 56,
		xp: 4.7,
		inputItems: new Bank().add('Sapphire bolt tips').add('Mithril bolts'),
		tickRate: 0.2
	},
	{
		name: 'Emerald bolts',
		id: itemID('Emerald bolts'),
		level: 58,
		xp: 5.5,
		inputItems: new Bank().add('Emerald bolt tips').add('Mithril bolts'),
		tickRate: 0.2
	},
	{
		name: 'Ruby bolts',
		id: itemID('Ruby bolts'),
		level: 63,
		xp: 6.3,
		inputItems: new Bank().add('Ruby bolt tips').add('Adamant bolts'),
		tickRate: 0.2
	},
	{
		name: 'Diamond bolts',
		id: itemID('Diamond bolts'),
		level: 65,
		xp: 7,
		inputItems: new Bank().add('Diamond bolt tips').add('Adamant bolts'),
		tickRate: 0.2
	},
	{
		name: 'Dragonstone bolts',
		id: itemID('Dragonstone bolts'),
		level: 71,
		xp: 8.2,
		inputItems: new Bank().add('Dragonstone bolt tips').add('Runite bolts'),
		tickRate: 0.2
	},
	{
		name: 'Onyx bolts',
		id: itemID('Onyx bolts'),
		level: 73,
		xp: 9.4,
		inputItems: new Bank().add('Onyx bolt tips').add('Runite bolts'),
		tickRate: 0.2
	}
];

export default TippedBolts;
