// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
};

export type CategoryTable = {
  id: string;
  name: string;
};

export type ArtisanTable = {
  id: string;
  name: string;
  email: number;
  biography: string;
  image_url: string;
};

export type SubCategoryTable = {
  id: string;
  categories_id: string;
  name: string;
};

export type ProductTable = {
  id: string;
  artisans_id: string;
  categories_id: string;
  subcategories_id: string;
  productname: string;
  description: string;
  price: number;
  pimage_url: string;
};

// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
// export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
//   amount: number;
// };

// export type InvoicesTable = {
//   id: string;
//   customer_id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   date: string;
//   amount: number;
//   status: "pending" | "paid";
// };

// export type CustomersTableType = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: number;
//   total_paid: number;
// };

// export type FormattedCustomersTable = {
//   id: string;
//   name: string;
//   email: string;
//   image_url: string;
//   total_invoices: number;
//   total_pending: string;
//   total_paid: string;
// };

// export type CustomerField = {
//   id: string;
//   name: string;
// };

// export type InvoiceForm = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   status: "pending" | "paid";
// };
