export interface NavItem {
  id: string;
  label: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  alt: string;
  caption: string;
  span?: string;
  aspect?: string;
}

export interface EventDetail {
  type: string;
  title: string;
  time: string;
  date: string;
  venueName: string;
  address: string;
  note?: string;
  mapUrl: string;
}

export interface DressColor {
  name: string;
  hex: string;
  textColor: string;
  description: string;
}
