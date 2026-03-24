import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'About CONC',
          href: getPermalink('/conc/about/about-conc'),
        },
        {
          text: 'Executives',
          href: getPermalink('/conc/about/executives'),
        },
        {
          text: 'Facilities',
          href: getPermalink('/conc/about/facilities'),
        },
      ],
    },
    {
      text: 'Training Service',
      links: [
        {
          text: 'Open Enrollment Programs',
          href: getPermalink('/conc/training/open-enrollment'),
        },
        {
          text: 'Customized Training',
          href: getPermalink('/conc/training/customized-training'),
        },
        {
          text: 'E-Documents',
          href: getPermalink('/conc/training/e-documents'),
        },
      ],
    },
    {
      text: 'Consulting Service',
      links: [
        {
          text: 'Service Field',
          href: getPermalink('/conc/consulting/service-field'),
        },
        {
          text: 'Consulting Project',
          href: getPermalink('/conc/consulting/consulting-project'),
        },
        {
          text: 'Client List',
          href: getPermalink('/conc/consulting/client-list'),
        },
      ],
    },
    {
      text: 'Learning',
      links: [
        {
          text: 'Knowledge Articles',
          href: getPermalink('/conc/learning/knowledge-articles'),
        },
        {
          text: 'Forum and Videos',
          href: getPermalink('/conc/learning/forum-videos'),
        },
      ],
    },
    {
      text: 'News & Events',
      links: [
        {
          text: 'All News',
          href: getPermalink('/conc/news-events/all-news'),
        },
        {
          text: 'Announcements',
          href: getPermalink('/conc/news-events/announcements'),
        },
        {
          text: 'Program Calendars',
          href: getPermalink('/conc/news-events/program-calendars'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'About CONC', href: getPermalink('/conc/about/about-conc') },
        { text: 'Executives', href: getPermalink('/conc/about/executives') },
        { text: 'Facilities', href: getPermalink('/conc/about/facilities') },
      ],
    },
    {
      title: 'Training',
      links: [
        { text: 'Open Enrollment', href: getPermalink('/conc/training/open-enrollment') },
        { text: 'Customized Training', href: getPermalink('/conc/training/customized-training') },
        { text: 'E-Documents', href: getPermalink('/conc/training/e-documents') },
      ],
    },
    {
      title: 'Consulting',
      links: [
        { text: 'Service Field', href: getPermalink('/conc/consulting/service-field') },
        { text: 'Consulting Project', href: getPermalink('/conc/consulting/consulting-project') },
        { text: 'Client List', href: getPermalink('/conc/consulting/client-list') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'All News', href: getPermalink('/conc/news-events/all-news') },
        { text: 'Knowledge Articles', href: getPermalink('/conc/learning/knowledge-articles') },
        { text: 'Contact Us', href: getPermalink('/#contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    CONC Thammasat concept homepage built on Astro. Replace placeholder links and contact details with production data.
  `,
};
