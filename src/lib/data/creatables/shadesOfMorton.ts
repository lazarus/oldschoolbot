import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const shadesOfMortonCreatables: Createable[] = [
	{
		name: 'Bronze coffin',
		inputItems: new Bank({
			'Bronze locks': 1,
			'Broken coffin': 1
		}),
		outputItems: new Bank().add('Bronze coffin')
	},
	{
		name: 'Steel coffin',
		inputItems: new Bank({
			'Steel locks': 1,
			'Bronze coffin': 1
		}),
		outputItems: new Bank().add('Steel coffin')
	},
	{
		name: 'Black coffin',
		inputItems: new Bank({
			'Black locks': 1,
			'Steel coffin': 1
		}),
		outputItems: new Bank().add('Black coffin')
	},
	{
		name: 'Silver coffin',
		inputItems: new Bank({
			'Silver locks': 1,
			'Black coffin': 1
		}),
		outputItems: new Bank().add('Silver coffin')
	},
	{
		name: 'Gold coffin',
		inputItems: new Bank({
			'Gold locks': 1,
			'Silver coffin': 1
		}),
		outputItems: new Bank().add('Gold coffin')
	}
];
