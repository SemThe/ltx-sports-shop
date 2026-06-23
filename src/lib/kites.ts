export type Kite = {
  id: string
  name: string
  tagline: string
  category: string
  price: string
  priceNote?: string
  badge?: string
  description: string
  longDescription: string
  specs: { label: string; value: string }[]
  sizes: string[]
  heroImg: string
  images: string[]
}

export const KITES: Kite[] = [
  {
    id: 'rpm',
    name: 'RPM Kite',
    tagline: 'The All-Around Legend',
    category: 'Freeride / Wakestyle',
    price: 'From €1,299',
    priceNote: 'Available in sizes 7–17m',
    badge: 'Bestseller',
    description:
      'The RPM is the kite that started it all. A true all-rounder built for speed, hangtime and control in any condition.',
    longDescription:
      'Slingshot\'s RPM has been the benchmark for freeride performance for over a decade. Its delta hybrid shape delivers a perfect mix of depower, lift and drift. Whether you\'re carving waves, going for massive air or learning new tricks, the RPM adapts to your riding style. The four-line setup gives you crisp, predictable steering while the low bar pressure keeps long sessions comfortable.',
    specs: [
      { label: 'Shape', value: 'Delta Hybrid' },
      { label: 'Struts', value: '3' },
      { label: 'Bar Pressure', value: 'Medium' },
      { label: 'Wind Range', value: '10 – 27 knots' },
      { label: 'Aspect Ratio', value: '5.4' },
      { label: 'Best For', value: 'Freeride, Wakestyle, Beginners' },
    ],
    sizes: ['7m', '9m', '11m', '12m', '14m', '17m'],
    heroImg: 'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'code-nxt',
    name: 'Code NXT',
    tagline: 'Precision. Speed. Control.',
    category: 'Race / Performance',
    price: 'From €1,499',
    priceNote: 'Available in sizes 10–17m',
    badge: 'Race',
    description:
      'The Code NXT is engineered for maximum upwind performance and race-grade speed. A weapon for the dedicated rider.',
    longDescription:
      'Born on the race circuit, the Code NXT transfers elite racing DNA into an accessible package. The ultra-thin canopy and high-aspect-ratio delta design generate exceptional lift with minimal drag. Its precise, direct steering makes it a dream for slalom and course racing, while the wide depower range means you can push limits on big water without sacrificing control. If performance is your obsession, the Code NXT is your kite.',
    specs: [
      { label: 'Shape', value: 'Delta Race' },
      { label: 'Struts', value: '5' },
      { label: 'Bar Pressure', value: 'Light–Medium' },
      { label: 'Wind Range', value: '12 – 30 knots' },
      { label: 'Aspect Ratio', value: '6.8' },
      { label: 'Best For', value: 'Racing, Speed, Upwind' },
    ],
    sizes: ['10m', '12m', '14m', '17m'],
    heroImg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625480860249-9498d7e59397?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589803568926-dd76b82e70fb?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'vision',
    name: 'Vision',
    tagline: 'Ride Every Wave.',
    category: 'Wave / Strapless',
    price: 'From €1,199',
    priceNote: 'Available in sizes 7–13m',
    description:
      'Lightweight, drifty and instant in response — the Vision was born for riding waves strapless.',
    longDescription:
      'The Vision redefines what a wave kite can be. Its lightweight three-strut frame and swept-back tips allow it to drift effortlessly through the window while you focus on the wave beneath your board. The instant relaunch and forgiving depower make it a pleasure in messy surf conditions. Strapless surfers, directional riders and anyone who wants to feel connected to the ocean will love the Vision.',
    specs: [
      { label: 'Shape', value: 'Bow / SLE Hybrid' },
      { label: 'Struts', value: '3' },
      { label: 'Bar Pressure', value: 'Very Light' },
      { label: 'Wind Range', value: '8 – 24 knots' },
      { label: 'Aspect Ratio', value: '4.9' },
      { label: 'Best For', value: 'Waves, Strapless, Surfing' },
    ],
    sizes: ['7m', '9m', '11m', '13m'],
    heroImg: 'https://images.unsplash.com/photo-1609246036053-b03a2f31a2c2?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1609246036053-b03a2f31a2c2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'guardian',
    name: 'Guardian',
    tagline: 'Your First. Your Best.',
    category: 'Beginner / School',
    price: 'From €999',
    priceNote: 'Available in sizes 10–14m',
    description:
      'Forgiving, stable and safe. The Guardian makes learning kiteboarding accessible to everyone.',
    longDescription:
      'The Guardian is designed from the ground up for new riders — but it doesn\'t feel like a beginner kite. Its wide, predictable window and heavy depower mean mistakes are easy to recover from, while its stable, locked-in feel builds confidence session by session. As your skills improve, the Guardian rewards you with more performance. Many riders keep their Guardian long after they\'ve moved on to advanced kites, simply because it\'s so fun to fly.',
    specs: [
      { label: 'Shape', value: 'Leading Edge Inflatable' },
      { label: 'Struts', value: '4' },
      { label: 'Bar Pressure', value: 'Light' },
      { label: 'Wind Range', value: '10 – 25 knots' },
      { label: 'Aspect Ratio', value: '4.2' },
      { label: 'Best For', value: 'Learning, Progression, Safety' },
    ],
    sizes: ['10m', '12m', '14m'],
    heroImg: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'b3',
    name: 'B3',
    tagline: 'Unhooked. Unleashed.',
    category: 'Freestyle / Wakestyle',
    price: 'From €1,349',
    priceNote: 'Available in sizes 9–14m',
    description:
      'Built for kiteboarders who go unhooked. The B3 delivers explosive pop and locked-in slack for next-level freestyle.',
    longDescription:
      'The B3 is the choice for serious freestyle and wakestyle riders who demand maximum performance in the park and on flat water. Its stiff canopy generates explosive pop off the water, and the powerful kite-loop ability makes it a favourite for riders chasing big rotations. The predictable steering means you can focus entirely on your moves. If you spend your sessions unhooking and sending tricks, the B3 is built specifically for you.',
    specs: [
      { label: 'Shape', value: 'Hybrid C / Delta' },
      { label: 'Struts', value: '4' },
      { label: 'Bar Pressure', value: 'High' },
      { label: 'Wind Range', value: '12 – 28 knots' },
      { label: 'Aspect Ratio', value: '5.9' },
      { label: 'Best For', value: 'Freestyle, Wakestyle, Unhooked' },
    ],
    sizes: ['9m', '11m', '12m', '14m'],
    heroImg: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625480860249-9498d7e59397?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'turbine',
    name: 'Turbine V2',
    tagline: 'Light Wind. Big Air.',
    category: 'Big Air / Light Wind',
    price: 'From €1,249',
    priceNote: 'Available in sizes 14–21m',
    description:
      'When the wind drops below 15 knots, the Turbine V2 takes over. Massive lift, huge hangtime.',
    longDescription:
      'The Turbine V2 is engineered for the days most kites won\'t launch. Its massive canopy captures every gust and translates it into unreal hangtime and boosts. Despite its size, the Turbine V2 is surprisingly easy to handle, with smooth, progressive steering and a wide depower range. Whether you\'re on a foil or a twin-tip, the Turbine V2 will keep you riding when everyone else is packing up.',
    specs: [
      { label: 'Shape', value: 'Open Cell / Bridled C' },
      { label: 'Struts', value: '5' },
      { label: 'Bar Pressure', value: 'Medium' },
      { label: 'Wind Range', value: '6 – 18 knots' },
      { label: 'Aspect Ratio', value: '5.2' },
      { label: 'Best For', value: 'Light Wind, Big Air, Foiling' },
    ],
    sizes: ['14m', '17m', '21m'],
    heroImg: 'https://images.unsplash.com/photo-1589803568926-dd76b82e70fb?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1589803568926-dd76b82e70fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625480860249-9498d7e59397?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
    ],
  },
]

export function getKiteById(id: string): Kite | undefined {
  return KITES.find((k) => k.id === id)
}
