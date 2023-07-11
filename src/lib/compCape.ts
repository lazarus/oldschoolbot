import { toTitleCase } from '@oldschoolgg/toolkit';
import { tame_growth, UserStats } from '@prisma/client';
import { calcWhatPercent, objectEntries } from 'e';
import { Bank, Items } from 'oldschooljs';

import { tameFeedableItems } from '../mahoji/commands/tames';
import { getPOH } from '../mahoji/lib/abstracted_commands/pohCommand';
import { ClueTiers } from './clues/clueTiers';
import { BitField } from './constants';
import {
	abyssalDragonCL,
	abyssalSireCL,
	aerialFishingCL,
	alchemicalHydraCL,
	allDOAPets,
	allPetsCL,
	balthazarsBigBonanzaCL,
	barbarianAssaultCL,
	barrowsChestCL,
	baxtorianBathhousesCL,
	brimhavenAgilityArenaCL,
	bryophytaCL,
	callistoCL,
	camdozaalCL,
	capesCL,
	castleWarsCL,
	cerberusCL,
	chambersOfXericCL,
	chambersOfXericMetamorphPets,
	championsChallengeCL,
	chaosDruisCL,
	chaosElementalCL,
	chaosFanaticCL,
	chompyBirdsCL,
	cluesBeginnerCL,
	cluesEasyCL,
	cluesEliteCL,
	cluesEliteRareCL,
	cluesGrandmasterCL,
	cluesHardCL,
	cluesHardRareCL,
	cluesMasterCL,
	cluesMasterRareCL,
	cluesMediumCL,
	cluesRaresCL,
	cluesSharedCL,
	cmbClothes,
	commanderZilyanaCL,
	corporealBeastCL,
	crazyArchaeologistCL,
	creatureCreationCL,
	customPetsCL,
	cyclopsCL,
	dagannothKingsCL,
	dailyCL,
	demonicGorillaCL,
	diariesCL,
	doaCL,
	dungeoneeringCL,
	emergedZukInfernoCL,
	expertCapesCL,
	fishingContestCL,
	fishingTrawlerCL,
	fistOfGuthixCL,
	fossilIslandNotesCL,
	generalGraardorCL,
	giantMoleCL,
	giantsFoundryCL,
	gnomeRestaurantCL,
	godWarsDungeonCL,
	gracefulCL,
	grotesqueGuardiansCL,
	guardiansOfTheRiftCL,
	hallowedSepulchreCL,
	hesporiCL,
	holidayCL,
	ignecarusCL,
	implingsCL,
	kalphiteKingCL,
	kalphiteQueenCL,
	kingBlackDragonCL,
	kingGoldemarCL,
	krakenCL,
	kreeArraCL,
	krilTsutsarothCL,
	lastManStandingCL,
	leaguesCL,
	magicTrainingArenaCL,
	mahoganyHomesCL,
	miscellaneousCL,
	moktangCL,
	monkeyBackpacksCL,
	monkeyRumbleCL,
	motherlodeMineCL,
	muspahCL,
	naxxusCL,
	nexCL,
	nihilizCL,
	oborCL,
	odsCL,
	pestControlCL,
	polyporeDungeonCL,
	queenBlackDragonCL,
	questCL,
	randomEventsCL,
	revenantsCL,
	roguesDenCL,
	rooftopAgilityCL,
	sarachnisCL,
	scorpiaCL,
	seaKrakenCL,
	shadesOfMorttonCL,
	shayzienArmourCL,
	shootingStarsCL,
	skillingMiscCL,
	skillingPetsCL,
	skotizoCL,
	slayerCL,
	soulWarsCL,
	stealingCreationCL,
	templeTrekkingCL,
	temporossCL,
	theatreOfBLoodCL,
	theGauntletCL,
	theInfernoCL,
	theNightmareCL,
	thermonuclearSmokeDevilCL,
	tinkeringWorshopCL,
	titheFarmCL,
	toaCL,
	tobMetamorphPets,
	tormentedDemonCL,
	treeBeardCL,
	troubleBrewingCL,
	tzHaarCL,
	vasaMagusCL,
	venenatisCL,
	vetionCL,
	volcanicMineCL,
	vorkathCL,
	wintertodtCL,
	zalcanoCL,
	zulrahCL
} from './data/CollectionsExport';
import { creatablesCL } from './data/createables';
import { kibbleCL } from './data/kibble';
import { slayerMasksHelmsCL } from './data/slayerMaskHelms';
import { diariesObject, diaryTiers } from './diaries';
import { growablePetsCL } from './growablePets';
import { inventionCL } from './invention/inventions';
import { allLeagueTasks } from './leagues/leagues';
import { calcActualClues } from './leagues/stats';
import { BSOMonsters } from './minions/data/killableMonsters/custom/customMonsters';
import { getPOHObject, PoHObjects } from './poh';
import { roboChimpUserFetch } from './roboChimp';
import Skillcapes from './skilling/skillcapes';
import Agility from './skilling/skills/agility';
import { cookingCL } from './skilling/skills/cooking';
import { craftingCL } from './skilling/skills/crafting/craftables';
import { dungBuyables } from './skilling/skills/dung/dungData';
import { allFarmingItems } from './skilling/skills/farming';
import { fletchingCL } from './skilling/skills/fletching/fletchables';
import { herbloreCL } from './skilling/skills/herblore/mixables';
import { smithingCL } from './skilling/skills/smithing/smithables';
import { SlayerRewardsShop } from './slayer/slayerUnlocks';
import { RequirementFailure, Requirements } from './structures/Requirements';
import { TameSpeciesID, TameType } from './tames';
import { ItemBank } from './types';
import { itemID, itemNameFromID } from './util';
import resolveItems from './util/resolveItems';

