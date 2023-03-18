import { Bank } from 'oldschooljs';
import { Item } from 'oldschooljs/dist/meta/types';

import getOSItem from '../../util/getOSItem';
import { Createable } from '../createables';

export const armorAndItemPacks: Createable[] = [
	// Melee armour sets
	// bronze
	{
		name: 'Unpack bronze set (lg)',
		inputItems: new Bank().add('Bronze set (lg)', 1),
		outputItems: new Bank()
			.add('Bronze full helm', 1)
			.add('Bronze platebody', 1)
			.add('Bronze platelegs', 1)
			.add('Bronze kiteshield', 1),
		noCl: true
	},
	{
		name: 'Bronze set (lg)',
		inputItems: new Bank()
			.add('Bronze full helm', 1)
			.add('Bronze platebody', 1)
			.add('Bronze platelegs', 1)
			.add('Bronze kiteshield', 1),
		outputItems: new Bank().add('Bronze set (lg)', 1)
	},
	{
		name: 'Unpack bronze set (sk)',
		inputItems: new Bank().add('Bronze set (sk)', 1),
		outputItems: new Bank()
			.add('Bronze full helm', 1)
			.add('Bronze platebody', 1)
			.add('Bronze plateskirt', 1)
			.add('Bronze kiteshield', 1),
		noCl: true
	},
	{
		name: 'Bronze set (sk)',
		inputItems: new Bank()
			.add('Bronze full helm', 1)
			.add('Bronze platebody', 1)
			.add('Bronze plateskirt', 1)
			.add('Bronze kiteshield', 1),
		outputItems: new Bank().add('Bronze set (sk)', 1)
	},
	{
		name: 'Unpack bronze trimmed set (lg)',
		inputItems: new Bank().add('Bronze trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Bronze full helm (t)', 1)
			.add('Bronze platebody (t)', 1)
			.add('Bronze platelegs (t)', 1)
			.add('Bronze kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Bronze trimmed set (lg)',
		inputItems: new Bank()
			.add('Bronze full helm (t)', 1)
			.add('Bronze platebody (t)', 1)
			.add('Bronze platelegs (t)', 1)
			.add('Bronze kiteshield (t)', 1),
		outputItems: new Bank().add('Bronze trimmed set (lg)', 1)
	},
	{
		name: 'Unpack bronze trimmed set (sk)',
		inputItems: new Bank().add('Bronze trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Bronze full helm (t)', 1)
			.add('Bronze platebody (t)', 1)
			.add('Bronze plateskirt (t)', 1)
			.add('Bronze kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Bronze trimmed set (sk)',
		inputItems: new Bank()
			.add('Bronze full helm (t)', 1)
			.add('Bronze platebody (t)', 1)
			.add('Bronze plateskirt (t)', 1)
			.add('Bronze kiteshield (t)', 1),
		outputItems: new Bank().add('Bronze trimmed set (sk)', 1)
	},
	{
		name: 'Unpack bronze gold-trimmed set (lg)',
		inputItems: new Bank().add('Bronze gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Bronze full helm (g)', 1)
			.add('Bronze platebody (g)', 1)
			.add('Bronze platelegs (g)', 1)
			.add('Bronze kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Bronze gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Bronze full helm (g)', 1)
			.add('Bronze platebody (g)', 1)
			.add('Bronze platelegs (g)', 1)
			.add('Bronze kiteshield (g)', 1),
		outputItems: new Bank().add('Bronze gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack bronze gold-trimmed set (sk)',
		inputItems: new Bank().add('Bronze gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Bronze full helm (g)', 1)
			.add('Bronze platebody (g)', 1)
			.add('Bronze plateskirt (g)', 1)
			.add('Bronze kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Bronze gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Bronze full helm (g)', 1)
			.add('Bronze platebody (g)', 1)
			.add('Bronze plateskirt (g)', 1)
			.add('Bronze kiteshield (g)', 1),
		outputItems: new Bank().add('Bronze gold-trimmed set (sk)', 1)
	},
	// iron
	{
		name: 'Unpack iron set (lg)',
		inputItems: new Bank().add('Iron set (lg)', 1),
		outputItems: new Bank()
			.add('Iron full helm', 1)
			.add('Iron platebody', 1)
			.add('Iron platelegs', 1)
			.add('Iron kiteshield', 1),
		noCl: true
	},
	{
		name: 'Iron set (lg)',
		inputItems: new Bank()
			.add('Iron full helm', 1)
			.add('Iron platebody', 1)
			.add('Iron platelegs', 1)
			.add('Iron kiteshield', 1),
		outputItems: new Bank().add('Iron set (lg)', 1)
	},
	{
		name: 'Unpack iron set (sk)',
		inputItems: new Bank().add('Iron set (sk)', 1),
		outputItems: new Bank()
			.add('Iron full helm', 1)
			.add('Iron platebody', 1)
			.add('Iron plateskirt', 1)
			.add('Iron kiteshield', 1),
		noCl: true
	},
	{
		name: 'Iron set (sk)',
		inputItems: new Bank()
			.add('Iron full helm', 1)
			.add('Iron platebody', 1)
			.add('Iron plateskirt', 1)
			.add('Iron kiteshield', 1),
		outputItems: new Bank().add('Iron set (sk)', 1)
	},
	{
		name: 'Unpack iron trimmed set (lg)',
		inputItems: new Bank().add('Iron trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Iron full helm (t)', 1)
			.add('Iron platebody (t)', 1)
			.add('Iron platelegs (t)', 1)
			.add('Iron kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Iron trimmed set (lg)',
		inputItems: new Bank()
			.add('Iron full helm (t)', 1)
			.add('Iron platebody (t)', 1)
			.add('Iron platelegs (t)', 1)
			.add('Iron kiteshield (t)', 1),
		outputItems: new Bank().add('Iron trimmed set (lg)', 1)
	},
	{
		name: 'Unpack iron trimmed set (sk)',
		inputItems: new Bank().add('Iron trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Iron full helm (t)', 1)
			.add('Iron platebody (t)', 1)
			.add('Iron plateskirt (t)', 1)
			.add('Iron kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Iron trimmed set (sk)',
		inputItems: new Bank()
			.add('Iron full helm (t)', 1)
			.add('Iron platebody (t)', 1)
			.add('Iron plateskirt (t)', 1)
			.add('Iron kiteshield (t)', 1),
		outputItems: new Bank().add('Iron trimmed set (sk)', 1)
	},
	{
		name: 'Unpack iron gold-trimmed set (lg)',
		inputItems: new Bank().add('Iron gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Iron full helm (g)', 1)
			.add('Iron platebody (g)', 1)
			.add('Iron platelegs (g)', 1)
			.add('Iron kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Iron gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Iron full helm (g)', 1)
			.add('Iron platebody (g)', 1)
			.add('Iron platelegs (g)', 1)
			.add('Iron kiteshield (g)', 1),
		outputItems: new Bank().add('Iron gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack iron gold-trimmed set (sk)',
		inputItems: new Bank().add('Iron gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Iron full helm (g)', 1)
			.add('Iron platebody (g)', 1)
			.add('Iron plateskirt (g)', 1)
			.add('Iron kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Iron gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Iron full helm (g)', 1)
			.add('Iron platebody (g)', 1)
			.add('Iron plateskirt (g)', 1)
			.add('Iron kiteshield (g)', 1),
		outputItems: new Bank().add('Iron gold-trimmed set (sk)', 1)
	},
	// steel
	{
		name: 'Unpack steel set (lg)',
		inputItems: new Bank().add('Steel set (lg)', 1),
		outputItems: new Bank()
			.add('Steel full helm', 1)
			.add('Steel platebody', 1)
			.add('Steel platelegs', 1)
			.add('Steel kiteshield', 1),
		noCl: true
	},
	{
		name: 'Steel set (lg)',
		inputItems: new Bank()
			.add('Steel full helm', 1)
			.add('Steel platebody', 1)
			.add('Steel platelegs', 1)
			.add('Steel kiteshield', 1),
		outputItems: new Bank().add('Steel set (lg)', 1)
	},
	{
		name: 'Unpack steel set (sk)',
		inputItems: new Bank().add('Steel set (sk)', 1),
		outputItems: new Bank()
			.add('Steel full helm', 1)
			.add('Steel platebody', 1)
			.add('Steel plateskirt', 1)
			.add('Steel kiteshield', 1),
		noCl: true
	},
	{
		name: 'Steel set (sk)',
		inputItems: new Bank()
			.add('Steel full helm', 1)
			.add('Steel platebody', 1)
			.add('Steel plateskirt', 1)
			.add('Steel kiteshield', 1),
		outputItems: new Bank().add('Steel set (sk)', 1)
	},
	{
		name: 'Unpack steel trimmed set (lg)',
		inputItems: new Bank().add('Steel trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Steel full helm (t)', 1)
			.add('Steel platebody (t)', 1)
			.add('Steel platelegs (t)', 1)
			.add('Steel kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Steel trimmed set (lg)',
		inputItems: new Bank()
			.add('Steel full helm (t)', 1)
			.add('Steel platebody (t)', 1)
			.add('Steel platelegs (t)', 1)
			.add('Steel kiteshield (t)', 1),
		outputItems: new Bank().add('Steel trimmed set (lg)', 1)
	},
	{
		name: 'Unpack steel trimmed set (sk)',
		inputItems: new Bank().add('Steel trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Steel full helm (t)', 1)
			.add('Steel platebody (t)', 1)
			.add('Steel plateskirt (t)', 1)
			.add('Steel kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Steel trimmed set (sk)',
		inputItems: new Bank()
			.add('Steel full helm (t)', 1)
			.add('Steel platebody (t)', 1)
			.add('Steel plateskirt (t)', 1)
			.add('Steel kiteshield (t)', 1),
		outputItems: new Bank().add('Steel trimmed set (sk)', 1)
	},
	{
		name: 'Unpack steel gold-trimmed set (lg)',
		inputItems: new Bank().add('Steel gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Steel full helm (g)', 1)
			.add('Steel platebody (g)', 1)
			.add('Steel platelegs (g)', 1)
			.add('Steel kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Steel gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Steel full helm (g)', 1)
			.add('Steel platebody (g)', 1)
			.add('Steel platelegs (g)', 1)
			.add('Steel kiteshield (g)', 1),
		outputItems: new Bank().add('Steel gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack steel gold-trimmed set (sk)',
		inputItems: new Bank().add('Steel gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Steel full helm (g)', 1)
			.add('Steel platebody (g)', 1)
			.add('Steel plateskirt (g)', 1)
			.add('Steel kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Steel gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Steel full helm (g)', 1)
			.add('Steel platebody (g)', 1)
			.add('Steel plateskirt (g)', 1)
			.add('Steel kiteshield (g)', 1),
		outputItems: new Bank().add('Steel gold-trimmed set (sk)', 1)
	},
	// black
	{
		name: 'Unpack black set (lg)',
		inputItems: new Bank().add('Black set (lg)', 1),
		outputItems: new Bank()
			.add('Black full helm', 1)
			.add('Black platebody', 1)
			.add('Black platelegs', 1)
			.add('Black kiteshield', 1),
		noCl: true
	},
	{
		name: 'Black set (lg)',
		inputItems: new Bank()
			.add('Black full helm', 1)
			.add('Black platebody', 1)
			.add('Black platelegs', 1)
			.add('Black kiteshield', 1),
		outputItems: new Bank().add('Black set (lg)', 1)
	},
	{
		name: 'Unpack black set (sk)',
		inputItems: new Bank().add('Black set (sk)', 1),
		outputItems: new Bank()
			.add('Black full helm', 1)
			.add('Black platebody', 1)
			.add('Black plateskirt', 1)
			.add('Black kiteshield', 1),
		noCl: true
	},
	{
		name: 'Black set (sk)',
		inputItems: new Bank()
			.add('Black full helm', 1)
			.add('Black platebody', 1)
			.add('Black plateskirt', 1)
			.add('Black kiteshield', 1),
		outputItems: new Bank().add('Black set (sk)', 1)
	},
	{
		name: 'Unpack black trimmed set (lg)',
		inputItems: new Bank().add('Black trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Black full helm (t)', 1)
			.add('Black platebody (t)', 1)
			.add('Black platelegs (t)', 1)
			.add('Black kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Black trimmed set (lg)',
		inputItems: new Bank()
			.add('Black full helm (t)', 1)
			.add('Black platebody (t)', 1)
			.add('Black platelegs (t)', 1)
			.add('Black kiteshield (t)', 1),
		outputItems: new Bank().add('Black trimmed set (lg)', 1)
	},
	{
		name: 'Unpack black trimmed set (sk)',
		inputItems: new Bank().add('Black trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Black full helm (t)', 1)
			.add('Black platebody (t)', 1)
			.add('Black plateskirt (t)', 1)
			.add('Black kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Black trimmed set (sk)',
		inputItems: new Bank()
			.add('Black full helm (t)', 1)
			.add('Black platebody (t)', 1)
			.add('Black plateskirt (t)', 1)
			.add('Black kiteshield (t)', 1),
		outputItems: new Bank().add('Black trimmed set (sk)', 1)
	},
	{
		name: 'Unpack black gold-trimmed set (lg)',
		inputItems: new Bank().add('Black gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Black full helm (g)', 1)
			.add('Black platebody (g)', 1)
			.add('Black platelegs (g)', 1)
			.add('Black kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Black gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Black full helm (g)', 1)
			.add('Black platebody (g)', 1)
			.add('Black platelegs (g)', 1)
			.add('Black kiteshield (g)', 1),
		outputItems: new Bank().add('Black gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack black gold-trimmed set (sk)',
		inputItems: new Bank().add('Black gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Black full helm (g)', 1)
			.add('Black platebody (g)', 1)
			.add('Black plateskirt (g)', 1)
			.add('Black kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Black gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Black full helm (g)', 1)
			.add('Black platebody (g)', 1)
			.add('Black plateskirt (g)', 1)
			.add('Black kiteshield (g)', 1),
		outputItems: new Bank().add('Black gold-trimmed set (sk)', 1)
	},
	// mithril
	{
		name: 'Unpack mithril set (lg)',
		inputItems: new Bank().add('Mithril set (lg)', 1),
		outputItems: new Bank()
			.add('Mithril full helm', 1)
			.add('Mithril platebody', 1)
			.add('Mithril platelegs', 1)
			.add('Mithril kiteshield', 1),
		noCl: true
	},
	{
		name: 'Mithril set (lg)',
		inputItems: new Bank()
			.add('Mithril full helm', 1)
			.add('Mithril platebody', 1)
			.add('Mithril platelegs', 1)
			.add('Mithril kiteshield', 1),
		outputItems: new Bank().add('Mithril set (lg)', 1)
	},
	{
		name: 'Unpack mithril set (sk)',
		inputItems: new Bank().add('Mithril set (sk)', 1),
		outputItems: new Bank()
			.add('Mithril full helm', 1)
			.add('Mithril platebody', 1)
			.add('Mithril plateskirt', 1)
			.add('Mithril kiteshield', 1),
		noCl: true
	},
	{
		name: 'Mithril set (sk)',
		inputItems: new Bank()
			.add('Mithril full helm', 1)
			.add('Mithril platebody', 1)
			.add('Mithril plateskirt', 1)
			.add('Mithril kiteshield', 1),
		outputItems: new Bank().add('Mithril set (sk)', 1)
	},
	{
		name: 'Unpack mithril trimmed set (lg)',
		inputItems: new Bank().add('Mithril trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Mithril full helm (t)', 1)
			.add('Mithril platebody (t)', 1)
			.add('Mithril platelegs (t)', 1)
			.add('Mithril kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Mithril trimmed set (lg)',
		inputItems: new Bank()
			.add('Mithril full helm (t)', 1)
			.add('Mithril platebody (t)', 1)
			.add('Mithril platelegs (t)', 1)
			.add('Mithril kiteshield (t)', 1),
		outputItems: new Bank().add('Mithril trimmed set (lg)', 1)
	},
	{
		name: 'Unpack mithril trimmed set (sk)',
		inputItems: new Bank().add('Mithril trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Mithril full helm (t)', 1)
			.add('Mithril platebody (t)', 1)
			.add('Mithril plateskirt (t)', 1)
			.add('Mithril kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Mithril trimmed set (sk)',
		inputItems: new Bank()
			.add('Mithril full helm (t)', 1)
			.add('Mithril platebody (t)', 1)
			.add('Mithril plateskirt (t)', 1)
			.add('Mithril kiteshield (t)', 1),
		outputItems: new Bank().add('Mithril trimmed set (sk)', 1)
	},
	{
		name: 'Unpack mithril gold-trimmed set (lg)',
		inputItems: new Bank().add('Mithril gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Mithril full helm (g)', 1)
			.add('Mithril platebody (g)', 1)
			.add('Mithril platelegs (g)', 1)
			.add('Mithril kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Mithril gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Mithril full helm (g)', 1)
			.add('Mithril platebody (g)', 1)
			.add('Mithril platelegs (g)', 1)
			.add('Mithril kiteshield (g)', 1),
		outputItems: new Bank().add('Mithril gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack mithril gold-trimmed set (sk)',
		inputItems: new Bank().add('Mithril gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Mithril full helm (g)', 1)
			.add('Mithril platebody (g)', 1)
			.add('Mithril plateskirt (g)', 1)
			.add('Mithril kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Mithril gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Mithril full helm (g)', 1)
			.add('Mithril platebody (g)', 1)
			.add('Mithril plateskirt (g)', 1)
			.add('Mithril kiteshield (g)', 1),
		outputItems: new Bank().add('Mithril gold-trimmed set (sk)', 1)
	},
	// adamant
	{
		name: 'Unpack adamant set (lg)',
		inputItems: new Bank().add('Adamant set (lg)', 1),
		outputItems: new Bank()
			.add('Adamant full helm', 1)
			.add('Adamant platebody', 1)
			.add('Adamant platelegs', 1)
			.add('Adamant kiteshield', 1),
		noCl: true
	},
	{
		name: 'Adamant set (lg)',
		inputItems: new Bank()
			.add('Adamant full helm', 1)
			.add('Adamant platebody', 1)
			.add('Adamant platelegs', 1)
			.add('Adamant kiteshield', 1),
		outputItems: new Bank().add('Adamant set (lg)', 1)
	},
	{
		name: 'Unpack adamant set (sk)',
		inputItems: new Bank().add('Adamant set (sk)', 1),
		outputItems: new Bank()
			.add('Adamant full helm', 1)
			.add('Adamant platebody', 1)
			.add('Adamant plateskirt', 1)
			.add('Adamant kiteshield', 1),
		noCl: true
	},
	{
		name: 'Adamant set (sk)',
		inputItems: new Bank()
			.add('Adamant full helm', 1)
			.add('Adamant platebody', 1)
			.add('Adamant plateskirt', 1)
			.add('Adamant kiteshield', 1),
		outputItems: new Bank().add('Adamant set (sk)', 1)
	},
	{
		name: 'Unpack adamant trimmed set (lg)',
		inputItems: new Bank().add('Adamant trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Adamant full helm (t)', 1)
			.add('Adamant platebody (t)', 1)
			.add('Adamant platelegs (t)', 1)
			.add('Adamant kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Adamant trimmed set (lg)',
		inputItems: new Bank()
			.add('Adamant full helm (t)', 1)
			.add('Adamant platebody (t)', 1)
			.add('Adamant platelegs (t)', 1)
			.add('Adamant kiteshield (t)', 1),
		outputItems: new Bank().add('Adamant trimmed set (lg)', 1)
	},
	{
		name: 'Unpack adamant trimmed set (sk)',
		inputItems: new Bank().add('Adamant trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Adamant full helm (t)', 1)
			.add('Adamant platebody (t)', 1)
			.add('Adamant plateskirt (t)', 1)
			.add('Adamant kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Adamant trimmed set (sk)',
		inputItems: new Bank()
			.add('Adamant full helm (t)', 1)
			.add('Adamant platebody (t)', 1)
			.add('Adamant plateskirt (t)', 1)
			.add('Adamant kiteshield (t)', 1),
		outputItems: new Bank().add('Adamant trimmed set (sk)', 1)
	},
	{
		name: 'Unpack adamant gold-trimmed set (lg)',
		inputItems: new Bank().add('Adamant gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Adamant full helm (g)', 1)
			.add('Adamant platebody (g)', 1)
			.add('Adamant platelegs (g)', 1)
			.add('Adamant kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Adamant gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Adamant full helm (g)', 1)
			.add('Adamant platebody (g)', 1)
			.add('Adamant platelegs (g)', 1)
			.add('Adamant kiteshield (g)', 1),
		outputItems: new Bank().add('Adamant gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack adamant gold-trimmed set (sk)',
		inputItems: new Bank().add('Adamant gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Adamant full helm (g)', 1)
			.add('Adamant platebody (g)', 1)
			.add('Adamant plateskirt (g)', 1)
			.add('Adamant kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Adamant gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Adamant full helm (g)', 1)
			.add('Adamant platebody (g)', 1)
			.add('Adamant plateskirt (g)', 1)
			.add('Adamant kiteshield (g)', 1),
		outputItems: new Bank().add('Adamant gold-trimmed set (sk)', 1)
	},
	// rune
	{
		name: 'Unpack rune armour set (lg)',
		inputItems: new Bank().add('Rune armour set (lg)', 1),
		outputItems: new Bank()
			.add('Rune full helm', 1)
			.add('Rune platebody', 1)
			.add('Rune platelegs', 1)
			.add('Rune kiteshield', 1),
		noCl: true
	},
	{
		name: 'Rune armour set (lg)',
		inputItems: new Bank()
			.add('Rune full helm', 1)
			.add('Rune platebody', 1)
			.add('Rune platelegs', 1)
			.add('Rune kiteshield', 1),
		outputItems: new Bank().add('Rune armour set (lg)', 1)
	},
	{
		name: 'Unpack rune armour set (sk)',
		inputItems: new Bank().add('Rune armour set (sk)', 1),
		outputItems: new Bank()
			.add('Rune full helm', 1)
			.add('Rune platebody', 1)
			.add('Rune plateskirt', 1)
			.add('Rune kiteshield', 1),
		noCl: true
	},
	{
		name: 'Rune armour set (sk)',
		inputItems: new Bank()
			.add('Rune full helm', 1)
			.add('Rune platebody', 1)
			.add('Rune plateskirt', 1)
			.add('Rune kiteshield', 1),
		outputItems: new Bank().add('Rune armour set (sk)', 1)
	},
	{
		name: 'Unpack rune trimmed set (lg)',
		inputItems: new Bank().add('Rune trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Rune full helm (t)', 1)
			.add('Rune platebody (t)', 1)
			.add('Rune platelegs (t)', 1)
			.add('Rune kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Rune trimmed set (lg)',
		inputItems: new Bank()
			.add('Rune full helm (t)', 1)
			.add('Rune platebody (t)', 1)
			.add('Rune platelegs (t)', 1)
			.add('Rune kiteshield (t)', 1),
		outputItems: new Bank().add('Rune trimmed set (lg)', 1)
	},
	{
		name: 'Unpack rune trimmed set (sk)',
		inputItems: new Bank().add('Rune trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Rune full helm (t)', 1)
			.add('Rune platebody (t)', 1)
			.add('Rune plateskirt (t)', 1)
			.add('Rune kiteshield (t)', 1),
		noCl: true
	},
	{
		name: 'Rune trimmed set (sk)',
		inputItems: new Bank()
			.add('Rune full helm (t)', 1)
			.add('Rune platebody (t)', 1)
			.add('Rune plateskirt (t)', 1)
			.add('Rune kiteshield (t)', 1),
		outputItems: new Bank().add('Rune trimmed set (sk)', 1)
	},
	{
		name: 'Unpack rune gold-trimmed set (lg)',
		inputItems: new Bank().add('Rune gold-trimmed set (lg)', 1),
		outputItems: new Bank()
			.add('Rune full helm (g)', 1)
			.add('Rune platebody (g)', 1)
			.add('Rune platelegs (g)', 1)
			.add('Rune kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Rune gold-trimmed set (lg)',
		inputItems: new Bank()
			.add('Rune full helm (g)', 1)
			.add('Rune platebody (g)', 1)
			.add('Rune platelegs (g)', 1)
			.add('Rune kiteshield (g)', 1),
		outputItems: new Bank().add('Rune gold-trimmed set (lg)', 1)
	},
	{
		name: 'Unpack rune gold-trimmed set (sk)',
		inputItems: new Bank().add('Rune gold-trimmed set (sk)', 1),
		outputItems: new Bank()
			.add('Rune full helm (g)', 1)
			.add('Rune platebody (g)', 1)
			.add('Rune plateskirt (g)', 1)
			.add('Rune kiteshield (g)', 1),
		noCl: true
	},
	{
		name: 'Rune gold-trimmed set (sk)',
		inputItems: new Bank()
			.add('Rune full helm (g)', 1)
			.add('Rune platebody (g)', 1)
			.add('Rune plateskirt (g)', 1)
			.add('Rune kiteshield (g)', 1),
		outputItems: new Bank().add('Rune gold-trimmed set (sk)', 1)
	},
	{
		name: 'Unpack gilded armour set (lg)',
		inputItems: new Bank().add('Gilded armour set (lg)', 1),
		outputItems: new Bank()
			.add('Gilded full helm', 1)
			.add('Gilded platebody', 1)
			.add('Gilded platelegs', 1)
			.add('Gilded kiteshield', 1),
		noCl: true
	},
	{
		name: 'Gilded armour set (lg)',
		inputItems: new Bank()
			.add('Gilded full helm', 1)
			.add('Gilded platebody', 1)
			.add('Gilded platelegs', 1)
			.add('Gilded kiteshield', 1),
		outputItems: new Bank().add('Gilded armour set (lg)', 1)
	},
	{
		name: 'Unpack gilded armour set (sk)',
		inputItems: new Bank().add('Gilded armour set (sk)', 1),
		outputItems: new Bank()
			.add('Gilded full helm', 1)
			.add('Gilded platebody', 1)
			.add('Gilded plateskirt', 1)
			.add('Gilded kiteshield', 1),
		noCl: true
	},
	{
		name: 'Gilded armour set (sk)',
		inputItems: new Bank()
			.add('Gilded full helm', 1)
			.add('Gilded platebody', 1)
			.add('Gilded plateskirt', 1)
			.add('Gilded kiteshield', 1),
		outputItems: new Bank().add('Gilded armour set (sk)', 1)
	},
	// rune god armours
	{
		name: 'Unpack guthix armour set (lg)',
		inputItems: new Bank().add('Guthix armour set (lg)', 1),
		outputItems: new Bank()
			.add('Guthix full helm', 1)
			.add('Guthix platebody', 1)
			.add('Guthix platelegs', 1)
			.add('Guthix kiteshield', 1),
		noCl: true
	},
	{
		name: 'Guthix armour set (lg)',
		inputItems: new Bank()
			.add('Guthix full helm', 1)
			.add('Guthix platebody', 1)
			.add('Guthix platelegs', 1)
			.add('Guthix kiteshield', 1),
		outputItems: new Bank().add('Guthix armour set (lg)', 1)
	},
	{
		name: 'Unpack guthix armour set (sk)',
		inputItems: new Bank().add('Guthix armour set (sk)', 1),
		outputItems: new Bank()
			.add('Guthix full helm', 1)
			.add('Guthix platebody', 1)
			.add('Guthix plateskirt', 1)
			.add('Guthix kiteshield', 1),
		noCl: true
	},
	{
		name: 'Guthix armour set (sk)',
		inputItems: new Bank()
			.add('Guthix full helm', 1)
			.add('Guthix platebody', 1)
			.add('Guthix plateskirt', 1)
			.add('Guthix kiteshield', 1),
		outputItems: new Bank().add('Guthix armour set (sk)', 1)
	},
	{
		name: 'Unpack saradomin armour set (lg)',
		inputItems: new Bank().add('Saradomin armour set (lg)', 1),
		outputItems: new Bank()
			.add('Saradomin full helm', 1)
			.add('Saradomin platebody', 1)
			.add('Saradomin platelegs', 1)
			.add('Saradomin kiteshield', 1),
		noCl: true
	},
	{
		name: 'Saradomin armour set (lg)',
		inputItems: new Bank()
			.add('Saradomin full helm', 1)
			.add('Saradomin platebody', 1)
			.add('Saradomin platelegs', 1)
			.add('Saradomin kiteshield', 1),
		outputItems: new Bank().add('Saradomin armour set (lg)', 1)
	},
	{
		name: 'Unpack saradomin armour set (sk)',
		inputItems: new Bank().add('Saradomin armour set (sk)', 1),
		outputItems: new Bank()
			.add('Saradomin full helm', 1)
			.add('Saradomin platebody', 1)
			.add('Saradomin plateskirt', 1)
			.add('Saradomin kiteshield', 1),
		noCl: true
	},
	{
		name: 'Saradomin armour set (sk)',
		inputItems: new Bank()
			.add('Saradomin full helm', 1)
			.add('Saradomin platebody', 1)
			.add('Saradomin plateskirt', 1)
			.add('Saradomin kiteshield', 1),
		outputItems: new Bank().add('Saradomin armour set (sk)', 1)
	},
	{
		name: 'Unpack zamorak armour set (lg)',
		inputItems: new Bank().add('Zamorak armour set (lg)', 1),
		outputItems: new Bank()
			.add('Zamorak full helm', 1)
			.add('Zamorak platebody', 1)
			.add('Zamorak platelegs', 1)
			.add('Zamorak kiteshield', 1),
		noCl: true
	},
	{
		name: 'Zamorak armour set (lg)',
		inputItems: new Bank()
			.add('Zamorak full helm', 1)
			.add('Zamorak platebody', 1)
			.add('Zamorak platelegs', 1)
			.add('Zamorak kiteshield', 1),
		outputItems: new Bank().add('Zamorak armour set (lg)', 1)
	},
	{
		name: 'Unpack zamorak armour set (sk)',
		inputItems: new Bank().add('Zamorak armour set (sk)', 1),
		outputItems: new Bank()
			.add('Zamorak full helm', 1)
			.add('Zamorak platebody', 1)
			.add('Zamorak plateskirt', 1)
			.add('Zamorak kiteshield', 1),
		noCl: true
	},
	{
		name: 'Zamorak armour set (sk)',
		inputItems: new Bank()
			.add('Zamorak full helm', 1)
			.add('Zamorak platebody', 1)
			.add('Zamorak plateskirt', 1)
			.add('Zamorak kiteshield', 1),
		outputItems: new Bank().add('Zamorak armour set (sk)', 1)
	},
	{
		name: 'Unpack ancient rune armour set (lg)',
		inputItems: new Bank().add('Ancient rune armour set (lg)', 1),
		outputItems: new Bank()
			.add('Ancient full helm', 1)
			.add('Ancient platebody', 1)
			.add('Ancient platelegs', 1)
			.add('Ancient kiteshield', 1),
		noCl: true
	},
	{
		name: 'Ancient rune armour set (lg)',
		inputItems: new Bank()
			.add('Ancient full helm', 1)
			.add('Ancient platebody', 1)
			.add('Ancient platelegs', 1)
			.add('Ancient kiteshield', 1),
		outputItems: new Bank().add('Ancient rune armour set (lg)', 1)
	},
	{
		name: 'Unpack ancient rune armour set (sk)',
		inputItems: new Bank().add('Ancient rune armour set (sk)', 1),
		outputItems: new Bank()
			.add('Ancient full helm', 1)
			.add('Ancient platebody', 1)
			.add('Ancient plateskirt', 1)
			.add('Ancient kiteshield', 1),
		noCl: true
	},
	{
		name: 'Ancient rune armour set (sk)',
		inputItems: new Bank()
			.add('Ancient full helm', 1)
			.add('Ancient platebody', 1)
			.add('Ancient plateskirt', 1)
			.add('Ancient kiteshield', 1),
		outputItems: new Bank().add('Ancient rune armour set (sk)', 1)
	},
	{
		name: 'Unpack armadyl rune armour set (lg)',
		inputItems: new Bank().add('Armadyl rune armour set (lg)', 1),
		outputItems: new Bank()
			.add('Armadyl full helm', 1)
			.add('Armadyl platebody', 1)
			.add('Armadyl platelegs', 1)
			.add('Armadyl kiteshield', 1),
		noCl: true
	},
	{
		name: 'Armadyl rune armour set (lg)',
		inputItems: new Bank()
			.add('Armadyl full helm', 1)
			.add('Armadyl platebody', 1)
			.add('Armadyl platelegs', 1)
			.add('Armadyl kiteshield', 1),
		outputItems: new Bank().add('Armadyl rune armour set (lg)', 1)
	},
	{
		name: 'Unpack armadyl rune armour set (sk)',
		inputItems: new Bank().add('Armadyl rune armour set (sk)', 1),
		outputItems: new Bank()
			.add('Armadyl full helm', 1)
			.add('Armadyl platebody', 1)
			.add('Armadyl plateskirt', 1)
			.add('Armadyl kiteshield', 1),
		noCl: true
	},
	{
		name: 'Armadyl rune armour set (sk)',
		inputItems: new Bank()
			.add('Armadyl full helm', 1)
			.add('Armadyl platebody', 1)
			.add('Armadyl plateskirt', 1)
			.add('Armadyl kiteshield', 1),
		outputItems: new Bank().add('Armadyl rune armour set (sk)', 1)
	},
	{
		name: 'Unpack bandos rune armour set (lg)',
		inputItems: new Bank().add('Bandos rune armour set (lg)', 1),
		outputItems: new Bank()
			.add('Bandos full helm', 1)
			.add('Bandos platebody', 1)
			.add('Bandos platelegs', 1)
			.add('Bandos kiteshield', 1),
		noCl: true
	},
	{
		name: 'Bandos rune armour set (lg)',
		inputItems: new Bank()
			.add('Bandos full helm', 1)
			.add('Bandos platebody', 1)
			.add('Bandos platelegs', 1)
			.add('Bandos kiteshield', 1),
		outputItems: new Bank().add('Bandos rune armour set (lg)', 1)
	},
	{
		name: 'Unpack bandos rune armour set (sk)',
		inputItems: new Bank().add('Bandos rune armour set (sk)', 1),
		outputItems: new Bank()
			.add('Bandos full helm', 1)
			.add('Bandos platebody', 1)
			.add('Bandos plateskirt', 1)
			.add('Bandos kiteshield', 1),
		noCl: true
	},
	{
		name: 'Bandos rune armour set (sk)',
		inputItems: new Bank()
			.add('Bandos full helm', 1)
			.add('Bandos platebody', 1)
			.add('Bandos plateskirt', 1)
			.add('Bandos kiteshield', 1),
		outputItems: new Bank().add('Bandos rune armour set (sk)', 1)
	},
	// dragon
	{
		name: 'Unpack dragon armour set (lg)',
		inputItems: new Bank().add('Dragon armour set (lg)', 1),
		outputItems: new Bank()
			.add('Dragon full helm', 1)
			.add('Dragon platebody', 1)
			.add('Dragon platelegs', 1)
			.add('Dragon kiteshield', 1),
		noCl: true
	},
	{
		name: 'Dragon armour set (lg)',
		inputItems: new Bank()
			.add('Dragon full helm', 1)
			.add('Dragon platebody', 1)
			.add('Dragon platelegs', 1)
			.add('Dragon kiteshield', 1),
		outputItems: new Bank().add('Dragon armour set (lg)', 1)
	},
	{
		name: 'Unpack dragon armour set (sk)',
		inputItems: new Bank().add('Dragon armour set (sk)', 1),
		outputItems: new Bank()
			.add('Dragon full helm', 1)
			.add('Dragon platebody', 1)
			.add('Dragon plateskirt', 1)
			.add('Dragon kiteshield', 1),
		noCl: true
	},
	{
		name: 'Dragon armour set (sk)',
		inputItems: new Bank()
			.add('Dragon full helm', 1)
			.add('Dragon platebody', 1)
			.add('Dragon plateskirt', 1)
			.add('Dragon kiteshield', 1),
		outputItems: new Bank().add('Dragon armour set (sk)', 1)
	},
	// barrows
	{
		name: "Unpack verac's armour set",
		inputItems: new Bank().add("Verac's armour set"),
		outputItems: new Bank()
			.add("Verac's helm")
			.add("Verac's brassard")
			.add("Verac's plateskirt")
			.add("Verac's flail"),
		noCl: true
	},
	{
		name: "Verac's armour set",
		inputItems: new Bank()
			.add("Verac's helm")
			.add("Verac's brassard")
			.add("Verac's plateskirt")
			.add("Verac's flail"),
		outputItems: new Bank().add("Verac's armour set")
	},
	{
		name: "Unpack dharok's armour set",
		inputItems: new Bank().add("Dharok's armour set"),
		outputItems: new Bank()
			.add("Dharok's helm")
			.add("Dharok's platebody")
			.add("Dharok's platelegs")
			.add("Dharok's greataxe"),
		noCl: true
	},
	{
		name: "Dharok's armour set",
		inputItems: new Bank()
			.add("Dharok's helm")
			.add("Dharok's platebody")
			.add("Dharok's platelegs")
			.add("Dharok's greataxe"),
		outputItems: new Bank().add("Dharok's armour set")
	},
	{
		name: "Unpack guthan's armour set",
		inputItems: new Bank().add("Guthan's armour set"),
		outputItems: new Bank()
			.add("Guthan's helm")
			.add("Guthan's platebody")
			.add("Guthan's chainskirt")
			.add("Guthan's warspear"),
		noCl: true
	},
	{
		name: "Guthan's armour set",
		inputItems: new Bank()
			.add("Guthan's helm")
			.add("Guthan's platebody")
			.add("Guthan's chainskirt")
			.add("Guthan's warspear"),
		outputItems: new Bank().add("Guthan's armour set")
	},
	{
		name: "Unpack ahrim's armour set",
		inputItems: new Bank().add("Ahrim's armour set"),
		outputItems: new Bank()
			.add("Ahrim's hood")
			.add("Ahrim's robetop")
			.add("Ahrim's robeskirt")
			.add("Ahrim's staff"),
		noCl: true
	},
	{
		name: "Ahrim's armour set",
		inputItems: new Bank().add("Ahrim's hood").add("Ahrim's robetop").add("Ahrim's robeskirt").add("Ahrim's staff"),
		outputItems: new Bank().add("Ahrim's armour set")
	},
	{
		name: "Unpack torag's armour set",
		inputItems: new Bank().add("Torag's armour set"),
		outputItems: new Bank()
			.add("Torag's helm")
			.add("Torag's platebody")
			.add("Torag's platelegs")
			.add("Torag's hammers"),
		noCl: true
	},
	{
		name: "Torag's armour set",
		inputItems: new Bank()
			.add("Torag's helm")
			.add("Torag's platebody")
			.add("Torag's platelegs")
			.add("Torag's hammers"),
		outputItems: new Bank().add("Torag's armour set")
	},
	{
		name: "Unpack karil's armour set",
		inputItems: new Bank().add("Karil's armour set"),
		outputItems: new Bank()
			.add("Karil's coif")
			.add("Karil's leathertop")
			.add("Karil's leatherskirt")
			.add("Karil's crossbow"),
		noCl: true
	},
	{
		name: "Karil's armour set",
		inputItems: new Bank()
			.add("Karil's coif")
			.add("Karil's leathertop")
			.add("Karil's leatherskirt")
			.add("Karil's crossbow"),
		outputItems: new Bank().add("Karil's armour set")
	},
	// inquisitor
	{
		name: "Unpack inquisitor's armour set",
		inputItems: new Bank().add("Inquisitor's armour set"),
		outputItems: new Bank()
			.add("Inquisitor's great helm")
			.add("Inquisitor's hauberk")
			.add("Inquisitor's plateskirt"),
		noCl: true
	},
	{
		name: "Inquisitor's armour set",
		inputItems: new Bank()
			.add("Inquisitor's great helm")
			.add("Inquisitor's hauberk")
			.add("Inquisitor's plateskirt"),
		outputItems: new Bank().add("Inquisitor's armour set")
	},
	// justiciar
	{
		name: 'Unpack justiciar armour set',
		inputItems: new Bank().add('Justiciar armour set', 1),
		outputItems: new Bank()
			.add('Justiciar faceguard', 1)
			.add('Justiciar chestguard', 1)
			.add('Justiciar legguards', 1),
		noCl: true
	},
	{
		name: 'Justiciar armour set',
		inputItems: new Bank()
			.add('Justiciar faceguard', 1)
			.add('Justiciar chestguard', 1)
			.add('Justiciar legguards', 1),
		outputItems: new Bank().add('Justiciar armour set', 1)
	},
	// obsidian
	{
		name: 'Unpack obsidian armour set',
		inputItems: new Bank().add('Obsidian armour set', 1),
		outputItems: new Bank().add('Obsidian helmet', 1).add('Obsidian platebody', 1).add('Obsidian platelegs', 1),
		noCl: true
	},
	{
		name: 'Obsidian armour set',
		inputItems: new Bank().add('Obsidian helmet', 1).add('Obsidian platebody', 1).add('Obsidian platelegs', 1),
		outputItems: new Bank().add('Obsidian armour set', 1)
	},
	// dragonstone
	{
		name: 'Unpack dragonstone armour set',
		inputItems: new Bank().add('Dragonstone armour set', 1),
		outputItems: new Bank()
			.add('Dragonstone full helm', 1)
			.add('Dragonstone platebody', 1)
			.add('Dragonstone platelegs', 1)
			.add('Dragonstone gauntlets', 1)
			.add('Dragonstone boots', 1),
		noCl: true
	},
	{
		name: 'Dragonstone armour set',
		inputItems: new Bank()
			.add('Dragonstone full helm', 1)
			.add('Dragonstone platebody', 1)
			.add('Dragonstone platelegs', 1)
			.add('Dragonstone gauntlets', 1)
			.add('Dragonstone boots', 1),
		outputItems: new Bank().add('Dragonstone armour set', 1)
	},
	// temple knight
	{
		name: 'Unpack initiate harness m',
		inputItems: new Bank().add('Initiate harness m', 1),
		outputItems: new Bank().add('Initiate sallet', 1).add('Initiate hauberk', 1).add('Initiate cuisse', 1),
		noCl: true
	},
	{
		name: 'Initiate harness m',
		inputItems: new Bank().add('Initiate sallet', 1).add('Initiate hauberk', 1).add('Initiate cuisse', 1),
		outputItems: new Bank().add('Initiate harness m', 1)
	},
	{
		name: 'Unpack proselyte harness m',
		inputItems: new Bank().add('Proselyte harness m', 1),
		outputItems: new Bank().add('Proselyte sallet', 1).add('Proselyte hauberk', 1).add('Proselyte cuisse', 1),
		noCl: true
	},
	{
		name: 'Proselyte harness m',
		inputItems: new Bank().add('Proselyte sallet', 1).add('Proselyte hauberk', 1).add('Proselyte cuisse', 1),
		outputItems: new Bank().add('Proselyte harness m', 1)
	},
	{
		name: 'Unpack proselyte harness f',
		inputItems: new Bank().add('Proselyte harness f', 1),
		outputItems: new Bank().add('Proselyte sallet', 1).add('Proselyte hauberk', 1).add('Proselyte tasset', 1),
		noCl: true
	},
	{
		name: 'Proselyte harness f',
		inputItems: new Bank().add('Proselyte sallet', 1).add('Proselyte hauberk', 1).add('Proselyte tasset', 1),
		outputItems: new Bank().add('Proselyte harness f', 1)
	},
	// range sets
	// dragonhide
	{
		name: 'Unpack green dragonhide set',
		inputItems: new Bank().add('Green dragonhide set', 1),
		outputItems: new Bank().add("Green d'hide body").add("Green d'hide chaps").add("Green d'hide vambraces"),
		noCl: true
	},
	{
		name: 'Green dragonhide set',
		inputItems: new Bank().add("Green d'hide body").add("Green d'hide chaps").add("Green d'hide vambraces"),
		outputItems: new Bank().add('Green dragonhide set', 1)
	},
	{
		name: 'Unpack blue dragonhide set',
		inputItems: new Bank().add('Blue dragonhide set', 1),
		outputItems: new Bank().add("Blue d'hide body").add("Blue d'hide chaps").add("Blue d'hide vambraces"),
		noCl: true
	},
	{
		name: 'Blue dragonhide set',
		inputItems: new Bank().add("Blue d'hide body").add("Blue d'hide chaps").add("Blue d'hide vambraces"),
		outputItems: new Bank().add('Blue dragonhide set', 1)
	},
	{
		name: 'Unpack red dragonhide set',
		inputItems: new Bank().add('Red dragonhide set', 1),
		outputItems: new Bank().add("Red d'hide body").add("Red d'hide chaps").add("Red d'hide vambraces"),
		noCl: true
	},
	{
		name: 'Red dragonhide set',
		inputItems: new Bank().add("Red d'hide body").add("Red d'hide chaps").add("Red d'hide vambraces"),
		outputItems: new Bank().add('Red dragonhide set', 1)
	},
	{
		name: 'Unpack black dragonhide set',
		inputItems: new Bank().add('Black dragonhide set', 1),
		outputItems: new Bank().add("Black d'hide body").add("Black d'hide chaps").add("Black d'hide vambraces"),
		noCl: true
	},
	{
		name: 'Black dragonhide set',
		inputItems: new Bank().add("Black d'hide body").add("Black d'hide chaps").add("Black d'hide vambraces"),
		outputItems: new Bank().add('Black dragonhide set', 1)
	},
	{
		name: 'Unpack gilded dragonhide set',
		inputItems: new Bank().add('Gilded dragonhide set', 1),
		outputItems: new Bank().add("Gilded d'hide body").add("Gilded d'hide chaps").add("Gilded d'hide vambraces"),
		noCl: true
	},
	{
		name: 'Gilded dragonhide set',
		inputItems: new Bank().add("Gilded d'hide body").add("Gilded d'hide chaps").add("Gilded d'hide vambraces"),
		outputItems: new Bank().add('Gilded dragonhide set', 1)
	},
	// blessed dragonhide
	{
		name: 'Unpack guthix dragonhide set',
		inputItems: new Bank().add('Guthix dragonhide set', 1),
		outputItems: new Bank().add('Guthix coif', 1).add('Guthix chaps', 1).add('Guthix bracers', 1),
		noCl: true
	},
	{
		name: 'Guthix dragonhide set',
		inputItems: new Bank().add('Guthix coif', 1).add('Guthix chaps', 1).add('Guthix bracers', 1),
		outputItems: new Bank().add('Guthix dragonhide set', 1)
	},
	{
		name: 'Unpack saradomin dragonhide set',
		inputItems: new Bank().add('Saradomin dragonhide set', 1),
		outputItems: new Bank()
			.add('Saradomin coif', 1)
			.add("Saradomin d'hide body")
			.add('Saradomin chaps', 1)
			.add('Saradomin bracers', 1),

		noCl: true
	},
	{
		name: 'Saradomin dragonhide set',
		inputItems: new Bank().add('Saradomin coif', 1).add('Saradomin chaps', 1).add('Saradomin bracers', 1),
		outputItems: new Bank().add('Saradomin dragonhide set', 1)
	},
	{
		name: 'Unpack zamorak dragonhide set',
		inputItems: new Bank()
			.add('Saradomin coif', 1)
			.add("Saradomin d'hide body")
			.add('Saradomin chaps', 1)
			.add('Saradomin bracers', 1),
		outputItems: new Bank().add('Saradomin dragonhide set', 1)
	},
	{
		name: 'Zamorak dragonhide set',
		inputItems: new Bank().add('Zamorak coif', 1).add('Zamorak chaps', 1).add('Zamorak bracers', 1),
		outputItems: new Bank().add('Zamorak dragonhide set', 1)
	},
	{
		name: 'Unpack ancient dragonhide set',
		inputItems: new Bank()
			.add('Zamorak coif', 1)
			.add("Zamorak d'hide body")
			.add('Zamorak chaps', 1)
			.add('Zamorak bracers', 1),
		outputItems: new Bank().add('Zamorak dragonhide set', 1)
	},
	{
		name: 'Ancient dragonhide set',
		inputItems: new Bank().add('Ancient coif', 1).add('Ancient chaps', 1).add('Ancient bracers', 1),
		outputItems: new Bank().add('Ancient dragonhide set', 1)
	},
	{
		name: 'Unpack armadyl dragonhide set',
		inputItems: new Bank().add('Armadyl dragonhide set', 1),
		outputItems: new Bank()
			.add('Armadyl coif', 1)
			.add("Armadyl d'hide body")
			.add('Armadyl chaps', 1)
			.add('Armadyl bracers', 1),
		noCl: true
	},
	{
		name: 'Armadyl dragonhide set',
		inputItems: new Bank().add('Armadyl coif', 1).add('Armadyl chaps', 1).add('Armadyl bracers', 1),
		outputItems: new Bank().add('Armadyl dragonhide set', 1)
	},
	{
		name: 'Unpack bandos dragonhide set',
		inputItems: new Bank().add('Bandos dragonhide set', 1),
		outputItems: new Bank()
			.add('Bandos coif', 1)
			.add("Bandos d'hide body")
			.add('Bandos chaps', 1)
			.add('Bandos bracers', 1),
		noCl: true
	},
	{
		name: 'Bandos dragonhide set',
		inputItems: new Bank()
			.add('Bandos coif', 1)
			.add("Bandos d'hide body")
			.add('Bandos chaps', 1)
			.add('Bandos bracers', 1),
		outputItems: new Bank().add('Bandos dragonhide set', 1)
	},
	// mage sets
	{
		name: 'Unpack mystic set (blue)',
		inputItems: new Bank().add('Mystic set (blue)', 1),
		outputItems: new Bank()
			.add('Mystic hat', 1)
			.add('Mystic robe top', 1)
			.add('Mystic robe bottom', 1)
			.add('Mystic gloves', 1)
			.add('Mystic boots', 1),
		noCl: true
	},
	{
		name: 'Mystic set (blue)',
		inputItems: new Bank()
			.add('Mystic hat', 1)
			.add('Mystic robe top', 1)
			.add('Mystic robe bottom', 1)
			.add('Mystic gloves', 1)
			.add('Mystic boots', 1),
		outputItems: new Bank().add('Mystic set (blue)', 1)
	},
	{
		name: 'Unpack mystic set (dark)',
		inputItems: new Bank().add('Mystic set (dark)', 1),
		outputItems: new Bank()
			.add('Mystic hat (dark)', 1)
			.add('Mystic robe top (dark)', 1)
			.add('Mystic robe bottom (dark)', 1)
			.add('Mystic gloves (dark)', 1)
			.add('Mystic boots (dark)', 1),
		noCl: true
	},
	{
		name: 'Mystic set (dark)',
		inputItems: new Bank()
			.add('Mystic hat (dark)', 1)
			.add('Mystic robe top (dark)', 1)
			.add('Mystic robe bottom (dark)', 1)
			.add('Mystic gloves (dark)', 1)
			.add('Mystic boots (dark)', 1),
		outputItems: new Bank().add('Mystic set (dark)', 1)
	},
	{
		name: 'Unpack mystic set (light)',
		inputItems: new Bank().add('Mystic set (light)', 1),
		outputItems: new Bank()
			.add('Mystic hat (light)', 1)
			.add('Mystic robe top (light)', 1)
			.add('Mystic robe bottom (light)', 1)
			.add('Mystic gloves (light)', 1)
			.add('Mystic boots (light)', 1),
		noCl: true
	},
	{
		name: 'Mystic set (light)',
		inputItems: new Bank()
			.add('Mystic hat (light)', 1)
			.add('Mystic robe top (light)', 1)
			.add('Mystic robe bottom (light)', 1)
			.add('Mystic gloves (light)', 1)
			.add('Mystic boots (light)', 1),
		outputItems: new Bank().add('Mystic set (light)', 1)
	},
	{
		name: 'Unpack mystic set (dusk)',
		inputItems: new Bank().add('Mystic set (dusk)', 1),
		outputItems: new Bank()
			.add('Mystic hat (dusk)', 1)
			.add('Mystic robe top (dusk)', 1)
			.add('Mystic robe bottom (dusk)', 1)
			.add('Mystic gloves (dusk)', 1)
			.add('Mystic boots (dusk)', 1),
		noCl: true
	},
	{
		name: 'Mystic set (dusk)',
		inputItems: new Bank()
			.add('Mystic hat (dusk)', 1)
			.add('Mystic robe top (dusk)', 1)
			.add('Mystic robe bottom (dusk)', 1)
			.add('Mystic gloves (dusk)', 1)
			.add('Mystic boots (dusk)', 1),
		outputItems: new Bank().add('Mystic set (dusk)', 1)
	},
	// {
	// 	name: "Unpack dagon'hai robes set",
	// 	inputItems: new Bank()
	// 		.add("Dagon'hai robes set")
	// 	},
	// 	outputItems: new Bank()
	// 		.add("Dagon'hai hat")
	// 		.add("Dagon'hai robe top")
	// 		.add("Dagon'hai robe bottom")
	// 	},
	// 	noCl: true
	// },
	// {
	// 	name: "Dagon'hai robes set",
	// 	inputItems: new Bank()
	// 		.add("Dagon'hai hat")
	// 		.add("Dagon'hai robe top")
	// 		.add("Dagon'hai robe bottom")
	// 	},
	// 	outputItems: new Bank()
	// 		.add("Dagon'hai robes set")
	// 	}
	// },
	{
		name: 'Unpack ancestral robes set',
		inputItems: new Bank().add('Ancestral robes set', 1),
		outputItems: new Bank().add('Ancestral hat', 1).add('Ancestral robe top', 1).add('Ancestral robe bottom', 1),
		noCl: true
	},
	{
		name: 'Ancestral robes set',
		inputItems: new Bank().add('Ancestral hat', 1).add('Ancestral robe top', 1).add('Ancestral robe bottom', 1),
		outputItems: new Bank().add('Ancestral robes set', 1)
	},
	// god books
	{
		name: 'Unpack book of balance page set',
		inputItems: new Bank().add('Book of balance page set', 1),
		outputItems: new Bank()
			.add('Guthix page 1', 1)
			.add('Guthix page 2', 1)
			.add('Guthix page 3', 1)
			.add('Guthix page 4', 1),
		noCl: true
	},
	{
		name: 'Book of balance page set',
		inputItems: new Bank()
			.add('Guthix page 1', 1)
			.add('Guthix page 2', 1)
			.add('Guthix page 3', 1)
			.add('Guthix page 4', 1),
		outputItems: new Bank().add('Book of balance page set', 1)
	},
	{
		name: 'Unpack holy book page set',
		inputItems: new Bank().add('Holy book page set', 1),
		outputItems: new Bank()
			.add('Saradomin page 1', 1)
			.add('Saradomin page 2', 1)
			.add('Saradomin page 3', 1)
			.add('Saradomin page 4', 1),
		noCl: true
	},
	{
		name: 'Holy book page set',
		inputItems: new Bank()
			.add('Saradomin page 1', 1)
			.add('Saradomin page 2', 1)
			.add('Saradomin page 3', 1)
			.add('Saradomin page 4', 1),
		outputItems: new Bank().add('Holy book page set', 1)
	},
	{
		name: 'Unpack unholy book page set',
		inputItems: new Bank().add('Unholy book page set', 1),
		outputItems: new Bank()
			.add('Zamorak page 1', 1)
			.add('Zamorak page 2', 1)
			.add('Zamorak page 3', 1)
			.add('Zamorak page 4', 1),
		noCl: true
	},
	{
		name: 'Unholy book page set',
		inputItems: new Bank()
			.add('Zamorak page 1', 1)
			.add('Zamorak page 2', 1)
			.add('Zamorak page 3', 1)
			.add('Zamorak page 4', 1),
		outputItems: new Bank().add('Unholy book page set', 1)
	},
	{
		name: 'Unpack book of darkness page set',
		inputItems: new Bank().add('Book of darkness page set', 1),
		outputItems: new Bank()
			.add('Ancient page 1', 1)
			.add('Ancient page 2', 1)
			.add('Ancient page 3', 1)
			.add('Ancient page 4', 1),
		noCl: true
	},
	{
		name: 'Book of darkness page set',
		inputItems: new Bank()
			.add('Ancient page 1', 1)
			.add('Ancient page 2', 1)
			.add('Ancient page 3', 1)
			.add('Ancient page 4', 1),
		outputItems: new Bank().add('Book of darkness page set', 1)
	},
	{
		name: 'Unpack book of law page set',
		inputItems: new Bank().add('Book of law page set', 1),
		outputItems: new Bank()
			.add('Armadyl page 1', 1)
			.add('Armadyl page 2', 1)
			.add('Armadyl page 3', 1)
			.add('Armadyl page 4', 1),
		noCl: true
	},
	{
		name: 'Book of law page set',
		inputItems: new Bank()
			.add('Armadyl page 1', 1)
			.add('Armadyl page 2', 1)
			.add('Armadyl page 3', 1)
			.add('Armadyl page 4', 1),
		outputItems: new Bank().add('Book of law page set', 1)
	},
	{
		name: 'Unpack book of war page set',
		inputItems: new Bank().add('Book of war page set', 1),
		outputItems: new Bank()
			.add('Bandos page 1', 1)
			.add('Bandos page 2', 1)
			.add('Bandos page 3', 1)
			.add('Bandos page 4', 1),
		noCl: true
	},
	{
		name: 'Book of war page set',
		inputItems: new Bank()
			.add('Bandos page 1', 1)
			.add('Bandos page 2', 1)
			.add('Bandos page 3', 1)
			.add('Bandos page 4', 1),
		outputItems: new Bank().add('Book of war page set', 1)
	},
	// twisted relichunter
	// {
	// 	name: 'Unpack twisted relichunter (t1) armour set',
	// 	inputItems: new Bank().add('Twisted relichunter (t1) armour set', 1),
	// 	outputItems: new Bank().add('Twisted hat (t1)', 1).add('Twisted coat (t1)', 1).add('Twisted trousers (t1)', 1).add('Twisted boots (t1)', 1),
	// 	noCl: true
	// },
	// {
	// 	name: 'Twisted relichunter (t1) armour set',
	// 	inputItems: new Bank().add('Twisted hat (t1)', 1).add('Twisted coat (t1)', 1).add('Twisted trousers (t1)', 1).add('Twisted boots (t1)', 1),
	// 	outputItems: new Bank().add('Twisted relichunter (t1) armour set', 1)
	// },
	// {
	// 	name: 'Unpack twisted relichunter (t2) armour set',
	// 	inputItems: new Bank().add('Twisted relichunter (t2) armour set', 1),
	// 	outputItems: new Bank().add('Twisted hat (t2)', 1).add('Twisted coat (t2)', 1).add('Twisted trousers (t2)', 1).add('Twisted boots (t2)', 1),
	// 	noCl: true
	// },
	// {
	// 	name: 'Twisted relichunter (t2) armour set',
	// 	inputItems: new Bank().add('Twisted hat (t2)', 1).add('Twisted coat (t2)', 1).add('Twisted trousers (t2)', 1).add('Twisted boots (t2)', 1),
	// 	outputItems: new Bank().add('Twisted relichunter (t2) armour set', 1)
	// },
	// {
	// 	name: 'Unpack twisted relichunter (t3) armour set',
	// 	inputItems: new Bank().add('Twisted relichunter (t3) armour set', 1),
	// 	outputItems: new Bank().add('Twisted hat (t3)', 1).add('Twisted coat (t3)', 1).add('Twisted trousers (t3)', 1).add('Twisted boots (t3)', 1),
	// 	noCl: true
	// },
	// {
	// 	name: 'Twisted relichunter (t3) armour set',
	// 	inputItems: new Bank().add('Twisted hat (t3)', 1).add('Twisted coat (t3)', 1).add('Twisted trousers (t3)', 1).add('Twisted boots (t3)', 1),
	// 	outputItems: new Bank().add('Twisted relichunter (t3) armour set', 1)
	// },
	// holiday
	{
		name: 'Unpack partyhat set',
		inputItems: new Bank().add('Partyhat set', 1),
		outputItems: new Bank()
			.add('Red partyhat', 1)
			.add('Yellow partyhat', 1)
			.add('Green partyhat', 1)
			.add('Blue partyhat', 1)
			.add('Purple partyhat', 1)
			.add('White partyhat', 1),
		noCl: true
	},
	{
		name: 'Partyhat set',
		inputItems: new Bank()
			.add('Red partyhat', 1)
			.add('Yellow partyhat', 1)
			.add('Green partyhat', 1)
			.add('Blue partyhat', 1)
			.add('Purple partyhat', 1)
			.add('White partyhat', 1),
		outputItems: new Bank().add('Partyhat set', 1)
	},
	{
		name: 'Unpack halloween mask set',
		inputItems: new Bank().add('Halloween mask set', 1),
		outputItems: new Bank()
			.add('Red halloween mask', 1)
			.add('Green halloween mask', 1)
			.add('Blue halloween mask', 1),
		noCl: true
	},
	{
		name: 'Halloween mask set',
		inputItems: new Bank()
			.add('Red halloween mask', 1)
			.add('Green halloween mask', 1)
			.add('Blue halloween mask', 1),
		outputItems: new Bank().add('Halloween mask set', 1)
	},
	// misc
	{
		name: 'Unpack combat potion set',
		inputItems: new Bank().add('Combat potion set', 1),
		outputItems: new Bank().add('Attack potion(4)', 1).add('Strength potion(4)', 1).add('Defence potion(4)', 1),
		noCl: true
	},
	{
		name: 'Combat potion set',
		inputItems: new Bank().add('Attack potion(4)', 1).add('Strength potion(4)', 1).add('Defence potion(4)', 1),
		outputItems: new Bank().add('Combat potion set', 1)
	},
	{
		name: 'Unpack super potion set',
		inputItems: new Bank().add('Super potion set', 1),
		outputItems: new Bank().add('Super attack(4)', 1).add('Super strength(4)', 1).add('Super defence(4)', 1),
		noCl: true
	},
	{
		name: 'Super potion set',
		inputItems: new Bank().add('Super attack(4)', 1).add('Super strength(4)', 1).add('Super defence(4)', 1),
		outputItems: new Bank().add('Super potion set', 1)
	},
	{
		name: 'Unpack dwarf cannon set',
		inputItems: new Bank().add('Dwarf cannon set', 1),
		outputItems: new Bank()
			.add('Cannon barrels', 1)
			.add('Cannon base', 1)
			.add('Cannon furnace', 1)
			.add('Cannon stand', 1),
		noCl: true
	},
	{
		name: 'Dwarf cannon set',
		inputItems: new Bank()
			.add('Cannon barrels', 1)
			.add('Cannon base', 1)
			.add('Cannon furnace', 1)
			.add('Cannon stand', 1),
		outputItems: new Bank().add('Dwarf cannon set', 1)
	}
];

const armorSetsSrc: { unpacked: Bank; packed: Item }[] = [
	{
		unpacked: new Bank().add("Dagon'hai hat").add("Dagon'hai robe top").add("Dagon'hai robe bottom"),
		packed: getOSItem("Dagon'hai robes set")
	},
	{
		unpacked: new Bank().add('Masori mask (f)').add('Masori body (f)').add('Masori chaps (f)'),
		packed: getOSItem('Masori armour set (f)')
	}
];

for (const set of armorSetsSrc) {
	armorAndItemPacks.push({
		name: set.packed.name,
		inputItems: set.unpacked,
		outputItems: new Bank().add(set.packed.id, 1),
		type: 'pack',
		noCl: true
	});
	armorAndItemPacks.push({
		name: `Unpack ${set.packed.name}`,
		inputItems: new Bank().add(set.packed.id, 1),
		outputItems: set.unpacked,
		noCl: true,
		type: 'unpack'
	});
}
