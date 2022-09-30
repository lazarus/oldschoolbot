import { activity_type_enum } from '@prisma/client';
import { Time } from 'e';

import { autocompleteMonsters } from '../../mahoji/commands/k';
import type { BathhouseTaskOptions } from '../baxtorianBathhouses';
import type { PvMMethod } from '../constants';
import { kibbles } from '../data/kibble';
import type { DisassembleTaskOptions } from '../invention/disassemble';
import type { ResearchTaskOptions } from '../invention/research';
import { SlayerActivityConstants } from '../minions/data/combatConstants';
import { darkAltarRunes } from '../minions/functions/darkAltarCommand';
import type { DungeoneeringOptions } from '../skilling/skills/dung/dungData';
import type {
	ActivityTaskOptionsWithQuantity,
	AgilityActivityTaskOptions,
	AlchingActivityTaskOptions,
	AnimatedArmourActivityTaskOptions,
	BirdhouseActivityTaskOptions,
	BuryingActivityTaskOptions,
	CastingActivityTaskOptions,
	ClueActivityTaskOptions,
	CollectingOptions,
	ConstructionActivityTaskOptions,
	CookingActivityTaskOptions,
	CraftingActivityTaskOptions,
	DarkAltarOptions,
	EnchantingActivityTaskOptions,
	FarmingActivityTaskOptions,
	FiremakingActivityTaskOptions,
	FishingActivityTaskOptions,
	FletchingActivityTaskOptions,
	GauntletOptions,
	GroupMonsterActivityTaskOptions,
	HerbloreActivityTaskOptions,
	HunterActivityTaskOptions,
	InfernoOptions,
	KibbleOptions,
	KourendFavourActivityTaskOptions,
	MiningActivityTaskOptions,
	MonsterActivityTaskOptions,
	NewBossOptions,
	NexTaskOptions,
	NightmareActivityTaskOptions,
	OfferingActivityTaskOptions,
	PickpocketActivityTaskOptions,
	PuroPuroActivityTaskOptions,
	RaidsOptions,
	RevenantOptions,
	RunecraftActivityTaskOptions,
	SawmillActivityTaskOptions,
	SmeltingActivityTaskOptions,
	SmithingActivityTaskOptions,
	TempleTrekkingActivityTaskOptions,
	TheatreOfBloodTaskOptions,
	WoodcuttingActivityTaskOptions
} from '../types/minions';
import { itemNameFromID } from '../util';

export const taskCanBeRepeated = (type: activity_type_enum) =>
	!(
		[
			activity_type_enum.TearsOfGuthix,
			activity_type_enum.ShootingStars,
			activity_type_enum.BirthdayEvent,
			activity_type_enum.BlastFurnace,
			activity_type_enum.Easter,
			activity_type_enum.TokkulShop,
			activity_type_enum.FishingContest,
			activity_type_enum.TrickOrTreat,
			activity_type_enum.BossEvent
		] as activity_type_enum[]
	).includes(type);

