import { Bank } from 'oldschooljs';

import { BitField, PerkTier } from '../../constants';
import { BankBackground } from '../types';

const backgroundImages: BankBackground[] = [
	{
		id: 1,
		name: 'Default',
		image: null,
		available: true
	},
	{
		id: 2,
		name: 'Swampman',
		image: null,
		available: false
	},
	{
		id: 3,
		name: 'Lumbridge',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 10_000_000
	},
	{
		id: 4,
		name: 'Karamja',
		image: null,
		available: false
	},
	{
		id: 5,
		name: 'Edgeville',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 10_000_000
	},
	{
		id: 6,
		name: 'Barrows',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Six,
		gpCost: 10_000_000
	},
	{
		id: 7,
		name: 'Bandos',
		image: null,
		available: true,
		collectionLogItemsNeeded: new Bank()
			.add('Armadyl hilt', 1)
			.add('Zamorak hilt', 1)
			.add('Bandos hilt', 1)
			.add('Saradomin hilt', 1)
			.add('Armadyl helmet', 1)
			.add('Armadyl chestplate', 1)
			.add('Armadyl chainskirt', 1)
			.add('Saradomin sword', 1)
			.add("Saradomin's light", 1)
			.add('Armadyl crossbow', 1)
			.add('Bandos chestplate', 1)
			.add('Bandos tassets', 1)
			.add('Bandos boots', 1)
			.add('Steam battlestaff', 1)
			.add('Zamorakian spear', 1)
			.add('Staff of the dead', 1)
			.add('Pet general graardor', 1)
			.add("Pet k'ril tsutsaroth", 1)
			.add("Pet kree'arra", 1)
			.add('Pet zilyana', 1)
			.add('Nexling', 1)
			.add('Ancient hilt', 1)
			.add('Nihil horn', 1)
			.add('Zaryte vambraces', 1)
			.add('Torva full helm (damaged)', 1)
			.add('Torva platebody (damaged)', 1)
			.add('Torva platelegs (damaged)', 1)
			.add('Nihil shard', 1),
		itemCost: new Bank()
			.add('Armadyl godsword', 1)
			.add('Zamorak godsword', 1)
			.add('Bandos godsword', 1)
			.add('Saradomin godsword', 1)
			.add('Ancient godsword', 1),
		gpCost: 100_000_000
	},
	{
		id: 8,
		name: 'Corporeal Beast',
		image: null,
		available: true,
		collectionLogItemsNeeded: new Bank()
			.add('Spirit shield', 4)
			.add('Holy elixir', 4)
			.add('Spectral sigil', 1)
			.add('Arcane sigil', 1)
			.add('Elysian sigil', 1)
			.add('Pet dark core', 1)
			.add('Jar of spirits', 1),
		itemCost: new Bank()
			.add('Spectral spirit shield', 1)
			.add('Arcane spirit shield', 1)
			.add('Elysian spirit shield', 1),
		gpCost: 100_000_000
	},
	{
		id: 9,
		name: 'Casket',
		image: null,
		available: true,
		collectionLogItemsNeeded: new Bank()
			.add('Large spade', 1)
			.add('Clueless scroll', 1)
			.add('Heavy casket', 1)
			.add('Scroll sack', 1),
		gpCost: 100_000_000
	},
	{
		id: 10,
		name: 'Nightmare',
		image: null,
		available: true,
		collectionLogItemsNeeded: new Bank()
			.add('Little nightmare', 1)
			.add('Jar of dreams', 1)
			.add('Nightmare staff', 1)
			.add("Inquisitor's great helm", 1)
			.add("Inquisitor's hauberk", 1)
			.add("Inquisitor's plateskirt", 1)
			.add("Inquisitor's mace", 1)
			.add('Eldritch orb', 1)
			.add('Harmonised orb', 1)
			.add('Volatile orb', 1)
			.add('Slepey tablet', 1)
			.add('Parasitic egg', 1),
		itemCost: new Bank().add('Eldritch orb', 1).add('Harmonised orb', 1).add('Volatile orb', 1),
		gpCost: 100_000_000
	},
	{
		id: 11,
		name: 'Dark',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 10_000_000
	},
	{
		id: 12,
		name: 'Morytania',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Five,
		gpCost: 10_000_000
	},
	{
		id: 13,
		name: 'Grass',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 10_000_000
	},
	{
		id: 14,
		name: 'CoX',
		image: null,
		available: true,
		bitfield: BitField.HasPermanentEventBackgrounds,
		hasPurple: true,
		purpleImage: null
	},
	{
		id: 15,
		name: 'OSB',
		image: null,
		available: true,
		bitfield: BitField.HasPermanentEventBackgrounds
	},
	{
		id: 16,
		name: 'Wilderness',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		collectionLogItemsNeeded: new Bank()
			.add('Dragon pickaxe', 1)
			.add('Dragon med helm', 1)
			.add('Kbd heads', 1)
			.add('Draconic visage', 1)
			.add('Prince black dragon', 1)
			.add('Dragon 2h sword', 1)
			.add('Pet chaos elemental', 1)
			.add('Malediction shard 1', 1)
			.add('Odium shard 1', 1)
			.add('Malediction shard 2', 1)
			.add('Odium shard 2', 1)
			.add('Fedora', 1)
			.add('Malediction shard 3', 1)
			.add('Odium shard 3', 1)
			.add("Scorpia's offspring", 1)
			.add('Treasonous ring', 1)
			.add('Venenatis spiderling', 1)
			.add('Tyrannical ring', 1)
			.add('Callisto cub', 1)
			.add('Ring of the gods', 1)
			.add("Vet'ion jr.", 1),
		itemCost: new Bank()
			.add('Dragon pickaxe', 1)
			.add('Dragon med helm', 1)
			.add('Draconic visage', 1)
			.add('Dragon 2h sword', 1)
			.add('Odium ward ', 1)
			.add('Malediction ward', 1)
			.add('Treasonous ring', 1)
			.add('Tyrannical ring', 1)
			.add('Ring of the gods', 1),
		gpCost: 100_000_000
	},
	{
		id: 17,
		name: 'Grand Exchange',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 2_147_483_647,
		sacValueRequired: 2_147_483_647
	},
	{
		id: 18,
		name: 'Falador Park',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		collectionLogItemsNeeded: new Bank().add('Tangleroot', 1),
		gpCost: 100_000_000,
		skillsNeeded: {
			farming: 99
		}
	},
	{
		id: 19,
		name: 'Pets',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 20,
		name: 'Transparent',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 21,
		name: 'Smokey',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 22,
		name: 'Nieve',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000
	},
	{
		id: 23,
		name: 'ToB',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true,
		hasPurple: true,
		purpleImage: null
	},
	{
		id: 24,
		name: 'Zilyana',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Three,
		gpCost: 20_000_000
	},
	{
		id: 25,
		name: 'Zilyana Transparent',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Three,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 26,
		name: 'Konar Transparent',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 27,
		name: 'Konar',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000
	},
	{
		id: 28,
		name: 'Sandwich Lady',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 20_000_000,
		transparent: true
	},
	{
		id: 29,
		name: 'Farmer Jane (Dynamic)',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 500_000,
		alternateImages: [{ id: 1 }]
	},
	{
		id: 30,
		name: 'Farmer Jane (Transparent, Dynamic)',
		image: null,
		available: true,
		perkTierNeeded: PerkTier.Four,
		gpCost: 500_000,
		transparent: true,
		alternateImages: [{ id: 1 }]
	}
];

export default backgroundImages;
