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
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "acc",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6443b",
    name: "handCrafts",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6444c",
    name: "Woodworking",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445d",
    name: "embroidery",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6446e",
    name: "jewelry",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6447f",
    name: "paperCrafts",
  },
];

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
    name: "Clothing",
  },

  {
    categories_id: categories[1].id,
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
    name: "Decor",
  },
  {
    categories_id: categories[3].id,
    name: "Paintings",
  },
  {
    categories_id: categories[3].id,
    name: "Baskets",
  },
  {
    categories_id: categories[4].id,
    name: "Vases",
  },
  {
    categories_id: categories[1].id,
    name: "Statues",
  },
  {
    categories_id: categories[5].id,
    name: "Small Furnitures",
  },

  {
    categories_id: categories[5].id,
    name: "Origami",
  },

  {
    categories_id: categories[5].id,
    name: "ScrapBooking",
  },
];

const registers = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6443a",
    name: "Test",
    age: "18",
    gender: "M",
    tel: "(101) 1 554789",
    email: "user@nextmail.com",
    password: "123456",
  },
];
const logins = [
  {
    register_id: registers[0].id,
  },
];

const artisans = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Sandy Smith",
    email: "delba@oliveira.com",
    biography:
      "Sandy Smith, a talented painter renowned for her exquisite landscape paintings, was born 34 years ago in Texas. In her youth, she relocated to Los Angeles, where she currently resides. Sandy is married and a proud mother of four children.For the first half of her professional life, Sandy worked as an administrative professional. However, eight years ago, she decided to pursue her true passion for painting full-time. This bold career shift allowed her to focus on her art, and she quickly gained recognition within her community.Sandy's work captures the serene beauty of natural landscapes, often drawing inspiration from her childhood memories in Texas and her current life in Los Angeles. Her paintings are celebrated for their vivid colors, intricate details, and the sense of tranquility they convey.In addition to her artistic endeavors, Sandy is an active member of the local art scene, participating in various exhibitions and community projects. She enjoys teaching painting workshops, where she shares her techniques and encourages others to explore their creative potential.Beyond her professional life, Sandy is an avid nature lover and often spends her weekends hiking with her family, seeking new inspirations for her art. Her dedication to both her family and her craft makes her a beloved figure in her community and a true embodiment of living one's passion.",
    image_url:
      "https://lyricalcorp.com/assets/images/handcraftedheaven/Artisan2.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Jason Bell",
    email: "lee@robinson.com",
    biography:
      "Jason Bell, a 64-year-old ring designer, was born and raised in Arizona but now resides in New York City. Known for his intricate and evocative sculptures, Jason has dedicated his entire life to his craft.Jason grew up in a close-knit family and maintains a strong bond with his two siblings, despite living far from his hometown. His passion for art led him to attend a prestigious art school, where he honed his skills and developed his unique artistic voice. Throughout his career, Jason has participated in numerous exhibitions and has gained a reputation for his dedication and creativity. He continues to push the boundaries of his art, always seeking new ways to express his vision and connect with audiences.Jason's commitment to his work and his ability to capture the essence of his subjects have made him a respected figure in the art community. His journey from Arizona to New York stands as a testament to his dedication and passion for sculpture.",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Martin Green",
    email: "hector@simpson.com",
    biography:
      "'Martin Green, a 56-year-old painter, resides with his beloved wife and three children. His passion for art and nature has defined his life and career, intertwining the beauty of the natural world with the elegance of his artistic expressions. Martin's work is renowned for its detailed and captivating portraits, capturing the essence and beauty of his subjects with remarkable finesse. His dedication to his craft is evident in every brushstroke, as he seeks to convey the depth and personality of those he paints. Living in a harmonious blend of family and art, Martin draws inspiration from the world around him. He enjoys spending time in nature, finding solace and creativity in hiking and various outdoor sports. This love for nature often reflects in his work, infusing his paintings with a sense of tranquility and wonder. Despite his busy life as a father and artist, Martin remains committed to his community. He frequently participates in local art shows and workshops, sharing his skills and encouraging others to explore their artistic potential. His journey as an artist is a testament to his passion, dedication, and the joy he finds in both his family and his art.'",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Rick Raymound",
    email: "steven@tey.com",
    biography:
      "Rick Raymound, a 24-year-old crafter, discovered his passion for pottery at the age of 16 while working alongside his grandmother. Their shared love for the craft blossomed into a lifelong dedication to creating beautiful, handcrafted pottery with intricate designs. Rick's skill and creativity have allowed him to open a small shop in his hometown, where he sells his unique crafts. His work is known for its meticulous detail and artistic flair, making each piece a true work of art. Customers from near and far come to admire and purchase his exquisite creations. Beyond his love for crafting, Rick is an avid pet lover and finds joy in the company of his furry friends. His pets often provide inspiration for his whimsical and playful designs, adding a touch of charm to his pottery. Rick's shop is not just a place for selling his crafts but also a reflection of his warm and welcoming personality. Music is another significant part of Rick's life. He enjoys listening to various genres while working in his shop, finding that it enhances his creativity and brings a sense of harmony to his crafting process. His love for music and pets is evident in his work, infusing his pieces with a vibrant and joyful energy.",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Sabrina Rodrigo",
    email: "steph@dietz.com",
    biography:
      "Sabrina Rodrigo, a 22-year-old student, is an emerging artist known for her captivating digital art and high-quality prints of modern masterpieces. Living with her parents, Sabrina balances her academic pursuits with her passion for creating art, which has gained her a dedicated following. Her love for reading and video games often influences her artistic creations, infusing them with a unique blend of contemporary culture and imaginative storytelling. This distinct style has made her work stand out in the world of conceptual art, earning her recognition and admiration from peers and art enthusiasts alike. Sabrina's art journey began in her early teens, and she has since developed a keen eye for detail and a deep understanding of digital mediums. Her ability to harmoniously blend digital elements into cohesive and captivating pieces has made her a rising star in the art community. She actively shares her work on Instagram, where she has built a substantial online presence. Through this platform, Sabrina connects with a global audience, sharing her artistic process, engaging with followers, and continuously honing her craft. Her vibrant and dynamic art not only reflects her creativity but also her passion for the digital realm.",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Jasmine Ruiz",
    email: "michael@novotny.com",
    biography:
      "Jasmine Ruiz, a 32-year-old artist, has built a remarkable career as an artisan, specializing in creating elegant bronze sculptures. With a wide and supportive family, Jasmine has dedicated her life to her craft, producing pieces that showcase her artistic finesse and creativity. Throughout her career, Jasmine's work has been displayed in various art galleries, earning her recognition and acclaim within the art community. Her bronze sculptures are celebrated for their elegance and intricate detail, capturing the essence of her subjects with a unique blend of realism and artistic expression. Jasmine's dedication to her art extends beyond bronze; she also creates stunning pieces from wood, metal, and glass. Each medium allows her to explore different artistic possibilities, resulting in a diverse and impressive portfolio that highlights her versatility and skill. Living a life enriched by family and art, Jasmine continues to inspire those around her. Her contributions to the world of sculpture and her commitment to her craft make her a respected and admired figure in the art world, and her work continues to captivate and inspire audiences.",
    image_url:
      "https://lyricalcorp.com/assets/images/handcraftedheaven/Artisan1.png",
  },
];

