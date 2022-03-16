export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Satinique Anti-Hairfall Shampoo',
    price: 799,
    description: '#91,022 in Beauty & Personal Care',
    image: '../assets/imgs/satinique.jpg',
    rating: 5,
    url: 'https://www.amazon.com/Satinique-Anti-Hairfall-Shampoo-Conditioner-9-4/dp/B017HYF22M/ref=sr_1_16?keywords=amway&qid=1646654779&sr=8-16'
  },
  {
    id: 2,
    name: 'G&H Protect Deodorant',
    price: 22.00,
    description: 'STAY FRESH AND DRY – Fast-drying, clear formula won’t leave white marks on clothes or skin.',
    image: '../assets/imgs/protect.jpg',
    rating: 3,
    url: 'https://www.amazon.com/Protect-Deodorant-Anti-Perspirant-Roll/dp/B08L4NS3L5/ref=sr_1_5?keywords=amway&qid=1646654448&sr=8-5'
  },
  {
    id: 3,
    name: 'NETGEAR Wi-Fi Range Extender EX3700',
    price: 69.98,
    description: 'NETGEAR AC750 WiFi Range Extender (EX3700-100NAS). System Requirements:2.4 and/or 5GHz, 802.11 a/b/g/n/ac wireless router or gateway.',
    image: '../assets/imgs/netgear.jpg',
    rating: 4,
    url: 'https://www.amazon.com/NETGEAR-Wi-Fi-Range-Extender-EX3700/dp/B00R92CL5E/ref=lp_17938598011_1_11?th=1'
  },
  {
    id: 4,
    name: 'Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries',
    price: 10.73,
    description: 'These high-performance batteries deliver the right amount of power for the specific device, ensuring optimal efficiency.',
    image: '../assets/imgs/batteries.jpg',
    rating: 4.5,
    url: 'https://www.amazon.com/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00LH3DMUO/ref=lp_17938598011_1_5?th=1'
  },
  {
    id: 5,
    name: 'Switch Pro Controller for Nintendo Switch/Switch Lite',
    price: 28.99,
    description: 'Upgrade Pro Controller: This controller has NFC and Wake up from sleep features. This controller is fully compatible with Nintendo Switch, including all the keys of the original Switch. This easy to use controller is quick to connect and ergonomic.',
    image: '../assets/imgs/nintendo.jpg',
    rating: 4.6,
    url: 'https://www.amazon.com/dp/B09J4M22WW/ref=sspa_dk_detail_0?pd_rd_i=B09J4M22WW&pd_rd_w=dXr17&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=hDql2&pf_rd_r=SSAQY4SBFW2R5EYZCSGA&pd_rd_r=5eb845c8-51c2-44ac-a49b-866388824e50&s=videogames&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyM01HU1pGSThNVkFJJmVuY3J5cHRlZElkPUEwNDIyNTg5M0dMRUFVSklGT0JXTyZlbmNyeXB0ZWRBZElkPUEwMzY2OTEzM09KN1k1SjdDNlYwMyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1'
  },
  {
    id: 6,
    name: '3 x GLISTER ® Multi-action Oral Rinse 2 fl. oz',
    price: 43.19,
    description: '3 bottles of 59 mL Glister Multi-Action Oral Rinse. Each bottle provides 100 uses. Reduces plaque and kills bacteria that causes bad breath.',
    image: '../assets/imgs/glister.jpg',
    rating: 5,
    url: 'https://www.amazon.com/GLISTER-Multi-action-Oral-Rinse-fl/dp/B007XZOPI8/ref=sr_1_3?crid=2CG3RXJU3RQCY&keywords=glister&qid=1646654378&sprefix=glist%2Caps%2C586&sr=8-3'
  },
  {
    id: 7,
    name: 'Scotch Heavy Duty Packaging Tape',
    price: 9.99,
    description: 'This heavy duty packing tape is guaranteed to Stay Sealed. If your box does not stay sealed, 3M will refund the purchase price of this tape. ',
    image: '../assets/imgs/scotch.jpg',
    rating: 5,
    url: 'https://www.amazon.com/Scotch-Shipping-Packaging-Dispenser-142-6/dp/B000J07BRQ/ref=lp_17938598011_1_10'
  },
  {
    id: 8,
    name: 'NIVEA MEN DEEP Active Clean Charcoal Body Wash',
    price: 10.80,
    description: 'Actively Cleanses: NIVEA MEN body wash actively cleanses skin without drying it out',
    image: '../assets/imgs/nivea.jpg',
    rating: 4.3,
    url: 'https://www.amazon.com/NIVEA-Men-DEEP-Active-Clean/dp/B01329XE2Q/ref=sr_1_35?keywords=nivia&qid=1646656484&sr=8-35'
  },
  {
    id: 9,
    name: 'PlayStation Classic',
    price: 72.99,
    description: 'PlayStation Classic comes with 20 pre loaded games including, Final Fantasy Vll, Jumping Flash, Ridge Racer Type 4, Tekken 3 and Wild Arms',
    image: '../assets/imgs/playstation.jpg',
    rating: 4,
    url: 'https://www.amazon.com/PlayStation-Classic-Console/dp/B07HHVF2XG/ref=sr_1_1?keywords=playstation+consoles&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=K1YFCVN24BB0RRC9Y0C1&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1646656447&s=videogames&sr=1-1'
  },
  {
    id: 10,
    name: 'HyperX Cloud Alpha S - PC Gaming Headset, 7.1 Surround Sound, Adjustable Bass',
    price: 79.99,
    description: 'Custom-tuned HyperX 7.1 surround sound',
    image: '../assets/imgs/headset.jpg',
    rating: 4.1,
    url: 'https://www.amazon.com/HyperX-Cloud-Alpha-Adjustable-Leatherette/dp/B07X6HDSDY?ref_=Oct_DLandingS_D_d99ecc2d_62&smid=ATVPDKIKX0DER&th=1'
  }
];
