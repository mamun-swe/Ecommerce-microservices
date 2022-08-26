
// import { Cart } from "../../src/models/cart.model"
// import { services } from "../../src/services"

// describe('Books service', () => {
//     describe('fetchBooks', () => {
//         it('should return the list of books', async () => {
//             const _doc = {
//                 _id: '507f191e810c19729de860ea',
//                 customer: "62d14eea1125d0f91eef158b",
//                 product: "62d14eea1125d0f91eef158b",
//                 quantity: 10,
//                 variation: {
//                     name: "Size",
//                     value: "XL"
//                 }
//             }

//             mockingoose(Cart).toReturn(_doc, 'find');
          
//             const results = await services.shoppingCart.findAll({ customer: "62d14eea1125d0f91eef158b" })
//             expect(results[0]._id).toBe('507f191e810c19729de860ea')
//             expect(results[0].customer).toBe('62d14eea1125d0f91eef158b')
//             expect(results[0].product).toBe('62d14eea1125d0f91eef158b')
//             expect(results[0].quantity).toBe(10)
//             expect(results[0].variation.name).toBe('Size')
//             expect(results[0].variation.value).toBe('XL')
//         })
//     })
// })