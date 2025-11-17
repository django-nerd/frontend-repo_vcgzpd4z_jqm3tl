// Centralized sample data and helpers for detail routes

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const playsRaw = [
  {
    title: 'The Clockwork Garden',
    description:
      'A surreal journey through memory, time, and family myths set in a mechanical garden.',
    cast: ['3F, 2M', 'Optional ensemble (2-4) for movement/chorus'],
    image:
      'https://images.unsplash.com/photo-1496483648148-47c686dc86a8?q=80&w=1200&auto=format&fit=crop',
    accolades: ['2022 Fringe Official Selection', 'Finalist — New Voices Play Lab'],
    links: [
      { label: 'Script Sample', href: '#' },
      { label: 'Production Photos', href: '#' }
    ]
  },
  {
    title: 'Static/Signal',
    description:
      'Two siblings build a radio to reach their missing father. Signals blur between past and possible futures.',
    cast: ['2F, 1M', 'VO roles (recorded)'],
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    accolades: ['Winner — Emerging Playwrights Prize'],
    links: [{ label: 'One-Pager', href: '#' }]
  },
  {
    title: 'A Map for the Dark',
    description:
      'An ensemble piece about navigation—through grief, cities, and constellations only some can see.',
    cast: ['5-8 any gender'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    accolades: ['Semi-Finalist — National Playwrights Conference'],
    links: [{ label: 'Synopsis', href: '#' }]
  }
];

const artRaw = [
  {
    title: 'Neon Orchard',
    description: 'Interactive light installation using sound-reactive LEDs.',
    image:
      'https://images.unsplash.com/photo-1664248708051-204960237170?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwT3JjaGFyZHxlbnwwfDB8fHwxNzYzNDA0Mjk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    href: '#'
  },
  {
    title: 'Paper Cities',
    description: 'Hand-cut cityscapes layered in resin.',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop',
    href: '#'
  },
  {
    title: 'Signal Poems',
    description: 'Generative poems projected on public facades.',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop',
    href: '#'
  }
];

const devRaw = [
  {
    title: 'StageBlocks',
    description: 'A blocking and rehearsal note app for small theatre companies.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#'
  },
  {
    title: 'Gallery Grid',
    description: 'Minimal gallery with lazy-loading and keyboard navigation.',
    image:
      'https://images.unsplash.com/photo-1567793750499-71113ab419ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxsZXJ5JTIwR3JpZHxlbnwwfDB8fHwxNzYzNDA0Mjk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    demo: '#',
    repo: '#'
  },
  {
    title: 'Playwright Folio',
    description: 'Portfolio template generator for writers and artists.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#'
  }
];

export const plays = playsRaw.map((p) => ({ ...p, slug: slugify(p.title) }));
export const art = artRaw.map((p) => ({ ...p, slug: slugify(p.title) }));
export const dev = devRaw.map((p) => ({ ...p, slug: slugify(p.title) }));

export const getPlayBySlug = (slug) => plays.find((p) => p.slug === slug);
export const getArtBySlug = (slug) => art.find((p) => p.slug === slug);
export const getDevBySlug = (slug) => dev.find((p) => p.slug === slug);
