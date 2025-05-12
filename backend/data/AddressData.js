const Address = require("../models/Address");

const addresses = [
  {
    _id: "65c26398e1e1a2106ac8fbd5",
    user: "68209c246ac7177039b2487c",
    street: "10th",
    city: "Surat",
    state: "Gujarat",
    phoneNumber: "9878987321",
    postalCode: "387961",
    country: "India",
    type: "Home",
    __v: 0,
  },
  {
    _id: "65c26412e1e1a2106ac8fbd8",
    user: "68209c60d470676320cd9bff",
    street: "main 18th",
    city: "Valsad",
    state: "Gujarat",
    phoneNumber: "9986542381",
    postalCode: "980756",
    country: "India",
    type: "Office",
    __v: 0,
  },
];

exports.addressData = async () => {
  try {
    await Address.insertMany(addresses);
    console.log("Address data exported successfully");
  } catch (error) {
    console.log(error);
  }
};