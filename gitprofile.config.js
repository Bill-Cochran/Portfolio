// gitprofile.config.js

const config = {
  github: {
    username: 'Bill-Cochran', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Bill-Cochran',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '(540)-454-3002',
    email: 'Cochranb20@students.ecu.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Python',
    'Excel',
    'MySQL',
    'CSS',
  ],
  experiences: [
    {
      company: 'Estes Express Lines',
      position: 'Business Systems Analyst Intern',
      from: 'June 2018',
      to: 'Present',
      companyLink: 'https://www.estes-express.com/',
    },
    {
      company: 'Wegmans',
      position: 'Produce Customer Service',
      from: 'December 2018',
      to: 'September 2022',
      companyLink: 'https://www.wegmans.com/',
    },
      {
      company: 'Liberty Transport',
      position: 'Operations Coordinator',
      from: 'May 2021',
      to: 'August 2021',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Management Information Systems',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement & Pitch video ',
      description:
        'This is my pitch video.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Security Audit',
      description:
        'This is a security audit that was done on a fictional company.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
     {
      title: 'Respond to a Security Incident',
      description:
        'I responded to a security incident of a fictional company.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
     {
      title: 'Packet Tracer- Cisco Badge',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
     {
      title: '(ISC)2 Certified in Cybersecurity Badge',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
     {
      title: 'Cloud Computing- AWS Cloud Practitioner Badge',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
     {
      title: 'Personal Website',
      description:
        '',
      imageUrl: 'https://faber.ecu.edu/intra/cochranb20/Project%201%20Cochran/index.html/250x250',
      link: 'https://faber.ecu.edu/intra/cochranb20/Project%201%20Cochran/index.html',
    },
     {
      title: 'API Address/Zipcode Website',
      description:
        '',
      imageUrl: 'https://faber.ecu.edu/intra/cochranb20/Project3//250x250',
      link: 'https://faber.ecu.edu/intra/cochranb20/Project3/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
