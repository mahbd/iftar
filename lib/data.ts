export const packages = [
  {
    image: "/products/single-package.png",
    name: "সিঙ্গেল",
    description: "সিঙ্গেল প্যাকেজে পাচ্ছেন একজনের জন্য সম্পূর্ণ প্যাকেজ",
    price: 45,
    discountedPrice: 40,
    className: "hover:shadow-2xl transition-shadow duration-300",
    info:
      "ছোলা\n" +
      "মুড়ি\n" +
      "পেঁয়াজি x ১\n" +
      "আলুর চপ x ১\n" +
      "বেগুনি x ১\n" +
      "মরিচের চপ x ১\n" +
      "বুন্দিয়া\n" +
      "খেজুর x ১",
  },
  {
    image: "/products/single-package.png",
    name: "সিঙ্গেল+",
    description:
      "সিঙ্গেল প্যাকেজে পাচ্ছেন একজনের জন্য সম্পূর্ণ প্যাকেজ লাচ্ছি সহ",
    price: 70,
    discountedPrice: 60,
    className: "hover:shadow-2xl transition-shadow duration-300",
    info:
      "ছোলা\n" +
      "মুড়ি\n" +
      "পেঁয়াজি x ১\n" +
      "আলুর চপ x ১\n" +
      "বেগুনি x ১\n" +
      "মরিচের চপ x ১\n" +
      "বুন্দিয়া\n" +
      "খেজুর x ১\n" +
      "লাচ্ছি x ১",
  },
  {
    image: "/products/couple-package.png",
    name: "কাপল",
    description: "কাপল প্যাকেজে পাচ্ছেন দুইজনের জন্য সম্পূর্ণ প্যাকেজ",
    price: 80,
    discountedPrice: 75,
    className: "hover:shadow-2xl transition-shadow duration-300",
    info:
      "ছোলা\n" +
      "মুড়ি\n" +
      "পেঁয়াজি x ২\n" +
      "আলুর চপ x ২\n" +
      "বেগুনি x ২\n" +
      "মরিচের চপ x ২\n" +
      "বুন্দিয়া\n" +
      "খেজুর x ২",
  },
  {
    image: "/products/couple-package.png",
    name: "কাপল+",
    description:
      "কাপল প্যাকেজে পাচ্ছেন দুইজনের জন্য সম্পূর্ণ প্যাকেজ লাচ্ছি সহ",
    price: 130,
    discountedPrice: 120,
    className: "hover:shadow-2xl transition-shadow duration-300",
    info:
      "ছোলা\n" +
      "মুড়ি\n" +
      "পেঁয়াজি x ২\n" +
      "আলুর চপ x ২\n" +
      "বেগুনি x ২\n" +
      "মরিচের চপ x ২\n" +
      "বুন্দিয়া\n" +
      "খেজুর x ২\n" +
      "লাচ্ছি x ২",
  },
];

export interface IProduct {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  step?: number;
  info: string;
  className: string;
}

export const items: IProduct[] = [
  {
    image: "/products/chola.jpg",
    name: "ছোলা",
    description: "সম্পূর্ণ নির্ভেজাল ঘরে তৈরি ছোলা",
    price: 0,
    discountedPrice: 0,
    step: 5,
    info: "৳",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/muri.jpg",
    name: "মুড়ি",
    description: "টাটকা এবং মুচমুচে মুড়ি",
    price: 80,
    discountedPrice: 70,
    step: 5,
    info: "৳",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/ginger-e.png",
    name: "পেঁয়াজি",
    description: "পেয়াজ এবং খেসারি ডালের তৈরি পেঁয়াজি",
    price: 7,
    discountedPrice: 5,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/potato.jpg",
    name: "আলুর চপ",
    description: "মুরগির মাংসের পুর দেওয়া সুস্বাদু আলুর চপ",
    price: 7,
    discountedPrice: 5,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/morich.jpg",
    name: "মরিচের চপ",
    description: "Very Tasty ginger",
    price: 3,
    discountedPrice: 2,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/begun.jpg",
    name: "বেগুনি",
    description: "মচমচে এবং সুস্বাদু বেগুনি",
    price: 6,
    discountedPrice: 5,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/bunia.jpg",
    name: "বুন্দিয়া",
    description: "সম্পূর্ণ ঘরে তৈরি, সুস্বাদু বুন্দিয়া",
    price: 0,
    discountedPrice: 0,
    step: 5,
    info: "৳",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/date.jpg",
    name: "খেজুর",
    description: "মানসম্পন্ন,অথেন্টিক খেজুর",
    price: 0,
    discountedPrice: 0,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/juice.webp",
    name: "লাচ্ছি",
    description: "খাঁটি দুধ এবং দই এর তৈরি সুস্বাদু লাচ্ছি",
    price: 30,
    discountedPrice: 25,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/jilapi.jpg",
    name: "জিলাপি",
    description: "সুস্বাদু ও মুচমুচে জিলাপি",
    price: 180,
    discountedPrice: 160,
    step: 5,
    info: "৳",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/chira-vaja.jpg",
    name: "চিড়া ভাজা",
    description: "টাটকা এবং মুচমুচে চিড়া ভাজা",
    price: 0,
    discountedPrice: 0,
    step: 5,
    info: "৳",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
  {
    image: "/products/rosun-chop.jpg",
    name: "রসুনের চপ",
    description: "রসুনের তৈরি সুস্বাদু রসুনের চপ",
    price: 7,
    discountedPrice: 5,
    info: "P",
    className: "hover:shadow-2xl transition-shadow duration-300",
  },
];

export const item_hash: { [key: string]: IProduct } = {};
items.forEach((item) => {
  item_hash[item.name] = item;
});

packages.forEach((pkg) => {
  item_hash[pkg.name] = pkg;
});
