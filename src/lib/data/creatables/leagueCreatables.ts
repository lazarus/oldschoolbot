import { Bank } from 'oldschooljs';

import { Createable } from '../createables';

const toolCreatables: Createable[] = [
	{
		name: 'Dragon axe (or)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Dragon axe', 1),
		outputItems: new Bank().add('Dragon axe (or)')
	},
	{
		name: 'Revert Dragon axe (or)',
		inputItems: new Bank().add('Dragon axe (or)', 1),
		outputItems: new Bank().add('Dragon axe').add('Trailblazer tool ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Dragon harpoon (or)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Dragon harpoon', 1),
		outputItems: new Bank().add('Dragon harpoon (or)')
	},
	{
		name: 'Revert Dragon harpoon (or)',
		inputItems: new Bank().add('Dragon harpoon (or)', 1),
		outputItems: new Bank().add('Dragon harpoon').add('Trailblazer tool ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Infernal axe (or)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Infernal axe', 1),
		outputItems: new Bank().add('Infernal axe (or)')
	},
	{
		name: 'Revert Infernal axe (or)',
		inputItems: new Bank().add('Infernal axe (or)', 1),
		outputItems: new Bank().add('Infernal axe').add('Trailblazer tool ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Infernal harpoon (or)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Infernal harpoon', 1),
		outputItems: new Bank().add('Infernal harpoon (or)')
	},
	{
		name: 'Revert Infernal harpoon (or)',
		inputItems: new Bank().add('Infernal harpoon (or)', 1),
		outputItems: new Bank().add('Infernal harpoon').add('Trailblazer tool ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Infernal pickaxe (or)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Infernal pickaxe', 1),
		outputItems: new Bank().add('Infernal pickaxe (or)')
	},
	{
		name: 'Revert Infernal pickaxe (or)',
		inputItems: new Bank().add('Infernal pickaxe (or)', 1),
		outputItems: new Bank().add('Infernal pickaxe').add('Trailblazer tool ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Dragon pickaxe (or) (Trailblazer)',
		inputItems: new Bank().add('Trailblazer tool ornament kit', 1).add('Dragon pickaxe', 1),
		outputItems: new Bank().add('Dragon pickaxe (or) (Trailblazer)')
	},
	{
		name: 'Revert Dragon pickaxe (or) (Trailblazer)',
		inputItems: new Bank().add('Dragon pickaxe (or) (Trailblazer)', 1),
		outputItems: new Bank().add('Dragon pickaxe').add('Trailblazer tool ornament kit'),
		noCl: true
	}
];

