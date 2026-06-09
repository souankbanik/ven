import { Photo } from './types';

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Warm Contrast & Haute Couture',
    category: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200',
    year: '2025',
    location: 'Milano, Italy',
    specs: {
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: '100',
      lens: '85mm f/1.4 Art',
      camera: 'Sony Alpha 7R V'
    },
    description: 'A study in stark contrast and high-saturation fashion draping. The silhouette captures the balance between warm sunlight and deliberate modern angular styling.',
    colorPalette: ['#f4bc2c', '#d29a1b', '#1c1c1a', '#e8e5d8', '#ff5e3a'],
    tag: '@ couture'
  },
  {
    id: '2',
    title: 'Shadows in Raw Concrete',
    category: 'architecture',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    year: '2026',
    location: 'Ando Pavilion, Naoshima',
    specs: {
      aperture: 'f/8.0',
      shutterSpeed: '1/125s',
      iso: '200',
      lens: '24mm f/2.8 G-Master',
      camera: 'Sony Alpha 7R V'
    },
    description: 'Exploring Tadao Ando\'s brutalist geometries. The afternoon sun intersects with the sheer concrete edge, casting a perfect, monolithic wedge of deep shadow across the stage.',
    colorPalette: ['#999997', '#cccccc', '#363636', '#f2ece2', '#005eff'],
    tag: '@ brutalism'
  },
  {
    id: '3',
    title: 'The Soft Organic Silhouette',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200',
    year: '2025',
    location: 'Kyoto, Japan',
    specs: {
      aperture: 'f/1.2',
      shutterSpeed: '1/800s',
      iso: '64',
      lens: '50mm f/1.2 L series',
      camera: 'Canon EOS R3'
    },
    description: 'Capturing natural shadow patterns falling on the face. Overlapping bamboo leaves create an elegant texture, blending human vulnerability with the surrounding botany.',
    colorPalette: ['#debcac', '#8c7b74', '#151f16', '#eed0cc', '#d4ff2a'],
    tag: '@ raw'
  },
  {
    id: '4',
    title: 'Nocturnal Rain & Chromium Plates',
    category: 'street',
    imageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200',
    year: '2026',
    location: 'Shinjuku, Tokyo',
    specs: {
      aperture: 'f/1.8',
      shutterSpeed: '1/160s',
      iso: '800',
      lens: '35mm f/1.4 Summilux',
      camera: 'Leica M11'
    },
    description: 'Capturing neon reflections on asphalt immediately following a heavy downpour. High-speed shutter stops wet ripples in focus while passing traffic smears into light paths.',
    colorPalette: ['#121820', '#ff0055', '#00e5ff', '#a0aebc', '#005eff'],
    tag: '@ neon'
  },
  {
    id: '5',
    title: 'Aura in Monochrome',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200',
    year: '2025',
    location: 'Berlin, Germany',
    specs: {
      aperture: 'f/1.4',
      shutterSpeed: '1/250s',
      iso: '400',
      lens: '50mm f/1.4 Summilux',
      camera: 'Leica M11'
    },
    description: 'High key black and white portrait focusing strictly on negative space and raw human demeanor. Eliminating color lets the light paint the microtexture of the eyes.',
    colorPalette: ['#ffffff', '#000000', '#777777', '#cccccc', '#333333'],
    tag: '@ aura'
  },
  {
    id: '6',
    title: 'Ephemeral Sunbeam',
    category: 'narrative',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
    year: '2026',
    location: 'Fuji-Hakone-Izu, JP',
    specs: {
      aperture: 'f/4.5',
      shutterSpeed: '1/500s',
      iso: '100',
      lens: '70-200mm f/2.8 G-Master V2',
      camera: 'Sony Alpha 7R V'
    },
    description: 'A single shaft of morning light breaks through dense, heavy fog in a quiet redwood forest, illuminating floating dust and dew in a high-contrast volumetric display.',
    colorPalette: ['#425032', '#dcf19c', '#152011', '#c7c2b0', '#d4ff2a'],
    tag: '@ sunray'
  },
  {
    id: '7',
    title: 'Minimal Sand & Coastal Decking',
    category: 'architecture',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
    year: '2025',
    location: 'Amangiri, Utah',
    specs: {
      aperture: 'f/5.6',
      shutterSpeed: '1/640s',
      iso: '100',
      lens: '16-35mm f/4 Broad-Angle',
      camera: 'Canon EOS R3'
    },
    description: 'A luxurious integration of clean geometric lines and dry stark desert elements. The turquoise pool water mirrors the ultra-saturated blue celestial canopy.',
    colorPalette: ['#eed8c4', '#4dbdc6', '#8e7968', '#f8f1e5', '#ff5e3a'],
    tag: '@ utah'
  },
  {
    id: '8',
    title: 'Cinema Grain & Golden hour',
    category: 'narrative',
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200',
    year: '2025',
    location: 'Joshua Tree, CA',
    specs: {
      aperture: 'f/2.4',
      shutterSpeed: '1/1000s',
      iso: '160',
      lens: '40mm f/2.0 Prime',
      camera: 'Sony Alpha 7c'
    },
    description: 'An exploration of retro analog grain and saturated warmth. The high wind captures fine sand suspended in air, acting as a natural soft filter for the sunset.',
    colorPalette: ['#b56c34', '#e29a3a', '#2b1c11', '#edd8bc', '#ff5e3a'],
    tag: '@ golden'
  }
];

export const studioStats = [
  { value: '12+', label: 'Global Exhibitions' },
  { value: '45+', label: 'Editorial Covers' },
  { value: '9+', label: 'Design Awards' },
  { value: '100%', label: 'Analog / Digital hybrid mastery' }
];

export const equipmentList = [
  { category: 'Bodies', items: ['Sony Alpha 7R V (61MP)', 'Leica M11 Rangefinder', 'Canon EOS R3'] },
  { category: 'Lenses', items: ['Summilux-M 35/50mm f/1.4', 'Sony G-Master 24-70mm & 70-200mm', 'Canon RF 85mm f/1.2 L'] },
  { category: 'Lighting', items: ['Profoto Pro-11 2400 AirTTL', 'Aputure 600d Pro', 'Custom softboxes & grids'] }
];
