import { Product } from "./products";

export interface Category {
  id: number;
  name: string;
  image: string;
  products: Product[];
}

export const categories = [
  {
    id: 1,
    name: 'Computers & Accessories',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg',
    products: [
      {
        id: 1,
        name: 'Apple Pencil (2nd Generation)',
        price: 129.00,
        description: 'Compatible with iPad mini (6th generation), iPad Air (5th and 4th generation), iPad Pro 12.9-inch (3rd, 4th, and 5th generations), iPad Pro 11-inch (3rd, 2nd, and 1st generations)',
        image: 'https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_UL640_QL65_.jpg',
        rating: 5,
        url: 'https://www.amazon.com/Apple-MU8F2AM-A-Pencil-Generation/dp/B07K1WWBJK/ref=lp_16225007011_1_1'
      },
      {
        id: 2,
        name: 'Seagate Portable 2TB External Hard Drive Portable HDD',
        price: 59.99,
        description: 'Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive',
        image: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=lp_16225007011_1_2?th=1'
      },
      {
        id: 3,
        name: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
        price: 134.99,
        description: 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black',
        image: 'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Sceptre-E248W-19203R-Monitor-Speakers-Metallic/dp/B0773ZY26F/ref=lp_16225007011_1_3?th=1'
      },
      {
        id: 4,
        name: 'Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet',
        price: 37.99,
        description: 'Original HP Ink is engineered to work with HP printers to provide consistent quality, reliability and value',
        image: 'https://m.media-amazon.com/images/I/71Llge105IL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/HP-Cartridge-Black-3YM57AN-Tri-Color/dp/B08412PTS8/ref=lp_16225007011_1_4'
      },
      {
        id: 5,
        name: 'Roku Streaming Stick 4K 2021',
        price: 37.97,
        description: 'Hides behind your TV: The all-new design plugs right into your TV with a simple setup',
        image: 'https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Roku-Streaming-Device-Vision-Controls/dp/B09BKCDXZC/ref=lp_16225007011_1_5'
      }
    ]
  },
  {
    id: 2,
    name: 'Video Games',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg',
    products: [
      {
        id: 1,
        name: 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset',
        price: 299.00,
        image: 'https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL640_QL65_.jpg',
        description: 'Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display',
        rating: 5,
        url: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=lp_16225016011_1_1'
      },
      {
        id: 2,
        name: 'Nintendo Switch – OLED Model w/ White Joy-Con',
        price: 336.99,
        description: 'Enhanced audio – Enjoy enhanced sound from the system’s onboard speakers when playing in Handheld and Tabletop modes.',
        image: 'https://m.media-amazon.com/images/I/51YLbkYOhlL._AC_UL640_QL65_.jpg',
        rating: 5,
        url: 'https://www.amazon.com/Nintendo-Switch-OLED-Model-White-Joy/dp/B098RKWHHZ/ref=lp_16225016011_1_3?th=1'
      },
      {
        id: 3,
        name: 'Xbox Series S',
        price: 299.99,
        description: 'Watch 4K Blu-ray movies and stream 4K video on Netflix, Amazon, Hulu, Microsoft Movies & TV, and more',
        image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL640_QL65_.jpg',
        rating: 5,
        url: 'https://www.amazon.com/Xbox-S/dp/B08G9J44ZN/ref=lp_16225016011_1_6'
      },
      {
        id: 4,
        name: 'Switch Pro Controller for Nintendo Switch/Switch Lite',
        price: 28.99,
        description: 'Upgrade Pro Controller: This controller has NFC and Wake up from sleep features. This controller is fully compatible with Nintendo Switch, including all the keys of the original Switch. This easy to use controller is quick to connect and ergonomic.',
        image: '../assets/imgs/nintendo.jpg',
        rating: 4,
        url: 'https://www.amazon.com/dp/B09J4M22WW/ref=sspa_dk_detail_0?pd_rd_i=B09J4M22WW&pd_rd_w=dXr17&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=hDql2&pf_rd_r=SSAQY4SBFW2R5EYZCSGA&pd_rd_r=5eb845c8-51c2-44ac-a49b-866388824e50&s=videogames&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyM01HU1pGSThNVkFJJmVuY3J5cHRlZElkPUEwNDIyNTg5M0dMRUFVSklGT0JXTyZlbmNyeXB0ZWRBZElkPUEwMzY2OTEzM09KN1k1SjdDNlYwMyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1'
      },
      {
        id: 5,
        name: 'Elden Ring - PlayStation 5',
        price: 59.99,
        description: 'ELDEN RING, developed by FromSoftware Inc. and produced by BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG and FromSoftware/s largest game to date, set within a world full of mystery and peril',
        image: 'https://m.media-amazon.com/images/I/81goNGEYm6L._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Elden-Ring-PlayStation-5/dp/B09743F8P6/ref=lp_16225016011_1_11'
      }
    ]
  },
  {
    id: 3,
    name: 'Baby',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg',
    products: [
      {
        id: 1,
        name: 'Infantino Lil\' Nibble Teethers Carrot',
        price: 2.99,
        description: 'Design: This teether is right-sized for little hands, with built-in handles, and textures to help with developmental growth while satisfying the baby\'s need to soothe tender gums',
        image: 'https://m.media-amazon.com/images/I/81Il298A2BL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Infantino-Bites-Textured-Carrot-Teether/dp/B071HN7DYP/ref=lp_16225005011_1_1'
      },
      {
        id: 2,
        name: 'Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes',
        price: 13.88,
        description: 'SUPER STRONG - Store, protect, and freeze precious breastmilk with these breast milk storing bags',
        image: 'https://m.media-amazon.com/images/I/81odthAd5CL._AC_UL640_QL65_.jpg ',
        rating: 5,
        url: 'https://www.amazon.com/Lansinoh-Breastmilk-Breastfeeding-Directly-Essentials/dp/B006XISCNA/ref=lp_16225005011_1_5'
      },
      {
        id: 3,
        name: 'WaterWipes Biodegradable Original Baby Wipes',
        price: 26.94,
        description: 'Clinically proven to clean and protect sensitive skin with simply 2 ingredients: Our fragrance-free baby wipes contain 99.9% purified water with a drop of fruit extract. Suitable for eczema-prone skin and allergy sufferers',
        image: 'https://m.media-amazon.com/images/I/71DFBSdE-sL._AC_UL640_QL65_.jpg',
        rating: 5,
        url: 'https://www.amazon.com/WaterWipes-Sensitive-Wipes-Packs-Count/dp/B008KJQMA0/ref=lp_16225005011_1_7'
      },
      {
        id: 4,
        name: 'Magicteam Sound Machines White Noise Machine',
        price: 23.99,
        description: '20 Non-Looping Sleep Sounds: White noise ,Brown noise, pink noise, blue noise, fan,brook, rain, ocean,bird and Bonfire,suitable for for Baby and Kids and Adults.',
        image: 'https://m.media-amazon.com/images/I/61yoN+jt5tL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Magicteam-Machine-Looping-Soothing-Function/dp/B07RWRJ4XW/ref=lp_16225005011_1_12'
      },
      {
        id: 5,
        name: 'Graco TurboBooster Backless Booster Car Seat',
        price: 20.78,
        description: 'This Graco booster car seat helps safely Transport Your big kid from ages 4 to 10; from 40 to 100 pounds; and from 43 to 57 inches tall',
        image: 'https://m.media-amazon.com/images/I/91pRzZbuSqL._AC_UL640_QL65_.jpg',
        rating: 5,
        url: 'https://www.amazon.com/Graco-Backless-TurboBooster-Seat-Galaxy/dp/B007UYBOJU/ref=lp_16225005011_1_11'
      }
    ]
  },
  {
    id: 4,
    name: 'Toys & Games',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg',
    products: [
      {
        id: 1,
        name: 'Pokemon TCG: 3 Booster Packs – 30 Cards Total',
        price: 12.97,
        description: 'BEST VALUE - Save money when you buy more. Each package has 30 cards (10 in each blister pack) from specialty selected expansions of the Pokemon Trading Card Game. What new cards will you pull?',
        image: 'https://m.media-amazon.com/images/I/91lc8FOJW0L._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Pokemon-TCG-Authentic-Expansion-Holofoils/dp/B001DIJ48C/ref=lp_16225015011_1_7'
      },
      {
        id: 2,
        name: '(50 Pcs) Fidget Poppers Popit Toy Pack Push Pop Bubble Popping Set',
        price: 29.95,
        description: '50 Pc Fidget Toy Box Pack Set of Mini Popit Sensory Toys with Poppit Dimple and Party Favors for Girls, Boys, Kids, Autistic ADHD Autism Children including New Figetget Figet Spinners, Pop Tubes',
        image: 'https://m.media-amazon.com/images/I/91HcZgWYNzL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Poppers-Figetget-Spinners-Infinity-Autistic/dp/B0973R7JMP/ref=lp_16225015011_1_10'
      },
      {
        id: 3,
        name: 'Sunny Days Entertainment Bubble-N-Go Toy Lawn Mower with Refill Solution',
        price: 12.81,
        description: 'PUSH BUBBLE TOY: Just push the mower and have fun with bubbles in seconds! No batteries required. As the mower is pushed, it releases tons of incredible bubbles into the air.',
        image: 'https://m.media-amazon.com/images/I/81IUt+9I4VL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Sunny-Days-Entertainment-Bubble-N-Go-Solution/dp/B07QF5QLYS/ref=lp_16225015011_1_11'
      },
      {
        id: 4,
        name: 'Nuby Floating Purple Octopus with 3 Hoopla Rings Interactive Bath Toy',
        price: 6.99,
        description: 'Let bath time ten-tickle your little one’s imagination! With Nuby’s Octopus Hoopla, getting clean has never been more fun',
        image: 'https://m.media-amazon.com/images/I/719i1aE6LGS._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Nuby-Floating-Purple-Octopus-Interactive/dp/B083ZZSGLR/ref=lp_16225015011_1_12'
      },
      {
        id: 5,
        name: 'Play-Doh Modeling Compound 10-Pack Case of Colors, Non-Toxic',
        price: 7.99,
        description: '10 cans of creative fun – kids can get creative with just the right colors They need in this Play-Doh 10-pack of 2-ounce cans!',
        image: 'https://m.media-amazon.com/images/I/81xV+D1OkGL._AC_UL640_QL65_.jpg',
        rating: 4,
        url: 'https://www.amazon.com/Play-Doh-Modeling-Compound-Non-Toxic-Exclusive/dp/B00JM5GW10/ref=lp_16225015011_1_5'
      }
    ]
  }
];
