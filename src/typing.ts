type TLink = {
  href: string;
  label: string;
};

type TImage = {
  url: string;
  alt: string;
};

type TContent = {
  title: string;
  description: string;
};
type TMenu = TLink & {
  id: number;
};

type THero = TContent & {
  buttonObj: TLink;
  imageObj: TImage;
};

type TProduct = {
  id: number;
  title: string;
  price: number;
  rating: number;
  isBest: boolean;
  link: string;
  imgObj: TImage;
};

type TClothes = TContent & {
  id: number;
  link: string;
  imgObj: TImage;
};
