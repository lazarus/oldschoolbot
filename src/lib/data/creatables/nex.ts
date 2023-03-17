import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const nexCreatables: Createable[] = [
	{
		name: 'Revert bandos chestplate',
		inputItems: new Bank({
			'Bandos chestplate': 1
		}),
		outputItems: new Bank().add('Bandosian components', 3),
		forceAddToCl: true
	},
	{
		name: 'Revert bandos tassets',
		inputItems: new Bank({
			'Bandos tassets': 1
		}),
		outputItems: new Bank().add('Bandosian components', 2),
		forceAddToCl: true
	},
	{
		name: 'Torva full helm',
		inputItems: new Bank({
			'Bandosian components': 1,
			'Torva full helm (damaged)': 1
		}),
		outputItems: new Bank().add('Torva full helm'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Torva platebody',
		inputItems: new Bank({
			'Bandosian components': 2,
			'Torva platebody (damaged)': 1
		}),
		outputItems: new Bank().add('Torva platebody'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Torva platelegs',
		inputItems: new Bank({
			'Bandosian components': 2,
			'Torva platelegs (damaged)': 1
		}),
		outputItems: new Bank().add('Torva platelegs'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Ancient godsword',
		inputItems: new Bank({
			'Godsword blade': 1,
			'Ancient hilt': 1
		}),
		outputItems: new Bank().add('Ancient godsword')
	},
	{
		name: 'Zaryte crossbow',
		inputItems: new Bank({
			'Armadyl crossbow': 1,
			'Nihil horn': 1,
			'Nihil shard': 250
		}),
		outputItems: new Bank().add('Zaryte crossbow')
	}
];
