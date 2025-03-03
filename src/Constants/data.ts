import { url } from "inspector";

export const MENUITEMS: TMenu[] = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/", label: "Shop" },
  { id: 3, href: "/", label: "Features" },
  { id: 4, href: "/", label: "Contact" },
];

export const HEROOBJ: THero = {
  title: "Discover and Find Your Own Fashion!",
  description:
    "Explore our curated collection of stylish clothing and accessories tailored to your unique taste.",
  buttonObj: {
    label: "Explore Now",
    href: "/",
  },
  imageObj: {
    url: "/assets/hero.png",
    alt: "hero image",
  },
};

export const RIVOPRODUCTCATEGORY = [
  {
    id: 1,
    title: "Accessories",
    description:
      "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
    link: "/",
    imgObj:{
      url:"/assets/accessories.webp",
      alt:"Accessories"
    }
  },
  {
    id: 2,
    title: "Dresses",
    description:
      "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
    link: "/",
    imgObj:{
      url:"/assets/dress.webp",
      alt:"Dresses"
    }
  },
  {
    id: 3,
    title: "Outerwear",
    description:
      "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
    link: "/",
    imgObj:{
      url:"/assets/outerwear.webp",
      alt:"Outerwear"
    }
  },
];

export const RIVOPRODUCT = [
  {
    id: 1,
    title: "Regular Fit Long Sleeve Top",
    price: 38.99,
    rating: 5.0,
    isBest: true,
    link: "/",
    imgObj:{
      url:"/assets/regular.webp",
      alt:"Regular Fit Long Sleeve Top"
    }
  },
  {
    id: 2,
    title: "Black Crop Tailored Jacket",
    price: 62.99,
    rating: 4.9,
    isBest: true,
    link: "/",
    imgObj:{
      url:"/assets/black.webp",
      alt:"Black Crop Tailored Jacket"
    }
  },
  {
    id: 3,
    title: "Textured Sunset Shirt",
    price: 49.99,
    rating: 5.0,
    isBest: true,
    link: "/",
    imgObj:{
      url:"/assets/textured.webp",
      alt:"Textured Sunset Shirt"
    }
  },
  {
    id: 4,
    title: "Spread Collar Shirt",
    price: 48.99,
    rating: 5.0,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/spread-collar.webp",
      alt:"Spread Collar Shirt"
    }
  },
  {
    id: 5,
    title: "White Solid Formal Shirt",
    price: 39.00,
    rating: 4.9,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/white-solid.webp",
      alt:"White Solid Formal Shirt"
    }
  },
  {
    id: 6,
    title: "Shine On Me Blouse",
    price: 42.99,
    rating: 4.8,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/shine-on-me.webp",
      alt:"Shine On Me Blouse"
    }
  },
  {
    id: 7,
    title: "Gray Solid Padded Jacket",
    price: 32.99,
    rating: 4.7,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/gray-solid.webp",
      alt:"Gray Solid Padded Jacket"
    }
  },
  {
    id: 8,
    title: "Printed Loose T-shirt",
    price: 39.99,
    rating: 5.0,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/printed-loose.webp",
      alt:"Printed Loose T-shirt"
    }
  },
  {
    id: 9,
    title: "Summer Wind Crop Shirt",
    price: 39.95,
    rating: 4.7,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/summer-wind.webp",
      alt:"Summer Wind Crop Shirt"
    }
  },
  {
    id: 10,
    title: "Tailored Jacket",
    price: 46.00,
    rating: 4.9,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/tailored-jacket.webp",
      alt:"Tailored Jacket"
    }
  },
  {
    id: 11,
    title: "Solid Round Neck T-shirt",
    price: 36.00,
    rating: 5.0,
    isBest: false,
    link: "/",
    imgObj:{
      url:"/assets/solid-round.webp",
      alt:"Solid Round Neck T-shirt"
    }
  }
];

export const CTAOBJ = {
  imgObj:{
    src:"/assets/offer.png",
    alt:"Summer Wind Crop Shirt"
  },
  title:"Exclusive offer",
  description:"Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals",
  buttonObj: {
    label: "Buy now",
    href: "/",
  },
  validPeriodObj:{
    days:"06",
    hours:"18",
    min:"48",
  }
}

export const RIVOCONTENT = {
  sectionBest:{ title:"Best selling",
    description:"Get in on the trend with our curated selection of best-selling styles."},
  sectionProdcut:{
    title:"Our Products",
    description:"Get in on the trend with our curated selection of best-selling styles."
  },
  sectionClothes:{
    title:"Designer Clothes For You",
    description:"Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!"
  }
}