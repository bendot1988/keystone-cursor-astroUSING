/** Client testimonials, used on the homepage carousel and `/testimonials/` grid. */
export interface Testimonial {
	/** Verbatim snippet from `quote`, shown first on cards and carousel. */
	highlight: string;
	/** Full client wording, shown below the highlight, slightly smaller. */
	quote: string;
	name: string;
	role: string;
}

export const testimonials: readonly Testimonial[] = [
	{
		highlight: 'They were amazing with a wealth of knowledge to help & advise.',
		quote:
			'I would highly recommend Keystone Renovations. They were amazing with a wealth of knowledge to help & advise. All the works were completed promptly and to a high standard.',
		name: 'Sharon Brown',
		role: 'Home owner, Nottinghamshire',
	},
	{
		highlight: 'The speed and quality of the work done was second to none and very competitively priced.',
		quote:
			'I cannot thank Keystone Renovations enough for their assistance and guidance upon finding myself thrust into the world of property renovation and repair after a family bereavement. They promptly pulled a team of contractors together to do the necessary work to get my Father in Law\'s property ready to market. The speed and quality of the work done was second to none and very competitively priced.',
		name: 'Lisa Hosking',
		role: 'Home seller, Derbyshire',
	},
	{
		highlight:
			'Keystone have been a complete godsend for me and I would 100% recommend them for anything property related.',
		quote:
			'Keystone Renovations have organised and completed various property issues for me, from a full renovation of a rental flat to emergency works on a roof. They are always available, very proactive and on numerous occasions have gone above & beyond – even visiting a new tenant within 2 hours of being contacted about a boiler problem! Keystone have been a complete godsend for me and I would 100% recommend them for anything property related.',
		name: 'Lisa Hosking',
		role: 'Landlord, Derbyshire',
	},
	{
		highlight: 'The quality of work was excellent all round!',
		quote:
			'I recently engaged the services of Keystone Renovations for quite a large job, readying an old Manor House going up for sale. There were numerous jobs requiring urgent attention and involved many different skill levels. Keystone Renovations were able to organise a team very quickly. The quality of work was excellent all round! I wouldn\'t hesitate to recommend this company.',
		name: 'Matthew Gardiner Legge',
		role: 'Oxford estate agent',
	},
	{
		highlight:
			'They were able to respond urgently to make good my rental property which had been left in very poor condition, turning it around promptly ready for the next tenant.',
		quote:
			'I can\'t recommend Richard and his team highly enough. Richard is totally reliable, thorough, works to a high standard and is able to come up with solutions to problems. They were able to respond urgently to make good my rental property which had been left in very poor condition, turning it around promptly ready for the next tenant.',
		name: 'Sarah Elliott',
		role: 'Landlord, Leicestershire',
	},
] as const;

/** Single centred pull-quote under breather stats: real client wording, shortened for this band only. */
export const servicesBreatherPullQuote = {
	text: 'From a full rental flat renovation to emergency roof work: always available, very proactive. A complete godsend; I would 100% recommend them for anything property related.',
	name: 'Lisa Hosking',
	role: 'Landlord, Derbyshire',
} as const;

export const howWeWorkBreatherPullQuote = {
	text: 'Amazing with a wealth of knowledge to help and advise. Works completed promptly and to a high standard.',
	name: 'Sharon Brown',
	role: 'Home owner, Nottinghamshire',
} as const;
