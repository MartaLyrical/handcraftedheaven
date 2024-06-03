// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
// const users = [
//     {
//       id: '410544b2-4001-4271-9855-fec4b6a6442a',
//       name: 'User',
//       email: 'user@nextmail.com',
//       password: '123456',
//     },
//   ];
  
const categories = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'acc'

  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6443b',
    name: 'handCrafts'

  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6444c',
    name: 'Woodworking'

  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6445d',
    name: 'embroidery'

  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6446e',
    name: 'jewelry'

  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6447f',
    name: 'paperCrafts'

  },
]

const subCategories = [
  {
    categories_id: categories[0].id,
    name: "Earrings",
  },
  {
    categories_id: categories[0].id,
    name: "Bangles",
  },
  {
    categories_id: categories[0].id,
    name: "Necklaces",
  },
  {
    categories_id: categories[0].id,
    name: "Rings",
  },
  {
    categories_id: categories[0].id,
    name: "Hair accessories",
  },
  {
    categories_id: categories[0].id,
    name: "Kamarbands",
  },
  {
    categories_id: categories[1].id,
    name: "Hand bags",
  },
  {
    categories_id: categories[1].id,
    name: "Decor",
  },
  {
    categories_id: categories[1].id,
    name: "Baskets",
  },
  {
    categories_id: categories[1].id,
    name: "Statues",
  },
  {
    categories_id: categories[1].id,
    name: "Paintings",
  },
  {
    categories_id: categories[2].id,
    name: "Shoes",
  },
  {
    categories_id: categories[2].id,
    name: "Furniture",
  },
  {
    categories_id: categories[2].id,
    name: "Bags",
  },
  {
    categories_id: categories[3].id,
    name: "Home decor",
  },
  {
    categories_id: categories[3].id,
    name: "Clothing",
  },
  {
    categories_id: categories[4].id,
    name: "Earings",
  },
  {
    categories_id: categories[4].id,
    name: "Necklaces",
  },
  {
    categories_id: categories[4].id,
    name: "Bracelets",
  },
  {
    categories_id: categories[5].id,
    name: "Origami",
  },
  {
    categories_id: categories[5].id,
    name: "Small Furnitures",
  },
  {
    categories_id: categories[5].id,
    name: "ScrapBooking",
  },
]

  const registers = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6443a',
      name: 'Test',
      age: '18',
      gender: 'M',
      tel: '(101) 1 554789',
      email: 'user@nextmail.com',
      password: '123456',
    }
  ]
  const logins = [
    {
      register_id: registers[0].id,
    },
  ];
  
  const artisans = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      biography: '',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      biography: '',
      image_url: '/customers/lee-robinson.png',
    },
    {
      id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      biography: '',
      image_url: '/customers/hector-simpson.png',
    },
    {
      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      name: 'Steven Tey',
      email: 'steven@tey.com',
      biography: '',
      image_url: '/customers/steven-tey.png',
    },
    {
      id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
      name: 'Steph Dietz',
      email: 'steph@dietz.com',
      biography: '',
      image_url: '/customers/steph-dietz.png',
    },
    {
      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      biography: '',
      image_url: '/customers/michael-novotny.png',
    },
    {
      id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      biography: '',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      biography: '',
      image_url: '/customers/emil-kowalski.png',
    },
    {
      id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      biography: '',
      image_url: '/customers/amy-burns.png',
    },
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      biography: '',
      image_url: '/customers/balazs-orban.png',
    },
  ];
  
  const products = [
    {
      artisans_id: artisans[3].id,
      categories_id: categories[0].id,
      subcategories_id: subCategories[0].id,
      productName: 'Diamond Necklace',
      description: 'anything you want',
      price: 1000,
      pimage_url: '...',
    },
    {
      artisans_id: artisans[3].id,
      categories_id: categories[0].id,
      subCategories_id: subCategories[0].id,
      productName: 'Blue Copper Earings',
      description: 'These exquisite earrings are a masterful blend of serenity and elegance, crafted with the finest blue little gems and copper. The delicate, rounded shapes of the gems are carefully set within a framework of warm, burnished copper, creating a harmonious balance of textures and colors.',
      price: 80,
      pimage_url: '...',
},
 
{
      artisans_id: artisans[1].id,
      categories_id: categories[0].id,
      subCategories_id: subCategories[0].id,
      productName: 'Diamond Ring',
      description: 'This exquisite handcrafted diamond ring is a true masterpiece of jewelry-making. Each detail, from the carefully selected diamond to the intricate design, has been meticulously crafted to create a one-of-a-kind piece that exudes elegance and sophistication.',
      price: 2580,
      pimage_url: '...',
},
 
{
      artisans_id: artisans[0].id,
      categories_id: categories[0].id,
      subCategories_id: subCategories[0].id,
      productName: 'Pink Quartz Necklace - "Rosy Glow"',
      description: 'Add a touch of elegance and sophistication to your wardrobe with this stunning pink quartz necklace. The "Rosy Glow" necklace features a beautiful pink quartz stone, carefully set in a delicate sterling silver chain, creating a truly unique and eye-catching piece.',
      price: 1000,
      pimage_url: '...',
},
  
  ];

  
  
  module.exports = {
    artisans,
    categories,
    subCategories,
    products,
    registers,
    logins,
  };
  