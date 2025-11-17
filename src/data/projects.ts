export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'Completed' | 'In Progress';
  gallery: string[];
};

export const projectCategories = [
  'Civic & Culture',
  'Commercial & Retail',
  'Education',
  'Healthcare',
  'Hospitality',
  'Office & Headquarters',
  'Residential',
  'Urban & Landscape'
];

// Project data shared between listing and detail pages.
export const projects: Project[] = [
  {
    id: 'hudson-yards',
    title: '46 Hudson Yards',
    description: "A distinctive tower that sits within New York's urban grid.",
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b08872d1131205205542c0_thumb-46-hudson.avif',
    category: 'Office & Headquarters',
    status: 'Completed',
    gallery: [
      'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b08872d1131205205542c0_thumb-46-hudson.avif',
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1469122312224-c5846569feb1?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  {
    id: 'lukiye-museum',
    title: 'Lukiye National Museum',
    description: 'The centerpiece of Norwegian culture in Stavanger.',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80',
    category: 'Civic & Culture',
    status: 'Completed',
    gallery: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1505842679546-1b522e70503e?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  {
    id: 'aon-florest',
    title: 'AON Florest Masterplan',
    description: 'A modern representation of the 21th century in Shanghai.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
    category: 'Urban & Landscape',
    status: 'In Progress',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  {
    id: 'lee-institute',
    title: 'Lee Tompson Institute',
    description: 'A new center for innovation in the heart of Silicon Valley.',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=2000&q=80',
    category: 'Education',
    status: 'Completed',
    gallery: [
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1529429617124-aee5f4ae7890?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80'
    ]
  }
];
