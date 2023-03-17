import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

export const tobCreatables: Createable[] = [
	{
		name: 'Scythe of vitur',
		inputItems: new Bank().add('Scythe of vitur (uncharged)', 1),
		outputItems: new Bank().add('Scythe of vitur', 1)
	},
	{
		name: 'Sanguinesti staff',
		inputItems: new Bank().add('Sanguinesti staff (uncharged)', 1),
		outputItems: new Bank().add('Sanguinesti staff', 1)
	},
	{
		name: 'Holy sanguinesti staff',
		inputItems: new Bank().add('Holy sanguinesti staff (uncharged)', 1),
		outputItems: new Bank().add('Holy sanguinesti staff', 1)
	},
	{
		name: 'Revert sanguinesti staff',
		inputItems: new Bank().add('Sanguinesti staff', 1),
		outputItems: new Bank().add('Sanguinesti staff (uncharged)', 1)
	},
	{
		name: 'Revert holy sanguinesti staff',
		inputItems: new Bank().add('Holy sanguinesti staff', 1),
		outputItems: new Bank().add('Holy sanguinesti staff (uncharged)', 1)
	},
	{
		name: 'Revert scythe of vitur',
		inputItems: new Bank().add('Scythe of vitur', 1),
		outputItems: new Bank().add('Scythe of vitur (uncharged)', 1)
	},
	{
		name: 'Holy scythe of vitur',
		inputItems: new Bank().add('Holy scythe of vitur (uncharged)', 1),
		outputItems: new Bank().add('Holy scythe of vitur', 1)
	},
	{
		name: 'Revert holy scythe of vitur',
		inputItems: new Bank().add('Holy scythe of vitur', 1),
		outputItems: new Bank().add('Holy scythe of vitur (uncharged)', 1)
	},
	{
		name: 'Revert holy scythe of vitur (uncharged)',
		inputItems: new Bank().add('Holy scythe of vitur (uncharged)', 1),
		outputItems: new Bank().add('Scythe of vitur (uncharged)', 1).add('Holy ornament kit', 1)
	},
	{
		name: 'Sanguine scythe of vitur',
		inputItems: new Bank().add('Sanguine scythe of vitur (uncharged)', 1),
		outputItems: new Bank().add('Sanguine scythe of vitur', 1)
	},
	{
		name: 'Revert sanguine scythe of vitur',
		inputItems: new Bank().add('Sanguine scythe of vitur', 1),
		outputItems: new Bank().add('Sanguine scythe of vitur (uncharged)', 1)
	},
	{
		name: 'Sanguine scythe of vitur (uncharged)',
		inputItems: new Bank().add('Scythe of vitur (uncharged)', 1).add('Sanguine ornament kit', 1),
		outputItems: new Bank().add('Sanguine scythe of vitur (uncharged)', 1)
	},
	{
		name: 'Revert sanguine scythe of vitur (uncharged)',
		inputItems: new Bank().add('Sanguine scythe of vitur (uncharged)', 1),
		outputItems: new Bank().add('Scythe of vitur (uncharged)', 1).add('Sanguine ornament kit', 1)
	},
	{
		name: 'Holy scythe of vitur (uncharged)',
		inputItems: new Bank().add('Scythe of vitur (uncharged)', 1).add('Holy ornament kit', 1),
		outputItems: new Bank().add('Holy scythe of vitur (uncharged)', 1)
	},
	{
		name: 'Holy sanguinesti staff (uncharged)',
		inputItems: new Bank().add('Sanguinesti staff (uncharged)', 1).add('Holy ornament kit', 1),
		outputItems: new Bank().add('Holy sanguinesti staff (uncharged)', 1)
	},
	{
		name: 'Revert holy sanguinesti staff (uncharged)',
		inputItems: new Bank().add('holy sanguinesti staff (uncharged)', 1),
		outputItems: new Bank().add('Sanguinesti staff (uncharged)', 1).add('Holy ornament kit', 1)
	},
	{
		name: 'Avernic defender',
		inputItems: new Bank().add('Dragon defender', 1).add('Avernic defender hilt', 1),
		outputItems: new Bank().add('Avernic defender', 1)
	},
	{
		name: 'Revert avernic defender',
		inputItems: new Bank().add('Avernic defender', 1),
		outputItems: new Bank().add('Dragon defender', 1)
	},
	{
		name: 'Holy ghrazi rapier',
		inputItems: new Bank().add('Ghrazi rapier', 1).add('Holy ornament kit', 1),
		outputItems: new Bank().add('Holy ghrazi rapier', 1)
	},
	{
		name: 'Revert holy ghrazi rapier',
		inputItems: new Bank().add('Holy ghrazi rapier', 1),
		outputItems: new Bank().add('Ghrazi rapier', 1).add('Holy ornament kit', 1)
	}
];
