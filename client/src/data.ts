import { PC } from './app/shared/models/PC';
import { Tag } from './app/shared/models/Tag';

export const sample_pc: PC[] =[ {
    id: "1",
    name: "ASUS ROG RTX 3080",
    tags: ["GPU"],
    price: 1000,
    description: [""],
    imageUrl: "./assets/3080.webp",
    favorite: true,
    stars: 4.8,
},

{
    id : "2",
    name: "AMD Ryzen 7 5800X",
    tags: ["CPU"],
    price: 500,
    description: [""],
    imageUrl: "./assets/AMD Ryzen 7 5800X.jpg",
    favorite: false,
    stars: 4.7,
},

{
    id: "3",
    name: "ASUS ROG Strix X570-E",
    tags: ["Motherboard"],
    price: 300,
    description: [""],
    imageUrl: "./assets/ASUS ROG Strix X570-E.jpg",
    favorite: true,
    stars: 4.9,
},

{
    id: "4",
    name: "Corsair Vengeance RGB Pro 32GB",
    tags: ["RAM"],
    price: 200,
    description: [""],
    imageUrl: "./assets/Corsair Vengeance RGB Pro 32GB.jpg",
    favorite: false,
    stars: 4.5,
},

{
    id: "5",
    name: "Samsung 970 EVO Plus 1TB",
    tags: ["Storage"],
    price: 150,
    description: ["Samsung 970 EVO Plus 1TB"],
    imageUrl: "./assets/Samsung 970 EVO Plus 1TB.jpg",
    favorite: true,
    stars: 4.4,
},

{
    id: "6",
    name: "EVGA SuperNOVA 750W",
    tags: ["Power Supply"],
    price: 150,
    description: ["EVGA SuperNOVA 750W"],
    imageUrl: "./assets/EVGA SuperNOVA 750W.webp",
    favorite: false,
    stars: 4.3,
},

{
    id: "7",
    name: "NZXT H510",
    tags: ["Case"],
    price: 150,
    description: ["NZXT H510"],
    imageUrl: "./assets/NZXT H510.jpg",
    favorite: true,
    stars: 4.2,
    }];


export const sample_tags: Tag[] = [

    {
        name: "All",
        count: 7,
    },
    {
        name: "GPU",
        count: 1,
    },
    {
        name: "CPU",
        count: 1,
    },
    {
        name: "Motherboard",
        count: 1,
    },
    {
        name: "RAM",
        count: 1,
    },
    {
        name: "Storage",
        count: 1,
    },
    {
        name: "Power Supply",
        count: 1,
    },
    {
        name: "Case",
        count: 1,
    },
];
