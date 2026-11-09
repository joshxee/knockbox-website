import type { ImageMetadata } from 'astro';

import nzia20 from '../assets/photos/nzia-2026-awards/NZIAAwards-20.jpg';
import nzia23 from '../assets/photos/nzia-2026-awards/NZIAAwards-23.jpg';
import nzia43 from '../assets/photos/nzia-2026-awards/NZIAAwards-43.jpg';
import nzia48 from '../assets/photos/nzia-2026-awards/NZIAAwards-48.jpg';
import nzia49 from '../assets/photos/nzia-2026-awards/NZIAAwards-49.jpg';
import nzia54 from '../assets/photos/nzia-2026-awards/NZIAAwards-54.jpg';
import nzia58 from '../assets/photos/nzia-2026-awards/NZIAAwards-58.jpg';
import nzia74 from '../assets/photos/nzia-2026-awards/NZIAAwards-74.jpg';
import nzia76 from '../assets/photos/nzia-2026-awards/NZIAAwards-76.jpg';
import nziaSetup from '../assets/photos/nzia-2026-awards/nzia-booth-and-backdrop.jpg';
import nziaQr from '../assets/photos/nzia-2026-awards/nzia-guest-gallery-qr.jpg';
import nziaPrep from '../assets/photos/nzia-2026-awards/nzia-booth-preparation.jpg';

import cj22 from '../assets/photos/cheree-and-jackson/wedding-22.jpg';
import cj28 from '../assets/photos/cheree-and-jackson/wedding-28.jpg';
import cj68 from '../assets/photos/cheree-and-jackson/wedding-68.jpg';
import cj143 from '../assets/photos/cheree-and-jackson/wedding-143.jpg';
import cj189 from '../assets/photos/cheree-and-jackson/wedding-189.jpg';

import aj35 from '../assets/photos/abbie-and-josh/wedding-35.jpg';
import aj46 from '../assets/photos/abbie-and-josh/wedding-46.jpg';
import aj73 from '../assets/photos/abbie-and-josh/wedding-73.jpg';
import aj100 from '../assets/photos/abbie-and-josh/wedding-100.jpg';
import aj147 from '../assets/photos/abbie-and-josh/wedding-147.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface EventStory {
  slug: string;
  title: string;
  /** Short label shown on cards, e.g. "Awards night". */
  kind: string;
  summary: string;
  cover: Photo;
  photos: Photo[];
  /** Optional behind-the-scenes set, shown after the guest photos. */
  setup?: Photo[];
}

