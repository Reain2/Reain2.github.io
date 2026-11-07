// All values here are owner-supplied content. Nothing may be invented.
// PLACEHOLDER is the release-gate token: the build must not ship while it remains.

export const PLACEHOLDER = '[USER INPUT REQUIRED]'

export const site = {
  name: 'Samuel Rain Gunawan',
  shortName: 'Rain',
  tagline: 'Tech enthusiast, exploring new things',
  email: 'samuelsofficials28@gmail.com',
  // OQ-009: shown as plain text, no obfuscation. Owner can change this.
  emailObfuscated: false,
  // CR-011: still missing. Placeholder until the owner supplies URLs.
  links: [],
}

export const home = {
  headline: 'Tech Enthusiast, Exploring New Things',
  intro:
    'I am curious about how things work, so I keep trying new things. When something looks like a challenge, I take it on.',
  sections: [
    { title: 'Selected work', body: PLACEHOLDER },
    { title: 'What I do', body: 'Photography, video editing and trying out new tools, with a close interest in AI and where it is going.' },
    {
      title: 'Currently',
      body: '12th grade at Cinta Kasih Tzu Chi Vocational School, learning by trying things out.',
    },
  ],
}

export const about = {
  intro:
    'A student who likes figuring things out by doing them, with photography, video and new technology as the usual starting points.',
  story: [
    {
      heading: 'Background',
      body: 'Kindergarten through junior high school at Santo Leo 2. Now in 12th grade at Cinta Kasih Tzu Chi Vocational School.',
    },
    {
      heading: 'Approach',
      body: 'Do my best to make everything work. If something does not work the first time, I keep at it until it does.',
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
      date: '12th grade, in progress',
      body: 'Vocational high school.',
    },
    {
      title: 'Santo Leo 2',
      organisation: '',
      date: '',
      body: 'Kindergarten through junior high school.',
    },
  ],
  work: [],
  achievements: [],
  certifications: [],
}

export const contact = {
  note: PLACEHOLDER,
}

export const blog = {
  intro: PLACEHOLDER,
  posts: [],
}

export const notFound = {
  heading: 'This page does not exist',
  body: 'The address may be mistyped or the page may have moved.',
}
