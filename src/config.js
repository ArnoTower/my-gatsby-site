module.exports = {
  email: 'arnaudhightowerbusiness@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ArnoTower',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCd9dPom229x3WrP3_M3pHgQ',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ArnaudHightower',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arnaud-hightower/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ArnoTower',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    silver: '#C0C0C0',
    midnightblue: '#191970',
    darkmidnightblue: '#000c19',
    accentblue: '#0047AB'
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
