export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuCategory[] = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Spring Rolls (2)",
        price: "$6.95",
        description:
          "Crispy vegetarian rolls served with house dipping sauce.",
      },
      {
        name: "Pot Stickers (6)",
        price: "$8.95",
        description:
          "Pan-fried pork dumplings served with ginger soy sauce.",
      },
      {
        name: "Crab Rangoon (6)",
        price: "$8.50",
        description:
          "Creamy crab and scallion filled wontons, fried until golden.",
      },
      {
        name: "BBQ Pork Slices",
        price: "$9.50",
        description: "Tender roasted pork with a sweet glaze.",
      },
    ],
  },
  {
    title: "Family Dinners",
    items: [
      {
        name: "Imperial Feast",
        price: "$18.95 per person",
        description:
          "Minimum service for two. Includes appetizer, soup, entrée, and rice.",
      },
      {
        name: "Palace Dinner",
        price: "$17.50 per person",
        description:
          "A family-style dinner with house favorites and rice.",
      },
    ],
  },
  {
    title: "Chef Specialties",
    items: [
      {
        name: "Honey Walnut Prawns",
        price: "$16.95",
        description:
          "Crispy jumbo prawns tossed in a creamy honey sauce with candied walnuts.",
      },
      {
        name: "Dragon & Phoenix",
        price: "$17.95",
        description:
          "A combination of spicy chicken and shrimp with vegetables.",
      },
    ],
  },
  {
    title: "Poultry",
    items: [
      {
        name: "Kung Pao Chicken",
        price: "$14.95",
        description: "Diced chicken with peanuts and chili peppers.",
      },
      {
        name: "Sweet & Sour Chicken",
        price: "$14.50",
        description: "Breaded chicken with bell peppers and pineapple.",
      },
    ],
  },
  {
    title: "Beef",
    items: [
      {
        name: "Mongolian Beef",
        price: "$15.95",
        description: "Tender beef wok-seared with scallions and onions.",
      },
      {
        name: "Broccoli Beef",
        price: "$15.50",
        description: "Sliced beef stir-fried with fresh broccoli.",
      },
    ],
  },
  {
    title: "Mongolian B.B.Q.",
    items: [
      {
        name: "Palace Grill Selection",
        price: "$18.95",
        description:
          "Create your own bowl with meats, vegetables, and signature sauces grilled fresh.",
      },
    ],
  },
];