export const events: EventStory[] = [
  {
    slug: 'nzia-2026-awards',
    title: 'NZIA 2026 Awards',
    kind: 'Awards night',
    summary:
      'Guests posed in front of the awards backdrop, then found their photos in the live guest gallery moments later.',
    cover: { src: nzia76, alt: 'Four guests celebrating with awards and a magazine at the NZIA 2026 Awards' },
    photos: [
      { src: nzia48, alt: 'Two guests celebrating with playful poses at the NZIA 2026 Awards' },
      { src: nzia43, alt: 'A group of eight guests at the NZIA 2026 Awards' },
      { src: nzia76, alt: 'Four guests celebrating with awards and a magazine at the NZIA 2026 Awards' },
      { src: nzia20, alt: 'Four guests posing together at the NZIA 2026 Awards' },
      { src: nzia23, alt: 'Two guests shaking hands at the NZIA 2026 Awards' },
      { src: nzia49, alt: 'Three guests posing together at the NZIA 2026 Awards' },
      { src: nzia54, alt: 'Six guests gathered together at the NZIA 2026 Awards' },
      { src: nzia58, alt: 'Three guests smiling together at the NZIA 2026 Awards' },
      { src: nzia74, alt: 'Three guests posing with their awards at the NZIA 2026 Awards' },
    ],
    setup: [
      {
        src: nziaSetup,
        alt: 'Knockbox photo booth and umbrella light facing the blue NZIA Awards backdrop',
        caption: 'The NZIA 2026 Awards setup.',
      },
      {
        src: nziaQr,
        alt: 'The booth with a “Scan to view event photos” sign and QR code for guests',
        caption: 'A quick scan takes guests to their photos.',
      },
      {
        src: nziaPrep,
        alt: 'A team member preparing the photo booth and lighting before the awards',
        caption: 'Getting ready before the guests arrive.',
      },
    ],
  },
  {
    slug: 'cheree-and-jackson',
    title: 'Cheree & Jackson’s Wedding',
    kind: 'Wedding',
    summary:
      'Leather armchairs, a brick fireplace and a room full of friends, with every photo landing in the live guest gallery.',
    cover: { src: cj143, alt: 'The bride and groom celebrating in the photo booth at Cheree and Jackson’s wedding' },
    photos: [
      { src: cj143, alt: 'The bride and groom celebrating together at Cheree and Jackson’s wedding' },
      { src: cj22, alt: 'Five guests smiling and waving around leather armchairs at Cheree and Jackson’s wedding' },
      { src: cj189, alt: 'The bride and four guests posing with colourful sunglasses at Cheree and Jackson’s wedding' },
      { src: cj68, alt: 'The bride celebrating with two guests at Cheree and Jackson’s wedding' },
      { src: cj28, alt: 'Two guests posing together on leather armchairs at Cheree and Jackson’s wedding' },
    ],
  },
  {
    slug: 'abbie-and-josh',
    title: 'Abbie & Josh’s Wedding',
    kind: 'Wedding',
    summary:
      'Heart-shaped sunglasses, a white sofa and fairy lights, with every photo landing in the live guest gallery.',
    cover: { src: aj73, alt: 'Two wedding guests wearing heart-shaped sunglasses and making finger-heart gestures' },
    photos: [
      { src: aj73, alt: 'Two guests making finger-heart gestures in heart-shaped sunglasses at Abbie and Josh’s wedding' },
      { src: aj100, alt: 'Four guests laughing together on a white sofa at Abbie and Josh’s wedding' },
      { src: aj147, alt: 'Two guests posing with heart-shaped sunglasses on a white sofa at Abbie and Josh’s wedding' },
      { src: aj46, alt: 'A guest posing in heart-shaped sunglasses at Abbie and Josh’s wedding' },
      { src: aj35, alt: 'Five guests celebrating with drinks and sunglasses at Abbie and Josh’s wedding' },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

/** A handful of standout frames used around the homepage. */
export const featured = {
  heroPrints: [
    { src: aj147, alt: 'Two wedding guests posing in heart-shaped sunglasses on a white sofa' },
    { src: nzia43, alt: 'A group of guests posing together at the NZIA 2026 Awards' },
    { src: cj189, alt: 'The bride and friends posing in colourful sunglasses' },
  ],
  steps: {
    gesture: { src: nzia48, alt: 'A guest pointing at the camera while another raises his hand at the NZIA 2026 Awards' },
    pose: { src: aj100, alt: 'Four guests laughing together on a white sofa' },
    share: { src: nziaQr, alt: 'The booth’s “Scan to view event photos” sign with a QR code' },
  },
  setup: { src: nziaSetup, alt: 'The Knockbox photo booth and umbrella light facing an awards backdrop' },
  prep: { src: nziaPrep, alt: 'A Knockbox team member setting up the booth before an event' },
  gallery: [aj35, cj22, nzia74, aj46, cj68, nzia20],
};

export const site = {
  name: 'Knockbox Studios',
  email: 'info@knockbox.nz',
  instagram: { handle: '@knockboxstudio', url: 'https://www.instagram.com/knockboxstudio/' },
};

const enquiryBody = [
  'Hi Knockbox,',
  '',
  'Date:',
  'Venue:',
  'Type of event:',
  'Rough guest numbers:',
  '',
  'Anything else we should know:',
  '',
].join('\n');

export const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent('Photo booth enquiry')}&body=${encodeURIComponent(enquiryBody)}`;
