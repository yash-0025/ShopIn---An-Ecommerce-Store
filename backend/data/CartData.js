const Cart = require("../models/Cart");

const cartItems = [
  {
    _id: "65c357fe2f21c40d167c276b",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994453",
    quantity: 1,
  },
  {
    _id: "65c3581d2f21c40d167c278f",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445d",
    quantity: 4,
  },
  {
    _id: "65c3584f2f21c40d167c27f5",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f59944a1",
    quantity: 2,
  },
];

exports.cartData = async () => {
  try {
    await Cart.insertMany(cartItems);
    console.log("Cart data exported successfully");
  } catch (error) {
    console.log(error);
  }
};