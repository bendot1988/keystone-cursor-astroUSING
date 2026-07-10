/**
 * Philosophy tab content (The Way We Work to The Philosophy), shared by
 * `HomeHowWeHelp.astro` and `/how-we-work/`.
 *
 * `body` = copy on the home tab. `pageIntro` + `bullets` = How We Work page only.
 * `sectionImage` = alternating band photo on `/how-we-work/` (Reliability uses the combined time/reliability asset; Time has its own milestone photo).
 *
 * How We Work-only options:
 * - `leadEmphasis`: pull first bullet or first intro sentence into a lead line.
 */
export interface PhilosophyCard {
	title: string;
	body: string;
	iconSrc: string;
	/** Band photography on `/how-we-work/` (public path). */
	sectionImage: string;
	pageIntro: string;
	bullets: readonly string[];
	leadEmphasis?: 'firstBullet' | 'introFirstSentence';
}

export const philosophyCards = [
	{
		title: 'Consideration to your lifestyle needs',
		body: 'We are your single point of contact, structuring the project around your life so both stay on track.',
		iconSrc: '/icons/how-we-help/personal/tea.png',
		sectionImage: '/images/how-we-work/lifestyle-needs.png',
		leadEmphasis: 'firstBullet',
		pageIntro:
			'Renovation should fit around your life. We are your single point of contact, coordinating trades, decisions, and timelines so you stay informed without being overwhelmed.',
		bullets: [
			'One accountable team from briefing through to handover.',
			'Site visits and milestones planned around your routine.',
			'Updates when you want them; quiet when you need space.',
			'Clear staging so you always know what happens next.',
		],
	},
	{
		title: 'Time',
		body: 'Everyone’s time is precious. We give yours back.',
		iconSrc: '/icons/how-we-help/personal/clock.png',
		sectionImage: '/images/how-we-work/time.png',
		pageIntro:
			'We protect your diary with realistic schedules, dependable milestones, and clear communication, so the project advances while you keep life on track.',
		bullets: [
			'Realistic programmes agreed up front, with buffer where it matters.',
			'Dependencies and decisions flagged before they become urgent.',
			'Arrivals, noise, and working patterns agreed in advance.',
		],
	},
	{
		title: 'Reliability and trustworthiness',
		body: 'We turn up and deliver as promised, and treat your property like our own.',
		iconSrc: '/icons/how-we-help/personal/shield.png',
		sectionImage: '/images/how-we-work/time-reliability.png',
		pageIntro:
			'Trust is earned on site. We show up when we say we will, treat your home with care, and stand by what we promise.',
		bullets: [
			'Transparent progress: the work, the quality, and the next steps.',
			'Protection, cleanliness, and care as if it were our own home.',
			'Long-standing client relationships and verifiable testimonials.',
		],
	},
	{
		title: 'Know-how',
		body: 'Experienced crafts people and trades with decades behind them. No renovation problem without a solution.',
		iconSrc: '/icons/how-we-help/personal/bulb.png',
		sectionImage: '/images/how-we-work/know-how.png',
		leadEmphasis: 'introFirstSentence',
		pageIntro:
			'Every renovation throws up questions. We draw on seasoned craftspeople and trades with decades of experience, and stay hands-on until the right solution is in place.',
		bullets: [
			'Vetted specialists across structure, electrics, plumbing, and finishing.',
			'Creative problem-solving when the building reveals the unexpected.',
			'Quality decisions guided by what will last, not what is quickest.',
		],
	},
	{
		title: 'Confidentiality',
		body: 'Respecting your privacy and showing discretion at all times.',
		iconSrc: '/icons/how-we-help/personal/eye.png',
		sectionImage: '/images/how-we-work/confidentiality.png',
		pageIntro:
			'Your home, finances, and circumstances stay private. We treat every conversation and detail with discretion, whether you renovate to stay, let, or sell.',
		bullets: [
			'Sensitive information shared only with those who need it.',
			'No careless talk about your project or property.',
			'Your preferences respected on photography, referrals, and mention.',
		],
	},
	{
		title: 'Security',
		body: 'Strict protocols to secure your home and privacy throughout the build.',
		iconSrc: '/icons/how-we-help/personal/padlock.png',
		sectionImage: '/images/how-we-work/security.png',
		pageIntro:
			'Open doors and changing access can unsettle any household. We follow clear protocols to keep your home secure and your peace of mind intact.',
		bullets: [
			'Controlled access: who is on site, when, and under whose supervision.',
			'Doors, windows, and outbuildings secured at the end of each day.',
			'Keys, alarms, and security concerns agreed from day one.',
		],
	},
] as const satisfies readonly PhilosophyCard[];
