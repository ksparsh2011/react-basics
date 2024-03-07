const fs = require("fs");
const data = [
  {
    id: 7,
    title: "Home & Kitchen",
    category_icon:
      "https://images.meesho.com/images/android/home_kitchen_images.png",
    level_2: [
      {
        id: 40,
        title: "Kitchen & Appliances",
        level_3: [
          {
            id: 194,
            title: "View All",
            page: {
              page_id: "3tr",
              type: "PRODUCT_LISTING_PAGE",
              slug: "kitchenware",
              ss_id: [
                "1130",
                "1132",
                "1601",
                "1603",
                "1646",
                "1648",
                "1656",
                "1661",
                "1765",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628502636700.png",
          },
          {
            id: 195,
            title: "Kitchen Tools",
            page: {
              page_id: "9i2",
              type: "PRODUCT_LISTING_PAGE",
              slug: "kitchen-tools",
              ss_id: ["2296"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308552605.png",
          },
          {
            id: 196,
            title: "Storage & Organizers",
            page: {
              page_id: "3tn",
              type: "PRODUCT_LISTING_PAGE",
              slug: "kitchen-storage",
              ss_id: [
                "1640",
                "1642",
                "1639",
                "1644",
                "1643",
                "1124",
                "1260",
                "1428",
                "1641",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308536034.png",
          },
          {
            id: 197,
            title: "Appliances",
            page: {
              page_id: "3to",
              type: "PRODUCT_LISTING_PAGE",
              slug: "appliances",
              ss_id: [
                "1416",
                "1399",
                "1397",
                "1807",
                "1474",
                "1475",
                "1479",
                "1546",
                "1480",
                "1510",
                "1502",
                "1472",
                "1507",
                "1415",
                "1477",
                "1547",
                "1478",
                "1473",
                "1417",
                "1491",
                "1487",
                "1556",
                "1485",
                "1398",
                "1482",
                "1488",
                "1559",
                "1489",
                "1509",
                "1490",
                "1486",
                "1492",
                "1554",
                "1558",
                "1552",
                "1550",
                "1557",
                "1483",
                "1484",
                "1560",
                "1553",
                "1370",
                "1369",
                "1563",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501692361.png",
          },
          {
            id: 198,
            title: "Cookware",
            page: {
              page_id: "3tm",
              type: "PRODUCT_LISTING_PAGE",
              slug: "cookware-bakeware",
              ss_id: [
                "1595",
                "1600",
                "1596",
                "1599",
                "1601",
                "1597",
                "1598",
                "1132",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308665459.png",
          },
          {
            id: 199,
            title: "Dinnerware",
            page: {
              page_id: "9ig",
              type: "PRODUCT_LISTING_PAGE",
              slug: "dinnerware",
              ss_id: ["2253"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308686930.png",
          },
          {
            id: 200,
            title: "Bakeware",
            page: {
              page_id: "9ht",
              type: "PRODUCT_LISTING_PAGE",
              slug: "bakeware",
              ss_id: ["2308"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308676216.png",
          },
          {
            id: 202,
            title: "Glasses & Barware",
            page: {
              page_id: "3nz",
              type: "PRODUCT_LISTING_PAGE",
              slug: "glassware-drinkware",
              ss_id: ["1603"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627381808770.png",
          },
        ],
      },
      {
        id: 26,
        title: "Home Furnishing",
        level_3: [
          {
            id: 93,
            title: "Bedsheets",
            page: {
              page_id: "3jm",
              type: "PRODUCT_LISTING_PAGE",
              slug: "bedsheets",
              ss_id: ["2530"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501227809.png",
          },
          {
            id: 95,
            title: "Curtains & Sheers",
            page: {
              page_id: "3jn",
              type: "PRODUCT_LISTING_PAGE",
              slug: "curtains-sheers",
              ss_id: ["2531", "2545", "2531"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501241502.png",
          },
          {
            id: 189,
            title: "Pillows, Cushions & Covers",
            page: {
              page_id: "3vm",
              type: "PRODUCT_LISTING_PAGE",
              slug: "pillows",
              ss_id: ["1105"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308752650.png",
          },
          {
            id: 96,
            title: "Cushions & Cushion Covers",
            page: {
              page_id: "3k3",
              type: "PRODUCT_LISTING_PAGE",
              slug: "cushion-covers",
              ss_id: ["1108", "2547", "2508"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308752650.png",
          },
          {
            id: 190,
            title: "Carpets & Doormats",
            page: {
              page_id: "3sq",
              type: "PRODUCT_LISTING_PAGE",
              slug: "carpets",
              ss_id: ["1723", "1119", "1722", "1724"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627381851512.png",
          },
          {
            id: 97,
            title: "Mattress Protectors",
            page: {
              page_id: "3l3",
              type: "PRODUCT_LISTING_PAGE",
              slug: "mattress-protectors",
              ss_id: ["1104"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501259551.png",
          },
          {
            id: 191,
            title: "Sofa & Diwan Sets",
            page: {
              page_id: "3sr",
              type: "PRODUCT_LISTING_PAGE",
              slug: "diwan-sets",
              ss_id: ["2361"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308778214.png",
          },
          {
            id: 192,
            title: "Towels & Bathrobes",
            page: {
              page_id: "3sm",
              type: "PRODUCT_LISTING_PAGE",
              slug: "bath-towels",
              ss_id: ["1110", "1113"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627381837882.png",
          },
          {
            id: 193,
            title: "Blankets, Quilts & Dohars",
            page: {
              page_id: "3mv",
              type: "PRODUCT_LISTING_PAGE",
              slug: "quilts-blankets",
              ss_id: ["1102"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308792653.png",
          },
        ],
      },
      {
        id: 27,
        title: "Home Decor",
        level_3: [
          {
            id: 98,
            title: "All Home Decor",
            page: {
              page_id: "3tl",
              type: "PRODUCT_LISTING_PAGE",
              slug: "home-decor",
              ss_id: ["1445"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628503526983.png",
          },
          {
            id: 203,
            title: "Appliances Covers",
            page: {
              page_id: "9ik",
              type: "PRODUCT_LISTING_PAGE",
              slug: "appliance-cover",
              ss_id: ["2242"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628503776002.png",
          },
          {
            id: 100,
            title: "Clocks",
            page: {
              page_id: "3kh",
              type: "PRODUCT_LISTING_PAGE",
              slug: "clocks",
              ss_id: ["1440"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501425651.png",
          },
          {
            id: 204,
            title: "Storage & Organizers",
            page: {
              page_id: "43x",
              type: "PRODUCT_LISTING_PAGE",
              slug: "organizer-",
              ss_id: ["2191"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308536034.png",
          },
          {
            id: 101,
            title: "Showpieces",
            page: {
              page_id: "3ku",
              type: "PRODUCT_LISTING_PAGE",
              slug: "show-pieces-home",
              ss_id: ["1615"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628503539564.png",
          },
          {
            id: 205,
            title: "Paintings & Photoframes",
            page: {
              page_id: "3of",
              type: "PRODUCT_LISTING_PAGE",
              slug: "photo-frames",
              ss_id: ["1617"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308906380.png",
          },
          {
            id: 206,
            title: "Stickers & Wallpapers",
            page: {
              page_id: "3ob",
              type: "PRODUCT_LISTING_PAGE",
              slug: "home-wallpapers",
              ss_id: ["1613"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308916920.png",
          },
          {
            id: 207,
            title: "Lights",
            page: {
              page_id: "9ts",
              type: "PRODUCT_LISTING_PAGE",
              slug: "home-decoration-lights",
              ss_id: [
                "1439",
                "2289",
                "3387",
                "2365",
                "2354",
                "3495",
                "2493",
                "2247",
                "2847",
                "2372",
                "2266",
                "3362",
                "2523",
                "2245",
                "3490",
                "2419",
                "2378",
                "2509",
                "2358",
                "1445",
                "2411",
                "4405",
                "1701",
                "1134",
                "4166",
                "2397",
                "4065",
                "1437",
                "2393",
                "4628",
                "2540",
                "2422",
                "2339",
                "2624",
                "4936",
                "4212",
                "2753",
                "2502",
                "2846",
                "2396",
                "2400",
                "5192",
                "2510",
                "3298",
                "3390",
                "2193",
                "1416",
                "5108",
                "2537",
                "1620",
                "2060",
                "4079",
                "2222",
                "4957",
                "2316",
                "3333",
                "2719",
                "2213",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628503759540.png",
          },
          {
            id: 208,
            title: "Gifts & Mugs",
            page: {
              page_id: "3nx",
              type: "PRODUCT_LISTING_PAGE",
              slug: "gifts-mugs",
              ss_id: ["1268"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308926506.png",
          },
        ],
      },
      {
        id: 28,
        title: "Kitchen & Dining",
        level_3: [
          {
            id: 103,
            title: "Kitchen Storage",
            page: {
              page_id: "3tn",
              type: "PRODUCT_LISTING_PAGE",
              slug: "kitchen-storage",
              ss_id: [
                "1640",
                "1642",
                "1639",
                "1644",
                "1643",
                "1124",
                "1260",
                "1428",
                "1641",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308552605.png",
          },
          {
            id: 104,
            title: "Cookware & Bakeware",
            page: {
              page_id: "3tm",
              type: "PRODUCT_LISTING_PAGE",
              slug: "cookware-bakeware",
              ss_id: [
                "1595",
                "1600",
                "1596",
                "1599",
                "1601",
                "1597",
                "1598",
                "1132",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308665459.png",
          },
        ],
      },
      {
        id: 41,
        title: "Home Improvement",
        level_3: [
          {
            id: 209,
            title: "All Home Essentials",
            page: {
              page_id: "3ts",
              type: "PRODUCT_LISTING_PAGE",
              slug: "homecare",
              ss_id: [
                "1416",
                "1399",
                "1397",
                "1807",
                "1474",
                "1475",
                "1479",
                "1546",
                "1480",
                "1510",
                "1502",
                "1472",
                "1507",
                "1415",
                "1477",
                "1547",
                "1478",
                "1473",
                "1417",
                "1615",
                "1610",
                "1611",
                "1612",
                "1267",
                "1622",
                "1621",
                "1439",
                "1618",
                "1440",
                "1619",
                "1616",
                "1268",
                "1614",
                "1620",
                "1436",
                "1613",
                "1810",
                "1617",
                "1809",
                "1625",
                "1628",
                "1623",
                "1627",
                "1624",
                "1626",
                "1135",
                "1801",
                "1684",
                "1687",
                "1692",
                "1691",
                "1689",
                "1690",
                "1693",
                "1686",
                "1688",
                "1445",
                "1715",
                "1134",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501556306.png",
          },
          {
            id: 210,
            title: "Cleaning Supplies",
            page: {
              page_id: "9ii",
              type: "PRODUCT_LISTING_PAGE",
              slug: "cleaning-supplies",
              ss_id: ["2250"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628503077596.png",
          },
          {
            id: 211,
            title: "Gardening",
            page: {
              page_id: "9tn",
              type: "PRODUCT_LISTING_PAGE",
              slug: "gardening-tools",
              ss_id: [
                "3904",
                "2285",
                "2296",
                "1605",
                "4041",
                "2321",
                "4290",
                "1309",
                "3247",
                "3168",
                "4452",
                "2225",
                "3152",
                "3214",
                "3176",
                "1836",
                "2060",
                "2317",
                "4032",
                "3155",
                "2288",
                "4294",
                "2255",
                "1434",
                "4180",
                "4126",
                "1424",
                "5125",
              ],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308964512.png",
          },
          {
            id: 212,
            title: "Bathroom Accessories",
            page: {
              page_id: "3nx",
              type: "PRODUCT_LISTING_PAGE",
              slug: "gifts-mugs",
              ss_id: ["1268"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1628501584885.png",
          },
          {
            id: 213,
            title: "Insect Protection",
            page: {
              page_id: "905",
              type: "PRODUCT_LISTING_PAGE",
              slug: "insect-repellent",
              ss_id: ["4232"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308979574.png",
          },
          {
            id: 214,
            title: "Home Tools",
            page: {
              page_id: "9l1",
              type: "PRODUCT_LISTING_PAGE",
              slug: "other-home-improvement-tools",
              ss_id: ["2060"],
            },
            category_icon:
              "https://images.meesho.com/images/marketing/1627308989165.png",
          },
        ],
      },
    ],
  },
];

const filteredData = data.flatMap((category) =>
  category.level_2.filter((subcategory) => subcategory.title === "Home Decor")
);

// Function to remove the page_id key recursively
const removePageId = (obj) => {
  for (let key in obj) {
    if (key === "page_id") {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removePageId(obj[key]);
    }
  }
};

// Remove page_id key from each object in filteredData
filteredData.forEach((subcategory) => {
  removePageId(subcategory);
});

const filePath = "filteredArray.json";
const jsonData = JSON.stringify(filteredData, null, 2);

fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Filtered array of objects has been written to", filePath);
  }
});
