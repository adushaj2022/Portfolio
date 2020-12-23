import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anthony Dushaj', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anthony Dushaj',
  subtitle: 'I am a Full Stack Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'person.png',
  paragraphOne: 'Front End: HTML, CSS, JavaScript, TypeScript, React js, Bootstrap, Material UI',
  paragraphTwo: 'Backend: Node js, Express, PHP, Java, Python',
  paragraphThree: 'Databases: MySQL, PostgreSQL, MongoDB',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'amzn-clone.png',
    title: 'Amazon Clone',
    info:
      'Full stack clone of the amazon website was created using React Js and firebase. The site is a fully functional e-commerce website with payment procoessing done with stripe.',
    info2: '',
    url: 'https://clone-7f310.web.app/',
    repo: 'https://github.com/adushaj2022/Amazon-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cvd-19.png',
    title: 'Covid-19 Live Tracker',
    info:
      'Covid 19 Tracker built with React Js, Chart js, Leaflet Js, and Material UI. Data is fetched from the disease-sh API. The app utilizes react hooks and the built in fetch api',
    info2: '',
    url: 'https://covid19-tracker-6a7c8.web.app/',
    repo: 'https://github.com/adushaj2022/covid19tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ntflx.png',
    title: 'Netflix Clone',
    info:
      'Front end project created with React js in an attempt to clone the Netflix landing page. Axios was used as an API to make HTTP requests to https://www.themoviedb.org/. The site was deployed using Firebase.',
    info2: '',
    url: 'https://netflix-clone-2020-f6526.web.app/',
    repo: 'https://github.com/adushaj2022/netflix-clone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Lets connect',
  email: 'anthony.dushaj1@marist.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/12101152/anthony-718',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anthony-dushaj-486a921b3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adushaj2022',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
