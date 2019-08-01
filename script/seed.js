'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Product = require('../server/db/models/product')
const Review = require('../server/db/models/review')
const Category = require('../server/db/models/category')
const ProductCategory = require('../server/db/models/productCategory')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
    // fakerUsers.map(() => {}) // Do something here
  ])

  const productArray = [
    Product.create({
      name: 'Bagel',
      description:
        'Ring-shaped, usually with a dense, chewy interior; usually topped with sesame or poppy seeds baked into the surface.',
      imageUrl: '/images/bagel.png',
      price: 2.35,
      inventoryQuantity: 4
    }),
    Product.create({
      name: 'Baguette',
      description:
        'Thin elongated loaf, made of water, flour, yeast, and salt, instantly recognizable by slits cut in top surface before baking to allow gas expansion.',
      imageUrl: '/images/baguette.png',
      // imageUrl: '../images/baguette.png',
      price: 5.0,
      inventoryQuantity: 10
    }),
    Product.create({
      name: 'Birthday Cake',
      description:
        'A birthday cake is a cake eaten as part of a birthday celebration in many world traditions. Variations of the typical birthday cake include birthday cupcakes, cake pops, pastries, and tarts. Birthday cakes are often vanilla-, chocolate-, or strawberry-flavored.',
      imageUrl: '../images/birthday-cake.png',
      price: 20.0,
      inventoryQuantity: 8
    }),
    Product.create({
      name: 'Cookie',
      description:
        'A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.',
      imageUrl: '../images/cookie.png',
      price: 3.0,
      inventoryQuantity: 30
    }),
    Product.create({
      name: 'Doughnut',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/doughnut.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Biscuit',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/biscuit.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Burger',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/burger.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cheesecake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cheesecake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cherry Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cherrycake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cherry Pie',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cherrypie.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Chocolate Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/chocolatecake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Chocolate Tier Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/chocolatetier.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Croissant',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/croissant.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cupcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cupcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Flatbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/flatbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Funcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/funcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Gingerbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/gingerbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Heartcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/heartcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Hotdog',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/hotdog.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Flatbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/flatbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Meat Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/meatsandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Mooncake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/mooncake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pancake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pancake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pizza',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pizza.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pretzel',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pretzel.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/sandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Submarine',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/sub.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Shortcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/shortcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Tortillas',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/tortillas.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Tomato Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/tomatosandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Wholegrain Loaf',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/wholegrain.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Strawberry Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/strawberrycake.png',
      price: 2.0,
      inventoryQuantity: 15
    })
  ]

  const reviewArray = [
    Review.create({
      title: 'This is so great!',
      content:
        'This was the greatest! I had such a good and fantastic time eating this!',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'This is horrible!',
      content:
        'Horrible! It arrived stale and nasty EDIT: after my review the owners contacted me and gave me fresh bread for FREE! I recommend this place 10/10',
      rating: 4,
      productId: 2
    }),
    Review.create({
      title: 'Yummy!',
      content: 'Very yummy food, love going to this place',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'Shipping could be better!',
      content:
        'The shipping was kind of slower than I expected, must be because the the place sells like hotcakes',
      rating: 4,
      productId: 2
    }),
    Review.create({
      title: 'BREEEEAAAAADDD!',
      content:
        'So many types of bread to choose from, this site is like bread heaven!! I LOOOVE BREEAAD!!',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'This is so great!',
      content:
        'This was the greatest! I had such a good and fantastic time eating this!',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'How is this so good?',
      content:
        'If you do anything in this world! Please order this it changed my life! My family and I can’t live without it I often dream about it!',
      rating: 5,
      productId: 2
    }),
    Review.create({
      title: 'I love bread...',
      content: 'YAAAAAAYYYY! BREAD!',
      rating: 4,
      productId: 2
    }),
    Review.create({
      title: "Where's the discount?",
      content:
        'Soft and fresh just how I like them, wish they could give discounts though!',
      rating: 3,
      productId: 3
    }),
    Review.create({
      title: 'Excellent customer service',
      content: 'Great customer service they always respond so quickly',
      rating: 5,
      productId: 4
    }),
    Review.create({
      title: 'They put rainbows in their products',
      content:
        'I usually don’t like bread, but this bread is magical! I cannot believe bread like this can exist',
      rating: 5,
      productId: 4
    }),
    Review.create({
      title: 'They put rainbows in their products',
      content:
        'I usually don’t like bread, but this bread is magical! I cannot believe bread like this can exist',
      rating: 5,
      productId: 4
    }),
    Review.create({
      title: 'More gluten-free PLEEEAAASSSE!',
      content:
        'I would just like it if they had more gluten-free breads for my niece down in Mississippi. She’s like Oprah just can’t get enough of it but then something happened where she landed in a dirty lake and now she can’t eat anything with gluten in it. It’s so tragic!',
      rating: 3,
      productId: 5
    }),
    Review.create({
      title: 'The sweetest!',
      content: 'So sweet and delectable, thanks “let get this bread””',
      rating: 5,
      productId: 5
    }),
    Review.create({
      title: 'This is so great!',
      content:
        'This was the greatest! I had such a good and fantastic time eating this!',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'This is horrible!',
      content:
        'Horrible! It arrived stale and nasty EDIT: after my review the owners contacted me and gave me fresh bread for FREE! I recommend this place 10/10',
      rating: 4,
      productId: 2
    }),
    Review.create({
      title: 'Yummy!',
      content: 'Very yummy food, love going to this place',
      rating: 5,
      productId: 1
    }),
    Review.create({
      title: 'Shipping could be better!',
      content:
        'The shipping was kind of slower than I expected, must be because the the place sells like hotcakes',
      rating: 4,
      productId: 5
    }),
    Review.create({
      title: 'BREEEEAAAAADDD!',
      content:
        'So many types of bread to choose from, this site is like bread heaven!! I LOOOVE BREEAAD!!',
      rating: 5,
      productId: 6
    }),
    Review.create({
      title: 'This is so great!',
      content:
        'This was the greatest! I had such a good and fantastic time eating this!',
      rating: 5,
      productId: 7
    }),
    Review.create({
      title: 'How is this so good?',
      content:
        'If you do anything in this world! Please order this it changed my life! My family and I can’t live without it I often dream about it!',
      rating: 5,
      productId: 8
    }),
    Review.create({
      title: 'I love bread...',
      content: 'YAAAAAAYYYY! BREAD!',
      rating: 4,
      productId: 9
    }),
    Review.create({
      title: "Where's the discount?",
      content:
        'Soft and fresh just how I like them, wish they could give discounts though!',
      rating: 3,
      productId: 10
    }),
    Review.create({
      title: 'Excellent customer service',
      content: 'Great customer service they always respond so quickly',
      rating: 5,
      productId: 11
    }),
    Review.create({
      title: 'They put rainbows in their products',
      content:
        'I usually don’t like bread, but this bread is magical! I cannot believe bread like this can exist',
      rating: 5,
      productId: 12
    }),
    Review.create({
      title: 'They put rainbows in their products',
      content:
        'I usually don’t like bread, but this bread is magical! I cannot believe bread like this can exist',
      rating: 5,
      productId: 13
    }),
    Review.create({
      title: 'More gluten-free PLEEEAAASSSE!',
      content:
        'I would just like it if they had more gluten-free breads for my niece down in Mississippi. She’s like Oprah just can’t get enough of it but then something happened where she landed in a dirty lake and now she can’t eat anything with gluten in it. It’s so tragic!',
      rating: 3,
      productId: 14
    }),
    Review.create({
      title: 'The sweetest!',
      content: 'So sweet and delectable, thanks “let get this bread””',
      rating: 5,
      productId: 15
    })
  ]
  for (let i = 0; i < 995; i++) {
    productArray.push(
      Product.create({
        name: faker.random.word(),
        description: faker.lorem.paragraph(),
        imageUrl: '/images/bagel.png',
        // imageUrl: faker.image.food(),
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

  for (let i = 1; i < 40; i++) {
    reviewArray.push(
      Review.create({
        title: faker.random.word(),
        content: faker.lorem.paragraph(),
        rating: Math.ceil(Math.random() * Math.floor(5)),
        productId: i
      })
    )
  }

  // await Promise.all(reviewArray)
  const productCategoryArray = []
  for (let i = 1; i <= 1000; i++) {
    productCategoryArray.push(
      ProductCategory.create({
        productId: i,
        categoryId: Math.ceil(Math.random() * Math.floor(5))
      })
    )
  }
  await Promise.all(productCategoryArray)

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
