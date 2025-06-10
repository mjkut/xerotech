export const HERO_IMAGES = {
  WEBDEV: '/hero/webdev (2).jpg',
  SOFTWARE: '/hero/software.jpg',
  ODOO: '/hero/odoo.jpg',
  AI: '/hero/ai.png',
  DATABASE: '/hero/database.jpg',
  SUPPORT: '/hero/support.png',
  INNOVATOR: '/hero/declan-sun-C5_llDVVeZ0-unsplash.jpg',
} as const;

export type HeroImageKey = keyof typeof HERO_IMAGES;
export type HeroImagePath = typeof HERO_IMAGES[HeroImageKey]; 