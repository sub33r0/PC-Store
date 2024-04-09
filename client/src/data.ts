import { PC } from './app/shared/models/PC';

export const sample_pc: PC[] =[ {
    id: "1",
    name: "GPU",
    price: 1000,
    description: ["ASUS ROG RTX 3080"],
    imageUrl: "./assets/3080.webp",
    favorite: true,
    stars: 4.8,
},

{
    id : "2",
    name: "CPU",
    price: 500,
    description: ["AMD Ryzen 7 5800X"],
    imageUrl: "./assets/AMD Ryzen 7 5800X.jpg",
    favorite: false,
    stars: 4.7,
},

{
    id: "3",
    name: "Motherboard",
    price: 300,
    description: ["ASUS ROG Strix X570-E"],
    imageUrl: "./assets/ASUS ROG Strix X570-E.jpg",
    favorite: true,
    stars: 4.9,
},

{
    id: "4",
    name: "RAM",
    price: 200,
    description: ["Corsair Vengeance RGB Pro 32GB"],
    imageUrl: "./assets/Corsair Vengeance RGB Pro 32GB.jpg",
    favorite: false,
    stars: 4.5,
},

{
    id: "5",
    name: "Storage",
    price: 150,
    description: ["Samsung 970 EVO Plus 1TB"],
    imageUrl: "./assets/Samsung 970 EVO Plus 1TB.jpg",
    favorite: true,
    stars: 4.4,
},

{
    id: "6",
    name: "Power Supply",
    price: 150,
    description: ["EVGA SuperNOVA 750W"],
    imageUrl: "./assets/EVGA SuperNOVA 750W.webp",
    favorite: false,
    stars: 4.3,
},

{
    id: "7",
    name: "Case",
    price: 150,
    description: ["NZXT H510"],
    imageUrl: "./assets/NZXT H510.jpg",
    favorite: true,
    stars: 4.2,
}];