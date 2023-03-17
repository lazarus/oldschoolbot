import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const ornamentKits: Createable[] = [
	{
		name: 'Dragon defender (t)',
		inputItems: new Bank().add('Dragon defender').add('Dragon defender ornament kit'),
		outputItems: new Bank().add('Dragon defender (t)')
	},
	{
		name: 'Revert dragon defender (t)',
		inputItems: new Bank().add('Dragon defender (t)'),
		outputItems: new Bank().add('Dragon defender').add('Dragon defender ornament kit'),
		noCl: true
	},
	{
		name: 'Rune defender (t)',
		inputItems: new Bank().add('Rune defender').add('Rune defender ornament kit'),
		outputItems: new Bank().add('Rune defender (t)')
	},
	{
		name: 'Revert rune defender (t)',
		inputItems: new Bank().add('Rune defender (t)'),
		outputItems: new Bank().add('Rune defender').add('Rune defender ornament kit'),
		noCl: true
	},
	{
		name: 'Dragon pickaxe (or)',
		inputItems: new Bank().add('Dragon pickaxe').add('Zalcano shard'),
		outputItems: new Bank().add('Dragon pickaxe (or)')
	},
	{
		name: 'Revert dragon pickaxe (or)',
		inputItems: new Bank().add('Dragon pickaxe (or)'),
		outputItems: new Bank().add('Dragon pickaxe').add('Zalcano shard'),
		noCl: true
	},
	{
		name: 'Dragon sq shield (g)',
		inputItems: new Bank().add('Dragon sq shield ornament kit').add('Dragon sq shield'),
		outputItems: new Bank().add('Dragon sq shield (g)')
	},
	{
		name: 'Revert dragon sq shield (g)',
		inputItems: new Bank().add('Dragon sq shield (g)'),
		outputItems: new Bank().add('Dragon sq shield ornament kit').add('Dragon sq shield'),
		noCl: true
	},
	{
		name: 'Dragon full helm (g)',
		inputItems: new Bank().add('Dragon full helm ornament kit').add('Dragon full helm'),
		outputItems: new Bank().add('Dragon full helm (g)')
	},
	{
		name: 'Revert dragon full helm (g)',
		inputItems: new Bank().add('Dragon full helm (g)'),
		outputItems: new Bank().add('Dragon full helm ornament kit').add('Dragon full helm'),
		noCl: true
	},
	{
		name: 'Dragon platebody (g)',
		inputItems: new Bank().add('Dragon platebody ornament kit').add('Dragon platebody'),
		outputItems: new Bank().add('Dragon platebody (g)')
	},
	{
		name: 'Revert dragon platebody (g)',
		inputItems: new Bank().add('Dragon platebody (g)'),
		outputItems: new Bank().add('Dragon platebody ornament kit').add('Dragon platebody'),
		noCl: true
	},
	{
		name: 'Dragon kiteshield (g)',
		inputItems: new Bank().add('Dragon kiteshield ornament kit').add('Dragon kiteshield'),
		outputItems: new Bank().add('Dragon kiteshield (g)')
	},
	{
		name: 'Revert dragon kiteshield (g)',
		inputItems: new Bank().add('Dragon kiteshield (g)'),
		outputItems: new Bank().add('Dragon kiteshield ornament kit').add('Dragon kiteshield'),
		noCl: true
	},
	{
		name: 'Dragon boots (g)',
		inputItems: new Bank().add('Dragon boots ornament kit').add('Dragon boots'),
		outputItems: new Bank().add('Dragon boots (g)')
	},
	{
		name: 'Revert dragon boots (g)',
		inputItems: new Bank().add('Dragon boots (g)'),
		outputItems: new Bank().add('Dragon boots ornament kit').add('Dragon boots'),
		noCl: true
	},
	{
		name: 'Dragon scimitar (or)',
		inputItems: new Bank().add('Dragon scimitar ornament kit').add('Dragon scimitar'),
		outputItems: new Bank().add('Dragon scimitar (or)')
	},
	{
		name: 'Revert dragon scimitar (or)',
		inputItems: new Bank().add('Dragon scimitar (or)'),
		outputItems: new Bank().add('Dragon scimitar ornament kit').add('Dragon scimitar'),
		noCl: true
	},
	{
		name: 'Dragon platelegs (g)',
		inputItems: new Bank().add('Dragon platelegs').add('Dragon legs/skirt ornament kit'),
		outputItems: new Bank().add('Dragon platelegs (g)')
	},
	{
		name: 'Revert dragon platelegs (g)',
		inputItems: new Bank().add('Dragon platelegs (g)'),
		outputItems: new Bank().add('Dragon platelegs', 1).add('Dragon legs/skirt ornament kit', 1),
		noCl: true
	},
	{
		name: 'Dragon plateskirt (g)',
		inputItems: new Bank().add('Dragon plateskirt', 1).add('Dragon legs/skirt ornament kit', 1),
		outputItems: new Bank().add('Dragon plateskirt (g)')
	},
	{
		name: 'Revert dragon plateskirt (g)',
		inputItems: new Bank().add('Dragon plateskirt (g)'),
		outputItems: new Bank().add('Dragon plateskirt', 1).add('Dragon legs/skirt ornament kit', 1),
		noCl: true
	},
	{
		name: 'Dragon chainbody (g)',
		inputItems: new Bank().add('Dragon chainbody', 1).add('Dragon chainbody ornament kit', 1),
		outputItems: new Bank().add('Dragon chainbody (g)')
	},
	{
		name: 'Revert dragon chainbody (g)',
		inputItems: new Bank().add('Dragon chainbody (g)'),
		outputItems: new Bank().add('Dragon chainbody', 1).add('Dragon chainbody ornament kit', 1),
		noCl: true
	},
	{
		name: 'Amulet of fury (or)',
		inputItems: new Bank().add('Amulet of fury').add('Fury ornament kit'),
		outputItems: new Bank().add('Amulet of fury (or)', 1)
	},
	{
		name: 'Revert amulet of fury (or)',
		inputItems: new Bank().add('Amulet of fury (or)', 1),
		outputItems: new Bank().add('Amulet of fury').add('Fury ornament kit'),
		noCl: true
	},
	// Godswords
	{
		name: 'Zamorak godsword (or)',
		inputItems: new Bank().add('Zamorak godsword').add('Zamorak godsword ornament kit'),
		outputItems: new Bank().add('Zamorak godsword (or)', 1)
	},
	{
		name: 'Revert zamorak godsword (or)',
		inputItems: new Bank().add('Zamorak godsword (or)', 1),
		outputItems: new Bank().add('Zamorak godsword').add('Zamorak godsword ornament kit'),
		noCl: true
	},
	{
		name: 'Bandos godsword (or)',
		inputItems: new Bank().add('Bandos godsword').add('Bandos godsword ornament kit'),
		outputItems: new Bank().add('Bandos godsword (or)', 1)
	},
	{
		name: 'Revert bandos godsword (or)',
		inputItems: new Bank().add('Bandos godsword (or)', 1),
		outputItems: new Bank().add('Bandos godsword').add('Bandos godsword ornament kit'),
		noCl: true
	},
	{
		name: 'Saradomin godsword (or)',
		inputItems: new Bank().add('Saradomin godsword', 1).add('Saradomin godsword ornament kit', 1),
		outputItems: new Bank().add('Saradomin godsword (or)', 1)
	},
	{
		name: 'Revert saradomin godsword (or)',
		inputItems: new Bank().add('Saradomin godsword (or)', 1),
		outputItems: new Bank().add('Saradomin godsword', 1).add('Saradomin godsword ornament kit', 1),
		noCl: true
	},
	{
		name: 'Armadyl godsword (or)',
		inputItems: new Bank().add('Armadyl godsword', 1).add('Armadyl godsword ornament kit', 1),
		outputItems: new Bank().add('Armadyl godsword (or)', 1)
	},
	{
		name: 'Revert armadyl godsword (or)',
		inputItems: new Bank().add('Armadyl godsword (or)', 1),
		outputItems: new Bank().add('Armadyl godsword', 1).add('Armadyl godsword ornament kit', 1),
		noCl: true
	},
	{
		name: 'Amulet of torture (or)',
		inputItems: new Bank().add('Amulet of torture', 1).add('Torture ornament kit', 1),
		outputItems: new Bank().add('Amulet of torture (or)', 1)
	},
	{
		name: 'Revert amulet of torture (or)',
		inputItems: new Bank().add('Amulet of torture (or)', 1),
		outputItems: new Bank().add('Amulet of torture', 1).add('Torture ornament kit', 1),
		noCl: true
	},
	{
		name: 'Necklace of anguish (or)',
		inputItems: new Bank().add('Necklace of anguish', 1).add('Anguish ornament kit', 1),
		outputItems: new Bank().add('Necklace of anguish (or)', 1)
	},
	{
		name: 'Revert necklace of anguish (or)',
		inputItems: new Bank().add('Necklace of anguish (or)', 1),
		outputItems: new Bank().add('Necklace of anguish', 1).add('Anguish ornament kit', 1),
		noCl: true
	},
	{
		name: 'Tormented bracelet (or)',
		inputItems: new Bank().add('Tormented bracelet', 1).add('Tormented ornament kit', 1),
		outputItems: new Bank().add('Tormented bracelet (or)', 1)
	},
	{
		name: 'Revert tormented bracelet (or)',
		inputItems: new Bank().add('Tormented bracelet (or)', 1),
		outputItems: new Bank().add('Tormented bracelet', 1).add('Tormented ornament kit', 1),
		noCl: true
	},
	{
		name: 'Occult necklace (or)',
		inputItems: new Bank().add('Occult necklace', 1).add('Occult ornament kit', 1),
		outputItems: new Bank().add('Occult necklace (or)', 1)
	},
	{
		name: 'Revert occult necklace (or)',
		inputItems: new Bank().add('Occult necklace (or)', 1),
		outputItems: new Bank().add('Occult necklace', 1).add('Occult ornament kit', 1),
		noCl: true
	},
	{
		name: 'Rune scimitar (guthix)',
		inputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (guthix)', 1),
		outputItems: new Bank().add(23_330, 1)
	},
	{
		name: 'Revert rune scimitar (guthix)',
		inputItems: new Bank().add(23_330, 1),
		outputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (guthix)', 1),
		noCl: true
	},
	{
		name: 'Rune scimitar (saradomin)',
		inputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (saradomin)', 1),
		outputItems: new Bank().add(23_332, 1)
	},
	{
		name: 'Revert rune scimitar (saradomin)',
		inputItems: new Bank().add(23_332, 1),
		outputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (saradomin)', 1),
		noCl: true
	},
	{
		name: 'Rune scimitar (zamorak)',
		inputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (zamorak)', 1),
		outputItems: new Bank().add(23_334, 1)
	},
	{
		name: 'Revert rune scimitar (zamorak)',
		inputItems: new Bank().add(23_334, 1),
		outputItems: new Bank().add('Rune scimitar', 1).add('Rune scimitar ornament kit (zamorak)', 1),
		noCl: true
	},
	{
		name: 'Tzhaar-ket-om (t)',
		inputItems: new Bank().add('Tzhaar-ket-om', 1).add('Tzhaar-ket-om ornament kit', 1),
		outputItems: new Bank().add('Tzhaar-ket-om (t)', 1)
	},
	{
		name: 'Revert tzhaar-ket-om (t)',
		inputItems: new Bank().add('Tzhaar-ket-om (t)', 1),
		outputItems: new Bank().add('Tzhaar-ket-om', 1).add('Tzhaar-ket-om ornament kit', 1),
		noCl: true
	},
	{
		name: 'Berserker necklace (or)',
		inputItems: new Bank().add('Berserker necklace', 1).add('Berserker necklace ornament kit', 1),
		outputItems: new Bank().add('Berserker necklace (or)', 1)
	},
	{
		name: 'Revert berserker necklace (or)',
		inputItems: new Bank().add('Berserker necklace (or)', 1),
		outputItems: new Bank().add('Berserker necklace', 1).add('Berserker necklace ornament kit', 1),
		noCl: true
	},
	{
		name: 'Dark infinity hat',
		inputItems: new Bank().add('Infinity hat', 1).add('Dark infinity colour kit', 1),
		outputItems: new Bank().add('Dark infinity hat', 1)
	},
	{
		name: 'Revert dark infinity hat',
		inputItems: new Bank().add('Dark infinity hat', 1),
		outputItems: new Bank().add('Infinity hat', 1).add('Dark infinity colour kit', 1),
		noCl: true
	},
	{
		name: 'Dark infinity top',
		inputItems: new Bank().add('Infinity top', 1).add('Dark infinity colour kit', 1),
		outputItems: new Bank().add('Dark infinity top', 1)
	},
	{
		name: 'Revert dark infinity top',
		inputItems: new Bank().add('Dark infinity top', 1),
		outputItems: new Bank().add('Infinity top', 1).add('Dark infinity colour kit', 1),
		noCl: true
	},
	{
		name: 'Dark infinity bottoms',
		inputItems: new Bank().add('Infinity bottoms', 1).add('Dark infinity colour kit', 1),
		outputItems: new Bank().add('Dark infinity bottoms', 1)
	},
	{
		name: 'Revert dark infinity bottoms',
		inputItems: new Bank().add('Dark infinity bottoms', 1),
		outputItems: new Bank().add('Infinity bottoms', 1).add('Dark infinity colour kit', 1),
		noCl: true
	},
	{
		name: 'Light infinity hat',
		inputItems: new Bank().add('Infinity hat', 1).add('Light infinity colour kit', 1),
		outputItems: new Bank().add('Light infinity hat', 1)
	},
	{
		name: 'Revert light infinity hat',
		inputItems: new Bank().add('Light infinity hat', 1),
		outputItems: new Bank().add('Infinity hat', 1).add('Light infinity colour kit', 1),
		noCl: true
	},
	{
		name: 'Light infinity top',
		inputItems: new Bank().add('Infinity top', 1).add('Light infinity colour kit', 1),
		outputItems: new Bank().add('Light infinity top', 1)
	},
	{
		name: 'Revert light infinity top',
		inputItems: new Bank().add('Light infinity top', 1),
		outputItems: new Bank().add('Infinity top', 1).add('Light infinity colour kit', 1),
		noCl: true
	},
	{
		name: 'Light infinity bottoms',
		inputItems: new Bank().add('Infinity bottoms', 1).add('Light infinity colour kit', 1),
		outputItems: new Bank().add('Light infinity bottoms', 1)
	},
	{
		name: 'Revert light infinity bottoms',
		inputItems: new Bank().add('Light infinity bottoms', 1),
		outputItems: new Bank().add('Infinity bottoms', 1).add('Light infinity colour kit', 1),
		noCl: true
	}
];
