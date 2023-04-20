import Bahamas from "../../assets/bahamas.jpg";
import Ibiza from '../../assets/ibiza.jpg';

export const destinations = [
  {
    id: "des_1",
    name: "Bahamas Paradis",
    image: Bahamas,
    city: "",
    country: "Nasau",
    price: 600,
    tags: ["tropical", "island", "caribean"],
    desc: "",
  },
  {
    id: "des_2",
    name: "Ibiza Land",
    image: Ibiza,
    city: "",
    country: "Spain",
    price: 600,
    tags: ["island", "luxury"],
    desc: "",
  },
  {
    id: "des_3",
    name: "Labadie",
    image: Bahamas,
    city: "",
    country: "Haiti",
    price: 500,
    tags: ["tropical", "island", "caribean"],
    desc: "",
  },
  {
    id: "des_4",
    name: "Disney Land",
    image: Bahamas,
    city: "",
    country: "USA",
    price: 200,
    tags: ["amusment-park", "fun", "family"],
    desc: "",
  },
];

export type DestinationType = typeof destinations;