export const tripHandlers = {
	[activity_type_enum.BossEvent]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.TrickOrTreat]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.FishingContest]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.TearsOfGuthix]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.TokkulShop]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.ShootingStars]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.BirthdayEvent]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.BlastFurnace]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.Easter]: {
		commandName: 'm',
		args: () => ({})
	},
	[activity_type_enum.AerialFishing]: {
		commandName: 'activities',
		args: () => ({ aerial_fishing: {} })
	},
	[activity_type_enum.Agility]: {
		commandName: 'laps',
		args: (data: AgilityActivityTaskOptions) => ({
			name: data.courseID,
			quantity: data.quantity,
			alch: Boolean(data.alch)
		})
	},
	[activity_type_enum.AgilityArena]: {
		commandName: 'minigames',
		args: () => ({ agility_arena: { start: {} } })
	},
	[activity_type_enum.AgilityArena]: {
		commandName: 'minigames',
		args: () => ({ agility_arena: { start: {} } })
	},
	[activity_type_enum.Alching]: {
		commandName: 'activities',
		args: (data: AlchingActivityTaskOptions) => ({
			alch: { quantity: data.quantity, item: itemNameFromID(data.itemID) }
		})
	},
	[activity_type_enum.AnimatedArmour]: {
		commandName: 'activities',
		args: (data: AnimatedArmourActivityTaskOptions) => ({
			warriors_guild: { action: 'tokens', quantity: data.quantity }
		})
	},
	[activity_type_enum.BarbarianAssault]: {
		commandName: 'minigames',
		args: () => ({ barb_assault: { start: {} } })
	},
	[activity_type_enum.BigChompyBirdHunting]: {
		commandName: 'activities',
		args: () => ({ chompy_hunt: { action: 'start' } })
	},
	[activity_type_enum.Birdhouse]: {
		commandName: 'activities',
		args: (data: BirdhouseActivityTaskOptions) => ({
			birdhouses: { action: 'harvest', birdhouse: data.birdhouseName }
		})
	},
	[activity_type_enum.Smelting]: {
		commandName: 'smelt',
		args: (data: SmeltingActivityTaskOptions) => ({
			name: itemNameFromID(data.barID),
			quantity: data.quantity,
			blast_furnace: data.blastf
		})
	},
	[activity_type_enum.Burying]: {
		commandName: 'activities',
		args: (data: BuryingActivityTaskOptions) => ({
			bury: { quantity: data.quantity, name: itemNameFromID(data.boneID) }
		})
	},
	[activity_type_enum.Casting]: {
		commandName: 'activities',
		args: (data: CastingActivityTaskOptions) => ({ cast: { spell: data.spellID, quantity: data.quantity } })
	},
	[activity_type_enum.CastleWars]: {
		commandName: 'minigames',
		args: () => ({ castle_wars: { start: {} } })
	},
	[activity_type_enum.ChampionsChallenge]: {
		commandName: 'activities',
		args: () => ({ champions_challenge: {} })
	},
	[activity_type_enum.ClueCompletion]: {
		commandName: 'clue',
		args: (data: ClueActivityTaskOptions) => ({ tier: data.clueID })
	},
	[activity_type_enum.Collecting]: {
		commandName: 'activities',
		args: (data: CollectingOptions) => ({
			collect: { item: itemNameFromID(data.collectableID), no_stams: data.noStaminas, quantity: data.quantity }
		})
	},
	[activity_type_enum.Construction]: {
		commandName: 'build',
		args: (data: ConstructionActivityTaskOptions) => ({ name: data.objectID, quantity: data.quantity })
	},
	[activity_type_enum.Cooking]: {
		commandName: 'cook',
		args: (data: CookingActivityTaskOptions) => ({ name: itemNameFromID(data.cookableID), quantity: data.quantity })
	},
	[activity_type_enum.Crafting]: {
		commandName: 'craft',
		args: (data: CraftingActivityTaskOptions) => ({
			name: itemNameFromID(data.craftableID),
			quantity: data.quantity
		})
	},
	[activity_type_enum.Cyclops]: {
		commandName: 'activities',
		args: (data: ActivityTaskOptionsWithQuantity) => ({
			warriors_guild: { action: 'cyclops', quantity: data.quantity }
		})
	},
	[activity_type_enum.DarkAltar]: {
		commandName: 'runecraft',
		args: (data: DarkAltarOptions) => ({ rune: darkAltarRunes[data.rune].item.name })
	},
	[activity_type_enum.Runecraft]: {
		commandName: 'runecraft',
		args: (data: RunecraftActivityTaskOptions) => ({
			rune: itemNameFromID(data.runeID),
			quantity: data.essenceQuantity
		})
	},
	[activity_type_enum.DriftNet]: {
		commandName: 'activities',
		args: (data: ActivityTaskOptionsWithQuantity) => ({
			driftnet_fishing: { minutes: Math.floor(data.duration / Time.Minute) }
		})
	},
	[activity_type_enum.Enchanting]: {
		commandName: 'activities',
		args: (data: EnchantingActivityTaskOptions) => ({
			enchant: { quantity: data.quantity, name: itemNameFromID(data.itemID) }
		})
	},
	[activity_type_enum.Farming]: {
		commandName: 'farming',
		args: (data: FarmingActivityTaskOptions) =>
			data.autoFarmed
				? {
						auto_farm: {}
				  }
				: {}
	},
	[activity_type_enum.FightCaves]: {
		commandName: 'activities',
		args: () => ({ fight_caves: {} })
	},
	[activity_type_enum.Firemaking]: {
		commandName: 'light',
		args: (data: FiremakingActivityTaskOptions) => ({
			name: itemNameFromID(data.burnableID),
			quantity: data.quantity
		})
	},
	[activity_type_enum.Fishing]: {
		commandName: 'fish',
		args: (data: FishingActivityTaskOptions) => ({ name: data.fishID, quantity: data.quantity })
	},
	[activity_type_enum.FishingTrawler]: {
		commandName: 'minigames',
		args: () => ({ fishing_trawler: { start: {} } })
	},
	[activity_type_enum.Fletching]: {
		commandName: 'fletch',
		args: (data: FletchingActivityTaskOptions) => ({ name: data.fletchableName, quantity: data.quantity })
	},
	[activity_type_enum.Gauntlet]: {
		commandName: 'minigames',
		args: (data: GauntletOptions) => ({ gauntlet: { start: { corrupted: data.corrupted } } })
	},
	[activity_type_enum.GloryCharging]: {
		commandName: 'activities',
		args: (data: ActivityTaskOptionsWithQuantity) => ({ charge: { item: 'glory', quantity: data.quantity } })
	},
	[activity_type_enum.GnomeRestaurant]: {
		commandName: 'minigames',
		args: () => ({ gnome_restaurant: { start: {} } })
	},
	[activity_type_enum.GroupMonsterKilling]: {
		commandName: 'mass',
		args: (data: GroupMonsterActivityTaskOptions) => ({ monster: data.monsterID })
	},
	[activity_type_enum.Herblore]: {
		commandName: 'mix',
		args: (data: HerbloreActivityTaskOptions) => ({
			name: itemNameFromID(data.mixableID),
			quantity: data.quantity,
			zahur: data.zahur
		})
	},
	[activity_type_enum.Hunter]: {
		commandName: 'hunt',
		args: (data: HunterActivityTaskOptions) => ({
			name: data.creatureName,
			quantity: data.quantity,
			hunter_potion: data.usingHuntPotion,
			stamina_potions: data.usingStaminaPotion
		})
	},
	[activity_type_enum.Inferno]: {
		commandName: 'activities',
		args: (data: InfernoOptions) => ({ inferno: { action: 'start', emerged: data.isEmergedZuk } })
	},
	[activity_type_enum.KourendFavour]: {
		commandName: 'activities',
		args: (data: KourendFavourActivityTaskOptions) => ({ favour: { name: data.favour } })
	},
	[activity_type_enum.LastManStanding]: {
		commandName: 'minigames',
		args: () => ({ lms: { start: {} } })
	},
	[activity_type_enum.MageArena]: {
		commandName: 'minigames',
		args: () => ({ mage_arena: { start: {} } })
	},
	[activity_type_enum.MageArena2]: {
		commandName: 'minigames',
		args: () => ({ mage_arena_2: { start: {} } })
	},
	[activity_type_enum.MageTrainingArena]: {
		commandName: 'minigames',
		args: () => ({ mage_training_arena: { start: {} } })
	},
	[activity_type_enum.MahoganyHomes]: {
		commandName: 'minigames',
		args: () => ({ mahogany_homes: { start: {} } })
	},
	[activity_type_enum.Mining]: {
		commandName: 'mine',
		args: (data: MiningActivityTaskOptions) => ({
			name: data.oreID,
			quantity: data.quantity,
			powermine: data.powermine
		})
	},
	[activity_type_enum.MonsterKilling]: {
		commandName: 'k',
		args: (data: MonsterActivityTaskOptions) => {
			let method: PvMMethod = 'none';
			if (data.usingCannon) method = 'cannon';
			else if (data.burstOrBarrage === SlayerActivityConstants.IceBarrage) method = 'barrage';
			else if (data.burstOrBarrage === SlayerActivityConstants.IceBurst) method = 'burst';
			return {
				name: autocompleteMonsters.find(i => i.id === data.monsterID)?.name ?? data.monsterID,
				quantity: data.quantity,
				method
			};
		}
	},
	[activity_type_enum.Nex]: {
		commandName: 'k',
		args: (data: NexTaskOptions) => {
			return {
				name: 'nex',
				quantity: data.quantity
			};
		}
	},
	[activity_type_enum.Zalcano]: {
		commandName: 'k',
		args: () => ({
			name: 'zalcano'
		})
	},
	[activity_type_enum.Tempoross]: {
		commandName: 'k',
		args: () => ({
			name: 'tempoross'
		})
	},
	[activity_type_enum.Wintertodt]: {
		commandName: 'k',
		args: () => ({
			name: 'wintertodt'
		})
	},
	[activity_type_enum.Nightmare]: {
		commandName: 'k',
		args: (data: NightmareActivityTaskOptions) => ({
			name: data.isPhosani ? 'phosani nightmare' : data.method === 'mass' ? 'mass nightmare' : 'solo nightmare'
		})
	},
	[activity_type_enum.Offering]: {
		commandName: 'offer',
		args: (data: OfferingActivityTaskOptions) => ({ quantity: data.quantity, name: itemNameFromID(data.boneID) })
	},
	[activity_type_enum.PestControl]: {
		commandName: 'minigames',
		args: () => ({ pest_control: { start: {} } })
	},
	[activity_type_enum.Pickpocket]: {
		commandName: 'steal',
		args: (data: PickpocketActivityTaskOptions) => ({ name: data.monsterID, quantity: data.quantity })
	},
	[activity_type_enum.Plunder]: {
		commandName: 'minigames',
		args: () => ({ pyramid_plunder: {} })
	},
	[activity_type_enum.PuroPuro]: {
		commandName: 'activities',
		args: (data: PuroPuroActivityTaskOptions) => ({
			puro_puro: { impling: data.implingID || '', dark_lure: data.darkLure }
		})
	},
	[activity_type_enum.Questing]: {
		commandName: 'activities',
		args: () => ({
			activities: { quest: {} }
		})
	},
	[activity_type_enum.Raids]: {
		commandName: 'raid',
		args: (data: RaidsOptions) => ({
			cox: {
				start: {
					challenge_mode: data.challengeMode,
					type: data.users.length === 1 ? 'solo' : 'mass'
				}
			}
		})
	},
	[activity_type_enum.Revenants]: {
		commandName: 'k',
		args: (data: RevenantOptions) => ({
			name: data.monsterID
		})
	},
	[activity_type_enum.RoguesDenMaze]: {
		commandName: 'minigames',
		args: () => ({
			rogues_den: {}
		})
	},
	[activity_type_enum.Sawmill]: {
		commandName: 'activities',
		args: (data: SawmillActivityTaskOptions) => ({
			sawmill: { quantity: data.plankQuantity, type: data.plankID }
		})
	},
	[activity_type_enum.Sepulchre]: {
		commandName: 'minigames',
		args: () => ({ sepulchre: { start: {} } })
	},
	[activity_type_enum.Smithing]: {
		commandName: 'smith',
		args: (data: SmithingActivityTaskOptions) => ({
			name: itemNameFromID(data.smithedBarID),
			quantity: data.quantity
		})
	},
	[activity_type_enum.SoulWars]: {
		commandName: 'minigames',
		args: () => ({ soul_wars: { start: {} } })
	},
	[activity_type_enum.TheatreOfBlood]: {
		commandName: 'raid',
		args: (data: TheatreOfBloodTaskOptions) => ({
			tob: {
				start: {
					hard_mode: data.hardMode,
					max_team_size: data.users.length
				}
			}
		})
	},
	[activity_type_enum.TitheFarm]: {
		commandName: 'farming',
		args: () => ({ tithe_farm: {} })
	},
	[activity_type_enum.Trekking]: {
		commandName: 'minigames',
		args: (data: TempleTrekkingActivityTaskOptions) => ({
			temple_trek: { start: { difficulty: data.difficulty, quantity: data.quantity } }
		})
	},
	[activity_type_enum.TroubleBrewing]: {
		commandName: 'minigames',
		args: () => ({ trouble_brewing: { start: {} } })
	},
	[activity_type_enum.VolcanicMine]: {
		commandName: 'minigames',
		args: (data: ActivityTaskOptionsWithQuantity) => ({ volcanic_mine: { start: { quantity: data.quantity } } })
	},
	[activity_type_enum.WealthCharging]: {
		commandName: 'activities',
		args: (data: ActivityTaskOptionsWithQuantity) => ({ charge: { item: 'wealth', quantity: data.quantity } })
	},
	[activity_type_enum.Woodcutting]: {
		commandName: 'chop',
		args: (data: WoodcuttingActivityTaskOptions) => ({
			name: itemNameFromID(data.logID),
			quantity: data.quantity,
			powerchop: data.powerchopping
		})
	},
	[activity_type_enum.VasaMagus]: {
		commandName: 'k',
		args: (data: MonsterActivityTaskOptions) => ({
			name: 'vasa',
			quantity: data.quantity
		})
	},
	[activity_type_enum.OuraniaDeliveryService]: {
		commandName: 'bsominigames',
		args: () => ({
			ourania_delivery_service: {
				start: {}
			}
		})
	},
	[activity_type_enum.MonkeyRumble]: {
		commandName: 'bsominigames',
		args: () => ({
			monkey_rumble: {
				start: {}
			}
		})
	},
	[activity_type_enum.BaxtorianBathhouses]: {
		commandName: 'bsominigames',
		args: (data: BathhouseTaskOptions) => ({
			baxtorian_bathhouses: {
				start: { tier: data.tier, heating: data.ore, water_mixture: data.mixture }
			}
		})
	},
	[activity_type_enum.Naxxus]: {
		commandName: 'k',
		args: () => ({
			name: 'Naxxus'
		})
	},
	[activity_type_enum.Moktang]: {
		commandName: 'k',
		args: () => ({
			name: 'Moktang'
		})
	},
	[activity_type_enum.KingGoldemar]: {
		commandName: 'k',
		args: (data: NewBossOptions) => ({
			name: `King Goldemar ${data.users.length === 1 ? 'solo' : 'mass'}`
		})
	},
	[activity_type_enum.KalphiteKing]: {
		commandName: 'k',
		args: (data: NewBossOptions) => ({
			name: `Kalphite King ${data.users.length === 1 ? 'solo' : 'mass'}`
		})
	},
	[activity_type_enum.Ignecarus]: {
		commandName: 'k',
		args: (data: NewBossOptions) => ({
			name: `Ignecarus ${data.users.length === 1 ? 'solo' : 'mass'}`
		})
	},
	[activity_type_enum.KibbleMaking]: {
		commandName: 'kibble',
		args: (data: KibbleOptions) => ({
			name: kibbles.find(i => i.type === data.kibbleType)?.item.name,
			quantity: data.quantity
		})
	},
	[activity_type_enum.Dungeoneering]: {
		commandName: 'dg',
		args: (data: DungeoneeringOptions) => ({
			start: {
				floor: data.floor,
				solo: data.users.length === 1
			}
		})
	},
	[activity_type_enum.Disassembling]: {
		commandName: 'invention',
		args: (data: DisassembleTaskOptions) => ({
			disassemble: {
				name: itemNameFromID(data.i),
				quantity: data.qty
			}
		})
	},
	[activity_type_enum.Research]: {
		commandName: 'invention',
		args: (data: ResearchTaskOptions) => ({
			research: {
				material: data.material,
				quantity: data.quantity
			}
		})
	}
} as const;

for (const type of Object.values(activity_type_enum)) {
	if (!tripHandlers[type]) {
		throw new Error(`Missing trip handler for ${type}`);
	}
}