const minigameRequirements = new Requirements()
	.add({ name: "Complete Balthazar's Big Bonanza CL", clRequirement: balthazarsBigBonanzaCL })
	.add({ name: 'Complete Barbarian Assault CL', clRequirement: barbarianAssaultCL })
	.add({ name: 'Complete Baxtorian Bathhouses CL', clRequirement: baxtorianBathhousesCL })
	.add({ name: 'Complete Brimhaven Agility Arena CL', clRequirement: brimhavenAgilityArenaCL })
	.add({ name: 'Complete Castle Wars CL', clRequirement: castleWarsCL })
	.add({ name: 'Complete Fishing Contest CL', clRequirement: fishingContestCL })
	.add({ name: 'Complete Fishing Trawler CL', clRequirement: fishingTrawlerCL })
	.add({ name: 'Complete Fist of Guthix CL', clRequirement: fistOfGuthixCL })
	.add({ name: "Complete Giants' Foundry CL", clRequirement: giantsFoundryCL })
	.add({ name: 'Complete Gnome Restaurant CL', clRequirement: gnomeRestaurantCL })
	.add({ name: 'Complete Guardians of the Rift CL', clRequirement: guardiansOfTheRiftCL })
	.add({ name: 'Complete Hallowed Sepulchre CL', clRequirement: hallowedSepulchreCL })
	.add({ name: 'Complete Last Man Standing CL', clRequirement: lastManStandingCL })
	.add({ name: "Complete Mad Marimbo's Monkey Rumble CL", clRequirement: monkeyRumbleCL })
	.add({ name: 'Complete Magic Training Arena CL', clRequirement: magicTrainingArenaCL })
	.add({ name: 'Complete Mahogany Homes CL', clRequirement: mahoganyHomesCL })
	.add({ name: 'Complete Ourania Delivery Service CL', clRequirement: odsCL })
	.add({ name: 'Complete Pest Control CL', clRequirement: pestControlCL })
	.add({ name: "Complete Rogues' Den CL", clRequirement: roguesDenCL })
	.add({ name: "Complete Shades of Mort'ton CL", clRequirement: shadesOfMorttonCL })
	.add({ name: 'Complete Soul Wars CL', clRequirement: soulWarsCL })
	.add({ name: 'Complete Stealing Creation CL', clRequirement: stealingCreationCL })
	.add({ name: 'Complete Tinkering Workshop CL', clRequirement: tinkeringWorshopCL })
	.add({ name: 'Complete Tithe Farm CL', clRequirement: titheFarmCL })
	.add({ name: 'Complete Trouble Brewing CL', clRequirement: troubleBrewingCL })
	.add({ name: 'Complete Volcanic Mine CL', clRequirement: volcanicMineCL })
	.add({ name: 'Complete Temple Trekking CL', clRequirement: templeTrekkingCL });

