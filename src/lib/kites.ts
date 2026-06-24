export type Kite = {
  id: string
  name: string
  tagline: string
  category: string
  level: 'Beginner' | 'Gevorderd' | 'Expert'
  price: string
  priceNote?: string
  badge?: string
  description: string
  longDescription: string
  specs: { label: string; value: string; uitleg?: string }[]
  sizes: string[]
  sizeGids: string
  heroImg: string
  images: string[]
}

export const KITES: Kite[] = [
  {
    id: 'rpm',
    name: 'RPM Kite',
    tagline: 'The All-Around Legend',
    category: 'Freeride / Wakestyle',
    level: 'Gevorderd',
    price: 'From €1,299',
    priceNote: 'Available in sizes 7–17m',
    badge: 'Bestseller',
    description:
      'The RPM is the kite that started it all. A true all-rounder built for speed, hangtime and control in any condition.',
    longDescription:
      'Slingshot\'s RPM has been the benchmark for freeride performance for over a decade. Its delta hybrid shape delivers a perfect mix of depower, lift and drift. Whether you\'re carving waves, going for massive air or learning new tricks, the RPM adapts to your riding style. The four-line setup gives you crisp, predictable steering while the low bar pressure keeps long sessions comfortable.',
    specs: [
      { label: 'Shape', value: 'Delta Hybrid', uitleg: 'Combinatie van een platte delta-vorm en een C-kite. Geeft een goed evenwicht tussen lift, snelheid en stuurprecisie.' },
      { label: 'Struts', value: '3', uitleg: 'Aantal opblaasbare balkjes die de kite zijn vorm geven. Meer struts = stijver en stabieler; minder struts = lichter en driftender.' },
      { label: 'Bar Pressure', value: 'Medium', uitleg: 'Hoeveel kracht je voelt op de balk tijdens het sturen. Medium is comfortabel voor lange sessies.' },
      { label: 'Wind Range', value: '10 – 27 knots', uitleg: 'Het windbereik waarbij deze kite goed werkt. 10 knopen is een licht briesje; 27 knopen is stevige wind.' },
      { label: 'Aspect Ratio', value: '5.4', uitleg: 'Verhouding tussen vleugelspan en diepte. Een hogere ratio = sneller en meer lift; lager = meer kracht en stabiliteit.' },
      { label: 'Best For', value: 'Freeride, Wakestyle, Beginners', uitleg: 'De rijstijlen waarvoor deze kite het best geschikt is.' },
    ],
    sizes: ['7m', '9m', '11m', '12m', '14m', '17m'],
    sizeGids: 'Kies je maat op basis van je gewicht en de gemiddelde wind op je spot. Lichtere rijders (tot 70 kg) of harde wind: 7–9m. Gemiddeld (70–90 kg) en gemiddelde wind: 11–12m. Zwaarder of zachte wind: 14–17m. Twijfel je? Ga voor de maat die past bij de meest voorkomende windsterkte op jouw spot.',
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
    level: 'Expert',
    price: 'From €1,499',
    priceNote: 'Available in sizes 10–17m',
    badge: 'Race',
    description:
      'The Code NXT is engineered for maximum upwind performance and race-grade speed. A weapon for the dedicated rider.',
    longDescription:
      'Born on the race circuit, the Code NXT transfers elite racing DNA into an accessible package. The ultra-thin canopy and high-aspect-ratio delta design generate exceptional lift with minimal drag. Its precise, direct steering makes it a dream for slalom and course racing, while the wide depower range means you can push limits on big water without sacrificing control. If performance is your obsession, the Code NXT is your kite.',
    specs: [
      { label: 'Shape', value: 'Delta Race', uitleg: 'Slanke, hoge-aspect delta-vorm voor maximale snelheid en stijgvermogen. Ontworpen voor racen op open water.' },
      { label: 'Struts', value: '5', uitleg: 'Vijf struts zorgen voor extreme stijfheid en behoud van vorm bij hoge snelheid.' },
      { label: 'Bar Pressure', value: 'Light–Medium', uitleg: 'Lichte balkdruk maakt lang en precies sturen mogelijk zonder vermoeidheid.' },
      { label: 'Wind Range', value: '12 – 30 knots', uitleg: 'Geschikt voor sterke wind. Ideaal voor racen waarbij je de wind volledig benut.' },
      { label: 'Aspect Ratio', value: '6.8', uitleg: 'Hoge aspectratio voor maximale snelheid en upwind prestaties. Vereist meer ervaring om te besturen.' },
      { label: 'Best For', value: 'Racing, Speed, Upwind', uitleg: 'Speciaal voor wedstrijdrijders en iedereen die maximale snelheid en upwind-bereik zoekt.' },
    ],
    sizes: ['10m', '12m', '14m', '17m'],
    sizeGids: 'De Code NXT is ontworpen voor ervaren rijders. Kies 10–12m bij sterke wind (15–25+ kn) of als lichtgewicht rijder. De 14–17m is voor gemiddelde wind of zwaardere rijders. Advies: neem contact op voor een persoonlijk maatadvies op basis van jouw gewicht en spot.',
    heroImg: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589803568926-dd76b82e70fb?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'vision',
    name: 'Vision',
    tagline: 'Ride Every Wave.',
    category: 'Wave / Strapless',
    level: 'Gevorderd',
    price: 'From €1,199',
    priceNote: 'Available in sizes 7–13m',
    description:
      'Lightweight, drifty and instant in response — the Vision was born for riding waves strapless.',
    longDescription:
      'The Vision redefines what a wave kite can be. Its lightweight three-strut frame and swept-back tips allow it to drift effortlessly through the window while you focus on the wave beneath your board. The instant relaunch and forgiving depower make it a pleasure in messy surf conditions. Strapless surfers, directional riders and anyone who wants to feel connected to the ocean will love the Vision.',
    specs: [
      { label: 'Shape', value: 'Bow / SLE Hybrid', uitleg: 'Platte boogvorm met Supported Leading Edge. Geeft veel depower en een breed windbereik, ideaal voor golven.' },
      { label: 'Struts', value: '3', uitleg: 'Drie lichte struts houden het gewicht laag, zodat de kite makkelijk driftet in de golfzone.' },
      { label: 'Bar Pressure', value: 'Very Light', uitleg: 'Nauwelijks kracht op de balk, zodat je je volledig kunt concentreren op de golf onder je board.' },
      { label: 'Wind Range', value: '8 – 24 knots', uitleg: 'Werkt in een breed windbereik, van lichte bries tot stevige wind. Ideaal voor onverwachte golfcondities.' },
      { label: 'Aspect Ratio', value: '4.9', uitleg: 'Gemiddelde aspectratio geeft een goede balans tussen drift en bestuurbaarheid in de golven.' },
      { label: 'Best For', value: 'Waves, Strapless, Surfing', uitleg: 'Speciaal voor golfriders die strapless op een surfboard kiten.' },
    ],
    sizes: ['7m', '9m', '11m', '13m'],
    sizeGids: 'Golfriders kiezen vaak iets kleiner dan normaal voor meer controle in de branding. Lichtgewicht of sterke wind: 7–9m. Gemiddeld rijder in gemiddelde wind: 11m. Voor lichte wind of zwaardere rijder: 13m. Neem bij twijfel altijd contact op.',
    heroImg: 'https://images.unsplash.com/photo-1519399224017-87a75eb50df9?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519399224017-87a75eb50df9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607537825952-48c2142007ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'guardian',
    name: 'Guardian',
    tagline: 'Your First. Your Best.',
    category: 'Beginner / School',
    level: 'Beginner',
    price: 'From €999',
    priceNote: 'Available in sizes 10–14m',
    description:
      'Forgiving, stable and safe. The Guardian makes learning kiteboarding accessible to everyone.',
    longDescription:
      'The Guardian is designed from the ground up for new riders — but it doesn\'t feel like a beginner kite. Its wide, predictable window and heavy depower mean mistakes are easy to recover from, while its stable, locked-in feel builds confidence session by session. As your skills improve, the Guardian rewards you with more performance. Many riders keep their Guardian long after they\'ve moved on to advanced kites, simply because it\'s so fun to fly.',
    specs: [
      { label: 'Shape', value: 'Leading Edge Inflatable', uitleg: 'De meest voorkomende kitevorm: een opblaasbare voorrand (LEI) geeft de kite zijn stevige structuur. Eenvoudig te lanceren en herlanceren.' },
      { label: 'Struts', value: '4', uitleg: 'Vier struts geven extra stabiliteit, ideaal voor beginners die nog leren de kite onder controle te houden.' },
      { label: 'Bar Pressure', value: 'Light', uitleg: 'Weinig kracht op de balk betekent minder vermoeidheid, en meer ruimte om te leren zonder je handen te overbelasten.' },
      { label: 'Wind Range', value: '10 – 25 knots', uitleg: 'Werkt goed in een breed windbereik. Voor beginners ideaal: ook bij sterkere wind blijft de kite hanteerbaar.' },
      { label: 'Aspect Ratio', value: '4.2', uitleg: 'Lage aspectratio geeft maximale stabiliteit en vergevingsgezindheid. Perfect voor iemand die nog leert kiten.' },
      { label: 'Best For', value: 'Learning, Progression, Safety', uitleg: 'Ontworpen voor beginners en mensen die willen leren kiten. Veilig, stabiel en vergevingsgezind.' },
    ],
    sizes: ['10m', '12m', '14m'],
    sizeGids: 'Voor beginners geldt: kies liever iets groter dan te klein. Een grotere kite geeft meer lift en trekt bij minder wind, waardoor je meer rijdtijd hebt om te oefenen. Lichtgewicht beginner (tot 70 kg): 10m. Gemiddeld (70–85 kg): 12m. Zwaarder of zachte wind op jouw spot: 14m. Weet je het niet zeker? Neem contact op, we helpen je graag.',
    heroImg: 'https://images.unsplash.com/photo-1627988114935-406dadb71002?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1627988114935-406dadb71002?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611517533081-a74f3d409ce9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1643004868439-64c7c8696187?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'b3',
    name: 'B3',
    tagline: 'Unhooked. Unleashed.',
    category: 'Freestyle / Wakestyle',
    level: 'Expert',
    price: 'From €1,349',
    priceNote: 'Available in sizes 9–14m',
    description:
      'Built for kiteboarders who go unhooked. The B3 delivers explosive pop and locked-in slack for next-level freestyle.',
    longDescription:
      'The B3 is the choice for serious freestyle and wakestyle riders who demand maximum performance in the park and on flat water. Its stiff canopy generates explosive pop off the water, and the powerful kite-loop ability makes it a favourite for riders chasing big rotations. The predictable steering means you can focus entirely on your moves. If you spend your sessions unhooking and sending tricks, the B3 is built specifically for you.',
    specs: [
      { label: 'Shape', value: 'Hybrid C / Delta', uitleg: 'Combineert de krachtige pop van een C-kite met de stuurprecisie van een delta. Voor gevorderde freestylers.' },
      { label: 'Struts', value: '4', uitleg: 'Vier struts geven een stijf canopy voor maximale pop bij het verlaten van het water.' },
      { label: 'Bar Pressure', value: 'High', uitleg: 'Hoge balkdruk geeft directe feedback en controle. Vereist kracht en ervaring.' },
      { label: 'Wind Range', value: '12 – 28 knots', uitleg: 'Ideaal in stevige wind. Geeft de beste pop en kracht voor freestylemanoeuvres.' },
      { label: 'Aspect Ratio', value: '5.9', uitleg: 'Hogere aspectratio voor meer snelheid en bereik, met behoud van de krachtige pop.' },
      { label: 'Best For', value: 'Freestyle, Wakestyle, Unhooked', uitleg: 'Voor rijders die unhooked gaan en tricks willen maken. Niet geschikt voor beginners.' },
    ],
    sizes: ['9m', '11m', '12m', '14m'],
    sizeGids: 'Freestylers rijden vaak iets kleiner voor meer controle bij tricks. Lichtgewicht of sterke wind: 9m. Gemiddeld rijder: 11–12m. Zwaardere rijder of gemiddelde wind: 14m. Let op: de B3 is een gevorderde kite, niet aanbevolen voor beginners.',
    heroImg: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609246036053-b03a2f31a2c2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: 'turbine',
    name: 'Turbine V2',
    tagline: 'Light Wind. Big Air.',
    category: 'Big Air / Light Wind',
    level: 'Gevorderd',
    price: 'From €1,249',
    priceNote: 'Available in sizes 14–21m',
    description:
      'When the wind drops below 15 knots, the Turbine V2 takes over. Massive lift, huge hangtime.',
    longDescription:
      'The Turbine V2 is engineered for the days most kites won\'t launch. Its massive canopy captures every gust and translates it into unreal hangtime and boosts. Despite its size, the Turbine V2 is surprisingly easy to handle, with smooth, progressive steering and a wide depower range. Whether you\'re on a foil or a twin-tip, the Turbine V2 will keep you riding when everyone else is packing up.',
    specs: [
      { label: 'Shape', value: 'Open Cell / Bridled C', uitleg: 'Grote open cel constructie gevangen door bridel-lijnen. Geeft maximale lift in lichte wind.' },
      { label: 'Struts', value: '5', uitleg: 'Vijf struts geven de grote kite structuur en stabiliteit, ook bij zwakke wind.' },
      { label: 'Bar Pressure', value: 'Medium', uitleg: 'Ondanks het formaat is de balkdruk goed hanteerbaar voor gevorderde rijders.' },
      { label: 'Wind Range', value: '6 – 18 knots', uitleg: 'Speciaal voor lichte wind (Beaufort 2–4). Wanneer andere kites niet genoeg power hebben, werkt de Turbine V2 wél.' },
      { label: 'Aspect Ratio', value: '5.2', uitleg: 'Gemiddelde aspectratio voor een goede balans tussen lift en bestuurbaarheid in lichte wind.' },
      { label: 'Best For', value: 'Light Wind, Big Air, Foiling', uitleg: 'Ideaal voor foilers en rijders op spots met weinig wind. Geeft enorme boost en hangtime.' },
    ],
    sizes: ['14m', '17m', '21m'],
    sizeGids: 'De Turbine V2 is een lichte-wind kite. Kies je maat op basis van je gewicht en de windsterkte op je spot. Rijder tot 75 kg: 14m bij 10–18 kn. Gemiddeld (75–95 kg): 17m bij 8–15 kn. Zwaarder of heel weinig wind: 21m. Bij twijfel: groter is beter voor lichte wind.',
    heroImg: 'https://images.unsplash.com/photo-1667323567346-ea4048f36c58?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1667323567346-ea4048f36c58?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607537826539-0eb279b56804?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530870110042-98b2cb110834?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=1200&auto=format&fit=crop',
    ],
  },
]

export function getKiteById(id: string): Kite | undefined {
  return KITES.find((k) => k.id === id)
}
