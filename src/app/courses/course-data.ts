/* ==========================================================================
   COURSE CATALOGUE DATA
   Static course content used by the Courses and Course Details pages.
   ========================================================================== */

export interface CourseLesson {
  title: string;
  duration: string;
}

export interface CourseModule {
  name: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  level: string;
  lessonCount: number;
  duration: string;
  mentor: string;
  cover: string;
  rating: string;
  students: string;
  description: string;
  modules: CourseModule[];
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Anime Art Masterclass',
    subtitle: 'Draw anime-style characters from scratch',
    category: 'Illustration',
    level: 'Beginner',
    lessonCount: 12,
    duration: '6h 30m',
    mentor: 'Kaori Sato',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/25471.jpg',
    rating: '4.9',
    students: '12.4k',
    description:
      'Learn the building blocks of anime character art — head construction, eye styles, hair volume and the cel-shading workflow used by top studios.',
    modules: [
      {
        name: 'Module 1 — Foundations',
        lessons: [
          { title: 'How anime shapes differ from manga', duration: '18 min' },
          { title: 'Head construction and proportions', duration: '34 min' },
          { title: 'Drawing the face from imagination', duration: '41 min' }
        ]
      },
      {
        name: 'Module 2 — Expression',
        lessons: [
          { title: 'Eye styles for every mood', duration: '29 min' },
          { title: 'Hair as a character statement', duration: '37 min' },
          { title: 'Hands without the panic', duration: '46 min' }
        ]
      },
      {
        name: 'Module 3 — Finishing',
        lessons: [
          { title: 'Cel shading and light sources', duration: '52 min' },
          { title: 'Colour scripts that pop', duration: '33 min' },
          { title: 'Backgrounds that frame the hero', duration: '40 min' },
          { title: 'Your first full key visual', duration: '1h 10m' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Seiyuu Voice Acting',
    subtitle: 'Perform anime dialogue with range',
    category: 'Performance',
    level: 'Intermediate',
    lessonCount: 18,
    duration: '8h 15m',
    mentor: 'Ren Takahashi',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/25924.jpg',
    rating: '4.8',
    students: '8.7k',
    description:
      'A practical studio course on breath control, emotional timing and the craft of matching a performance to an animated performance.',
    modules: [
      {
        name: 'Module 1 — The Voice',
        lessons: [
          { title: 'Diaphragm control for long takes', duration: '26 min' },
          { title: 'Pitch, pace and the shonen yell', duration: '31 min' },
          { title: 'Recording booth setup at home', duration: '22 min' }
        ]
      },
      {
        name: 'Module 2 — Character',
        lessons: [
          { title: 'Building a character voice bible', duration: '38 min' },
          { title: 'Child and elderly characters', duration: '44 min' },
          { title: 'Villains, monsters and idols', duration: '47 min' }
        ]
      },
      {
        name: 'Module 3 — Performance',
        lessons: [
          { title: 'Acting opposite silence', duration: '35 min' },
          { title: 'ADR and lip-sync timing', duration: '42 min' },
          { title: 'Take direction like a pro', duration: '28 min' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Manga Panel Design',
    subtitle: 'Storyboard panels that pull readers in',
    category: 'Storyboarding',
    level: 'Beginner',
    lessonCount: 14,
    duration: '7h',
    mentor: 'Aoi Nakamura',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/24190.jpg',
    rating: '4.7',
    students: '6.2k',
    description:
      'From rough storyboard to finished page: gutters, panel rhythm, eye flow and the tricks that keep a reader turning the page.',
    modules: [
      {
        name: 'Module 1 — Rhythm',
        lessons: [
          { title: 'Reading order and eye flow', duration: '24 min' },
          { title: 'The six panel layouts', duration: '36 min' },
          { title: 'Splashes and full page beats', duration: '31 min' }
        ]
      },
      {
        name: 'Module 2 — Story',
        lessons: [
          { title: 'Boards to sequence', duration: '39 min' },
          { title: 'Pacing silent panels', duration: '33 min' },
          { title: 'Sound effects as composition', duration: '27 min' }
        ]
      },
      {
        name: 'Module 3 — Finish',
        lessons: [
          { title: 'Ink, screentone and texture', duration: '45 min' },
          { title: 'Digital cleanup workflow', duration: '32 min' },
          { title: 'Building your page template', duration: '38 min' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Digital Background Art',
    subtitle: 'Paint anime locations with atmosphere',
    category: 'Background',
    level: 'Advanced',
    lessonCount: 22,
    duration: '12h',
    mentor: 'Mika Ōtsuka',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/10339.jpg',
    rating: '4.9',
    students: '5.1k',
    description:
      'A deep dive into painted anime backgrounds — perspective control, colour keys, atmospheric depth and night-time neon sets.',
    modules: [
      {
        name: 'Module 1 — Space',
        lessons: [
          { title: 'Perspective without panic', duration: '41 min' },
          { title: 'Sketching architecture fast', duration: '36 min' },
          { title: 'Layering for depth', duration: '48 min' }
        ]
      },
      {
        name: 'Module 2 — Light',
        lessons: [
          { title: 'Time of day and colour keys', duration: '44 min' },
          { title: 'Neon and wet street reflections', duration: '39 min' },
          { title: 'Weather, fog and particles', duration: '42 min' }
        ]
      },
      {
        name: 'Module 3 — Finish',
        lessons: [
          { title: 'Lighting a character onto a set', duration: '51 min' },
          { title: 'Post-production and export', duration: '34 min' }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Anime OST Production',
    subtitle: 'Score anime like a studio composer',
    category: 'Music',
    level: 'Intermediate',
    lessonCount: 16,
    duration: '9h',
    mentor: 'Daiki Mori',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/25551.jpg',
    rating: '4.8',
    students: '4.8k',
    description:
      'Compose the themes that define a series: leitmotifs, orchestral layering, hybrid instruments and the structure of an anime OP.',
    modules: [
      {
        name: 'Module 1 — Theme',
        lessons: [
          { title: 'Writing a memorable leitmotif', duration: '36 min' },
          { title: 'Modes and mood in anime scores', duration: '42 min' },
          { title: 'Hybrid folk and synth palettes', duration: '38 min' }
        ]
      },
      {
        name: 'Module 2 — Arrangement',
        lessons: [
          { title: 'Orchestration for small budgets', duration: '47 min' },
          { title: 'Opening and ending themes', duration: '44 min' },
          { title: 'Editing to picture', duration: '51 min' }
        ]
      },
      {
        name: 'Module 3 — Finish',
        lessons: [
          { title: 'Mixing for anime loudness', duration: '39 min' },
          { title: 'Releasing your score', duration: '28 min' }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Cosplay Design & Build',
    subtitle: 'Wear the character you love',
    category: 'Costume',
    level: 'Beginner',
    lessonCount: 10,
    duration: '5h',
    mentor: 'Yui Hasegawa',
    cover: 'https://4kwallpapers.com/images/walls/thumbs_3t/16927.jpg',
    rating: '4.6',
    students: '9.3k',
    description:
      'Turn a character reference into a wearable costume — pattern drafting, fabric choices, wig styling and event-day repairs.',
    modules: [
      {
        name: 'Module 1 — Design',
        lessons: [
          { title: 'Reading a reference sheet', duration: '24 min' },
          { title: 'Budgeting your build', duration: '19 min' },
          { title: 'Pattern drafting basics', duration: '43 min' }
        ]
      },
      {
        name: 'Module 2 — Build',
        lessons: [
          { title: 'Sewing your first seam', duration: '38 min' },
          { title: 'Foam, thermoplast and props', duration: '46 min' },
          { title: 'Wig cutting and styling', duration: '35 min' }
        ]
      },
      {
        name: 'Module 3 — Show Day',
        lessons: [
          { title: 'Makeup for anime faces', duration: '32 min' },
          { title: 'Repair kit and quick fixes', duration: '26 min' },
          { title: 'Photographing your cosplay', duration: '29 min' }
        ]
      }
    ]
  }
];

export function findCourse(id: number): Course {
  return COURSES.find((c) => c.id === id) ?? COURSES[0];
}
