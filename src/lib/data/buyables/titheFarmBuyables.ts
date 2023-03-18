import { Bank } from 'oldschooljs';

import itemID from '../../util/itemID';

interface TitheFarmBuyable {
	name: string;
	outputItems: Bank;
	titheFarmPoints: number;
	aliases?: string[];
}

const TitheFarmBuyables: TitheFarmBuyable[] = [
	{
		name: "Farmer's strawhat",
		aliases: ['farmers strawhat', 'farmers hat'],
		outputItems: new Bank().add("Farmer's strawhat"),
		titheFarmPoints: 75
	},
	{
		name: "Farmer's jacket",
		aliases: ['farmers jacket'],
		outputItems: new Bank().add("Farmer's jacket"),
		titheFarmPoints: 150
	},
	{
		name: "Farmer's shirt",
		aliases: ['farmers shirt'],
		outputItems: new Bank().add("Farmer's shirt"),
		titheFarmPoints: 150
	},
	{
		name: "Farmer's boro trousers",
		aliases: ['farmers trousers', 'farmers bottoms', 'farmers legs'],
		outputItems: new Bank().add("Farmer's boro trousers"),
		titheFarmPoints: 125
	},
	{
		name: "Farmer's boots",
		aliases: ['farmers boots'],
		outputItems: new Bank().add("Farmer's boots"),
		titheFarmPoints: 50
	},
	{
		name: 'Seed box',
		outputItems: new Bank().add('Seed box', 1),
		titheFarmPoints: 250
	},
	{
		name: "Gricoller's can",
		aliases: ['can', 'gricollers can'],
		outputItems: new Bank().add("Gricoller's can"),
		titheFarmPoints: 200
	},
	{
		name: 'Herb sack',
		outputItems: new Bank().add('Herb sack', 1),
		titheFarmPoints: 250
	},
	{
		name: 'Grape seed',
		aliases: ['grape seeds'],
		outputItems: new Bank().add('Grape seed', 1),
		titheFarmPoints: 2
	},
	{
		name: '20x Grape seed',
		aliases: ['20x grape seeds'],
		outputItems: new Bank().add('Grape seed', 20),
		titheFarmPoints: 40
	},
	{
		name: 'Supercompost',
		aliases: ['super compost'],
		outputItems: new Bank().add('Supercompost', 1),
		titheFarmPoints: 5
	},
	{
		name: "Bologa's blessing",
		aliases: ['bologa'],
		outputItems: new Bank().add("Bologa's blessing", 10),
		titheFarmPoints: 1
	}
];

export default TitheFarmBuyables;
