// All values here are owner-supplied content. Nothing may be invented.
// PLACEHOLDER is the release-gate token: the build must not ship while it remains.

export const PLACEHOLDER = '[USER INPUT REQUIRED]'

export const site = {
  name: 'Samuel Rain Gunawan',
  shortName: 'Rain',
  tagline: 'Software engineering graduate, exploring new things',
  email: 'samuelsofficials28@gmail.com',
  // OQ-009: shown as plain text, no obfuscation. Owner can change this.
  emailObfuscated: false,
  links: [
    { label: 'GitHub', href: 'https://github.com/Reain2' },
  ],
}

export const home = {
  headline: 'Tech Enthusiast, Exploring New Things',
  intro:
    'I am curious about how things work, so I keep trying new things. When something looks like a challenge, I take it on.',
  // Landing order: what I do, currently, then selected work.
  sections: [
    { title: 'What I do', body: 'Photography, video editing and trying out new tools, with a close interest in AI and where it is going.' },
    {
      title: 'Currently',
      body: 'Graduated in 2027 from Cinta Kasih Tzu Chi Vocational School, majoring in Software Engineering.',
    },
    {
      title: 'Selected work',
      body: 'Gravity Slash is a hand-sensor slash game inspired by Fruit Ninja. It includes math questions, three lives, and supports slicing with up to two hands.',
    },
  ],
}

export const about = {
  intro:
    'A software engineering graduate who likes figuring things out by doing them, with photography, video and new technology as the usual starting points.',
  story: [
    {
      heading: 'Background',
      body: 'Kindergarten through junior high school at Santo Leo 2. Graduated in 2027 from Cinta Kasih Tzu Chi Vocational School, majoring in Software Engineering.',
    },
    {
      heading: 'Approach',
      body: 'I do my best to make everything work. If something does not work the first time, I keep at it until it does.'
    },
    {
      heading: 'Interests',
      body: 'Football, running, games, reading books and listening to music.',
    },
  ],
}

export const experience = {
  education: [
    {
      title: 'Cinta Kasih Tzu Chi Vocational School',
      organisation: '',
      date: 'Graduated 2027 · Software Engineering',
      body: 'Vocational high school graduate.'
    },
    {
      title: 'Santo Leo 2',
      organisation: '',
      date: '',
      body: 'Kindergarten through junior high school.',
    },
  ],
  work: [
    {
      title: 'General Support Intern',
      organisation: 'PT ZENBU HEAD OFFICE',
      date: 'January–March 2026',
      body: 'Prepared for IT support work focused on maintaining technology stability and user comfort during daily operations.',
    },
    {
      title: 'Humanitarian Production Intern',
      organisation: 'PT Daai TV',
      date: 'July–September 2026',
      body: 'Three-month internship in humanitarian production, supporting production work and technical coordination.'
    },
  ],
  achievements: [
    {
      title: 'LKS Web Development — West Jakarta',
      organisation: '',
      date: 'First place',
      body: 'Won first place in an offline web development competition without access to Wi-Fi or online references.',
    },
    {
      title: 'Technofest — Agentic AI',
      organisation: 'Universitas Bunda Mulia',
      date: 'Second place · 2026',
      body: 'Placed second in the Agentic AI category under the theme Reimagining the Future of Learning.',
    },
    {
      title: 'BEEFEST',
      organisation: '',
      date: 'Top 10 finalist · 2024',
      body: 'Selected as one of the top 10 finalists nationwide.',
    },
  ],
  certifications: [
    {
      title: 'TOEIC',
      organisation: '',
      date: 'Score 890',
      body: 'English proficiency test score.',
    },
  ],
  skills: [
    {
      title: 'Programming',
      organisation: 'HTML · CSS · PHP · JavaScript',
      date: '',
      body: 'Web development and software fundamentals.',
    },
    {
      title: 'Frameworks and tools',
      organisation: 'Laravel · Vue.js · Visual Studio Code · Microsoft Office',
      date: '',
      body: 'Building, editing and supporting digital work.',
    },
    {
      title: 'Working style',
      organisation: 'Problem solving · Time management · Team collaboration',
      date: '',
      body: 'Practical, collaborative and focused on making systems work reliably.',
    },
  ],
}

export const contact = {
  note: 'Open to conversations about technology, photography, and creative projects.',
}

export const blog = {
  intro: PLACEHOLDER,
  posts: [],
}

export const notFound = {
  heading: 'This page does not exist',
  body: 'The address may be mistyped or the page may have moved.',
}
