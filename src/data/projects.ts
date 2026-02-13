export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  screenshots: string[];
  longDescription: string;
  siteUrl: string;
}

export const projects: Project[] = [
  {
    id: 'restaurant-le-gourmet',
    title: 'Restaurant Le Gourmet',
    category: 'Restauration',
    description:
      'Site vitrine élégant pour un restaurant gastronomique avec réservation en ligne.',
    image: '/images/projects/restaurant.jpg',
    screenshots: [
      '/images/projects/restaurant-1.jpg',
      '/images/projects/restaurant-2.jpg',
      '/images/projects/restaurant-3.jpg',
    ],
    longDescription:
      "Le Restaurant Le Gourmet souhaitait moderniser sa présence en ligne avec un site à la hauteur de son image gastronomique. La mission comprenait la conception d'un design élégant mettant en valeur la carte et l'ambiance du restaurant, l'intégration d'un système de réservation en ligne, ainsi qu'une galerie photo immersive. Le site est entièrement responsive et optimisé pour le référencement local afin d'attirer une clientèle de proximité.",
    siteUrl: '#',
  },
  {
    id: 'cabinet-dr-martin',
    title: 'Cabinet Dr. Martin',
    category: 'Santé',
    description:
      'Présentation des services médicaux et prise de rendez-vous simplifiée.',
    image: '/images/projects/cabinet.jpg',
    screenshots: [
      '/images/projects/cabinet-1.jpg',
      '/images/projects/cabinet-2.jpg',
      '/images/projects/cabinet-3.jpg',
    ],
    longDescription:
      "Le Dr. Martin avait besoin d'un site professionnel pour présenter son cabinet et faciliter la prise de rendez-vous de ses patients. La mission a inclus la création d'une interface claire présentant les différents services médicaux proposés, l'intégration d'un module de prise de rendez-vous en ligne, et une section d'informations pratiques (horaires, accès, contact). L'accent a été mis sur l'accessibilité et la simplicité de navigation pour tous les profils de patients.",
    siteUrl: '#',
  },
  {
    id: 'boutique-elegance',
    title: 'Boutique Élégance',
    category: 'Commerce',
    description:
      'Vitrine digitale pour une boutique de prêt-à-porter haut de gamme.',
    image: '/images/projects/boutique.jpg',
    screenshots: [
      '/images/projects/boutique-1.jpg',
      '/images/projects/boutique-2.jpg',
      '/images/projects/boutique-3.jpg',
    ],
    longDescription:
      "Boutique Élégance cherchait à renforcer sa présence digitale avec un site vitrine reflétant le positionnement haut de gamme de la marque. Le projet comprenait un design soigné avec une mise en avant des collections, une intégration avec les réseaux sociaux, et une expérience de navigation fluide mettant en valeur l'identité visuelle de la boutique. Le site permet aux clients de découvrir les nouveautés et de localiser facilement le point de vente.",
    siteUrl: '#',
  },
  {
    id: 'artisan-boulanger',
    title: 'Artisan Boulanger',
    category: 'Artisanat',
    description:
      'Mise en valeur du savoir-faire artisanal et des produits frais du jour.',
    image: '/images/projects/boulanger.jpg',
    screenshots: [
      '/images/projects/boulanger-1.jpg',
      '/images/projects/boulanger-2.jpg',
      '/images/projects/boulanger-3.jpg',
    ],
    longDescription:
      "Cet artisan boulanger souhaitait un site chaleureux pour mettre en avant son savoir-faire et ses produits du jour. La mission a porté sur la création d'un design authentique et gourmand, avec une section dédiée aux produits phares, l'histoire de la boulangerie, et les informations pratiques. Un système simple permet au boulanger de mettre à jour ses produits du jour. Le site contribue à fidéliser la clientèle locale et à attirer de nouveaux clients.",
    siteUrl: '#',
  },
];
