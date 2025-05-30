import { Product, Category } from "@/types/Product";

export const allProducts: Product[] = [
  // ===== NIBBLES =====
  {
    id: "1",
    name: "SWEET N' STINKY",
    image: "/images/menu/sweet_n_stinky.jpg",
    price: 9.99,
    description:
    "Sweet Potato Fries topped with Blue Cheese Crumbles and Green Onions served with Jalapeño Ranch Dressing",
    category: Category.NIBBLES,
  },
  {
    id: "2",
    name: "PHILLY CHEESESTEAK EGGROLLS",
    price: 9.99,
    description: "Served with Sweet Chili Sauce",
    category: Category.NIBBLES,
    image: "/images/menu/philly_cheesesteak_eggrolls.jpg",
  },
  {
    id: "3",
    name: "JALAPEÑO CHEESE BRATZ",
    price: 9.99,
    description: "Served with Jalapeño Ranch Dressing",
    category: Category.NIBBLES,
    image: "/images/menu/jalapeno_cheese_bratz.jpg",
  },
  {
    id: "4",
    name: "BLUE CHEESE PECAN CELERY STICKS",
    price: 7.99,
    description:
      "Celery Sticks stuffed with Blue Cheese Crumbles, Candied Pecans and drizzled with Honey",
    category: Category.NIBBLES,
    image: "/images/menu/blue_cheese_pecan_celery_sticks.jpg",
  },
  {
    id: "5",
    name: "MOZZARELLA BRICKS",
    price: 9.99,
    description: "Served with Ranch Dressing",
    category: Category.NIBBLES,
    image: "/images/menu/mozarella_bricks.jpg",
  },
  {
    id: "6",
    name: "GARLIC CHEESE BREAD",
    price: 12.99,
    description: "Garlic Cheese Bread",
    category: Category.NIBBLES,
    image: "/images/menu/garlic_cheese_bread.jpg",
  },

  // ===== FRESH GREENS =====
  {
    id: "7",
    name: "SHACK HOUSE SALAD",
    price: 8.99,
    description:
      "Iceberg Lettuce, Tomatoes, Red Onions, Black Olives, Croutons and Mozzarella | Choice of Ranch, Jalapeño Ranch, Blue Cheese, Balsamic Vinaigrette, or Caesar",
    image: "/images/menu/shack_house_salad.jpg",

    category: Category.FRESH_GREENS,
  },
  {
    id: "8",
    name: "CAESAR SALAD",
    price: 9.99,
    description:
      "Romaine Lettuce, Parmesan Cheese, Croutons with Caesar Dressing",
    image: "/images/menu/ceaser_salad.jpg",

    category: Category.FRESH_GREENS,
  },
  {
    id: "9",
    name: "WEDGE",
    price: 12.99,
    description:
      "Iceberg Lettuce, Crumbled Blue Cheese, Bacon, Grape Tomatoes, Red Onion with Blue Cheese Dressing",
    image: "/images/menu/wedge.jpg",

    category: Category.FRESH_GREENS,
  },
  {
    id: "10",
    name: "HOUSE OF BLUES GRILLED CHICKEN SALAD",
    price: 14.99,
    description:
      "Mixed Greens, Grilled Chicken Tenders, Candied Pecans, Grape Tomatoes, Blue Cheese Crumbles with Balsamic Vinaigrette",
    image: "/images/menu/grilled_chicken_salad.jpg",

    category: Category.FRESH_GREENS,
  },
  {
    id: "11",
    name: "THE RUSTIC ARUGULA",
    price: 10.99,
    description:
      "Arugula, Feta, Red Onion, Candied Pecan and Dried Cranberries with Balsamic Vinaigrette Dressing",
    image: "/images/menu/rustic_argula.jpg",
    category: Category.FRESH_GREENS,
  },

  // ===== MAC & SPECIALTIES =====
  {
    id: "12",
    name: "SHACK MAC",
    image: "/images/menu/shack_mac.jpg",

    price: 11.99,
    description:
      "3 Cheese Mac topped with Panko Bread Crumbs | Add Bacon Bits +$2",
    category: Category.MAC,
  },
  {
    id: "13",
    name: "SPICY BIRD",
    image: "/images/menu/spicy_bird.jpeg",

    price: 15.99,
    description:
      "3 Cheese Mac, Buffalo Tenders, Blue Cheese Crumbles drizzled with Franks Red Hot Sauce",
    category: Category.MAC,
  },
  {
    id: "14",
    name: "COWBOY",
    image: "/images/menu/cowboy.jpeg",

    price: 14.99,
    description:
      "3 Cheese Mac, Pulled Pork, Pickled Jalapenos, Bacon drizzled with BBQ Sauce",
    category: Category.MAC,
  },
  {
    id: "15",
    name: "SMOKY JOES",
    image: "/images/menu/smoky_joes.jpeg",

    price: 16.99,
    description: "3 Cheese Mac, Smoked Brisket topped with Fried Onion Strings",
    category: Category.MAC,
  },

  // ===== HAND_HELDS =====
  {
    id: "16",
    image: "/images/menu/cluckin_hen.jpg",

    name: "CLUCKING HEN",
    price: 13.99,
    description:
      "Grilled or Fried Chicken Tenders with Lettuce, Tomato, Onion and Shack Sauce | Served with Fries",
    category: Category.HAND_HELDS,
  },
  {
    id: "17",
    image: "/images/menu/the_redneck.jpg",

    name: "THE REDNECK",
    price: 13.99,
    description:
      "Pulled Pork Sandwich with Tangy Slaw and BBQ sauce | Served with Fries",
    category: Category.HAND_HELDS,
  },
  {
    id: "18",
    image: "/images/menu/brisket_stack.jpg",

    name: "BRISKET STACK",
    price: 15.99,
    description:
      "Smoked Brisket with Fried Onion Strings and BBQ sauce | Served with Fries",
    category: Category.HAND_HELDS,
  },
  {
    id: "19",
    image: "/images/menu/shack_double_stack_burger.jpg",

    name: "SHACK DOUBLE STACK BURGER",
    price: 14.99,
    description:
      "Short Rib and Brisket Blend Burger with American Cheese, Lettuce, Tomato, Onion and Shack Sauce | Served with Fries (+$4 Triple Stack)",
    category: Category.HAND_HELDS,
  },
  {
    id: "20",
    name: "FINDING NEMO",
    price: 13.99,
    description:
      "Beer Battered Cod with Shredded Lettuce, Tomato and Secret Sauce | Served with Fries",
    image: "/images/menu/nemo.jpeg",

    category: Category.HAND_HELDS,
  },

  // ===== SEAFOOD =====
  {
    id: "21",
    name: "FISH AND CHIPS",
    price: 19.99,
    image: "/images/menu/fish_and_chips.jpg",

    description: "Beer Battered Cod with Coleslaw and Chunky Chips",
    category: Category.THE_POND,
  },

  // ===== SPECIALTY PIES =====
  {
    id: "22",
    name: "THE STACY",
    image: "/images/menu/the_stacy.jpeg",

    price: 16.99,
    description:
      "Marinara, Mozzarella, Feta, Mushrooms, Green Peppers, Red Onions, Black Olives and Tomatoes",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "23",
    name: "GODFATHER",
    image: "/images/menu/god_father.jpeg",

    price: 21.99,
    description:
      "Marinara, Mozzarella, Pepperoni, Mushroom, Green Peppers, Onion, Italian Sausage, Black Olives and Ham",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "24",
    name: "BBQ CHICKEN",
    image: "/images/menu/bbq_chicken.jpeg",

    price: 17.99,
    description:
      "BBQ Sauce, Mozzarella, Garlic Chicken, Red Onion and Cilantro",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "25",
    name: "MEAT SWEATS",
    image: "/images/menu/meat_sweat.jpeg",

    price: 21.99,
    description:
      "Olive Oil Base, Mozzarella, Smoked Brisket, Smoked Gouda with Fresh Arugula",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "26",
    name: "BREAKFAST FOR DINNER",
    image: "/images/menu/breakfast_for_dinner.jpeg",

    price: 19.99,
    description:
      "Marinara, Bacon, Breakfast Sausage, Mozzarella, Fried Egg, Diced Potatoes, Peppers and Onions",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "27",
    name: "SURFER DUDE",
    image: "/images/menu/suffer_dude.jpeg",

    price: 17.99,
    description: "Marinara, Mozzarella, Bacon, Pineapple and Ham",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "28",
    name: "BUFFALO CHICKEN",
    price: 18.99,
    image: "/images/menu/buffalo_chicken.jpeg",

    description:
      "Ranch Base, Mozzarella, Grilled Chicken, Blue Cheese Crumbles with Franks Red Hot",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "29",
    name: "THE COWBOY",
    price: 18.99,
    image: "/images/menu/the_cowboy.jpeg",

    description:
      "Jalapeno Ranch Base, Mozzarella, Pulled Pork, Jalapenos with BBQ Sauce",
    category: Category.SPECIALTY_PIES,
  },
  {
    id: "30",
    name: "HIGH MAINTENANCE",
    price: 18.99,
    description:
      "Fig Jam Base, Dr. Pepper Caramelized Onions, Mushroom and Mozzarella",
    image: "/images/menu/high_mintanance.jpeg",

    category: Category.SPECIALTY_PIES,
  },

  // ===== WINGS & TENDERS =====
  {
    id: "31",
    name: "TRADITIONAL WINGS (10)",
    price: 10.99,
    image: "/images/menu/10_wings.jpeg",

    description:
      "Plain, BBQ, Buffalo, Teriyaki, or Sizzling Honey Garlic | Served with Ranch/Blue Cheese",
    category: Category.COOP,
  },
  {
    id: "32",
    name: "TRADITIONAL WINGS (15)",
    price: 15.99,
    image: "/images/menu/15_wings.jpeg",

    description:
      "Plain, BBQ, Buffalo, Teriyaki, or Sizzling Honey Garlic | Served with Ranch/Blue Cheese",
    category: Category.COOP,
  },
  {
    id: "33",
    name: "TRADITIONAL WINGS (25)",
    price: 25.99,
    image: "/images/menu/shack_traditional_wings.jpeg",

    description:
      "Plain, BBQ, Buffalo, Teriyaki, or Sizzling Honey Garlic | Served with Ranch/Blue Cheese",
    category: Category.COOP,
  },
  {
    id: "34",
    name: "BONELESS TENDERS (4)",
    price: 12.99,
    image: "/images/menu/4_tenders.jpeg",

    description: "Grilled or Fried with Fries | Boom Boom Sauce (+$1 Buffalo)",
    category: Category.COOP,
  },
  {
    id: "35",
    name: "BONELESS TENDERS (8)",
    price: 18.99,
    description: "Grilled or Fried with Fries | Boom Boom Sauce (+$1 Buffalo)",
    image: "/images/menu/8_tenders.jpeg",

    category: Category.COOP,
  },

  // ===== KIDS MENU =====
  {
    id: "36",
    name: "CHEESEBURGER & FRIES",
    price: 8.99,
    image: "/images/menu/cheeze_burger_with_fries.jpeg",

    category: Category.THE_LITTLE_ONES,
  },
  {
    id: "37",
    name: "CHICKEN TENDERS & FRIES",
    price: 7.99,
    category: Category.THE_LITTLE_ONES,
    image: "/images/menu/chicken_tenders_and_fries.jpeg",
  },
  {
    id: "38",
    name: "MAC AND CHEESE",
    price: 7.99,
    image: "/images/menu/mac_and_cheese.jpeg",

    category: Category.THE_LITTLE_ONES,
  },
  {
    id: "39",
    image: "/images/menu/grilled_cheeze_and_fries.jpeg",

    name: "GRILLED CHEESE & FRIES",
    price: 7.99,
    category: Category.THE_LITTLE_ONES,
  },

  // ===== SIDES =====
  {
    id: "40",
    image: "/images/menu/shack_fries.jpeg",

    name: "SHACK FRIES",
    price: 4.99,
    category: Category.SIDES,
  },
  {
    id: "41",
    name: "SWEET POTATO FRIES",
    price: 4.99,
    category: Category.SIDES,
    image: "/images/menu/sweet_potato_fries.jpeg",
  },
  {
    id: "42",
    name: "FRIED ONION STRINGS",
    price: 4.99,
    category: Category.SIDES,
    image: "/images/menu/fried_onion_strings.jpeg",
  },

  // ===== DESSERTS =====
  {
    id: "43",
    name: "HENDOOKIE",
    price: 9.99,
    description: "Baked Chocolate Chip Cookie Dough with Vanilla Ice Cream",
    image: "/images/menu/hendookie.jpeg",

    category: Category.SWEET_TOOTH,
  },
  {
    id: "44",
    name: "SALTED CARAMEL CHEESECAKE",
    price: 8.99,
    category: Category.SWEET_TOOTH,
    image: "/images/menu/salted_carmel_cheesecake.jpeg",
  },
  {
    id: "45",
    name: "I DARE YOU",
    price: 8.99,
    description: "Cheese Curds with Honey, Cinnamon and Sugar",
    category: Category.SWEET_TOOTH,
    image: "/images/menu/i_dare_you.jpeg",
  },

  // ===== BEVERAGES =====
  {
    id: "46",
    name: "ICED TEA",
    price: 2.75,
    category: Category.BEVERAGES,
    image: "/images/menu/ice_tea.jpeg",
  },
  {
    id: "47",
    name: "FOUNTAIN DRINKS",
    price: 2.75,
    category: Category.BEVERAGES,
    image: "/images/menu/fountain_drinks.jpeg",
  },
  {
    id: "48",
    name: "SPARKLING WATER",
    price: 3.0,
    category: Category.BEVERAGES,
    image: "/images/menu/sparkling_water.jpeg",
  },
  {
    id: "49",
    name: "BOTTLED WATER",
    price: 3.0,
    category: Category.BEVERAGES,
    image: "/images/menu/bottled_water.jpeg",
  },
];
