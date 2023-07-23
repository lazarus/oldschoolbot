import { Monsters } from 'oldschooljs';

import { NIGHTMARE_ID, PHOSANI_NIGHTMARE_ID } from '../constants';
import { barrowsChestCL } from '../data/CollectionsExport';
import { Requirements } from '../structures/Requirements';
import { GauntletOptions, NexTaskOptions, RaidsOptions, TheatreOfBloodTaskOptions } from '../types/minions';
import { isCertainMonsterTrip } from './caUtils';
import { type CombatAchievement } from './combatAchievements';

export const grandmasterCombatAchievements: CombatAchievement[] = [
	{
		id: 3000,
		name: 'Alchemical Speed-Runner',
		desc: 'Kill the Alchemical Hydra in less than 1 minute 20 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: isCertainMonsterTrip(Monsters.AlchemicalHydra.id)
		}
	},
	{
		id: 3001,
		name: 'No Pressure',
		desc: "Kill the Alchemical Hydra using only Dharok's Greataxe as a weapon whilst having no more than 10 Hitpoints throughout the entire fight.",
		type: 'restriction',
		rng: {
			chancePerKill: 33,
			hasChance: (data, user) =>
				isCertainMonsterTrip(Monsters.AlchemicalHydra.id)(data) &&
				user.gear.melee.hasEquipped("Dharok's greataxe")
		}
	},
	{
		id: 3002,
		name: 'Chambers of Xeric (5-Scale) Speed-Runner',
		desc: 'Complete a Chambers of Xeric (5-scale) in less than 12 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: 'Raids'
		}
	},
	{
		id: 3003,
		name: 'Chambers of Xeric Grandmaster',
		desc: 'Complete the Chambers of Xeric 150 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				raids: 150
			}
		})
	},
	{
		id: 3004,
		name: 'Chambers of Xeric (Solo) Speed-Runner',
		desc: 'Complete a Chambers of Xeric (Solo) in less than 17 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: data => data.type === 'Raids' && (data as RaidsOptions).users.length === 1
		}
	},
	{
		id: 3005,
		name: 'Chambers of Xeric (Trio) Speed-Runner',
		desc: 'Complete a Chambers of Xeric (Trio) in less than 14 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: 'Raids'
		}
	},
	{
		id: 3006,
		name: 'Chambers of Xeric: CM (Solo) Speed-Runner',
		desc: 'Complete a Chambers of Xeric: Challenge Mode (Solo) in less than 38 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 30,
			hasChance: data =>
				data.type === 'Raids' &&
				(data as RaidsOptions).challengeMode &&
				(data as RaidsOptions).users.length === 1
		}
	},
	{
		id: 3007,
		name: 'Chambers of Xeric: CM Grandmaster',
		desc: 'Complete the Chambers of Xeric: Challenge Mode 25 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				raids_challenge_mode: 25
			}
		})
	},
	{
		id: 3008,
		name: 'Chambers of Xeric: CM (Trio) Speed-Runner',
		desc: 'Complete a Chambers of Xeric: Challenge Mode (Trio) in less than 27 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 30,
			hasChance: data => data.type === 'Raids' && (data as RaidsOptions).challengeMode
		}
	},
	{
		id: 3009,
		name: 'Chambers of Xeric: CM (5-Scale) Speed-Runner',
		desc: 'Complete a Chambers of Xeric: Challenge Mode (5-scale) in less than 25 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 30,
			hasChance: data => data.type === 'Raids' && (data as RaidsOptions).challengeMode
		}
	},
	{
		id: 3010,
		name: 'Peach Conjurer',
		desc: 'Kill Commander Zilyana 50 times in a privately rented instance without leaving the room.',
		type: 'stamina',
		requirements: new Requirements().add({
			kcRequirement: {
				[Monsters.CommanderZilyana.id]: 50
			}
		})
	},
	{
		id: 3011,
		name: 'Animal Whisperer',
		desc: 'Kill Commander Zilyana in a private instance without taking any damage from the boss or bodyguards.',
		type: 'perfection',
		rng: {
			chancePerKill: 50,
			hasChance: isCertainMonsterTrip(Monsters.CommanderZilyana.id)
		}
	},
	{
		id: 3012,
		name: 'Corrupted Gauntlet Speed-Runner',
		desc: 'Complete a Corrupted Gauntlet in less than 6 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 35,
			hasChance: data => data.type === 'Gauntlet' && (data as GauntletOptions).corrupted
		}
	},
	{
		id: 3013,
		name: 'Egniol Diet II',
		desc: 'Kill the Corrupted Hunllef without making an egniol potion within the Corrupted Gauntlet.',
		type: 'restriction',
		rng: {
			chancePerKill: 33,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3014,
		name: 'Corrupted Gauntlet Grandmaster',
		desc: 'Complete the Corrupted Gauntlet 50 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				corrupted_gauntlet: 150
			}
		})
	},
	{
		id: 3015,
		name: 'Wolf Puncher II',
		desc: 'Kill the Corrupted Hunllef without making more than one attuned weapon.',
		type: 'restriction',
		rng: {
			chancePerKill: 15,
			hasChance: data => data.type === 'Gauntlet' && (data as GauntletOptions).corrupted
		}
	},
	{
		id: 3016,
		name: 'Gauntlet Speed-Runner',
		desc: 'Complete the Gauntlet in less than 4 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 35,
			hasChance: 'Gauntlet'
		}
	},
	{
		id: 3017,
		name: 'Ourg Killer',
		desc: 'Kill General Graardor 15 times in a private instance without leaving the room.',
		type: 'stamina',
		requirements: new Requirements().add({
			kcRequirement: {
				[Monsters.GeneralGraardor.id]: 15
			}
		})
	},
	{
		id: 3018,
		name: 'Defence Matters',
		desc: 'Kill General Graardor 2 times consecutively in a private instance without taking any damage from his bodyguards.',
		type: 'perfection',
		rng: {
			chancePerKill: 80,
			hasChance: isCertainMonsterTrip(Monsters.GeneralGraardor.id)
		}
	},
	{
		id: 3019,
		name: 'Keep Away',
		desc: 'Kill General Graardor in a private instance without taking any damage from the boss or bodyguards.',
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: isCertainMonsterTrip(Monsters.GeneralGraardor.id)
		}
	},
	{
		id: 3020,
		name: 'Grotesque Guardians Speed-Runner',
		desc: 'Kill the Grotesque Guardians in less than 1:20 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 70,
			hasChance: isCertainMonsterTrip(Monsters.GrotesqueGuardians.id)
		}
	},
	{
		id: 3021,
		name: 'Demon Whisperer',
		desc: "Kill K'ril Tsutsaroth in a private instance without ever being hit by his bodyguards.",
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: isCertainMonsterTrip(Monsters.KrilTsutsaroth.id)
		}
	},
	{
		id: 3022,
		name: 'Ash Collector',
		desc: "Kill K'ril Tsutsaroth 20 times in a private instance without leaving the room.",
		type: 'stamina',
		requirements: new Requirements().add({
			kcRequirement: {
				[Monsters.KrilTsutsaroth.id]: 30
			}
		})
	},
	{
		id: 3023,
		name: 'Feather Hunter',
		desc: "Kill Kree'arra 30 times in a private instance without leaving the room.",
		type: 'stamina',
		requirements: new Requirements().add({
			kcRequirement: {
				[Monsters.Kreearra.id]: 30
			}
		})
	},
	{
		id: 3024,
		name: 'The Worst Ranged Weapon',
		desc: "Kill Kree'arra by only dealing damage to him with a salamander.",
		type: 'restriction',
		rng: {
			chancePerKill: 1,
			hasChance: data => data.type === 'Nex' && (data as NexTaskOptions).users.length <= 2
		}
	},
	{
		id: 3025,
		name: 'Nex Duo',
		desc: 'Kill Nex with two or less players at the start of the fight.',
		type: 'restriction',
		rng: {
			chancePerKill: 1,
			hasChance: data => data.type === 'Nex' && (data as NexTaskOptions).users.length <= 2
		}
	},
	{
		id: 3026,
		name: 'Perfect Nex',
		desc: 'Kill Nex whilst completing the requirements for "There is no escape", "Shadows move", "A siphon will solve this", and "Contain this!"',
		type: 'perfection',
		rng: {
			chancePerKill: 44,
			hasChance: 'Nex'
		}
	},
	{
		id: 3027,
		name: 'I should see a doctor',
		desc: 'Kill Nex whilst a player is coughing.',
		type: 'restriction',
		rng: {
			chancePerKill: 33,
			hasChance: 'Nex'
		}
	},
	{
		id: 3028,
		name: 'Phantom Muspah Manipulator',
		desc: "Kill the Phantom Muspah whilst completing Walk Straight Pray True, Space is Tight & Can't Escape.",
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: isCertainMonsterTrip(Monsters.PhantomMuspah.id)
		}
	},
	{
		id: 3029,
		name: 'Phantom Muspah Speed-Runner',
		desc: 'Kill the Phantom Muspah in less than 1 minute and 30 seconds without a slayer task.',
		type: 'speed',
		rng: {
			chancePerKill: 35,
			hasChance: isCertainMonsterTrip(Monsters.PhantomMuspah.id)
		}
	},
	{
		id: 3030,
		name: "Phosani's Speedrunner",
		desc: "Defeat Phosani's Nightmare within 7:30 minutes.",
		type: 'speed',
		rng: {
			chancePerKill: 35,
			hasChance: isCertainMonsterTrip(PHOSANI_NIGHTMARE_ID)
		}
	},
	{
		id: 3031,
		name: "Perfect Phosani's Nightmare",
		desc: "Kill Phosani's Nightmare while only taking damage from husks, power blasts and weakened Parasites. Also, without having your attacks slowed by the Nightmare Spores or letting a Sleepwalker reach Phosani's Nightmare.",
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: isCertainMonsterTrip(Monsters.PhantomMuspah.id)
		}
	},
	{
		id: 3032,
		name: "Can't Wake Up",
		desc: "Kill Phosani's Nightmare 5 times in a row without leaving Phosani's Dream.",
		type: 'stamina',
		requirements: new Requirements().add({
			kcRequirement: {
				[PHOSANI_NIGHTMARE_ID]: 5
			}
		})
	},
	{
		id: 3033,
		name: "Phosani's Grandmaster",
		desc: "Kill Phosani's Nightmare 25 times.",
		type: 'kill_count',
		requirements: new Requirements().add({
			kcRequirement: {
				[PHOSANI_NIGHTMARE_ID]: 25
			}
		})
	},
	{
		id: 3034,
		name: 'Terrible Parent',
		desc: 'Kill the Nightmare solo without the Parasites healing the boss for more than 100 health.',
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: isCertainMonsterTrip(NIGHTMARE_ID)
		}
	},
	{
		id: 3035,
		name: 'Nightmare (Solo) Speed-Runner',
		desc: 'Defeat the Nightmare (Solo) in less than 16 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 30,
			hasChance: isCertainMonsterTrip(NIGHTMARE_ID)
		}
	},
	{
		id: 3036,
		name: 'A Long Trip',
		desc: 'Kill the Nightmare without any player losing any prayer points.',
		type: 'restriction',
		rng: {
			chancePerKill: 33,
			hasChance: isCertainMonsterTrip(NIGHTMARE_ID)
		}
	},
	{
		id: 3037,
		name: 'Nightmare (5-Scale) Speed-Runner',
		desc: 'Defeat the Nightmare (5-scale) in less than 3:30 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 22,
			hasChance: 'Nightmare'
		}
	},
	{
		id: 3038,
		name: 'Theatre (4-Scale) Speed-Runner',
		desc: 'Complete the Theatre of Blood (4-scale) in less than 15 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).users.length === 4
		}
	},
	{
		id: 3039,
		name: 'Theatre of Blood Grandmaster',
		desc: 'Complete the Theatre of Blood 150 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				tob: 150
			}
		})
	},
	{
		id: 3040,
		name: 'Perfect Theatre',
		desc: 'Complete the Theatre of Blood without anyone dying through any means and whilst everyone in the team completes the following Combat Achievement tasks in a single run: "Perfect Maiden", "Perfect Bloat", "Perfect Nylocas", "Perfect Sotetseg", "Perfect Xarpus" and "Perfect Verzik".',
		type: 'perfection',
		rng: {
			chancePerKill: 80,
			hasChance: 'TheatreOfBlood'
		}
	},
	{
		id: 3041,
		name: 'Morytania Only',
		desc: 'Complete the Theatre of Blood without any member of the team equipping a non-barrows weapon (except Dawnbringer).',
		type: 'restriction',
		rng: {
			chancePerKill: 50,
			hasChance: (data, user) => data.type === 'TheatreOfBlood' && barrowsChestCL.every(i => !user.hasEquipped(i))
		}
	},
	{
		id: 3042,
		name: 'Theatre (Trio) Speed-Runner',
		desc: 'Complete the Theatre of Blood (Trio) in less than 17 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).users.length === 3
		}
	},
	{
		id: 3043,
		name: 'Theatre (Duo) Speed-Runner',
		desc: 'Complete the Theatre of Blood (Duo) in less than 26 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 33,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).users.length === 2
		}
	},
	{
		id: 3044,
		name: 'Theatre (5-Scale) Speed-Runner',
		desc: 'Complete the Theatre of Blood (5-scale) in less than 14 minutes and 15 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 50,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3045,
		name: 'Theatre: HM (5-Scale) Speed-Runner',
		desc: 'Complete the Theatre of Blood: Hard Mode (5-scale) with an overall time of less than 19 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 50,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3046,
		name: 'Pack Like a Yak',
		desc: 'Complete the Theatre of Blood: Hard Mode within the challenge time, with no deaths and without anyone buying anything from a supply chest.',
		type: 'restriction',
		rng: {
			chancePerKill: 50,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3047,
		name: 'Theatre: HM (4-Scale) Speed-Runner',
		desc: 'Complete the Theatre of Blood: Hard Mode (4-scale) with an overall time of less than 21 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 50,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3048,
		name: 'Theatre of Blood: HM Grandmaster',
		desc: 'Complete the Theatre of Blood: Hard Mode 50 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				tob_hard: 50
			}
		})
	},
	{
		id: 3049,
		name: 'Harder Mode I',
		desc: 'Defeat Sotetseg in the Theatre of Blood: Hard Mode without anyone sharing the ball with anyone, without anyone dying, and without anyone taking damage from any of its other attacks or stepping on the wrong tile in the maze.',
		type: 'perfection',
		rng: {
			chancePerKill: 40,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3050,
		name: 'Nylo Sniper',
		desc: "Defeat Verzik Vitur's in the Theatre of Blood: Hard Mode without anyone in your team causing a Nylocas to explode by getting too close.",
		type: 'mechanical',
		rng: {
			chancePerKill: 40,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3051,
		name: 'Theatre: HM (Trio) Speed-Runner',
		desc: 'Complete the Theatre of Blood: Hard Mode (Trio) with an overall time of less than 23 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3052,
		name: 'Team Work Makes the Dream Work',
		desc: 'When Verzik Vitur in the Theatre of Blood: Hard Mode uses her yellow power blast attack while the tornadoes are active, have everyone get through the attack without taking damage. This cannot be completed with one player alive',
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3053,
		name: 'Harder Mode III',
		desc: 'Defeat Verzik Vitur in the Theatre of Blood: Hard Mode without anyone attacking her with a melee weapon during her third phase.',
		type: 'restriction',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3054,
		name: 'Stop Right There!',
		desc: 'Defeat the Maiden of Sugadinti in the Theatre of Blood: Hard Mode without letting blood spawns create more than 15 blood trails.',
		type: 'mechanical',
		rng: {
			chancePerKill: 33,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3055,
		name: 'Personal Space',
		desc: 'Defeat the Pestilent Bloat in the Theatre of Blood: Hard Mode with a least 3 people in the room, without anyone in your team standing on top of each other.',
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3056,
		name: 'Royal Affairs',
		desc: 'In the Theatre of Blood: Hard Mode, complete the Nylocas room without ever letting the Nylocas Prinkipas change styles.',
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3057,
		name: 'Harder Mode II',
		desc: 'Defeat Xarpus in the Theatre of Blood: Hard Mode after letting the exhumeds heal him to full health and without anyone in the team taking any damage.',
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: data => data.type === 'TheatreOfBlood' && (data as TheatreOfBloodTaskOptions).hardMode
		}
	},
	{
		id: 3058,
		name: 'All Praise Zebak',
		desc: "Defeat Zebak without losing a single prayer point. You must also meet the conditions of the 'Rockin' Around The Croc' achievement.",
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3059,
		name: "Amascut's Remnant",
		desc: 'Complete the Tombs of Amascut at raid level 500 or above without anyone dying.',
		type: 'mechanical'
	},
	{
		id: 3060,
		name: 'Expert Tomb Raider',
		desc: 'Complete the Tombs of Amascut (Expert mode) 50 times.',
		type: 'kill_count'
	},
	{
		id: 3061,
		name: 'Perfection of Apmeken',
		desc: "Complete 'Perfect Apmeken' and 'Perfect Ba-Ba' in a single run of the Tombs of Amascut.",
		type: 'perfection',
		rng: {
			chancePerKill: 25,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3062,
		name: 'Perfection of Het',
		desc: "Complete 'Perfect Het' and 'Perfect Akkha' in a single run of the Tombs of Amascut.",
		type: 'perfection',
		rng: {
			chancePerKill: 25,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3063,
		name: 'Tombs Speed Runner III',
		desc: 'Complete the Tombs of Amascut (expert) within 18 mins in a group of 8.',
		type: 'speed',
		rng: {
			chancePerKill: 22,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3064,
		name: 'Perfection of Scabaras',
		desc: "Complete 'Perfect Scabaras' and 'Perfect Kephri' in a single run of Tombs of Amascut.",
		type: 'perfection',
		rng: {
			chancePerKill: 22,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3065,
		name: 'Insanity',
		desc: "Complete 'Perfect Wardens' at expert or above.",
		type: 'perfection',
		rng: {
			chancePerKill: 33,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3066,
		name: 'Tombs Speed Runner II',
		desc: 'Complete the Tombs of Amascut (expert) within 20 mins at any group size.',
		type: 'speed'
	},
	{
		id: 3067,
		name: 'Perfection of Crondis',
		desc: "Complete 'Perfect Crondis' and 'Perfect Zebak' in a single run of the Tombs of Amascut.",
		type: 'perfection',
		rng: {
			chancePerKill: 35,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3068,
		name: "Akkhan't Do it",
		desc: 'Defeat Akkha with all Akkha invocations activated and the path levelled up to at least four, without dying yourself.',
		type: 'mechanical',
		rng: {
			chancePerKill: 35,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3069,
		name: "Maybe I'm the boss.",
		desc: 'Complete a Tombs of Amascut raid with every single boss invocation activated and without anyone dying.',
		type: 'mechanical',
		rng: {
			chancePerKill: 66,
			hasChance: 'TombsOfAmascut'
		}
	},
	{
		id: 3070,
		name: 'The VI Jad Challenge',
		desc: "Complete TzHaar-Ket-Rak's sixth challenge.",
		type: 'kill_count',
		notPossible: true
	},
	{
		id: 3071,
		name: "TzHaar-Ket-Rak's Speed-Runner",
		desc: "Complete TzHaar-Ket-Rak's fifth challenge in less than 5 minutes.",
		type: 'speed',
		notPossible: true
	},
	{
		id: 3072,
		name: "It Wasn't a Fluke",
		desc: "Complete TzHaar-Ket-Rak's fifth and sixth challenges back to back without failing.",
		type: 'perfection',
		notPossible: true
	},
	{
		id: 3073,
		name: "Wasn't Even Close",
		desc: 'Kill Tzkal-Zuk without letting your hitpoints fall below 50 during any wave in the Inferno.',
		type: 'restriction',
		rng: {
			chancePerKill: 5,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3074,
		name: 'Jad? What Are You Doing Here?',
		desc: 'Kill Tzkal-Zuk without killing the JalTok-Jad which spawns during wave 69.',
		type: 'restriction',
		rng: {
			chancePerKill: 5,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3075,
		name: 'Budget Setup',
		desc: 'Kill Tzkal-Zuk without equipping a Twisted Bow within the Inferno.',
		type: 'restriction',
		rng: {
			chancePerKill: 5,
			hasChance: (data, user) => data.type === 'Inferno' && !user.hasEquipped('Twisted bow')
		}
	},
	{
		id: 3076,
		name: 'The Floor Is Lava',
		desc: 'Kill Tzkal-Zuk without letting Jal-ImKot dig during any wave in the Inferno.',
		type: 'mechanical',
		rng: {
			chancePerKill: 6,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3077,
		name: 'Nibbler Chaser',
		desc: 'Kill Tzkal-Zuk without using any magic spells during any wave in the Inferno.',
		type: 'restriction',
		rng: {
			chancePerKill: 3,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3078,
		name: 'Inferno Grandmaster',
		desc: 'Complete the Inferno 5 times.',
		type: 'kill_count',
		requirements: new Requirements().add({
			minigames: {
				inferno: 5
			}
		})
	},
	{
		id: 3079,
		name: 'Facing Jad Head-on II',
		desc: 'Kill Tzkal-Zuk without equipping any range or mage weapons before wave 69.',
		type: 'restriction',
		rng: {
			chancePerKill: 6,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3080,
		name: 'Playing with Jads',
		desc: 'Complete wave 68 of the Inferno within 30 seconds of the first JalTok-Jad dying.',
		type: 'mechanical',
		rng: {
			chancePerKill: 15,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3081,
		name: 'Inferno Speed-Runner',
		desc: 'Complete the Inferno in less than 65 minutes.',
		type: 'speed',
		rng: {
			chancePerKill: 15,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3082,
		name: 'No Luck Required',
		desc: 'Kill Tzkal-Zuk without being attacked by TzKal-Zuk and without taking damage from a JalTok-Jad.',
		type: 'perfection',
		rng: {
			chancePerKill: 15,
			hasChance: 'Inferno'
		}
	},
	{
		id: 3083,
		name: 'No Time for a Drink',
		desc: 'Complete the Fight Caves without losing any prayer points.',
		type: 'restriction',
		rng: {
			chancePerKill: 15,
			hasChance: 'FightCaves'
		}
	},
	{
		id: 3084,
		name: 'Fight Caves Speed-Runner',
		desc: 'Complete the Fight Caves in less than 26 minutes and 30 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 33,
			hasChance: 'FightCaves'
		}
	},
	{
		id: 3085,
		name: 'Denying the Healers II',
		desc: 'Complete the Fight Caves without TzTok-Jad being healed by a Yt-HurKot.',
		type: 'mechanical',
		rng: {
			chancePerKill: 22,
			hasChance: 'FightCaves'
		}
	},
	{
		id: 3086,
		name: 'The Fremennik Way',
		desc: 'Kill Vorkath with only your fists.',
		type: 'restriction',
		rng: {
			chancePerKill: 1,
			hasChance: (data, user) =>
				isCertainMonsterTrip(Monsters.Vorkath.id)(data) && user.gear.melee.equippedWeapon() === null
		}
	},
	{
		id: 3087,
		name: 'Vorkath Speed-Runner',
		desc: 'Kill Vorkath in less than 54 seconds.',
		type: 'speed',
		rng: {
			chancePerKill: 55,
			hasChance: isCertainMonsterTrip(Monsters.Vorkath.id)
		}
	},
	{
		id: 3088,
		name: 'Faithless Encounter',
		desc: 'Kill Vorkath without losing any prayer points.',
		type: 'restriction',
		rng: {
			chancePerKill: 15,
			hasChance: isCertainMonsterTrip(Monsters.Vorkath.id)
		}
	},
	{
		id: 3089,
		name: 'Zulrah Speed-Runner',
		desc: 'Kill Zulrah in less than 54 seconds, without a slayer task.',
		type: 'speed',
		rng: {
			chancePerKill: 100,
			hasChance: isCertainMonsterTrip(Monsters.Zulrah.id)
		}
	}
];
