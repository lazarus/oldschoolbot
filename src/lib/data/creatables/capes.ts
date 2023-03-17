import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const capeCreatables: Createable[] = [
	{
		name: 'Ardougne max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Ardougne cloak 4', 1),
		outputItems: new Bank().add('Ardougne max hood', 1).add('Ardougne max cape', 1)
	},
	{
		name: 'Infernal max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Infernal cape', 1),
		outputItems: new Bank().add('Infernal max hood', 1).add('Infernal max cape', 1)
	},
	{
		name: 'Assembler max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add("Ava's assembler", 1),
		outputItems: new Bank().add('Assembler max hood', 1).add('Assembler max cape', 1)
	},
	{
		name: 'Imbued guthix max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Imbued guthix cape', 1),
		outputItems: new Bank().add('Imbued guthix max hood', 1).add('Imbued guthix max cape', 1)
	},
	{
		name: 'Imbued saradomin max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Imbued saradomin cape', 1),
		outputItems: new Bank().add('Imbued saradomin max hood', 1).add('Imbued saradomin max cape', 1)
	},
	{
		name: 'Imbued zamorak max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Imbued zamorak cape', 1),
		outputItems: new Bank().add('Imbued zamorak max hood', 1).add('Imbued zamorak max cape', 1)
	},
	{
		name: 'Mythical max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Mythical cape', 1),
		outputItems: new Bank().add('Mythical max hood', 1).add('Mythical max cape', 1)
	},
	{
		name: 'Fire max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Fire cape', 1),
		outputItems: new Bank().add('Fire max hood', 1).add('Fire max cape', 1)
	},
	{
		name: 'Masori assembler max cape',
		inputItems: new Bank().add('Max hood', 1).add('Max cape', 1).add('Masori assembler', 1),
		outputItems: new Bank().add('Masori assembler max cape', 1).add('Masori assembler max hood', 1)
	}
];
