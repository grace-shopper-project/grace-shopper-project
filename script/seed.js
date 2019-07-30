'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Product = require('../server/db/models/product')
const Category = require('../server/db/models/category')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
    // fakerUsers.map(() => {}) // Do something here
  ])

  const productArray = []
  for (let i = 0; i < 995; i++) {
    productArray.push(
      Product.create({
        name: faker.random.word(),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.food(),
        price: faker.commerce.price(),
        inventoryQuantity: Math.floor(Math.random() * Math.floor(6))
      })
    )
  }

  const categories = await Promise.all([
    Category.create({name: 'yeast bread'}),
    Category.create({name: 'flatbread'}),
    Category.create({name: 'bun'}),
    Category.create({name: 'sweet bread'}),
    Category.create({name: 'crispy bread'})
  ])

  const products = await Promise.all(productArray)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
