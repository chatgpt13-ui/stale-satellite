import { getPermalink } from './utils/permalinks';

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
  actions: [{ text: 'Contact Us', href: getPermalink('/contact#form') }],
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
        { text: 'Contact Us', href: getPermalink('/contact#form') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    CONC Thammasat provides executive education, consulting, and lifelong learning programs.
  `,
};