const pvmRequirements = new Requirements()
	.add({ name: 'Complete Abyssal Sire CL', clRequirement: abyssalSireCL })
	.add({ name: 'Complete Alchemical Hydra CL', clRequirement: alchemicalHydraCL })
	.add({ name: 'Complete Barrows Chests CL', clRequirement: barrowsChestCL })
	.add({ name: 'Complete Bryophyta CL', clRequirement: bryophytaCL })
	.add({ name: 'Complete Callisto CL', clRequirement: callistoCL })
	.add({ name: 'Complete Cerberus CL', clRequirement: cerberusCL })
	.add({ name: 'Complete Chaos Druids CL', clRequirement: chaosDruisCL })
	.add({ name: 'Complete Chaos Elemental CL', clRequirement: chaosElementalCL })
	.add({ name: 'Complete Chaos Fanatic CL', clRequirement: chaosFanaticCL })
	.add({ name: 'Complete Commander Zilyana CL', clRequirement: commanderZilyanaCL })
	.add({ name: 'Complete Corporeal Beast CL', clRequirement: corporealBeastCL })
	.add({ name: 'Complete Crazy archaeologist CL', clRequirement: crazyArchaeologistCL })
	.add({ name: 'Complete Cyclopes CL', clRequirement: cyclopsCL })
	.add({ name: 'Complete Dagannoth Kings CL', clRequirement: dagannothKingsCL })
	.add({ name: 'Complete Emerged Zuk Inferno CL', clRequirement: emergedZukInfernoCL })
	.add({ name: 'Complete General Graardor CL', clRequirement: generalGraardorCL })
	.add({ name: 'Complete Giant Mole CL', clRequirement: giantMoleCL })
	.add({ name: "Complete Glough's Experiments CL", clRequirement: demonicGorillaCL })
	.add({ name: 'Complete God Wars Dungeon CL', clRequirement: godWarsDungeonCL })
	.add({ name: 'Complete Grotesque Guardians CL', clRequirement: grotesqueGuardiansCL })
	.add({ name: 'Complete Hespori CL', clRequirement: hesporiCL })
	.add({ name: 'Complete Ignecarus CL', clRequirement: ignecarusCL })
	.add({ name: "Complete K'ril Tsutsaroth CL", clRequirement: krilTsutsarothCL })
	.add({ name: 'Complete Kalphite King CL', clRequirement: kalphiteKingCL })
	.add({ name: 'Complete Kalphite Queen CL', clRequirement: kalphiteQueenCL })
	.add({ name: 'Complete King Black Dragon CL', clRequirement: kingBlackDragonCL })
	.add({ name: 'Complete King Goldemar CL', clRequirement: kingGoldemarCL })
	.add({ name: 'Complete Kraken CL', clRequirement: krakenCL })
	.add({ name: "Complete Kree'arra CL", clRequirement: kreeArraCL })
	.add({ name: 'Complete Malygos CL', clRequirement: abyssalDragonCL })
	.add({ name: 'Complete Moktang CL', clRequirement: moktangCL })
	.add({ name: 'Complete Muspah CL', clRequirement: muspahCL })
	.add({ name: 'Complete Naxxus CL', clRequirement: naxxusCL })
	.add({ name: 'Complete Nex CL', clRequirement: nexCL })
	.add({ name: 'Complete Nihiliz CL', clRequirement: nihilizCL })
	.add({ name: 'Complete Obor CL', clRequirement: oborCL })
	.add({ name: 'Complete Polypore Dungeon CL', clRequirement: polyporeDungeonCL })
	.add({ name: 'Complete Queen Black Dragon CL', clRequirement: queenBlackDragonCL })
	.add({ name: 'Complete Revenants CL', clRequirement: revenantsCL })
	.add({ name: 'Complete Sarachnis CL', clRequirement: sarachnisCL })
	.add({ name: 'Complete Scorpia CL', clRequirement: scorpiaCL })
	.add({ name: 'Complete Sea Kraken CL', clRequirement: seaKrakenCL })
	.add({ name: 'Complete Skotizo CL', clRequirement: skotizoCL })
	.add({ name: 'Complete Slayer CL', clRequirement: slayerCL })
	.add({ name: 'Complete Tempoross CL', clRequirement: temporossCL })
	.add({ name: 'Complete TzHaar CL', clRequirement: tzHaarCL })
	.add({ name: 'Complete The Gauntlet CL', clRequirement: theGauntletCL })
	.add({ name: 'Complete The Inferno CL', clRequirement: theInfernoCL })
	.add({ name: 'Complete The Nightmare CL', clRequirement: theNightmareCL })
	.add({ name: 'Complete Thermonuclear smoke devil CL', clRequirement: thermonuclearSmokeDevilCL })
	.add({ name: 'Complete Tormented Demon CL', clRequirement: tormentedDemonCL })
	.add({ name: 'Complete Treebeard CL', clRequirement: treeBeardCL })
	.add({ name: 'Complete Vasa Magus CL', clRequirement: vasaMagusCL })
	.add({ name: 'Complete Venenatis CL', clRequirement: venenatisCL })
	.add({ name: "Complete Vet'ion CL", clRequirement: vetionCL })
	.add({ name: 'Complete Vorkath CL', clRequirement: vorkathCL })
	.add({ name: 'Complete Wintertodt CL', clRequirement: wintertodtCL })
	.add({ name: 'Complete Zulrah CL', clRequirement: zulrahCL })
	.add({ name: "Complete Chamber's of Xeric CL", clRequirement: chambersOfXericCL })
	.add({ name: 'Complete Depths of Atlantis CL', clRequirement: doaCL })
	.add({ name: 'Complete Theatre of Blood CL', clRequirement: theatreOfBLoodCL })
	.add({ name: 'Complete Tombs of Amascut CL', clRequirement: toaCL })
	.add({ name: 'Obtain all Slayer mask and helms', clRequirement: slayerMasksHelmsCL })
	.add({
		name: 'Kill a Frost dragon',
		kcRequirement: {
			[BSOMonsters.FrostDragon.id]: 1
		}
	})
	.add({
		name: "Complete the Champion's Challenge",
		minigames: {
			champions_challenge: 1
		}
	})
	.add({
		name: 'Receive all ToB pet metamorphosis',
		clRequirement: resolveItems(["Lil' Zik", 'Sanguine dust', ...tobMetamorphPets])
	})
	.add({
		name: 'Receive all CoX pet metamorphosis',
		clRequirement: resolveItems(['Olmlet', 'Metamorphic dust', ...chambersOfXericMetamorphPets])
	})
	.add({
		name: 'Receive/Create all ToA pet metamorphosis',
		clRequirement: resolveItems([
			"Tumeken's guardian",
			'Remnant of akkha',
			'Akkhito',
			'Remnant of ba-ba',
			'Babi',
			'Remnant of kephri',
			'Kephriti',
			'Ancient remnant',
			"Tumeken's damaged guardian",
			'Ancient remnant',
			"Elidinis' damaged guardian",
			'Remnant of zebak',
			'Zebo'
		])
	})
	.add({
		name: 'Receive all DoA pet metamorphosis',
		clRequirement: allDOAPets
	});

