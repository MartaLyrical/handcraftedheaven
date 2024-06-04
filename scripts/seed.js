const { db } = require('@vercel/postgres');
const {
  artisans,
  products,
  registers,
  logins,
  categories,
  subCategories,
} = require('../src/pages/lib/placeholder-data');
const bcrypt = require('bcrypt');

// SEED REGISTER
async function seedRegister(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS register (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        gender VARCHAR(20) NOT NULL,
        tel VARCHAR(45) NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "register" table`);

    // Insert data into the "users" table
    const insertedRegister = await Promise.all(
      registers.map(async (register) => {
        const hashedPassword = await bcrypt.hash(register.password, 10);
        return client.sql`
        INSERT INTO register (id, name, age, gender, tel, email, password)
        VALUES (${register.id}, ${register.name}, ${register.age}, ${register.gender}, ${register.tel}, ${register.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedRegister.length} register`);

    return {
      createTable,
      registers: insertedRegister,
    };
  } catch (error) {
    console.error('Error seeding register:', error);
    throw error;
  }
}

//SEED LOGIN
async function seedLogin(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS login (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        register_id UUID NOT NULL
      );
    `;

    console.log(`Created "login" table`);

    // Insert data into the "users" table
    const insertedLogin = await Promise.all(
      logins.map(async (login) => {
        // const hashedPassword = await bcrypt.hash(login.password, 10);
        return client.sql`
        INSERT INTO login (register_id)
        VALUES (${login.register_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedLogin.length} login`);

    return {
      createTable,
      logins: insertedLogin,
    };
  } catch (error) {
    console.error('Error seeding login:', error);
    throw error;
  }
}

//SEED ARTISANS(old custumers table)
async function seedArtisans(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS artisans (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        biography VARCHAR(2000) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "artisans" table`);

    // Insert data into the "customers" table
    const insertedArtisans = await Promise.all(
      artisans.map(
        (artisan) => client.sql`
        INSERT INTO artisans (id, name, email, biography, image_url)
        VALUES (${artisan.id}, ${artisan.name}, ${artisan.email}, ${artisan.biography}, ${artisan.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedArtisans.length} artisans`);

    return {
      createTable,
      artisans: insertedArtisans,
    };
  } catch (error) {
    console.error('Error seeding artisans:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS product (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    artisans_id UUID NOT NULL,
    categories_id UUID NOT NULL,
    subcategories_id UUID NOT NULL,
    productName VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price INT NOT NULL,
    pimage_url VARCHAR(255) NULL
  );
`;

    console.log(`Created "product" table`);

    // Insert data into the "invoices" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO product (artisans_id, categories_id, subcategories_id, productName, description, price, pimage_url)
        VALUES (${product.artisans_id}, ${product.categories_id}, ${product.subCategories_id}, ${product.productName}, ${product.description}, ${product.price}, ${product.pimage_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

//SEED CATEGORIES
async function seedCategories(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(50) NOT NULL
        );
      `;
  
      console.log(`Created "categories" table`);
  
      // Insert data into the "users" table
      const insertedCategory = await Promise.all(
        categories.map(async (category) => {
          // const hashedPassword = await bcrypt.hash(login.password, 10);
          return client.sql`
          INSERT INTO categories (id, name)
          VALUES (${category.id}, ${category.name})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedCategory.length} categories`);
  
      return {
        createTable,
        categories: insertedCategory,
      };
    } catch (error) {
      console.error('Error seeding login:', error);
      throw error;
    }
  }

//SEED SUBCATEGORIES
async function seedSubCategories(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "subcategories" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS subcategories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          categories_id UUID NOT NULL,
          name VARCHAR(50) NOT NULL
        );
      `;
  
      console.log(`Created "subcategories" table`);
  
      // Insert data into the "users" table
      const insertedSubCategory = await Promise.all(
        subCategories.map(async (subcategory) => {
          // const hashedPassword = await bcrypt.hash(login.password, 10);
          return client.sql`
          INSERT INTO subcategories (categories_id, name)
          VALUES (${subcategory.categories_id}, ${subcategory.name})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedSubCategory.length} subcategories`);
  
      return {
        createTable,
        subCategories: insertedSubCategory,
      };
    } catch (error) {
      console.error('Error seeding subcategories:', error);
      throw error;
    }
  }

async function main() {
  const client = await db.connect();

  await seedArtisans(client);
  await seedCategories(client);
  await seedSubCategories(client)
  await seedRegister(client);
  await seedLogin(client);
  await seedProducts(client);
  

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
