/**
 * “Physically” pillars, shared by `HomeHowWeHelp.astro` (Physically tab) and `/services/`.
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
			'We align structure, planning, and craft so the space you imagine becomes the space you live in: safely, compliantly, and with clarity at every stage.',
		bullets: [
			'Coordination with architects, planners, and structural specialists.',
			'Right-first-time sequencing before finishes are fixed.',
			'Transparent options when the building reveals surprises.',
			'Quality control on structural and first-fix work.',
		],
	},
	{
		title: 'Electrical and plumbing',
		body: 'Supporting the demands of modern living, we engage a team of experts to upgrade or renew any service installations your renovation requires.',
		iconSrc: '/icons/how-we-help/electrical.png',
		sectionImage: '/images/services/electrical-plumbing.png',
		pageIntro:
			'Reliable power, water, heating, and ventilation, scoped by vetted experts, kept tidy and accessible, and future-proofed where it counts.',
		bullets: [
			'Upgrades and renewals scoped to brief, budget, and regulations.',
			'Clear containment and protection of live services on site.',
			'Testing and commissioning documented at handover.',
			'Efficient first-fix to finishing handovers, fewer callbacks.',
		],
	},
	{
		title: 'Hardware and materials',
		body: 'We research and source materials from trusted suppliers and artisan specialists – ensuring the quantity and quality procured fits the brief & budget.',
		iconSrc: '/icons/how-we-help/hardware.png',
		sectionImage: '/images/services/hardware-materials.png',
		pageIntro:
			'Materials are where budget and longevity meet. We research, sample where it helps, and procure so quantities, lead times, and quality match what we agreed.',
		bullets: [
			'Specification that respects budget without downgrading durability.',
			'Provenance and lead times tracked to keep the site moving.',
			'Artisan and specialist inputs when the brief needs them.',
			'Waste-conscious ordering so investment lands on the walls, not the skip.',
		],
	},
	{
		title: 'Fixtures and fittings',
		body: 'Matching your flair and style with functionality and deliverability. We procure, install and commission.',
		iconSrc: '/icons/how-we-help/fixtures.png',
		sectionImage: '/images/services/fixtures-fittings.png',
		pageIntro:
			'Taps, ironmongery, sanitaryware, lighting. We balance taste with performance, then procure, install, and commission so everything works as well as it looks.',
		bullets: [
			'Curated shortlists that cut choice fatigue.',
			'Compatibility checks across finishes and suppliers.',
			'Professional installation with no “almost fits” at handover.',
			'Snagging that covers function as well as finish.',
		],
	},
	{
		title: 'Interior décor',
		body: 'Our decorators breathe new life into tired spaces with careful preparation, colour, and finish.',
		iconSrc: '/icons/how-we-help/wall-coverings.png',
		sectionImage: '/images/services/decor-landscaping.png',
		pageIntro:
			'Experienced decorators lift interiors with proper preparation, colour chosen for light and use, and finishes that last beyond the first walk-through.',
		bullets: [
			'Preparation, colour, and finishes to a lasting standard.',
			'Wall and ceiling treatments matched to light, use, and wear.',
			'Sequencing with wet trades so finishes are not compromised.',
			'Snagging that treats paint, joinery, and ironmongery as one handover.',
		],
	},
	{
		title: 'Landscaping',
		body: 'We transform outdoor spaces, making them attractive and usable extensions of your property.',
		iconSrc: '/icons/how-we-help/landscaping.png',
		sectionImage: '/images/services/landscaping-garden.png',
		pageIntro:
			'Gardens and boundaries planned as usable extensions of your home, with drainage, access, levels, and materials working together through the seasons.',
		bullets: [
			'External works planned for drainage, access, and year-round use.',
			'Levels and materials chosen for how you move through the space.',
			'Coordination with structural and services work.',
			'Handover aligned with interior completion.',
		],
	},
] as const;