const skillingRequirements = new Requirements()
	.add({ name: 'Complete Aerial Fishing CL', clRequirement: aerialFishingCL })
	.add({ name: 'Complete All Pets CL', clRequirement: allPetsCL })
	.add({ name: 'Complete Camdozaal CL', clRequirement: camdozaalCL })
	.add({ name: "Complete Champion's Challenge CL", clRequirement: championsChallengeCL })
	.add({ name: 'Complete Chompy Birds CL', clRequirement: chompyBirdsCL })
	.add({ name: 'Complete Cooking CL', clRequirement: cookingCL })
	.add({ name: 'Complete Crafting CL', clRequirement: craftingCL })
	.add({ name: 'Complete Creature Creation CL', clRequirement: creatureCreationCL })
	.add({ name: 'Complete Dungeoneering CL', clRequirement: dungeoneeringCL })
	.add({ name: 'Complete Farming CL', clRequirement: allFarmingItems })
	.add({ name: 'Complete Fletching CL', clRequirement: fletchingCL })
	.add({ name: 'Complete Fossil Island Notes CL', clRequirement: fossilIslandNotesCL })
	.add({ name: 'Complete Graceful CL', clRequirement: gracefulCL })
	.add({ name: 'Complete Herblore CL', clRequirement: herbloreCL })
	.add({ name: 'Complete Invention CL', clRequirement: inventionCL })
	.add({ name: 'Complete Kibble CL', clRequirement: kibbleCL })
	.add({ name: 'Complete Monkey Backpacks CL', clRequirement: monkeyBackpacksCL })
	.add({ name: 'Complete Motherlode Mine CL', clRequirement: motherlodeMineCL })
	.add({ name: 'Complete Rooftop Agility CL', clRequirement: rooftopAgilityCL })
	.add({ name: 'Complete Shooting Stars CL', clRequirement: shootingStarsCL })
	.add({ name: 'Complete Skilling Misc CL', clRequirement: skillingMiscCL })
	.add({ name: 'Complete Skilling Pets CL', clRequirement: skillingPetsCL })
	.add({ name: 'Complete Smithing CL', clRequirement: smithingCL })
	.add({ name: 'Complete Zalcano CL', clRequirement: zalcanoCL });

