import { Bank } from 'oldschooljs';

import { SlayerTaskUnlocksEnum } from '../../../../slayer/slayerUnlocks';
import itemID from '../../../../util/itemID';
import { Fletchable } from '../../../types';

const Slayer: Fletchable[] = [
	{
		name: 'Incomplete heavy ballista',
		id: itemID('Incomplete heavy ballista'),
		level: 47,
		xp: 1,
		inputItems: new Bank().add('Ballista limbs').add('Heavy frame'),
		tickRate: 3
	},
	{
		name: 'Incomplete light ballista',
		id: itemID('Incomplete light ballista'),
		level: 47,
		xp: 1,
		inputItems: new Bank().add('Ballista limbs').add('Light frame'),
		tickRate: 3
	},
	{
		name: 'Unstrung heavy ballista',
		id: itemID('Unstrung heavy ballista'),
		level: 72,
		xp: 1,
		inputItems: new Bank().add('Ballista spring').add('Incomplete heavy ballista'),
		tickRate: 3
	},
	{
		name: 'Unstrung light ballista',
		id: itemID('Unstrung light ballista'),
		level: 72,
		xp: 1,
		inputItems: new Bank().add('Ballista spring').add('Incomplete light ballista'),
		tickRate: 3
	},
	{
		name: 'Heavy ballista',
		id: itemID('Heavy ballista'),
		level: 72,
		xp: 1,
		inputItems: new Bank().add('Monkey tail').add('Unstrung heavy ballista'),
		tickRate: 3
	},
	{
		name: 'Light ballista',
		id: itemID('Light ballista'),
		level: 72,
		xp: 1,
		inputItems: new Bank().add('Monkey tail').add('Unstrung light ballista'),
		tickRate: 3
	},
	{
		name: 'Broad arrows',
		id: itemID('Broad arrows'),
		level: 52,
		xp: 10,
		inputItems: new Bank().add('Broad arrowheads').add('Headless arrow'),
		tickRate: 0.13,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.BroaderFletching]
	},
	{
		name: 'Broad bolts',
		id: itemID('Broad bolts'),
		level: 55,
		xp: 3,
		inputItems: new Bank().add('Unfinished broad bolts').add('Feather'),
		tickRate: 0.08,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.BroaderFletching]
	},
	{
		name: 'Amethyst broad bolts',
		id: itemID('Amethyst broad bolts'),
		level: 76,
		xp: 10.6,
		inputItems: new Bank().add('Broad bolts').add('Amethyst bolt tips'),
		tickRate: 0.13,
		requiredSlayerUnlocks: [SlayerTaskUnlocksEnum.BroaderFletching]
	}
];

export default Slayer;