const products = [
  {
    artisans_id: artisans[3].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[2].categories_id,
    productName: "Diamond Necklace",
    description:
      "Elevate your style with the 'Eternal Sparkle' diamond necklace, a stunning piece of jewelry that exudes sophistication and glamour. This exquisite necklace features a dazzling diamond solitaire, carefully set in a delicate 14k white gold chain, creating a truly breathtaking piece.",
    price: 1000,
    pimage_url: "",
  },
  {
    artisans_id: artisans[3].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[0].categories_id,
    productName: "Blue Copper Earings",
    description:
      "These exquisite earrings are a masterful blend of serenity and elegance, crafted with the finest blue little gems and copper. The delicate, rounded shapes of the gems are carefully set within a framework of warm, burnished copper, creating a harmonious balance of textures and colors.",
    price: 80,
    pimage_url: "...",
  },

  {
    artisans_id: artisans[1].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[0].categories_id,
    productName: "Diamond Ring",
    description:
      "This exquisite handcrafted diamond ring is a true masterpiece of jewelry-making. Each detail, from the carefully selected diamond to the intricate design, has been meticulously crafted to create a one-of-a-kind piece that exudes elegance and sophistication.",
    price: 2580,
    pimage_url:
      "https://lyricalcorp.com/assets/images/handcraftedheaven/Diamond%20Ring.png",
  },

  {
    artisans_id: artisans[4].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[2].categories_id,
    productName: 'Pink Quartz Necklace - "Rosy Glow"',
    description:
      'Add a touch of elegance and sophistication to your wardrobe with this stunning pink quartz necklace. The "Rosy Glow" necklace features a beautiful pink quartz stone, carefully set in a delicate sterling silver chain, creating a truly unique and eye-catching piece.',
    price: 1000,
    pimage_url:
      "https://lyricalcorp.com/assets/images/handcraftedheaven/Pink%20Quartz%20Necklace%20-%20Rosy%20Glow.png",
  },

  {
    artisans_id: artisans[5].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[5].categories_id,
    productName: 'Hair Chain - "Glamorous Glow"',
    description:
      'Add a touch of glamour to your hairstyle with our "Glamorous Glow" hair chain. This stunning accessory features a delicate chain design that adds a sophisticated touch to any hairstyle. Perfect for special occasions or everyday wear, our hair chain is a must-have for anyone who wants to elevate their style.',
    price: 30,
    pimage_url: " ",
  },
  {
    artisans_id: artisans[2].id,
    categories_id: categories[0].id,
    subCategories_id: subCategories[6].categories_id,
    productName: 'Kamabands - "Timeless Elegance"',
    description:
      "Elevate your hairstyle with our stunning Kamabands, a unique and elegant hair accessory that adds a touch of sophistication to any look. Inspired by the traditional Japanese Kanzashi, these handcrafted Kamabands are the perfect way to add a touch of cultural flair to your everyday style.",
    price: 50,
    pimage_url: " ",
  },
  {
    artisans_id: artisans[1].id,
    categories_id: categories[2].id,
    subCategories_id: subCategories[13].categories_id,
    productName: 'Suede Bag"',
    description:
      "Luxurious suede bag, designed to provide a soft touch and timeless style. Crafted from high-quality suede, this bag features a sleek and sophisticated design that is perfect for both casual and formal occasions.",
    price: 200,
    pimage_url: " ",
  },
  {
    artisans_id: artisans[3].id,
    categories_id: categories[2].id,
    subCategories_id: subCategories[12].categories_id,
    productName: 'Bathroom Mirror "',
    description:
      "Stunning bathroom mirror. Crafted from high-quality materials, this mirror features a sleek and modern design that is perfect for both casual and formal occasions.",
    price: 30,
    pimage_url: " ",
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
