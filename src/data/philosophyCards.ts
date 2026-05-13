/**
 * Philosophy tab content (The Way We Work → The Philosophy) — shared by
 * `HomeHowWeHelp.astro` and `/how-we-work/`.
 */
export const philosophyCards = [
	{
		title: 'Consideration to your Lifestyle Needs',
		body: 'We are the Single point of contact for you. We structure our role to align with your lifestyle ensuring the project and your life, stay on track! We assess the following elements to ensure we are working for you the way you need us to.',
		iconSrc: '/icons/how-we-help/personal/tea.png',
	},
	{
		title: 'Time',
		body: 'Everyone\u2019s time is precious and \u201cfinding time\u201d for new projects is not always possible. We give you your time back.',
		iconSrc: '/icons/how-we-help/personal/clock.png',
	},
	{
		title: 'Reliability & Trustworthiness',
		body: 'We will turn up and deliver as promised. We will treat your property like it is our own. Our testimonies testify to this.',
		iconSrc: '/icons/how-we-help/personal/shield.png',
	},
	{
		title: 'Know-How',
		body: 'We work with teams of experienced crafts people and trades all of whom have decades of experience. There is no such thing as a renovating problem that we can\u2019t find a solution to.',
		iconSrc: '/icons/how-we-help/personal/bulb.png',
	},
	{
		title: 'Confidentiality',
		body: 'Respecting your Privacy and Showing Discretion at all times.',
		iconSrc: '/icons/how-we-help/personal/eye.png',
	},
	{
		title: 'Security',
		body: 'We follow strict protocols in securing your home and privacy.',
		iconSrc: '/icons/how-we-help/personal/padlock.png',
	},
] as const;

export type PhilosophyCard = (typeof philosophyCards)[number];
