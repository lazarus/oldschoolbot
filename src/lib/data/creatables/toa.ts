import { Bank } from 'oldschooljs';

import getOSItem from '../../util/getOSItem';
import { Createable } from '../createables';

export const toaCreatables: Createable[] = [
	{
		name: 'Masori assembler',
		inputItems: new Bank({
			'Masori crafting kit': 1,
			"Ava's assembler": 1
		}),
		outputItems: new Bank().add('Masori assembler')
	},
	{
		name: "Osmumten's fang (or)",
		inputItems: new Bank({
			"Osmumten's fang": 1,
			'Cursed phalanx': 1
		}),
		outputItems: new Bank().add("Osmumten's fang (or)")
	},
	{
		name: "Elidinis' ward (f)",
		inputItems: new Bank({
			"Elidinis' ward": 1,
			'Arcane sigil': 1,
			'Soul rune': 10_000
		}),
		outputItems: new Bank().add("Elidinis' ward (f)"),
		requiredSkills: {
			prayer: 90,
			smithing: 90
		}
	},
	{
		name: "Revert Elidinis' ward (f))",
		inputItems: new Bank().add("Elidinis' ward (f)"),
		outputItems: new Bank({
			"Elidinis' ward": 1,
			'Arcane sigil': 1
		}),
		noCl: true
	},
	{
		name: "Elidinis' ward (or)",
		inputItems: new Bank({
			"Elidinis' ward (f)": 1,
			'Menaphite ornament kit': 1
		}),
		outputItems: new Bank().add("Elidinis' ward (or)")
	},
	{
		name: "Revert Elidinis' ward (or)",
		inputItems: new Bank().add("Elidinis' ward (or)"),
		outputItems: new Bank({
			"Elidinis' ward (f)": 1,
			'Menaphite ornament kit': 1
		}),
		noCl: true
	},
	{
		name: 'Divine rune pouch',
		inputItems: new Bank({
			'Rune pouch': 1,
			'Thread of elidinis': 1
		}),
		outputItems: new Bank().add('Divine rune pouch')
	},
	{
		name: 'Masori mask (f)',
		inputItems: new Bank({
			'Armadylean plate': 1,
			'Masori mask': 1
		}),
		outputItems: new Bank().add('Masori mask (f)')
	},
	{
		name: 'Masori body (f)',
		inputItems: new Bank({
			'Armadylean plate': 4,
			'Masori body': 1
		}),
		outputItems: new Bank().add('Masori body (f)')
	},
	{
		name: 'Masori chaps (f)',
		inputItems: new Bank({
			'Armadylean plate': 3,
			'Masori chaps': 1
		}),
		outputItems: new Bank().add('Masori chaps (f)')
	},
	{
		name: 'Revert Armadyl helmet',
		inputItems: new Bank({
			'Armadyl helmet': 1
		}),
		outputItems: new Bank().add('Armadylean plate')
	},
	{
		name: 'Revert Armadyl chestplate',
		inputItems: new Bank({
			'Armadyl chestplate': 1
		}),
		outputItems: new Bank().add('Armadylean plate', 4)
	},
	{
		name: 'Revert Armadyl chainskirt',
		inputItems: new Bank({
			'Armadyl chainskirt': 1
		}),
		outputItems: new Bank().add('Armadylean plate', 3)
	},
	{
		name: 'Keris partisan of breaching',
		inputItems: new Bank({
			'Keris partisan': 1,
			'Breach of the scarab': 1
		}),
		outputItems: new Bank().add('Keris partisan of breaching')
	},
	{
		name: 'Keris partisan of corruption',
		inputItems: new Bank({
			'Keris partisan': 1,
			'Eye of the corruptor': 1
		}),
		outputItems: new Bank().add('Keris partisan of corruption')
	},
	{
		name: 'Keris partisan of the sun',
		inputItems: new Bank({
			'Keris partisan': 1,
			'Jewel of the sun': 1
		}),
		outputItems: new Bank().add('Keris partisan of the sun')
	},
	{
		name: 'Revert Masori assembler',
		inputItems: new Bank({
			'Masori assembler': 1
		}),
		outputItems: new Bank().add('Masori crafting kit').add("Ava's assembler"),
		noCl: true
	}
];

const transMogPets = [
	['Remnant of akkha', 'Akkhito'],
	['Remnant of ba-ba', 'Babi'],
	['Remnant of kephri', 'Kephriti'],
	['Ancient remnant', "Tumeken's damaged guardian"],
	['Ancient remnant', "Elidinis' damaged guardian"],
	['Remnant of zebak', 'Zebo']
] as const;

for (const [ornament, _pet] of transMogPets) {
	const ornKit = getOSItem(ornament);
	const pet = getOSItem(_pet);
	toaCreatables.push({
		name: `${pet.name}`,
		inputItems: new Bank().add(ornKit.id).add("Tumeken's guardian"),
		outputItems: new Bank().add(pet.id)
	});
	toaCreatables.push({
		name: `Revert ${pet.name}`,
		inputItems: new Bank().add(pet.id),
		outputItems: new Bank().add("Tumeken's guardian").add(ornKit.id),
		noCl: true
	});
}

const spiritShields = [['Arcane sigil', 'Arcane spirit shield']] as const;

for (const [_sigil, _shield] of spiritShields) {
	const sigil = getOSItem(_sigil);
	const shield = getOSItem(_shield);
	toaCreatables.push({
		name: `Revert ${shield.name}`,
		inputItems: new Bank().add(shield.id),
		outputItems: new Bank().add(sigil.id)
	});
}
