/* ==========================================================================
   LOCAL ANIME FALLBACK DATA
   Used by ApiService when the Tenrai API is unreachable (offline / blocked
   network). Mirrors the API response shape so components work unchanged.
   Poster art is generated as inline SVG data-URIs so no external assets are
   needed.
   ========================================================================== */

const poster = (title: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#241f16"/>
      <stop offset="1" stop-color="#100e0c"/>
    </linearGradient>
    <radialGradient id="r" cx="0.5" cy="0.42" r="0.75">
      <stop offset="0" stop-color="#d9a441" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="300" height="420" fill="url(#g)"/>
  <rect width="300" height="420" fill="url(#r)"/>
  <rect x="14" y="14" width="272" height="392" fill="none" stroke="#d9a441" stroke-width="1.6" stroke-opacity="0.85"/>
  <text x="150" y="200" fill="#ece5d3" font-family="Georgia, 'Times New Roman', serif" font-size="23" font-weight="bold" text-anchor="middle">
    ${title.split(' ').map((w, i) => `<tspan x="150" dy="${i === 0 ? 0 : 32}">${w}</tspan>`).join('')}
  </text>
  <line x1="95" y1="300" x2="205" y2="300" stroke="#d9a441" stroke-width="2"/>
  <text x="150" y="345" fill="#d9a441" font-family="Georgia, serif" font-size="11" letter-spacing="3" text-anchor="middle">ACZ ANIME</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export interface FallbackAnime {
  mal_id: number;
  title: string;
  type: string;
  episodes: number;
  score: number;
  rank: number;
  synopsis: string;
  images: { jpg: { image_url: string; large_image_url: string } };
}

const entry = (
  mal_id: number,
  title: string,
  episodes: number,
  score: number,
  rank: number,
  synopsis: string,
  _hue?: number
): FallbackAnime => ({
  mal_id,
  title,
  type: 'TV',
  episodes,
  score,
  rank,
  synopsis,
  images: { jpg: { image_url: poster(title), large_image_url: poster(title) } }
});

export const FALLBACK_TOP_ANIME: FallbackAnime[] = [
  entry(5114, 'Fullmetal Alchemist: Brotherhood', 64, 9.1, 1,
    'Two brothers use forbidden alchemy to resurrect their mother and pay a terrible price, embarking on a quest to reclaim what was lost.', 12),
  entry(9253, 'Steins;Gate', 24, 9.07, 2,
    'A self-proclaimed mad scientist and his friends discover a way to send messages into the past, and must confront the consequences.', 210),
  entry(11061, 'Hunter x Hunter (2011)', 148, 9.05, 3,
    'Gon Freecss takes the Hunter Exam to follow his father\u2019s footsteps, and finds a world of brutal tests, monsters and hidden depths.', 95),
  entry(19, 'Monster', 74, 8.91, 4,
    'A brilliant Japanese surgeon hunts the charismatic serial killer he once saved as a child across a haunting European landscape.', 260),
  entry(34547, 'GintamaÂ°', 51, 8.9, 5,
    'A samurai for hire in an alien-occupied Edo era is pulled into absurd, heartfelt and action-packed adventures.', 45),
  entry(16498, 'Attack on Titan', 25, 8.54, 6,
    'Humanity survives behind colossal walls from man-eating Titans â€” until the walls are breached and the world changes forever.', 0),
  entry(1535, 'Death Note', 37, 8.86, 7,
    'A bored high-school student finds a notebook that kills anyone whose name is written in it â€” and becomes a twisted new god.', 280),
  entry(1, 'Cowboy Bebop', 26, 8.75, 8,
    'Bounty hunters Spike Spiegel and Faye Valentine chase criminals across the solar system in this jazz-soaked space western.', 200),
  entry(457, 'Mushishi', 26, 8.85, 9,
    'Ginko, a wandering "Mushi Master", studies primordial life-forms called Mushi and the quiet ways they touch human lives.', 130),
  entry(1575, 'Code Geass: Lelouch of the Rebellion', 50, 8.7, 10,
    'An exiled prince gains the power to command anyone with a glance and leads a rebellion against a tyrannical empire.', 350),
  entry(21, 'One Piece', 1100, 8.72, 11,
    'Monkey D. Luffy sets sail with his crew to find the legendary One Piece and become the Pirate King of the Grand Line.', 30),
  entry(30, 'Neon Genesis Evangelion', 26, 8.32, 12,
    'Teenagers pilot giant bio-mechanical EVA units to fight Angels in a story of identity, abandonment and apocalypse.', 160),
  entry(1735, 'Naruto Shippuden', 500, 8.27, 13,
    'Naruto Uzumaki returns from training to protect his village and avenge his comrades as war with the Akatsuki looms.', 55),
  entry(33352, 'Violet Evergarden', 13, 8.54, 14,
    'A former child soldier turned letter-writer automaton learns to understand the meaning of "I love you".', 320),
  entry(38000, 'Demon Slayer: Kimetsu no Yaiba', 26, 8.7, 15,
    'A kind-hearted swordsman hunts demons to avenge his family and find a cure for his demon-turned sister.', 15),
  entry(11757, 'Sword Art Online', 25, 7.2, 16,
    'Players trapped inside a virtual reality MMORPG must clear 100 floors â€” or die in real life.', 220)
];
