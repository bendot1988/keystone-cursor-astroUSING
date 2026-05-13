/**
 * Philosophy tab content (The Way We Work → The Philosophy) — shared by
 * `HomeHowWeHelp.astro` and `/how-we-work/`.
 *
 * `body` = copy on the home tab. `pageIntro` + `bullets` = How We Work page only.
 * `sectionImage` = alternating band photo on `/how-we-work/` (Reliability uses the combined time/reliability asset; Time has its own milestone photo).
 *
 * How We Work–only options:
 * - `leadEmphasis` — pull first bullet or first intro sentence into a lead line (ignored when `listStyle` is `steps`).
 * - `listStyle: 'steps'` — numbered steps instead of keystone bullets.
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
	listStyle?: 'bullets' | 'steps';
}

export const philosophyCards = [
	{
		title: 'Consideration to your Lifestyle Needs',
		body: 'We are the Single point of contact for you. We structure our role to align with your lifestyle ensuring the project and your life, stay on track! We assess the following elements to ensure we are working for you the way you need us to.',
		iconSrc: '/icons/how-we-help/personal/tea.png',
		sectionImage: '/images/how-we-work/lifestyle-needs.png',
		leadEmphasis: 'firstBullet',
		pageIntro:
			'Renovation should fit around your life, not the other way around. We are your single point of contact—coordinating trades, decisions, and timelines so you stay informed without being overwhelmed.',
		bullets: [
			'One accountable team from first briefing through to handover.',
			'Site visits, access, and milestones planned around your routine and commitments.',
			'Updates when you want them; quiet when you need space to get on with your day.',
			'Clear staging between phases so you always know what happens next.',
			'Flexible touchpoints for decisions that need your sign-off without slowing the site.',
		],
	},
	{
		title: 'Time',
		body: 'Everyone\u2019s time is precious and \u201cfinding time\u201d for new projects is not always possible. We give you your time back.',
		iconSrc: '/icons/how-we-help/personal/clock.png',
		sectionImage: '/images/how-we-work/time.png',
		listStyle: 'steps',
		pageIntro:
			'Finding time for a renovation alongside work and family is rarely easy. We protect your diary with realistic schedules, dependable milestones, and clear communication—so the project advances while you keep your life on track.',
		bullets: [
			'Realistic programmes agreed up front, with buffer where it matters.',
			'Fewer surprises: we flag dependencies and decisions before they become urgent.',
			'Respect for your hours—arrivals, noise, and working patterns agreed in advance.',
		],
	},
	{
		title: 'Reliability & Trustworthiness',
		body: 'We will turn up and deliver as promised. We will treat your property like it is our own. Our testimonies testify to this.',
		iconSrc: '/icons/how-we-help/personal/shield.png',
		sectionImage: '/images/how-we-work/time-reliability.png',
		pageIntro:
			'Trust is earned on site as well as on paper. We show up when we say we will, treat your home with care, and stand by what we promise—so you always know where you stand.',
		bullets: [
			'Transparent progress: you see the work, the quality, and the next steps.',
			'Your property looked after as we would our own—protection, cleanliness, and care.',
			'Long-standing client relationships and testimonials you can verify for yourself.',
		],
	},
	{
		title: 'Know-How',
		body: 'We work with teams of experienced crafts people and trades all of whom have decades of experience. There is no such thing as a renovating problem that we can\u2019t find a solution to.',
		iconSrc: '/icons/how-we-help/personal/bulb.png',
		sectionImage: '/images/how-we-work/know-how.png',
		leadEmphasis: 'introFirstSentence',
		pageIntro:
			'Every renovation throws up questions—structure, services, finishes, and regulations. We draw on seasoned craftspeople and trades with decades of experience, and we stay hands-on until the right solution is in place.',
		bullets: [
			'Access to vetted specialists across structure, electrics, plumbing, and finishing.',
			'Creative problem-solving when the building reveals something unexpected.',
			'Quality decisions guided by what will last—not what is quickest to install.',
		],
	},
	{
		title: 'Confidentiality',
		body: 'Respecting your Privacy and Showing Discretion at all times.',
		iconSrc: '/icons/how-we-help/personal/eye.png',
		sectionImage: '/images/how-we-work/confidentiality.png',
		pageIntro:
			'Your home, finances, and personal circumstances are not gossip for the street. We treat every conversation, document, and detail with discretion—whether you are renovating to stay, to let, or to sell.',
		bullets: [
			'Sensitive information shared only with people who need it to do the job.',
			'Respectful conduct on site and off: no careless talk about your project or property.',
			'Alignment with your preferences on photography, referrals, and public mention.',
		],
	},
	{
		title: 'Security',
		body: 'We follow strict protocols in securing your home and privacy.',
		iconSrc: '/icons/how-we-help/personal/padlock.png',
		sectionImage: '/images/how-we-work/security.png',
		listStyle: 'steps',
		pageIntro:
			'Open doors, unfamiliar faces, and changing access patterns can unsettle any household. We follow clear protocols to keep your home secure and your peace of mind intact throughout the build.',
		bullets: [
			'Controlled access: who is on site, when, and under whose supervision.',
			'Doors, windows, and outbuildings checked and secured at the end of each working day.',
			'Coordination with you on keys, alarms, and any specific security concerns from day one.',
			'Clear reporting and escalation paths if anything feels out of place.',
		],
	},
] as const satisfies readonly PhilosophyCard[];