const varietyOrnaments: Createable[] = [
	{
		name: 'Abyssal tentacle (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Abyssal tentacle', 1),
		outputItems: new Bank().add('Abyssal tentacle (or)')
	},
	{
		name: 'Revert Abyssal tentacle (or)',
		inputItems: new Bank().add('Abyssal tentacle (or)', 1),
		outputItems: new Bank().add('Abyssal tentacle').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Abyssal whip (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Abyssal whip', 1),
		outputItems: new Bank().add('Abyssal whip (or)')
	},
	{
		name: 'Revert Abyssal whip (or)',
		inputItems: new Bank().add('Abyssal whip (or)', 1),
		outputItems: new Bank().add('Abyssal whip').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Book of balance (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Book of balance', 1),
		outputItems: new Bank().add('Book of balance (or)')
	},
	{
		name: 'Revert Book of balance (or)',
		inputItems: new Bank().add('Book of balance (or)', 1),
		outputItems: new Bank().add('Book of balance').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Book of darkness (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Book of darkness', 1),
		outputItems: new Bank().add('Book of darkness (or)')
	},
	{
		name: 'Revert Book of darkness (or)',
		inputItems: new Bank().add('Book of darkness (or)', 1),
		outputItems: new Bank().add('Book of darkness').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Book of law (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Book of law', 1),
		outputItems: new Bank().add('Book of law (or)')
	},
	{
		name: 'Revert Book of law (or)',
		inputItems: new Bank().add('Book of law (or)', 1),
		outputItems: new Bank().add('Book of law').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Book of war (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Book of war', 1),
		outputItems: new Bank().add('Book of war (or)')
	},
	{
		name: 'Revert Book of war (or)',
		inputItems: new Bank().add('Book of war (or)', 1),
		outputItems: new Bank().add('Book of war').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Holy book (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Holy book', 1),
		outputItems: new Bank().add('Holy book (or)')
	},
	{
		name: 'Revert Holy book (or)',
		inputItems: new Bank().add('Holy book (or)', 1),
		outputItems: new Bank().add('Holy book').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Unholy book (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Unholy book', 1),
		outputItems: new Bank().add('Unholy book (or)')
	},
	{
		name: 'Revert Unholy book (or)',
		inputItems: new Bank().add('Unholy book (or)', 1),
		outputItems: new Bank().add('Unholy book').add('Shattered relics variety ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Rune crossbow (or)',
		inputItems: new Bank().add('Shattered relics variety ornament kit', 1).add('Rune crossbow', 1),
		outputItems: new Bank().add('Rune crossbow (or)')
	},
	{
		name: 'Revert Rune crossbow (or)',
		inputItems: new Bank().add('Rune crossbow (or)', 1),
		outputItems: new Bank().add('Rune crossbow').add('Shattered relics variety ornament kit'),
		noCl: true
	}
];

const voidOrnaments: Createable[] = [
	{
		name: 'Elite void robe (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Elite void robe', 1),
		outputItems: new Bank().add('Elite void robe (or)')
	},
	{
		name: 'Revert Elite void robe (or))',
		inputItems: new Bank().add('Elite void robe (or)', 1),
		outputItems: new Bank().add('Elite void robe').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Elite void top (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Elite void top', 1),
		outputItems: new Bank().add('Elite void top (or)')
	},
	{
		name: 'Revert Elite void top (or))',
		inputItems: new Bank().add('Elite void top (or)', 1),
		outputItems: new Bank().add('Elite void top').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void knight gloves (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void knight gloves', 1),
		outputItems: new Bank().add('Void knight gloves (or)')
	},
	{
		name: 'Revert Void knight gloves (or)',
		inputItems: new Bank().add('Void knight gloves (or)', 1),
		outputItems: new Bank().add('Void knight gloves').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void knight top (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void knight top', 1),
		outputItems: new Bank().add('Void knight top (or)')
	},
	{
		name: 'Revert Void knight top (or)',
		inputItems: new Bank().add('Void knight top (or)', 1),
		outputItems: new Bank().add('Void knight top').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void knight robe (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void knight robe', 1),
		outputItems: new Bank().add('Void knight robe (or)')
	},
	{
		name: 'Revert Void knight robe (or)',
		inputItems: new Bank().add('Void knight robe (or)', 1),
		outputItems: new Bank().add('Void knight robe').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void mage helm (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void mage helm', 1),
		outputItems: new Bank().add('Void mage helm (or)')
	},
	{
		name: 'Revert Void mage helm (or)',
		inputItems: new Bank().add('Void mage helm (or)', 1),
		outputItems: new Bank().add('Void mage helm').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void melee helm (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void melee helm', 1),
		outputItems: new Bank().add('Void melee helm (or)')
	},
	{
		name: 'Revert Void melee helm (or)',
		inputItems: new Bank().add('Void melee helm (or)', 1),
		outputItems: new Bank().add('Void melee helm').add('Shattered relics void ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Void ranger helm (or)',
		inputItems: new Bank().add('Shattered relics void ornament kit', 1).add('Void ranger helm', 1),
		outputItems: new Bank().add('Void ranger helm (or)')
	},
	{
		name: 'Revert Void ranger helm (or)',
		inputItems: new Bank().add('Void ranger helm (or)', 1),
		outputItems: new Bank().add('Void ranger helm').add('Shattered relics void ornament kit'),
		noCl: true
	}
];

const mysticOrnaments: Createable[] = [
	{
		name: 'Mystic boots (or)',
		inputItems: new Bank().add('Shattered relics mystic ornament kit', 1).add('Mystic boots', 1),
		outputItems: new Bank().add('Mystic boots (or)')
	},
	{
		name: 'Revert Mystic boots (or)',
		inputItems: new Bank().add('Mystic boots (or)', 1),
		outputItems: new Bank().add('Mystic boots').add('Shattered relics mystic ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Mystic gloves (or)',
		inputItems: new Bank().add('Shattered relics mystic ornament kit', 1).add('Mystic gloves', 1),
		outputItems: new Bank().add('Mystic gloves (or)')
	},
	{
		name: 'Revert Mystic gloves (or)',
		inputItems: new Bank().add('Mystic gloves (or)', 1),
		outputItems: new Bank().add('Mystic gloves').add('Shattered relics mystic ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Mystic hat (or)',
		inputItems: new Bank().add('Shattered relics mystic ornament kit', 1).add('Mystic hat', 1),
		outputItems: new Bank().add('Mystic hat (or)')
	},
	{
		name: 'Revert Mystic hat (or)',
		inputItems: new Bank().add('Mystic hat (or)', 1),
		outputItems: new Bank().add('Mystic hat').add('Shattered relics mystic ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Mystic robe bottom (or)',
		inputItems: new Bank().add('Shattered relics mystic ornament kit', 1).add('Mystic robe bottom', 1),
		outputItems: new Bank().add('Mystic robe bottom (or)')
	},
	{
		name: 'Revert Mystic robe bottom (or)',
		inputItems: new Bank().add('Mystic robe bottom (or)', 1),
		outputItems: new Bank().add('Mystic robe bottom').add('Shattered relics mystic ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Mystic robe top (or)',
		inputItems: new Bank().add('Shattered relics mystic ornament kit', 1).add('Mystic robe top', 1),
		outputItems: new Bank().add('Mystic robe top (or)')
	},
	{
		name: 'Revert Mystic robe top (or)',
		inputItems: new Bank().add('Mystic robe top (or)', 1),
		outputItems: new Bank().add('Mystic robe top').add('Shattered relics mystic ornament kit'),
		noCl: true
	}
];

const cannonOrnaments: Createable[] = [
	{
		name: 'Cannon barrels (or)',
		inputItems: new Bank().add('Shattered cannon ornament kit', 1).add('Cannon barrels', 1),
		outputItems: new Bank().add('Cannon barrels (or)')
	},
	{
		name: 'Revert Cannon barrels (or)',
		inputItems: new Bank().add('Cannon barrels (or)', 1),
		outputItems: new Bank().add('Cannon barrels').add('Shattered cannon ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Cannon base (or)',
		inputItems: new Bank().add('Shattered cannon ornament kit', 1).add('Cannon base', 1),
		outputItems: new Bank().add('Cannon base (or)')
	},
	{
		name: 'Revert Cannon base (or)',
		inputItems: new Bank().add('Cannon base (or)', 1),
		outputItems: new Bank().add('Cannon base').add('Shattered cannon ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Cannon furnace (or)',
		inputItems: new Bank().add('Shattered cannon ornament kit', 1).add('Cannon furnace', 1),
		outputItems: new Bank().add('Cannon furnace (or)')
	},
	{
		name: 'Revert Cannon furnace (or)',
		inputItems: new Bank().add('Cannon furnace (or)', 1),
		outputItems: new Bank().add('Cannon furnace').add('Shattered cannon ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Cannon stand (or)',
		inputItems: new Bank().add('Shattered cannon ornament kit', 1).add('Cannon stand', 1),
		outputItems: new Bank().add('Cannon stand (or)')
	},
	{
		name: 'Revert Cannon stand (or)',
		inputItems: new Bank().add('Cannon stand (or)', 1),
		outputItems: new Bank().add('Cannon stand').add('Shattered cannon ornament kit'),
		noCl: true
	}
];

const clothes: Createable[] = [
	{
		name: 'Unpack Twisted relic hunter (t1) armour set',
		inputItems: new Bank().add('Twisted relic hunter (t1) armour set', 1),
		outputItems: new Bank()
			.add('Twisted hat (t1)')
			.add('Twisted coat (t1)')
			.add('Twisted trousers (t1)')
			.add('Twisted boots (t1)'),
		noCl: true
	},
	{
		name: 'Unpack Twisted relic hunter (t2) armour set',
		inputItems: new Bank().add('Twisted relic hunter (t2) armour set', 1),
		outputItems: new Bank()
			.add('Twisted hat (t2)')
			.add('Twisted coat (t2)')
			.add('Twisted trousers (t2)')
			.add('Twisted boots (t2)'),
		noCl: true
	},
	{
		name: 'Unpack Twisted relic hunter (t3) armour set',
		inputItems: new Bank().add('Twisted relic hunter (t3) armour set', 1),
		outputItems: new Bank()
			.add('Twisted hat (t3)')
			.add('Twisted coat (t3)')
			.add('Twisted trousers (t3)')
			.add('Twisted boots (t3)'),
		noCl: true
	},
	//
	{
		name: 'Unpack Trailblazer relic hunter (t1) armour set',
		inputItems: new Bank().add('Trailblazer relic hunter (t1) armour set', 1),
		outputItems: new Bank()
			.add('Trailblazer hood (t1)')
			.add('Trailblazer top (t1)')
			.add('Trailblazer trousers (t1)')
			.add('Trailblazer boots (t1)'),
		noCl: true
	},
	{
		name: 'Unpack Trailblazer relic hunter (t2) armour set',
		inputItems: new Bank().add('Trailblazer relic hunter (t2) armour set', 1),
		outputItems: new Bank()
			.add('Trailblazer hood (t2)')
			.add('Trailblazer top (t2)')
			.add('Trailblazer trousers (t2)')
			.add('Trailblazer boots (t2)'),
		noCl: true
	},
	{
		name: 'Unpack Trailblazer relic hunter (t3) armour set',
		inputItems: new Bank().add('Trailblazer relic hunter (t3) armour set', 1),
		outputItems: new Bank()
			.add('Trailblazer hood (t3)')
			.add('Trailblazer top (t3)')
			.add('Trailblazer trousers (t3)')
			.add('Trailblazer boots (t3)'),
		noCl: true
	},
	//
	{
		name: 'Unpack Shattered relic hunter (t1) armour set',
		inputItems: new Bank().add('Shattered relic hunter (t1) armour set	', 1),
		outputItems: new Bank()
			.add('Shattered hood (t1)')
			.add('Shattered top (t1)')
			.add('Shattered trousers (t1)')
			.add('Shattered boots (t1)'),
		noCl: true
	},
	{
		name: 'Unpack Shattered relic hunter (t2) armour set',
		inputItems: new Bank().add('Shattered relic hunter (t2) armour set	', 1),
		outputItems: new Bank()
			.add('Shattered hood (t2)')
			.add('Shattered top (t2)')
			.add('Shattered trousers (t2)')
			.add('Shattered boots (t2)'),
		noCl: true
	},
	{
		name: 'Unpack Shattered relic hunter (t3) armour set',
		inputItems: new Bank().add('Shattered relic hunter (t3) armour set	', 1),
		outputItems: new Bank()
			.add('Shattered hood (t3)')
			.add('Shattered top (t3)')
			.add('Shattered trousers (t3)')
			.add('Shattered boots (t3)'),
		noCl: true
	}
];

const graceful: Createable[] = [
	{
		name: 'Trailblazer graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful hood')
	},
	{
		name: 'Revert Trailblazer graceful hood',
		inputItems: new Bank().add('Trailblazer graceful hood', 1),
		outputItems: new Bank().add('Graceful hood').add('Trailblazer graceful ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Trailblazer graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful cape')
	},
	{
		name: 'Revert Trailblazer graceful cape',
		inputItems: new Bank().add('Trailblazer graceful cape', 1),
		outputItems: new Bank().add('Graceful cape').add('Trailblazer graceful ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Trailblazer graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful top')
	},
	{
		name: 'Revert Trailblazer graceful top',
		inputItems: new Bank().add('Trailblazer graceful top', 1),
		outputItems: new Bank().add('Graceful top').add('Trailblazer graceful ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Trailblazer graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful legs')
	},
	{
		name: 'Revert Trailblazer graceful legs',
		inputItems: new Bank().add('Trailblazer graceful legs', 1),
		outputItems: new Bank().add('Graceful legs').add('Trailblazer graceful ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Trailblazer graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful gloves')
	},
	{
		name: 'Revert Trailblazer graceful gloves',
		inputItems: new Bank().add('Trailblazer graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves').add('Trailblazer graceful ornament kit'),
		noCl: true
	},
	//
	{
		name: 'Trailblazer graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Trailblazer graceful ornament kit', 1),
		outputItems: new Bank().add('Trailblazer graceful boots')
	},
	{
		name: 'Revert Trailblazer graceful boots',
		inputItems: new Bank().add('Trailblazer graceful boots', 1),
		outputItems: new Bank().add('Graceful boots').add('Trailblazer graceful ornament kit'),
		noCl: true
	}
];

export const leaguesCreatables = [
	...toolCreatables,
	...varietyOrnaments,
	...voidOrnaments,
	...cannonOrnaments,
	...mysticOrnaments,
	...clothes,
	...graceful
];
