/** Central place for business + default SEO values. Override `site` in astro.config when you have the live domain. */
export const siteConfig = {
	name: 'Keystone Renovations',
	tagline: 'Quality home renovations across Leicestershire and the East Midlands',
	locale: 'en-GB',
	phoneDisplay: '0116 220 1662',
	/** E.164-style value for `tel:` (UK Leicester 0116). */
	phoneTel: '+441162201662',
	defaultTitle: 'Keystone Renovations',
	defaultDescription:
		'Keystone Renovations delivers thoughtful, high-quality home renovations. Explore our services, process, and how to start your project.',
} as const;
