export interface Person {
  '@context': 'https://schema.org/';
  '@type': 'Person';
  address?: Address;
  email: string;
  image?: string;
  jobTitle: string;
  name: string;
  telephone: string;
  url: string;
}

export interface Address {
  '@context': 'https://schema.org/';
  '@type': 'PostalAddress';
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  streetAddress: string;
}

export type Article = {
  '@context': 'https://schema.org/';
  '@type': 'Article';
  headline: string;
  alternativeHeadline: string;
  genre: string;
  keywords: string;
  description: string;
  articleBody: string;
  datePublished: Date;
  dateCreated: Date;
  dateModified: Date;
  author: Person;
  editor: Person;
  publisher: Person;
};

export interface WebSite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
}
