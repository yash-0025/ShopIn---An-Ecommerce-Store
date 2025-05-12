const Wishlist = require("../models/Wishlist");

const wishlistItem = [
  {
    _id: "65c2441232078478e340ab60",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599444e",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Can't. Stop. Thinking. About. This. Phone.  All the new features are giving me major FOMO. Next paycheck, consider yourself spent! **",
  },
  {
    _id: "65c2441332078478e340ab64",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599444f",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "My signature scent just got an upgrade! This perfume is the perfect addition to my collection. Next paycheck, we meet again!",
  },
  {
    _id: "65c2441532078478e340ab68",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994450",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Goodbye, clunky laptop! This lightweight tablet would be my new travel buddy for working remotely, catching up on emails, and staying connected. ✈️",
  },
  {
    _id: "65c2441732078478e340ab6c",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994456",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Gaming beast unlocked! This laptop with its latest features like dedicated graphics card, fast refresh rate, powerful cooling system] would be the ultimate gaming machine. Time to conquer those virtual worlds! ⚔️",
  },
  {
    _id: "65c2441a32078478e340ab70",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994452",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Have to buy this for my friend's birthday",
  },
  {
    _id: "65c2442132078478e340ab7a",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f59944b0",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Mood magic! These smart lights would transform my living room into the perfect movie night haven with customisable colours and dimming. Goodbye, harsh overhead lights! ✨",
  },
  {
    _id: "65c2443632078478e340ab9a",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994474",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "A perfect christmas gift for my wife",
  },
  {
    _id: "65c2444732078478e340aba4",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994481",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "A perfect gift for my relative's kid",
  },
  {
    _id: "65c2445332078478e340abab",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599448a",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "A nice decent watch like this would be a perfect match with my outfit this saturday night",
  },
  {
    _id: "65c2447032078478e340abd4",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f59944a2",
    createdAt: new Date(),
    updatedAt: new Date(),
    note: "Have to buy this for upcoming beach party",
  },
];

exports.wishlistData = async () => {
  try {
    await Wishlist.insertMany(wishlistItem);
    console.log("Wishlist seeded successfully");
  } catch (error) {
    console.log(error);
  }
};