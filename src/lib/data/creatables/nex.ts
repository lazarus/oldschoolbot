import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const nexCreatables: Createable[] = [
	{
		name: 'Revert bandos chestplate',
		inputItems: new Bank().add('Bandos chestplate', 1),
		outputItems: new Bank().add('Bandosian components', 3),
		forceAddToCl: true
	},
	{
		name: 'Revert bandos tassets',
		inputItems: new Bank().add('Bandos tassets', 1),
		outputItems: new Bank().add('Bandosian components', 2),
		forceAddToCl: true
	},
	{
		name: 'Torva full helm',
		inputItems: new Bank().add('Bandosian components', 1).add('Torva full helm (damaged)', 1),
		outputItems: new Bank().add('Torva full helm'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Torva platebody',
		inputItems: new Bank().add('Bandosian components', 2).add('Torva platebody (damaged)', 1),
		outputItems: new Bank().add('Torva platebody'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Torva platelegs',
		inputItems: new Bank().add('Bandosian components', 2).add('Torva platelegs (damaged)', 1),
		outputItems: new Bank().add('Torva platelegs'),
		requiredSkills: {
			smithing: 90
		}
	},
	{
		name: 'Ancient godsword',
		inputItems: new Bank().add('Godsword blade', 1).add('Ancient hilt', 1),
		outputItems: new Bank().add('Ancient godsword')
	},
	{
		name: 'Zaryte crossbow',
		inputItems: new Bank().add('Armadyl crossbow', 1).add('Nihil horn', 1).add('Nihil shard', 250),
		outputItems: new Bank().add('Zaryte crossbow')
	}
];