const cluesRequirements = new Requirements()
	.add({ name: 'Complete Beginner Treasure Trails CL', clRequirement: cluesBeginnerCL })
	.add({ name: 'Complete Easy Treasure Trails CL', clRequirement: cluesEasyCL })
	.add({ name: 'Complete Elite Treasure Trail Rewards (Rare) CL', clRequirement: cluesEliteRareCL })
	.add({ name: 'Complete Elite Treasure Trails CL', clRequirement: cluesEliteCL })
	.add({ name: 'Complete Hard Treasure Trail Rewards (Rare) CL', clRequirement: cluesHardRareCL })
	.add({ name: 'Complete Hard Treasure Trails CL', clRequirement: cluesHardCL })
	.add({ name: 'Complete Master Treasure Trail Rewards (Rare) CL', clRequirement: cluesMasterRareCL })
	.add({ name: 'Complete Master Treasure Trails CL', clRequirement: cluesMasterCL })
	.add({ name: 'Complete Medium Treasure Trails CL', clRequirement: cluesMediumCL })
	.add({ name: 'Complete Rare Treasure Trail Rewards CL', clRequirement: cluesRaresCL })
	.add({ name: 'Complete Shared Treasure Trail Rewards CL', clRequirement: cluesSharedCL })
	.add({
		name: 'Build and Fill all STASH Units',
		has: ({ stashUnits }) => {
			const hasBuiltAll = stashUnits.every(i => i.isFull && Boolean(i.builtUnit));
			if (!hasBuiltAll) {
				return [
					{
						reason: `You have ${
							stashUnits.filter(i => i.isFull && !i.builtUnit).length
						} stash units left to build and fill.`
					}
				];
			}
			return [];
		}
	})
	.add({
		name: 'Collect/Complete/Open a Grandmaster clue',
		has: async ({ user }) => {
			const actualClues = await calcActualClues(user);
			if (!actualClues.has('Clue scroll (grandmaster)')) {
				return [
					{
						reason: 'You need to Collect/Complete/Open a Grandmaster clue'
					}
				];
			}
			return [];
		}
	});

const miscRequirements = new Requirements()
	.add({ name: 'Complete Daily CL', clRequirement: dailyCL })
	.add({ name: 'Complete Growable Pets CL', clRequirement: growablePetsCL })
	.add({ name: 'Complete Leagues CL', clRequirement: leaguesCL })
	.add({ name: 'Complete Miscellaneous CL', clRequirement: miscellaneousCL })
	.add({ name: 'Complete Quest CL', clRequirement: questCL })
	.add({ name: 'Complete Random Events CL', clRequirement: randomEventsCL })
	.add({ name: 'Complete Shayzien Armour CL', clRequirement: shayzienArmourCL })
	.add({ name: 'Complete Capes CL', clRequirement: capesCL })
	.add({ name: 'Complete Clothing Mystery Box CL', clRequirement: cmbClothes })
	.add({ name: 'Complete Creatables CL', clRequirement: creatablesCL })
	.add({ name: 'Complete Custom Pets CL', clRequirement: customPetsCL })
	.add({ name: 'Complete Holiday Mystery box CL', clRequirement: holidayCL });

