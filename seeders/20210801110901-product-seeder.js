"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "ACER Swift 1 Fresh",
          description:
            "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
          price: 5800000,
          stock: 12,
          category: "Laptop",
          brand: "Acer",
          image:
            "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenovo S340",
          description: "Processor: Ryzen 3 4300U | 4GB DDR4 | 256GB SSD",
          price: 8200000,
          stock: 8,
          category: "Laptop",
          brand: "Lenovo",
          image:
            "https://3.bp.blogspot.com/-gfGOK-G0Rl0/XgM4mQS6hhI/AAAAAAAAESE/2CT7uQiaS7sa6KMDp6GHrafJcl-IoueLQCLcBGAsYHQ/s16000/20191221_090434.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asus ROG Strix G15 (G512LI)",
          description:
            "Processor: i7-10750H | GTX 1650 Ti | 8GB DDR4 | 512GB SSD",
          price: 20400000,
          stock: 2,
          category: "Laptop",
          brand: "Asus",
          image: "https://cdn.mos.cms.futurecdn.net/Sa45EbX6o8CZihaDWdc5Rf.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HP PAVILION GAMING 15",
          description:
            "Processor: AMD Ryzen™ 7 | GTX 1650 Ti | 16GB DDR4 | 512GB SSD",
          price: 15000000,
          stock: 5,
          category: "Laptop",
          brand: "HP",
          image:
            "https://pemmzchannel.com/wp-content/uploads/2020/08/Screenshot-491-min.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asus VivoBook Ultra A412",
          description: "Processor: i3-8145U | MX250 | 4GB DDR4 | 512GB SSD",
          price: 7600000,
          stock: 10,
          category: "Laptop",
          brand: "Asus",
          image:
            "https://1.bp.blogspot.com/-GniNClJwH4w/XWvoJckhbgI/AAAAAAAAJB0/Xl3OGbdco-4sHcQkDtZ9qB1uEJiOuxkmwCLcBGAs/s1600/ASUS%2BVIVOBOOK%2BULTRA%2BA412.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
