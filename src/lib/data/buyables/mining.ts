import { Bank } from 'oldschooljs';

import { Buyable } from './buyables';

export const miningBuyables: Buyable[] = [
	{
		name: 'Prospector helmet',
		itemCost: new Bank().add('Golden nugget', 40)
	},
	{
		name: 'Prospector jacket',
		itemCost: new Bank().add('Golden nugget', 60)
	},
	{
		name: 'Prospector legs',
		itemCost: new Bank().add('Golden nugget', 50)
	},
	{
		name: 'Prospector boots',
		itemCost: new Bank().add('Golden nugget', 30)
	},
	{
		name: 'Coal bag',
		itemCost: new Bank().add('Golden nugget', 100)
	},
	{
		name: 'Gem bag',
		itemCost: new Bank().add('Golden nugget', 100)
	},
	{
		name: 'Mining gloves',
		itemCost: new Bank().add('Unidentified minerals', 60)
	},
	{
		name: 'Superior mining gloves',
		itemCost: new Bank().add('Unidentified minerals', 120)
	},
	{
		name: 'Expert mining gloves',
		itemCost: new Bank().add('Superior mining gloves', 1).add('Mining gloves', 1).add('Unidentified minerals', 60)
	},
	{
		name: 'Bag full of gems',
		itemCost: new Bank().add('Golden nugget', 40)
	},
	{
		name: 'Bag full of gems (minerals)',
		outputItems: new Bank().add('Bag full of gems', 1),
		itemCost: new Bank().add('Unidentified minerals', 20)
	}
];
