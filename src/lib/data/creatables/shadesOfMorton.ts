import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const shadesOfMortonCreatables: Createable[] = [
	{
		name: 'Bronze coffin',
		inputItems: new Bank().add('Bronze locks', 1).add('Broken coffin', 1),
		outputItems: new Bank().add('Bronze coffin')
	},
	{
		name: 'Steel coffin',
		inputItems: new Bank().add('Steel locks', 1).add('Bronze coffin', 1),
		outputItems: new Bank().add('Steel coffin')
	},
	{
		name: 'Black coffin',
		inputItems: new Bank().add('Black locks', 1).add('Steel coffin', 1),
		outputItems: new Bank().add('Black coffin')
	},
	{
		name: 'Silver coffin',
		inputItems: new Bank().add('Silver locks', 1).add('Black coffin', 1),
		outputItems: new Bank().add('Silver coffin')
	},
	{
		name: 'Gold coffin',
		inputItems: new Bank().add('Gold locks', 1).add('Silver coffin', 1),
		outputItems: new Bank().add('Gold coffin')
	}
];
