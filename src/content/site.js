export const projects = [
  {
    id: 'poseman',
    name: 'PoseMan',
    kind: 'Playful machine learning',
    image: '/art/poseman.webp',
    alt: 'Pencil illustration of browser windows with a body-tracking skeleton and motion controls.',
    description: 'A body-controlled game that turns a little movement into play.',
    introduction: 'What if a break from the keyboard could become a game?',
    paragraphs: [
      'PoseMan explores that idea through a webcam and a simple challenge: make shapes with your body and guess the letters. Your movement becomes the input, rather than another click or keypress.',
      'The project combines pose estimation with a second neural network to recognise the poses. An animated character responds to the webcam feed, bringing the prediction back into the game.',
      'It sits at an intersection I enjoy: an approachable interaction on the surface, with an interesting technical problem underneath.'
    ],
    stack: ['JavaScript', 'ml5.js', 'TensorFlow', 'p5.js'],
    source: 'https://github.com/sachsom95/PoseMan',
    extra: { label: 'View the original project', url: 'https://devpost.com/software/poseman' }
  },
  {
    id: 'dublin-bikes',
    name: 'Dublin Bikes',
    kind: 'Data in the everyday',
    image: '/art/bikes.webp',
    alt: 'Pencil illustration of a city bicycle, a street map, and bike station location pins.',
    description: 'Exploring bike availability across Dublin with data and prediction.',
    introduction: 'A small everyday question: will there be a bike when I get there?',
    paragraphs: [
      'A map can show you where a bike station is. Making that information useful for a journey also means understanding availability over time.',
      'This project collected three months of station occupancy data from JCDecaux and used a random forest model to explore predictions of bike availability. A web application brought the station information and predictions together.',
      'The work connected data collection, a prediction model, and a practical interface: a complete path from a changing city to something a person could use.'
    ],
    stack: ['Python', 'Flask', 'JavaScript', 'AWS EC2 / RDS'],
    source: 'https://github.com/sachsom95/Dublin_bikes_official'
  }
];

export const notes = [
  {
    id: 'noise-and-delay',
    title: 'The cost of a calmer signal',
    description: 'A short note on noise, smoothing, and delay.',
    kicker: 'Engineering notes · 3 minute read',
    introduction: 'A smoother line can be easier to read and slower to tell you what changed.',
    paragraphs: [
      'A moving average takes the most recent measurements and gives each one equal weight. Random fluctuations tend to cancel out, so the estimate becomes less jumpy. The window size controls how many readings contribute.',
      'There is a cost. When the underlying signal turns, older measurements still pull the average in the previous direction. A wider window reduces noise but makes the estimate respond more slowly. Smoothing does not give you certainty for free.',
      'Try the signal experiment with no noise and a wide window. The measurements are already perfect, yet the estimate still lags. Then add noise and reduce the window. Choosing a useful setting means balancing two things: how much variation you can tolerate and how quickly you need to notice a change.'
    ],
    extra: { label: 'Try the signal experiment', url: '/labs/signal/' }
  },
  {
    id: 'five-years',
    title: 'Five years of building',
    description: 'From the early days of Protex AI. On LinkedIn.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7509298683172102144/'
  }
];

export const about = {
  id: 'about',
  title: 'Hello, I’m Sachin.',
  kicker: 'Founding engineer · Dublin',
  introduction: 'I build the systems behind useful products, and the teams that bring them to life.',
  paragraphs: [
    'I’m a founding engineer at Protex AI. I joined in the early days and helped build our product engineering team, cloud infrastructure, and frontend systems. My work has spanned software engineering and technical product management, connecting the details of how something works with what people need from it.',
    'Before that, I studied electronics and instrumentation, then computer science at University College Dublin. Robotics, a Formula Student car, and small machine learning projects gave me plenty of reasons to take things apart and figure them out.',
    'Originally from Kerala, I’m now based in Dublin. This site is a home for selected projects, small experiments, and ideas made easier to understand by trying them.'
  ],
  extra: { label: 'Read about my journey at Protex', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7509298683172102144/' }
};

export function articlePath(id) {
  if (id === 'about') return '/about/';
  if (id === 'signal') return '/labs/signal/';
  if (id === 'guide') return '/products/engineering-notes/';
  if (projects.some(project => project.id === id)) return `/work/${id}/`;
  return `/writing/${id}/`;
}

export const pages = [
  { id: null, path: '/', title: 'Sachin Soman — Useful things. Curious questions.', description: 'Founding engineer at Protex AI, based in Dublin. Selected software projects, interactive experiments, and engineering notes.' },
  ...projects.map(project => ({ id: project.id, path: articlePath(project.id), title: `${project.name} — Sachin Soman`, description: project.description })),
  ...notes.filter(note => !note.url).map(note => ({ id: note.id, path: articlePath(note.id), title: `${note.title} — Sachin Soman`, description: note.description })),
  { id: 'about', path: '/about/', title: 'About — Sachin Soman', description: about.introduction },
  { id: 'signal', path: '/labs/signal/', title: 'Can you find the signal? — Sachin Soman', description: 'An interactive experiment in noise, moving averages, and the trade-off between smoothing and delay.' },
  { id: 'guide', path: '/products/engineering-notes/', title: 'Interactive engineering notes — Sachin Soman', description: 'A free sample lesson on noisy data and useful signals. A practical guide in development.' }
];
