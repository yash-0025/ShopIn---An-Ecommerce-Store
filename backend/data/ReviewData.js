const Review = require("../models/Review");

const reviews = [
  {
    _id: "65c252e3dcd9253acfbaa76c",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599444e",
    rating: 5,
    comment:
      "Exceeded expectations! This phone is a game-changer. Lightning fast, stunning camera, incredible battery life. Best phone ever! ",
    createdAt: new Date(),
  },
  {
    _id: "65c25339dcd9253acfbaa79e",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994451",
    rating: 3,
    comment:
      "Good, not mind-blowing. Decent phone, not revolutionary. Average camera, battery life, performance.",
    createdAt: new Date(),
  },
  {
    _id: "65c2535fdcd9253acfbaa7c9",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994450",
    rating: 2,
    comment:
      "Short battery life. Needs more frequent charging than advertised, especially with heavy usage.",
    createdAt: new Date(),
  },
  {
    _id: "65c25380dcd9253acfbaa7df",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994452",
    rating: 5,
    comment:
      "Multitasking master! Seamlessly handles all open apps and tasks. So happy with the performance!",
    createdAt: new Date(),
  },
  {
    _id: "65c253ebdcd9253acfbaa7f5",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994453",
    rating: 5,
    comment:
      "Powerhouse performer! This laptop screams speed! Handles demanding tasks like video editing and gaming with ease. Blazing fast processor, smooth multitasking, never a lag in sight. Highly recommend for power users!",
    createdAt: new Date(),
  },
  {
    _id: "65c25416dcd9253acfbaa80b",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994454",
    rating: 3,
    comment:
      "Almost perfect, except... Love the sleek design, comfortable keyboard, and powerful performance. However, the lack of touch screen functionality is a slight letdown.",
    createdAt: new Date(),
  },
  {
    _id: "65c2542cdcd9253acfbaa821",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994455",
    rating: 5,
    comment:
      "Travel buddy goals! Lightweight, slim design, and long battery life make this laptop the perfect travel companion. Explores the world with me without weighing me down. Bonus points for the spill-resistant keyboard (coffee accidents happen!)",
    createdAt: new Date(),
  },
  {
    _id: "65c25443dcd9253acfbaa837",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994456",
    rating: 5,
    comment:
      "Content creator's dream! Stunning visuals, vibrant colors, and exceptional color accuracy - the display is a masterpiece! Perfect for photo editing, graphic design, and even casual content creation.",
    createdAt: new Date(),
  },
  {
    _id: "65c25473dcd9253acfbaa84d",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994457",
    rating: 3,
    comment:
      "Solid performer, but lacks pizzazz. Reliable and gets the job done, but the design feels a bit outdated and the display could be brighter. Good option for basic tasks at a reasonable price.",
    createdAt: new Date(),
  },
  {
    _id: "65c254a8dcd9253acfbaa863",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599444f",
    rating: 5,
    comment:
      "Intoxicatingly elegant! This perfume is like a warm embrace on a cool night. Sophisticated and timeless, it leaves a trail of compliments wherever I go. Perfect for special occasions or everyday luxury. ✨",
    createdAt: new Date(),
  },
  {
    _id: "65c254d1dcd9253acfbaa891",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994458",
    rating: 5,
    comment:
      "Confidence booster! This bold and citrusy fragrance is perfect for making a statement. The invigorating blend of grapefruit, bergamot, and vetiver is energizing and leaves me feeling empowered.",
    createdAt: new Date(),
  },
  {
    _id: "65c254f2dcd9253acfbaa89e",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994459",
    rating: 3,
    comment:
      "Pricey for the performance. While the scent is nice, the price tag might be a bit high compared to other similar fragrances in the market.",
    createdAt: new Date(),
  },
  {
    _id: "65c2551bdcd9253acfbaa8ab",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445a",
    rating: 5,
    comment:
      "Unique and captivating! This perfume is unlike anything I've ever smelled before. The blend of exotic florals and earthy musk creates a mysterious and alluring aroma. Perfect for those who want to stand out from the crowd.",
    createdAt: new Date(),
  },
  {
    _id: "65c25533dcd9253acfbaa8b8",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445b",
    rating: 2,
    comment:
      "Artificial and chemical smell. This fragrance smells synthetic and unpleasant. Lacks the natural and fresh aroma I was hoping for.",
    createdAt: new Date(),
  },
  {
    _id: "65c25550dcd9253acfbaa8c5",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445c",
    rating: 5,
    comment:
      "Enchanting aroma! This fragrance is like a walk through a blooming garden. Fresh, floral notes with a hint of sweetness that lingers beautifully. Perfect for daytime wear and leaves a lasting impression.",
    createdAt: new Date(),
  },
  {
    _id: "65c255abdcd9253acfbaa908",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445f",
    rating: 5,
    comment:
      "Holy Grail Glow! This moisturizer transformed my dull skin! Deeply hydrates without feeling greasy, and the added vitamin C brightens my complexion beautifully. My skin feels plump, dewy, and radiant all day long.",
    createdAt: new Date(),
  },
  {
    _id: "65c255cadcd9253acfbaa916",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994461",
    rating: 2,
    comment:
      "Breakouts galore! This product did the opposite of its intended purpose and clogged my pores, leading to breakouts. Avoid if you have acne-prone skin.",
    createdAt: new Date(),
  },
  {
    _id: "65c255e9dcd9253acfbaa924",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f5994460",
    rating: 3,
    comment:
      "Feels good, long-term results unclear. This mask feels refreshing and calming on the skin, but the long-term anti-aging benefits are not yet noticeable. Requires consistent use to see if it delivers on its promises.",
    createdAt: new Date(),
  },
  {
    _id: "65c255fcdcd9253acfbaa932",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445e",
    rating: 3,
    comment:
      "Patch test recommended! This product contains potent ingredients that might cause irritation for some skin types. Patch test before applying all over your face to avoid any reactions.",
    createdAt: new Date(),
  },
  {
    _id: "65c25676dcd9253acfbaa940",
    user: "68209c60d470676320cd9bff",
    product: "65a7e45902e12c44f599445d",
    rating: 5,
    comment:
      "Kiss Dryness Goodbye! This hydrating serum is a game-changer for my dry skin. Locks in moisture all day long, leaving my skin feeling soft, comfortable, and plump. No more flaky patches or tight feeling!",
    createdAt: new Date(),
  },
];

exports.reviewData = async () => {
  try {
    await Review.insertMany(reviews);
    console.log("Review data exported successfully");
  } catch (error) {
    console.log(error);
  }
};