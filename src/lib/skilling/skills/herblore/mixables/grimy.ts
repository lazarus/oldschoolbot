import { Bank } from 'oldschooljs';

import itemID from '../../../../util/itemID';
import { Mixable } from '../../../types';

const Grimy: Mixable[] = [
	{
		name: 'Guam leaf',
		aliases: ['guam leaf', 'guam', 'grimy guam'],
		id: itemID('Guam leaf'),
		level: 3,
		xp: 2.5,
		inputItems: new Bank().add('Grimy guam leaf'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Marrentill',
		aliases: ['marrentill', 'grimy marrentill'],
		id: itemID('Marrentill'),
		level: 5,
		xp: 3.8,
		inputItems: new Bank().add('Grimy marrentill'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Tarromin',
		aliases: ['tarromin', 'grimy tarromin'],
		id: itemID('Tarromin'),
		level: 11,
		xp: 5,
		inputItems: new Bank().add('Grimy tarromin'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Harralander',
		aliases: ['harralander', 'grimy harralander'],
		id: itemID('Harralander'),
		level: 20,
		xp: 6.3,
		inputItems: new Bank().add('Grimy harralander'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Ranarr weed',
		aliases: ['ranarr weed', 'grimy ranarr', 'ranarr', 'grimy ranarr weed'],
		id: itemID('Ranarr weed'),
		level: 25,
		xp: 7.5,
		inputItems: new Bank().add('Grimy ranarr weed'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Toadflax',
		aliases: ['toadflax', 'grimy toadflax'],
		id: itemID('Toadflax'),
		level: 30,
		xp: 8,
		inputItems: new Bank().add('Grimy toadflax'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Irit leaf',
		aliases: ['irit leaf', 'irit', 'grimy irit', 'grimy irit leaf'],
		id: itemID('Irit leaf'),
		level: 40,
		xp: 8.8,
		inputItems: new Bank().add('Grimy irit leaf'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Avantoe',
		aliases: ['avantoe', 'grimy avantoe'],
		id: itemID('Avantoe'),
		level: 48,
		xp: 10,
		inputItems: new Bank().add('Grimy avantoe'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Kwuarm',
		aliases: ['kwuarm', 'grimy kwuarm'],
		id: itemID('Kwuarm'),
		level: 54,
		xp: 11.3,
		inputItems: new Bank().add('Grimy kwuarm'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Snapdragon',
		aliases: ['snapdragon', 'grimy snapdragon'],
		id: itemID('Snapdragon'),
		level: 59,
		xp: 11.8,
		inputItems: new Bank().add('Grimy snapdragon'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Cadantine',
		aliases: ['cadantine', 'grimy cadantine'],
		id: itemID('Cadantine'),
		level: 65,
		xp: 12.5,
		inputItems: new Bank().add('Grimy cadantine'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Lantadyme',
		aliases: ['lantadyme', 'grimy lantadyme'],
		id: itemID('Lantadyme'),
		level: 67,
		xp: 13.1,
		inputItems: new Bank().add('Grimy lantadyme'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Dwarf weed',
		aliases: ['dwarf weed', 'grimy dwarf weed'],
		id: itemID('Dwarf weed'),
		level: 70,
		xp: 13.8,
		inputItems: new Bank().add('Grimy dwarf weed'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	},
	{
		name: 'Torstol',
		aliases: ['torstol', 'grimy torstol'],
		id: itemID('Torstol'),
		level: 75,
		xp: 15,
		inputItems: new Bank().add('Grimy torstol'),
		tickRate: 0.5,
		bankTimePerPotion: 0.15,
		zahur: true
	}
];

export default Grimy;
