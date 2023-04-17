import Bahamas from '../../assets/bahamas.jpg';

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
];


export type DestinationType = typeof destinations;
