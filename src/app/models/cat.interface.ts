/*export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
}*/

import { Image } from './image.interface';
import { Size } from './size.interface';

export interface Cat {
  id: string;
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  dog_friendly: number;
  country_code: string;
  description: string;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  indoor: number;
  intelligence: number;
  image: Image;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vocalisation: number;
  weight: Size;
  wikipedia_url: string;
}
