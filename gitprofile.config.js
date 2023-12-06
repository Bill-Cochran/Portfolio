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
      'https://drive.google.com/file/d/1wtLX1XkMn6_GHoQKqFbD_c1S2Q3tsrXr/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
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
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement & Pitch video ',
      description:
        'Created a professional statement and pitch video showcasing my skills and experiences.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1PMOJ3IZ4ccbAMYrz_QNIJ7jwOufaHi6M/view?usp=drive_link',
    },
    {
      title: 'Security Audit',
      description:
        'Conducted a security audit for a fictional company, identifying vulnerabilities and proposing solutions.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1F6IMeLS5HW4jkNzvimecpJDyGSav6yNr/view?usp=drive_link',
    },
     {
      title: 'Respond to a Security Incident',
      description:
        'Responded to a security incident involving a fictional company, implementing measures to mitigate risks and address the incident.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1y_-XYswzQ2O3E2KQBAysngwocOlMb9C4/view?usp=drive_link',
    },
     {
      title: 'Packet Tracer- Cisco Badge',
      description:
        'Completed a Packet Tracer activity related to Cisco networking, demonstrating proficiency in network simulation.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1JB6g88zdUBsw8aOkO4IefFj3OZ78d1HL/view?usp=drive_link',
    },
     {
      title: '(ISC)2 Certified in Cybersecurity Badge',
      description:
        'Completed a certification preparation course for ISC2 Certified in Cybersecurity (CC), gaining essential knowledge and skills for cybersecurity proficiency.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1qIHoW8iyKAE-1pYZqSntrFBwxyEu9NzY/view?usp=drive_link',
    },
     {
      title: 'Cloud Computing- AWS Cloud Practitioner Badge',
      description:
        ' Attained the AWS Cloud Practitioner Badge, indicating proficiency in cloud computing concepts and AWS services.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/1DpbDmEcG4MhAWPMbAM3Bczx98SqqaIwQ/view?usp=drive_link',
    },
     {
      title: 'Personal Website',
      description:
        'Designed and developed a personal website showcasing skills and professional background.',
      imageUrl: '',
      link: 'https://faber.ecu.edu/intra/cochranb20/Project%201%20Cochran/index.html',
    },
     {
      title: 'API Address/Zipcode Website',
      description:
        'Created a website utilizing API to retrieve and display address/zipcode information, demonstrating web development skills.',
      imageUrl: '',
      link: 'https://faber.ecu.edu/intra/cochranb20/Project3/',
    },
     {
      title: 'Website Proposal for Fictional Company',
      description:
        'Developed a proposal, including a wireflow diagram, for a stylish, mobile-friendly website to enhance Greenville Exotic Pets online presence.',
      imageUrl: '',
      link: 'https://drive.google.com/file/d/182q2dJb8rsLNhLExnBYBjE1tbZmMAfQ5/view?usp=drive_link',
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