const petTripSource: [string, keyof UserStats][] = [
	['Brock', 'brock_loot_bank'],
	['Doug', 'doug_loot_bank'],
	['Harry', 'harry_loot_bank'],
	['Obis', 'obis_loot_bank'],
	['Peky', 'peky_loot_bank'],
	['Wilvus', 'wilvus_loot_bank']
];
for (const [name, key] of petTripSource) {
	miscRequirements.add({
		name: `Take ${name} on a trip and receive loot from them`,
		has: ({ userStats }) => {
			if (Object.keys(userStats[key] as ItemBank).length === 0) {
				return [
					{
						reason: `You need to take ${name} on a trip and receive loot from them.`
					}
				];
			}
			return [];
		}
	});
}
miscRequirements
	.add({
		name: 'Buy a trimmed Music cape',
		has: ({ userStats }) => {
			const itemsBought = new Bank(userStats.buy_loot_bank as ItemBank);
			if (!itemsBought.has('Music cape (t)')) {
				return [
					{
						reason: 'You need to buy a trimmed Music cape.'
					}
				];
			}
			return [];
		}
	})
	.add({
		name: 'Unlock all Slayer unlocks',
		has: ({ user }) => {
			const notUnlocked = SlayerRewardsShop.filter(i => !user.user.slayer_unlocks.includes(i.id));
			if (notUnlocked.length > 0) {
				return [
					{
						reason: `You need to unlock these slayer unlocks: ${notUnlocked
							.map(reward => reward.name)
							.join(', ')}`
					}
				];
			}
		}
	})
	.add({
		name: 'Unlock all Slayer unlocks',
		has: ({ user }) => {
			if (user.user.slayer_unlocks.length === SlayerRewardsShop.length) {
				return [];
			}

			return [
				{
					reason: `You need to unlock these slayer unlocks: ${SlayerRewardsShop.filter(
						i => !user.user.slayer_unlocks.includes(i.id)
					)
						.map(reward => reward.name)
						.join(', ')}`
				}
			];
		}
	})
	.add({
		name: 'Buy all Dungeoneering rewards',
		clRequirement: dungBuyables.map(i => i.item.id)
	})
	.add({
		name: 'Receive a clue scroll of every tier from Zippy',
		has: ({ stats }) => {
			const tiersNotReceived = ClueTiers.filter(tier => !stats.lootFromZippyBank.has(tier.scrollID));
			if (tiersNotReceived.length > 0) {
				return [
					{
						reason: `You need to receive a clue scroll of every tier from Zippy. You still need: ${tiersNotReceived
							.map(tier => tier.name)
							.join(', ')}.`
					}
				];
			}
		}
	})
	.add({
		name: 'Buy a Master quest cape',
		clRequirement: resolveItems(['Master quest cape'])
	})
	.add({
		name: 'Build the highest tier (level requirement) item in every POH Slot',
		has: async ({ user }) => {
			const poh = await getPOH(user.id);
			const failures: RequirementFailure[] = [];
			for (const [key, val] of objectEntries(poh)) {
				if (key === 'user_id' || key === 'background_id') continue;
				const sorted = PoHObjects.filter(i => i.slot === key && typeof i.level === 'number').sort(
					(a, b) => (b.level as number) - (a.level as number)
				);
				const highestIDs = sorted.filter(i => i.level === sorted[0].level).map(i => i.id);
				if (!val || typeof val !== 'number' || !highestIDs.includes(val)) {
					failures.push({
						reason: `You need to build one of these in the ${key} slot: ${highestIDs
							.map(getPOHObject)
							.map(i => i.name)
							.join(', ')}`
					});
				}
			}
			return failures;
		}
	})
	.add({
		name: 'Achieve 100% Favour in all Kourend Houses',
		favour: {
			Arceuus: 100,
			Hosidius: 100,
			Lovakengj: 100,
			Piscarilius: 100,
			Shayzien: 100
		}
	});

const skillsRequirements = new Requirements().add({ name: 'Complete Implings CL', clRequirement: implingsCL });
for (const cape of Skillcapes) {
	skillsRequirements.add({
		name: `Achieve 500m ${toTitleCase(cape.skill)} XP and purchase the Master cape`,
		clRequirement: [cape.masterCape.id]
	});
}
for (const cape of expertCapesCL) {
	skillsRequirements.add({
		name: `Purchase a ${itemNameFromID(cape)}`,
		clRequirement: [cape]
	});
}
skillsRequirements.add({
	name: 'Complete a lap at every Agility course',
	has: ({ stats }) => {
		const coursesNotDone = Agility.Courses.filter(course => !stats.lapsScores.has(course.id));
		if (coursesNotDone.length > 0) {
			return [
				{
					reason: `You need to complete a lap at every Agility course, you still need to do one at: ${coursesNotDone
						.map(i => i.name)
						.join(', ')}.`
				}
			];
		}
	}
});

