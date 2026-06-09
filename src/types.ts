export type PhotoCategory = 'fashion' | 'architecture' | 'portrait' | 'street' | 'narrative';

export interface CameraSpecs {
  aperture: string;
  shutterSpeed: string;
  iso: string;
  lens: string;
  camera: string;
}

export interface Photo {
  id: string;
  title: string;
  category: PhotoCategory;
  imageUrl: string;
  year: string;
  location: string;
  specs: CameraSpecs;
  description: string;
  colorPalette: string[]; // HEX values of prominent colors
  tag: string; // e.g. "@elena", "@arch"
}

export interface BookingInquiry {
  name: string;
  email: string;
  serviceType: string;
  shootDurationHours: number;
  deliveryFormat: 'digital-only' | 'digital-and-print';
  locationType: 'studio' | 'on-location';
  message: string;
}
