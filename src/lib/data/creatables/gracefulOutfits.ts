import { Bank } from 'oldschooljs';

import { Favours } from '../../minions/data/kourendFavour';
import { Createable } from '../createables';

export const gracefulOutfitCreatables: Createable[] = [
	// Normal
	{
		name: 'Graceful',
		inputItems: new Bank().add('Mark of grace', 260),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
	},
	{
		name: 'Graceful hood',
		inputItems: new Bank().add('Mark of grace', 35),
		outputItems: new Bank().add('Graceful hood', 1)
	},
	{
		name: 'Graceful top',
		inputItems: new Bank().add('Mark of grace', 55),
		outputItems: new Bank().add('Graceful top', 1)
	},
	{
		name: 'Graceful legs',
		inputItems: new Bank().add('Mark of grace', 60),
		outputItems: new Bank().add('Graceful legs', 1)
	},
	{
		name: 'Graceful gloves',
		inputItems: new Bank().add('Mark of grace', 30),
		outputItems: new Bank().add('Graceful gloves', 1)
	},
	{
		name: 'Graceful boots',
		inputItems: new Bank().add('Mark of grace', 40),
		outputItems: new Bank().add('Graceful boots', 1)
	},
	{
		name: 'Graceful cape',
		inputItems: new Bank().add('Mark of grace', 40),
		outputItems: new Bank().add('Graceful cape', 1)
	},
	{
		name: 'Revert graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		outputItems: new Bank().add('Mark of grace', 208)
	},
	{
		name: 'Revert graceful hood',
		inputItems: new Bank().add('Graceful hood', 1),
		outputItems: new Bank().add('Mark of grace', 28)
	},
	{
		name: 'Revert graceful top',
		inputItems: new Bank().add('Graceful top', 1),
		outputItems: new Bank().add('Mark of grace', 44)
	},
	{
		name: 'Revert graceful legs',
		inputItems: new Bank().add('Graceful legs', 1),
		outputItems: new Bank().add('Mark of grace', 48)
	},
	{
		name: 'Revert graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1),
		outputItems: new Bank().add('Mark of grace', 24)
	},
	{
		name: 'Revert graceful boots',
		inputItems: new Bank().add('Graceful boots', 1),
		outputItems: new Bank().add('Mark of grace', 32)
	},
	{
		name: 'Revert graceful cape',
		inputItems: new Bank().add('Graceful cape', 1),
		outputItems: new Bank().add('Mark of grace', 32)
	},
	// Hallowed Sepulchre
	{
		name: 'Dark Graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Dark dye', 6),
		outputItems: new Bank()
			.add('Dark graceful hood', 1)
			.add('Dark graceful top', 1)
			.add('Dark graceful legs', 1)
			.add('Dark graceful gloves', 1)
			.add('Dark graceful boots', 1)
			.add('Dark graceful cape', 1)
	},
	{
		name: 'Dark Graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful hood', 1)
	},
	{
		name: 'Dark graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful top', 1)
	},
	{
		name: 'Dark graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful legs', 1)
	},
	{
		name: 'Dark graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful gloves', 1)
	},
	{
		name: 'Dark graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful boots', 1)
	},
	{
		name: 'Dark graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Dark dye', 1),
		outputItems: new Bank().add('Dark graceful cape', 1)
	},
	// Arceuus
	{
		name: 'Arceuus graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Arceuus graceful hood', 1)
			.add('Arceuus graceful top', 1)
			.add('Arceuus graceful legs', 1)
			.add('Arceuus graceful gloves', 1)
			.add('Arceuus graceful boots', 1)
			.add('Arceuus graceful cape', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful hood', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful top', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful legs', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful gloves', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful boots', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Arceuus graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Arceuus graceful cape', 1),
		requiredFavour: Favours.Arceuus
	},
	{
		name: 'Revert arceuus graceful',
		inputItems: new Bank()
			.add('Arceuus graceful hood', 1)
			.add('Arceuus graceful top', 1)
			.add('Arceuus graceful legs', 1)
			.add('Arceuus graceful gloves', 1)
			.add('Arceuus graceful boots', 1)
			.add('Arceuus graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful hood',
		inputItems: new Bank().add('Arceuus graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful top',
		inputItems: new Bank().add('Arceuus graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful legs',
		inputItems: new Bank().add('Arceuus graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful gloves',
		inputItems: new Bank().add('Arceuus graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful boots',
		inputItems: new Bank().add('Arceuus graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	{
		name: 'Revert arceuus graceful cape',
		inputItems: new Bank().add('Arceuus graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		requiredFavour: Favours.Arceuus,
		noCl: true
	},
	// Piscarilius
	{
		name: 'Piscarilius graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Piscarilius graceful hood', 1)
			.add('Piscarilius graceful top', 1)
			.add('Piscarilius graceful legs', 1)
			.add('Piscarilius graceful gloves', 1)
			.add('Piscarilius graceful boots', 1)
			.add('Piscarilius graceful cape', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful hood', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful top', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful legs', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful gloves', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful boots', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Piscarilius graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Piscarilius graceful cape', 1),
		requiredFavour: Favours.Piscarilius
	},
	{
		name: 'Revert Piscarilius graceful',
		inputItems: new Bank()
			.add('Piscarilius graceful hood', 1)
			.add('Piscarilius graceful top', 1)
			.add('Piscarilius graceful legs', 1)
			.add('Piscarilius graceful gloves', 1)
			.add('Piscarilius graceful boots', 1)
			.add('Piscarilius graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful hood',
		inputItems: new Bank().add('Piscarilius graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful top',
		inputItems: new Bank().add('Piscarilius graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful legs',
		inputItems: new Bank().add('Piscarilius graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful gloves',
		inputItems: new Bank().add('Piscarilius graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful boots',
		inputItems: new Bank().add('Piscarilius graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	{
		name: 'Revert Piscarilius graceful cape',
		inputItems: new Bank().add('Piscarilius graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		requiredFavour: Favours.Piscarilius,
		noCl: true
	},
	// Lovakengj
	{
		name: 'Lovakengj graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Lovakengj graceful hood', 1)
			.add('Lovakengj graceful top', 1)
			.add('Lovakengj graceful legs', 1)
			.add('Lovakengj graceful gloves', 1)
			.add('Lovakengj graceful boots', 1)
			.add('Lovakengj graceful cape', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful hood', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful top', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful legs', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful gloves', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful boots', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Lovakengj graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Lovakengj graceful cape', 1),
		requiredFavour: Favours.Lovakengj
	},
	{
		name: 'Revert Lovakengj graceful',
		inputItems: new Bank()
			.add('Lovakengj graceful hood', 1)
			.add('Lovakengj graceful top', 1)
			.add('Lovakengj graceful legs', 1)
			.add('Lovakengj graceful gloves', 1)
			.add('Lovakengj graceful boots', 1)
			.add('Lovakengj graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful hood',
		inputItems: new Bank().add('Lovakengj graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful top',
		inputItems: new Bank().add('Lovakengj graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful legs',
		inputItems: new Bank().add('Lovakengj graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful gloves',
		inputItems: new Bank().add('Lovakengj graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful boots',
		inputItems: new Bank().add('Lovakengj graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	{
		name: 'Revert Lovakengj graceful cape',
		inputItems: new Bank().add('Lovakengj graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		requiredFavour: Favours.Lovakengj,
		noCl: true
	},
	// Shayzien
	{
		name: 'Shayzien graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Shayzien graceful hood', 1)
			.add('Shayzien graceful top', 1)
			.add('Shayzien graceful legs', 1)
			.add('Shayzien graceful gloves', 1)
			.add('Shayzien graceful boots', 1)
			.add('Shayzien graceful cape', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful hood', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful top', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful legs', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful gloves', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful boots', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Shayzien graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Shayzien graceful cape', 1),
		requiredFavour: Favours.Shayzien
	},
	{
		name: 'Revert Shayzien graceful',
		inputItems: new Bank()
			.add('Shayzien graceful hood', 1)
			.add('Shayzien graceful top', 1)
			.add('Shayzien graceful legs', 1)
			.add('Shayzien graceful gloves', 1)
			.add('Shayzien graceful boots', 1)
			.add('Shayzien graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful hood',
		inputItems: new Bank().add('Shayzien graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful top',
		inputItems: new Bank().add('Shayzien graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful legs',
		inputItems: new Bank().add('Shayzien graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful gloves',
		inputItems: new Bank().add('Shayzien graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful boots',
		inputItems: new Bank().add('Shayzien graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	{
		name: 'Revert Shayzien graceful cape',
		inputItems: new Bank().add('Shayzien graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		requiredFavour: Favours.Shayzien,
		noCl: true
	},
	// Hosidius
	{
		name: 'Hosidius graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Hosidius graceful hood', 1)
			.add('Hosidius graceful top', 1)
			.add('Hosidius graceful legs', 1)
			.add('Hosidius graceful gloves', 1)
			.add('Hosidius graceful boots', 1)
			.add('Hosidius graceful cape', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful hood', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful top', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful legs', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful gloves', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful boots', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Hosidius graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Hosidius graceful cape', 1),
		requiredFavour: Favours.Hosidius
	},
	{
		name: 'Revert Hosidius graceful',
		inputItems: new Bank()
			.add('Hosidius graceful hood', 1)
			.add('Hosidius graceful top', 1)
			.add('Hosidius graceful legs', 1)
			.add('Hosidius graceful gloves', 1)
			.add('Hosidius graceful boots', 1)
			.add('Hosidius graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful hood',
		inputItems: new Bank().add('Hosidius graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful top',
		inputItems: new Bank().add('Hosidius graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful legs',
		inputItems: new Bank().add('Hosidius graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful gloves',
		inputItems: new Bank().add('Hosidius graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful boots',
		inputItems: new Bank().add('Hosidius graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	{
		name: 'Revert Hosidius graceful cape',
		inputItems: new Bank().add('Hosidius graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		requiredFavour: Favours.Hosidius,
		noCl: true
	},
	// Great Kourend
	{
		name: 'Kourend graceful',
		inputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1)
			.add('Mark of grace', 90),
		outputItems: new Bank()
			.add('Kourend graceful hood', 1)
			.add('Kourend graceful top', 1)
			.add('Kourend graceful legs', 1)
			.add('Kourend graceful gloves', 1)
			.add('Kourend graceful boots', 1)
			.add('Kourend graceful cape', 1)
	},
	{
		name: 'Kourend graceful hood',
		inputItems: new Bank().add('Graceful hood', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful hood', 1)
	},
	{
		name: 'Kourend graceful top',
		inputItems: new Bank().add('Graceful top', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful top', 1)
	},
	{
		name: 'Kourend graceful legs',
		inputItems: new Bank().add('Graceful legs', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful legs', 1)
	},
	{
		name: 'Kourend graceful gloves',
		inputItems: new Bank().add('Graceful gloves', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful gloves', 1)
	},
	{
		name: 'Kourend graceful boots',
		inputItems: new Bank().add('Graceful boots', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful boots', 1)
	},
	{
		name: 'Kourend graceful cape',
		inputItems: new Bank().add('Graceful cape', 1).add('Mark of grace', 15),
		outputItems: new Bank().add('Kourend graceful cape', 1)
	},
	{
		name: 'Revert Kourend graceful',
		inputItems: new Bank()
			.add('Kourend graceful hood', 1)
			.add('Kourend graceful top', 1)
			.add('Kourend graceful legs', 1)
			.add('Kourend graceful gloves', 1)
			.add('Kourend graceful boots', 1)
			.add('Kourend graceful cape', 1),
		outputItems: new Bank()
			.add('Graceful hood', 1)
			.add('Graceful top', 1)
			.add('Graceful legs', 1)
			.add('Graceful gloves', 1)
			.add('Graceful boots', 1)
			.add('Graceful cape', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful hood',
		inputItems: new Bank().add('Kourend graceful hood', 1),
		outputItems: new Bank().add('Graceful hood', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful top',
		inputItems: new Bank().add('Kourend graceful top', 1),
		outputItems: new Bank().add('Graceful top', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful legs',
		inputItems: new Bank().add('Kourend graceful legs', 1),
		outputItems: new Bank().add('Graceful legs', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful gloves',
		inputItems: new Bank().add('Kourend graceful gloves', 1),
		outputItems: new Bank().add('Graceful gloves', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful boots',
		inputItems: new Bank().add('Kourend graceful boots', 1),
		outputItems: new Bank().add('Graceful boots', 1),
		noCl: true
	},
	{
		name: 'Revert Kourend graceful cape',
		inputItems: new Bank().add('Kourend graceful cape', 1),
		outputItems: new Bank().add('Graceful cape', 1),
		noCl: true
	}
];