const unlockablesRequirements = new Requirements()
	.add({
		name: 'Use a Scroll of Farming',
		bitfieldRequirement: BitField.HasScrollOfFarming
	})
	.add({
		name: 'Use a Scroll of Longevity',
		bitfieldRequirement: BitField.HasScrollOfLongevity
	})
	.add({
		name: 'Use a Scroll of the Hunt',
		bitfieldRequirement: BitField.HasScrollOfTheHunt
	})
	.add({
		name: 'Use a Torn Prayer Scroll',
		bitfieldRequirement: BitField.HasTornPrayerScroll
	})
	.add({
		name: 'Use a Guthix Engram',
		bitfieldRequirement: BitField.HasGuthixEngram
	})
	.add({
		name: 'Unlock the Hosidius wallkit',
		bitfieldRequirement: BitField.HasHosidiusWallkit
	})
	.add({
		name: 'Use a Dexterous Prayer Scroll',
		bitfieldRequirement: BitField.HasDexScroll
	})
	.add({
		name: 'Use a Daemonheim agility pass',
		bitfieldRequirement: BitField.HasDaemonheimAgilityPass
	})
	.add({
		name: 'Use a Banana enchantment scroll',
		bitfieldRequirement: BitField.HasBananaEnchantmentScroll
	})
	.add({
		name: 'Use a Arcane prayer scroll',
		bitfieldRequirement: BitField.HasArcaneScroll
	})
	.add({
		name: 'Use a Runescroll of bloodbark',
		bitfieldRequirement: BitField.HasBloodbarkScroll
	})
	.add({
		name: 'Use a Slepey tablet',
		bitfieldRequirement: BitField.HasSlepeyTablet
	})
	.add({
		name: 'Use/Plant an Ivy seed',
		bitfieldRequirement: BitField.HasPlantedIvy
	});

const tameRequirements = new Requirements()
	.add({
		name: 'Build a Nursery',
		has: ({ user }) => {
			if (user.user.nursery === null) {
				return 'You need to build a Nursery.';
			}
		}
	})
	.add({
		name: 'Obtain, hatch, and fully grow a Monkey Tame',
		has: async ({ user }) => {
			const tames = await user.getTames();
			if (!tames.some(t => t.species.id === TameSpeciesID.Monkey && t.growthStage === tame_growth.adult)) {
				return 'You need to obtain, hatch, and grow to adult a Monkey Tame.';
			}
		},
		clRequirement: resolveItems(['Monkey egg'])
	})
	.add({
		name: 'Obtain, hatch, and fully grow a Igne Tame',
		has: async ({ user }) => {
			const tames = await user.getTames();
			if (!tames.some(t => t.species.id === TameSpeciesID.Igne && t.growthStage === tame_growth.adult)) {
				return 'You need to obtain, hatch, and grow to adult a Igne Tame.';
			}
		},
		clRequirement: resolveItems(['Dragon egg'])
	})
	.add({
		name: 'Feed a Monkey tame all items that provide a boost',
		has: async ({ user }) => {
			const tames = await user.getTames();
			const itemsToBeFed = tameFeedableItems.filter(i => i.tameSpeciesCanBeFedThis.includes(TameType.Gatherer));

			const oneTameHasAll = tames
				.filter(t => t.species.id === TameSpeciesID.Monkey)
				.some(tame => itemsToBeFed.every(i => tame.fedItems.has(i.item.id)));
			if (!oneTameHasAll) {
				return `You need to feed all of these items to one of your Monkey tames: ${itemsToBeFed
					.map(i => i.item.name)
					.join(', ')}.`;
			}
		}
	})
	.add({
		name: 'Feed a Igne tame all items that provide a boost',
		has: async ({ user }) => {
			const tames = await user.getTames();
			const itemsToBeFed = tameFeedableItems.filter(i => i.tameSpeciesCanBeFedThis.includes(TameType.Combat));

			const oneTameHasAll = tames
				.filter(t => t.species.id === TameSpeciesID.Igne)
				.some(tame => itemsToBeFed.every(i => tame.fedItems.has(i.item.id)));
			if (!oneTameHasAll) {
				return `You need to feed all of these items to one of your Igne tames: ${itemsToBeFed
					.map(i => i.item.name)
					.join(', ')}.`;
			}
		}
	})
	.add({
		name: 'Equip a Igne tame with the BiS items',
		has: async ({ user }) => {
			const tames = await user.getTames();

			const oneTameHasAll = tames
				.filter(t => t.species.id === TameSpeciesID.Igne)
				.some(tame => {
					return (
						tame.equippedArmor?.id === itemID('Gorajan igne armor') &&
						tame.equippedPrimary?.id === itemID('Gorajan igne claws')
					);
				});
			if (!oneTameHasAll) {
				return 'You need to equip a Igne tame with the BiS items.';
			}
		}
	});

