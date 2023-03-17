import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Craftable } from '../../../types';

const Built: Craftable[] = [
	{
		name: 'Serpentine helm (uncharged)',
		id: itemID('Serpentine helm (uncharged)'),
		level: 52,
		xp: 120,
		inputItems: new Bank().add('Serpentine visage'),
		tickRate: 3
	},
	{
		name: 'Toxic staff (uncharged)',
		id: itemID('Toxic staff (uncharged)'),
		level: 59,
		xp: 0,
		inputItems: new Bank().add('Magic fang').add('Staff of the dead'),
		tickRate: 3
	},
	{
		name: 'Uncharged toxic trident',
		id: itemID('Uncharged toxic trident'),
		level: 59,
		xp: 0,
		inputItems: new Bank().add('Uncharged trident').add('Magic fang'),
		tickRate: 3
	}
];

export default Built;
