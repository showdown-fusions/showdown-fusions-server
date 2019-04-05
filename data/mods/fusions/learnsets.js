'use strict';

/**@type {{[k: string]: {learnset: {[k: string]: MoveSource[]}}}} */
let BattleLearnsets = {
	gumtei: {learnset: {
		attract: ["7M"],
		bide: ["7L16"],
		bite: ["7L1", "7S5", "7S6", "7V", "6L1", "5L1", "4L1", "3L1"],
		bodyslam: ["3T"],
		block: ["7T"],
		bulldoze: ["7M", "6M", "5M"],
		calmmind: ["7M", "7L78", "6M", "6L78", "5M", "5L78", "4M", "4L78", "3M", "3L81"],
		confide: ["7M", "6M"],
		crunch: ["7L39"],
		crushclaw: ["4S3"],
		curse: ["7V"],
		cut: ["7V", "6M", "5M", "4M", "3M"],
		detect: ["7V"],
		dig: ["7V", "6M", "5M", "4M", "3M"],
		doubleedge: ["3T"],
		doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
		dualchop: ["7T"],
		earthquake: ["7M"],
		echoedvoice: ["7M"],
		ember: ["7L8", "7V", "6L8", "5L8", "4L8", "3L11", "3S0"],
		endeavor: ["7T"],
		endure: ["7V", "4M", "3T"],
		eruption: ["7L85", "7L1", "6L1", "5L85", "4L85"],
		extrasensory: ["7L64", "7L1", "6L1", "5L64", "4L64"],
		extremespeed: ["4S3"],
		facade: ["7M", "6M", "5M", "4M", "3M"],
		fireblast: ["7M", "7L71", "7V", "6M", "6L71", "5M", "5L71", "4M", "4L71", "3M", "3L71"],
		firefang: ["7L50", "6L50", "6S4", "5L50", "4L50"],
		firepunch: ["7T"],
		firespin: ["7L22", "7V", "6L22", "5L22", "4L22", "4S2", "3L31", "3S1", "3S0"],
		flamecharge: ["7M", "7S7", "6M", "5M"],
		flamethrower: ["7M", "7L36", "7V", "6M", "6L36", "6S4", "5M", "5L36", "4M", "4L36", "4S2", "3M", "3L51", "3S1"],
		flareblitz: ["4S3"],
		flash: ["7V", "6M", "5M", "4M", "3M"],
		fling: ["7M"],
		frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
		gigaimpact: ["7M", "6M", "5M", "4M"],
		headbutt: ["7V", "4T"],
		heatwave: ["7T", "6T", "5T", "4T"],
		hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
		howl: ["4S3"],
		hyperbeam: ["7M", "7V", "6M", "5M", "4M", "3M"],
		hyperfang: ["7L43"],
		icepunch: ["7T"],
		incinerate: ["6M", "5M"],
		ironhead: ["7T", "7S7", "6T", "5T", "4T"],
		irontail: ["7T", "7V", "6T", "5T", "4M", "3M"],
		laserfocus: ["7T"],
		lastresort: ["7T"],
		lavaplume: ["7L57", "7L1", "7S5", "7S6", "6L1", "5L57", "4L57"],
		leer: ["7L3", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
		mimic: ["3T"],
		mudslap: ["7L23", "7V", "4T", "3T"],
		naturalgift: ["4M"],
		odorsleuth: ["7L13"],
		overheat: ["7M", "6M", "5M", "4M"],
		payback: ["7M"],
		protect: ["7M", "7V", "6M", "5M", "4M", "3M"],
		psychup: ["7M", "7V", "6M", "5M", "4M", "3T"],
		pursuit: ["7L7", "7L1"],
		quash: ["7M", "6M", "5M"],
		raindance: ["7M", "7V", "6M", "5M", "4M", "3M"],
		reflect: ["7M", "6M", "5M", "4M", "3M"],
		rest: ["7M", "7V", "7L55", "6M", "5M", "4M", "3M"],
		return: ["7M", "7V", "6M", "5M", "4M", "3M"],
		roar: ["7M", "7L15", "7V", "6M", "6L15", "5M", "5L15", "4M", "4L15", "4S2", "3M", "3L21", "3S0"],
		rockclimb: ["4M"],
		rocksmash: ["7V", "6M", "5M", "4M", "3M"],
		rocktomb: ["7M"],
		round: ["7M", "6M", "5M"],
		sacredfire: ["7L1", "7S7", "6L1"],
		sandattack: ["7L10", "7L1"],
		sandstorm: ["7M", "7V", "6M", "5M", "4M", "3M"],
		scaryface: ["7L35"],
		secretpower: ["6M", "4M", "3M"],
		shadowball: ["7M", "6M", "5M", "4M"],
		shockwave: ["7T"],
		sleeptalk: ["7M", "7V", "6M", "5T", "4M", "3T"],
		snarl: ["7M", "6M", "5M"],
		snore: ["7T", "7V", "6T", "5T", "4T", "3T"],
		solarbeam: ["7M", "7V", "6M", "5M", "4M", "3M"],
		stomp: ["7L29", "7S5", "7S6", "7V", "6L29", "6S4", "5L29", "4L29", "4S2", "3L41", "3S1", "3S0"],
		stompingtantrum: ["7T"],
		stoneedge: ["7M", "7S7", "6M", "5M", "4M"],
		strength: ["7V", "6M", "5M", "4M", "3M"],
		substitute: ["7M", "6M", "5M", "4M", "3T"],
		sunnyday: ["7M", "7V", "6M", "5M", "4M", "3M"],
		superfang: ["7T", "7L27"],
		swagger: ["7M", "7L43", "7S5", "7S6", "7V", "6M", "6L43", "6S4", "5M", "5L43", "4M", "4L43", "3T", "3L61", "3S1"],
		swift: ["7V", "4T", "3T"],
		tackle: ["7L1"],
		takedown: ["7L31"],
		taunt: ["7M"],
		thief: ["7M"],
		thrash: ["7L51"],
		thunderpunch: ["7T"],
		torment: ["7M"],
		toxic: ["7M", "7V", "6M", "5M", "4M", "3M"],
		uproar: ["7T"],
		uturn: ["7M"],
		willowisp: ["7M", "6M", "5M", "4M"],
		workup: ["7M"],
		yawn: ["7L47"],
		zenheadbutt: ["7T"],
		}
	},
};

exports.BattleLearnsets = BattleLearnsets;
