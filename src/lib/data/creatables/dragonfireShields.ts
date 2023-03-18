import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const dragonFireShieldCreatables: Createable[] = [
	// Uncharged
	{
		name: 'Uncharged dragonfire shield',
		inputItems: new Bank().add('Draconic visage', 1).add('Anti-dragon shield', 1),
		outputItems: new Bank().add('Uncharged dragonfire shield'),
		requiredSkills: { smithing: 90 }
	},
	{
		name: 'Uncharged dragonfire ward',
		inputItems: new Bank().add('Skeletal visage', 1).add('Anti-dragon shield', 1),
		outputItems: new Bank().add('Uncharged dragonfire ward'),
		requiredSkills: { smithing: 90 }
	},
	{
		name: 'Uncharged ancient wyvern shield',
		inputItems: new Bank().add('Wyvern visage', 1).add('Elemental shield', 1),
		outputItems: new Bank().add('Uncharged ancient wyvern shield'),
		requiredSkills: { smithing: 66, magic: 66 }
	},
	// Charged
	{
		name: 'Dragonfire shield',
		inputItems: new Bank().add('Bottled dragonbreath', 1).add('Uncharged dragonfire shield', 1),
		outputItems: new Bank().add('Dragonfire shield', 1)
	},
	{
		name: 'Dragonfire ward',
		inputItems: new Bank().add('Bottled dragonbreath', 1).add('Uncharged dragonfire ward', 1),
		outputItems: new Bank().add('Dragonfire ward', 1)
	},
	{
		name: 'Ancient wyvern shield',
		inputItems: new Bank()
			.add('Bottled dragonbreath', 1)
			.add('Numulite', 5000)
			.add('Uncharged ancient wyvern shield', 1),
		outputItems: new Bank().add('Ancient wyvern shield', 1)
	}
];
