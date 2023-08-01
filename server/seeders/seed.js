const bookSeeds = require('./bookSeeds');
const db = require('../config/connection');
const { Book, Admin, Post } = require('../models');
const { postSeeds } = require('./postSeeds');
require('dotenv').config();

db.once('open', async () => {
  try{
    //seeds if SEED_BOOKS is true
    if (process.env.SEED_BOOKS === "true"){
      await Book.collection.drop();
      await Book.create(bookSeeds);
      console.log('Books Seeded!');
    }

    //seeds if SEED_ADMIN is true
    if (process.env.SEED_ADMIN === "true"){
      await Admin.collection.drop();
      await Admin.create({
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASS,
      })
      console.log('Admin Seeded');
    }

    //seeds if SEED_POSTS is true
    if (process.env.SEED_POSTS === "true"){
      await Post.collection.drop();
      await Post.create(postSeeds);
      console.log('Post Seeded');
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Seeding Done!');
  process.exit(0);
})