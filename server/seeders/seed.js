const bookSeeds = require('./bookSeeds');
const db = require('../config/connection');
const { Book, Admin } = require('../models');
require('dotenv').config();

db.once('open', async () => {
  try{
    await Book.collection.drop();
    await Book.create(bookSeeds);
    console.log('Books Seeded!');
    await Admin.collection.drop();
    await Admin.create({
      username: process.env.ADMIN_USER,
      password: process.env.ADMIN_PASS,
    })
    console.log('Admin Seeded');npm
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Seeding Done!');
  process.exit(0);
})