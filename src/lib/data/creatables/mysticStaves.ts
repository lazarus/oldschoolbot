import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const mysticStavesCreatables: Createable[] = [
	{
		name: 'Mystic air staff',
		inputItems: new Bank({
			'Air battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic air staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic water staff',
		inputItems: new Bank({
			'Water battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic water staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic earth staff',
		inputItems: new Bank({
			'Earth battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic earth staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic fire staff',
		inputItems: new Bank({
			'Fire battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic fire staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic dust staff',
		inputItems: new Bank({
			'Dust battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic dust staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic lava staff',
		inputItems: new Bank({
			'Lava battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic lava staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic lava staff (or)',
		inputItems: new Bank({
			'Lava battlestaff (or)': 1
		}),
		outputItems: new Bank().add('Mystic lava staff (or)'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic mist staff',
		inputItems: new Bank({
			'Mist battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic mist staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic mud staff',
		inputItems: new Bank({
			'Mud battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic mud staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic smoke staff',
		inputItems: new Bank({
			'Smoke battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic smoke staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic steam staff',
		inputItems: new Bank({
			'Steam battlestaff': 1
		}),
		outputItems: new Bank().add('Mystic steam staff'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	},
	{
		name: 'Mystic steam staff (or)',
		inputItems: new Bank({
			'Steam battlestaff (or)': 1
		}),
		outputItems: new Bank().add('Mystic steam staff (or)'),
		GPCost: 40_000,
		QPRequired: 1,
		requiredSkills: { prayer: 31 }
	}
];