const diaryRequirements = new Requirements();
for (const [key, b] of objectEntries(diariesObject)) {
	diaryRequirements.add({
		name: `Complete the ${b.name} achievement diary`,
		diaryRequirement: diaryTiers.map(i => [key, i])
	});
}
diaryRequirements.add({ name: 'Complete Achievement Diary CL', clRequirement: diariesCL });

const trimmedRequirements = new Requirements()
	.add({
		name: 'Complete the main Grandmaster treasure trails CL',
		clRequirement: cluesGrandmasterCL
	})
	.add({
		name: 'Complete all Leagues tasks',
		has: async ({ user }) => {
			const robochimpUser = await roboChimpUserFetch(user.id);
			const hasAll =
				robochimpUser.leagues_completed_tasks_ids.length === allLeagueTasks.length &&
				allLeagueTasks.every(t => robochimpUser.leagues_completed_tasks_ids.includes(t.id));
			if (!hasAll) {
				return 'You need to complete all Leagues tasks.';
			}
		}
	});

const compCapeCategories = [
	{
		name: 'PvM',
		requirements: pvmRequirements
	},
	{
		name: 'Skilling',
		requirements: skillingRequirements
	},
	{
		name: 'Diaries',
		requirements: diaryRequirements
	},
	{
		name: 'Tames',
		requirements: tameRequirements
	},
	{
		name: 'Unlockables',
		requirements: unlockablesRequirements
	},
	{
		name: 'Treasure Trails',
		requirements: cluesRequirements
	},
	{
		name: 'Minigames',
		requirements: minigameRequirements
	},
	{
		name: 'Miscellaneous',
		requirements: miscRequirements
	},
	{
		name: 'Trimmed',
		requirements: trimmedRequirements
	}
];

const allCLItemsCheckedFor = compCapeCategories
	.map(i => i.requirements.requirements)
	.flat(2)
	.map(req => {
		if ('clRequirement' in req) {
			return Array.isArray(req.clRequirement) ? req.clRequirement : req.clRequirement.items().map(i => i[0].id);
		}
		return [];
	})
	.flat();

const overallItemsNotCheckedFor = Items.array()
	.map(i => i.id)
	.filter(i => !allCLItemsCheckedFor.includes(i));
console.log(`${overallItemsNotCheckedFor.map(itemNameFromID).sort().join(', ')}`);

export async function calculateCompCapeProgress(user: MUser) {
	let totalRequirements = 0;
	let totalCompleted = 0;

	let finalStr = '';

	for (const cat of compCapeCategories) {
		const progress = await cat.requirements.check(user);
		totalRequirements += progress.totalRequirements;
		totalCompleted += progress.metRequirements;
		let subStr = `${cat.name} (Finished ${progress.metRequirements}/${
			progress.totalRequirements
		}, ${progress.completionPercentage.toFixed(2)}%)\n`;
		for (const reason of progress.reasonsDoesnt) {
			subStr += `	- ${reason}\n`;
		}
		subStr += '\n\n';
		finalStr += subStr;
	}

	return `Completionist Cape Progress - ${totalCompleted}/${totalRequirements} (${calcWhatPercent(
		totalCompleted,
		totalRequirements
	).toFixed()}%) completed\n\n
	
${finalStr}`;
}

/**
 *
 *
 * - Removed olof
 * - Put clues/clues cl into 1 category
 * - Changed Built all STASH Units task to Build AND FILL
 * - Moved 1a/dyes to new gm rare cl
 * - Buy a music cape became buy a trimmed music cape
 * - Put quests stuff into misc category
 * - Moved some things into different categories
 *
 * TODO:
 * - Remove muphin from skilling cl?
 * - Create/use every invention
 * - Disassemble to receive every kind of material
 *
 * Tasks that seem weird/odd:
 * - Complete Grandmaster clue log (excluding 1a and 3a dye)
 * - Collect/Complete/Open a Grandmaster clue
 */
