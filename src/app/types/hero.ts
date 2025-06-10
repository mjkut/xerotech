export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  hasProfileImage: boolean;
  ctaText?: string;
  ctaAction?: string;
}

export interface FloatingElement {
  top: number;
  left: number;
}

export interface HeroProps {
  autoPlayInterval?: number;
  initialSlide?: number;
} 