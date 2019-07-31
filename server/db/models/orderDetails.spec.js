// const {expect} = require('chai')
// const db = require('../index')
// const OrderDetails = db.model('orderDetails')
// const Product = db.model('product')
// const Order = db.model('order')

// describe('OrderDetails model', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('Model datatypes', () => {
//     describe('correct associations', () => {
//       let frenchBread
//       let foodOrder

//       beforeEach(async () => {
//         frenchBread = await Product.create({
//           name: 'french bread',
//           description: 'blah',
//           imageUrl: 'bleh',
//           price: 5,
//           inventoryQuantity: 10
//         })
//       })

//       it('returns true if the password is correct', () => {
//         expect(cody.correctPassword('bones')).to.be.equal(true)
//       })

//       it('returns false if the password is incorrect', () => {
//         expect(cody.correctPassword('bonez')).to.be.equal(false)
//       })
//     }) // end describe('correctPassword')
//   }) // end describe('instanceMethods')
// }) // end describe('User model')
