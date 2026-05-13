/**
 * “Physically” pillars — shared by `HomeHowWeHelp.astro` (Physically tab) and `/services/`.
 * Home uses `title`, `body`, `iconSrc`; Services page uses `sectionImage`, `pageIntro` + `bullets`.
 */
export interface ServicesPhysicalCard {
	title: string;
	body: string;
	iconSrc: string;
	sectionImage: string;
	pageIntro: string;
	bullets: readonly string[];
}

export const servicesPhysicalCards: readonly ServicesPhysicalCard[] = [
	{
		title: 'Structural and design',
		body: 'Working with your Architect or Planner – we select the right trades and crafts to modify and create your new space.',
		iconSrc: '/icons/how-we-help/structural.png',
		sectionImage: '/images/services/structural-design.png',
		pageIntro:
			'Form follows function, but your home should feel like yours. We align structure, planning, and craft so the space you imagine becomes the space you live in—safely, compliantly, and with clarity at every stage.',
		bullets: [
			'Coordination with architects, planners, and structural specialists where your project needs them.',
			'Right-first-time sequencing: load paths, openings, and services considered before finishes are fixed.',
			'Transparent options when the building reveals surprises—costs and trade-offs explained plainly.',
			'Quality control on structural and first-fix work before we commit to the layers you see every day.',
		],
	},
	{
		title: 'Electrical and plumbing',
		body: 'Supporting the demands of modern living, we engage a team of experts to upgrade or renew any service installations your renovation requires.',
		iconSrc: '/icons/how-we-help/electrical.png',
		sectionImage: '/images/services/electrical-plumbing.png',
		pageIntro:
			'Modern homes depend on reliable power, water, heating, and ventilation. We bring in vetted experts, keep routes tidy and accessible, and future-proof where it makes sense—so your renovation supports how you live now and next.',
		bullets: [
			'Upgrades and renewals scoped to your brief, budget, and regulatory requirements.',
			'Clear containment and protection of live services while work is in progress.',
			'Testing and commissioning documented so you know what was done and where it runs.',
			'Efficient handover between first fix and finishing trades—fewer callbacks, cleaner results.',
		],
	},
	{
		title: 'Hardware and materials',
		body: 'We research and source materials from trusted suppliers and artisan specialists – ensuring the quantity and quality procured fits the brief & budget.',
		iconSrc: '/icons/how-we-help/hardware.png',
		sectionImage: '/images/services/hardware-materials.png',
		pageIntro:
			'Materials are where budget and longevity meet. We research, sample where it helps, and procure from suppliers we trust—so quantities, lead times, and quality match what we agreed, not what was easiest to order.',
		bullets: [
			'Specification that respects your budget without quietly downgrading durability.',
			'Provenance and lead times tracked so the site is not left waiting on a single tile batch.',
			'Artisan and specialist inputs when the brief calls for something beyond the catalogue.',
			'Waste-conscious ordering and storage so your investment lands on the walls, not the skip.',
		],
	},
	{
		title: 'Fixtures and fittings',
		body: 'Matching your flair and style with functionality and deliverability. We procure, install and commission.',
		iconSrc: '/icons/how-we-help/fixtures.png',
		sectionImage: '/images/services/fixtures-fittings.png',
		pageIntro:
			'Fixtures are the details you touch every day—taps, ironmongery, sanitaryware, lighting. We balance your taste with fit-for-purpose performance, then procure, install, and commission so everything works as beautifully as it looks.',
		bullets: [
			'Curated shortlists where choice fatigue would otherwise slow you down.',
			'Compatibility checks between finishes, suppliers, and installation tolerances.',
			'Professional installation and adjustment—no “almost fits” at handover.',
			'Snagging that includes function as well as finish: every handle, hinge, and dial checked.',
		],
	},
	{
		title: 'Décor and landscaping',
		body: 'Our decorators breathe new life into tired spaces; we transform outdoor areas into usable extensions of your home.',
		iconSrc: '/icons/how-we-help/wall-coverings.png',
		sectionImage: '/images/services/decor-landscaping.png',
		pageIntro:
			'Inside and out, the final layers are what people feel first. Experienced decorators lift interiors with care and patience; outside, we shape gardens and boundaries into spaces you actually use—extensions of your home, not an afterthought.',
		bullets: [
			'Interior decoration: preparation, colour, and finishes executed to a lasting standard.',
			'Wall and ceiling treatments chosen for the room’s light, use, and wear patterns.',
			'Landscaping and external works planned for drainage, access, and year-round appeal.',
			'Coordinated handover so interior calm and exterior pride arrive together.',
		],
	},
] as const;
