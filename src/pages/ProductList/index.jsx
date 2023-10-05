
  const products = [
    {
      id: "1",
      name: "MacBook Pro",
      maker: "Apple",
      description: "High-performance laptop.",
      category: "Laptops",
      price: 2499.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/614XgOF31AL._AC_SL1024_.jpg",
    },
    {
      id: "2",
      name: "Surface Laptop",
      maker: "Microsoft",
      description: "Laptop with standout details.",
      category: "Laptops",
      price: 1199.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/61VgAvczLUL._AC_SL1080_.jpg",
    },
    {
      id: "3",
      name: "Dell XPS 13",
      maker: "Dell",
      description: "Compact and powerful laptop.",
      category: "Laptops",
      price: 1299.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/716T+1iVYqL._AC_SL1386_.jpg",
    },
    {
      id: "4",
      name: "HP Spectre x360",
      maker: "HP",
      description: "Convertible laptop with a sleek design.",
      category: "Laptops",
      price: 1499.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/51rXmwhbrTL._AC_SL1125_.jpg",
    },
    {
      id: "5",
      name: "iPhone 14",
      maker: "Apple",
      description: "Latest iPhone model.",
      category: "Smartphones",
      price: 799.99,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_SL1500_.jpg",
    },
    {
      id: "6",
      name: "Pixel 7",
      maker: "Google",
      description: "Excellent camera and smooth operation.",
      category: "Smartphones",
      price: 699.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/81L2V8RIBPL._AC_SL1500_.jpg",
    },
    {
      id: "7",
      name: "Samsung Galaxy S22",
      maker: "Samsung",
      description: "Powerful smartphone with great camera.",
      category: "Smartphones",
      price: 799.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/71GoXXLv9AL._AC_SL1500_.jpg",
    },
    {
      id: "8",
      name: "OnePlus 9",
      maker: "OnePlus",
      description: "Solid performance with a sleek design.",
      category: "Smartphones",
      price: 729.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/51qnMfIlsCL._AC_SL1100_.jpg",
    },
    {
      id: "9",
      name: "iPad Pro",
      maker: "Apple",
      description: "High processing power tablet.",
      category: "Tablets",
      price: 1099.99,
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/61Y39sE4nuL._AC_SL1500_.jpg",
    },
    {
      id: "10",
      name: "Samsung Galaxy Tab S7",
      maker: "Samsung",
      description: "Advanced multitasking tablet.",
      category: "Tablets",
      price: 699.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/91FCZ524BXS._AC_SL1500_.jpg",
    },
    {
      id: "11",
      name: "Surface Pro 8",
      maker: "Microsoft",
      description: "2-in-1 laptop and tablet.",
      category: "Tablets",
      price: 1099.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/51IPZlKsXwL._AC_SL1080_.jpg",
    },
    {
      id: "12",
      name: "Amazon Fire HD 10",
      maker: "Amazon",
      description: "Affordable tablet with solid performance.",
      category: "Tablets",
      price: 149.99,
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/61pVhXiQNNL._AC_SL1000_.jpg",
    },
    {
      id: "13",
      name: "Apple Watch Series 7",
      maker: "Apple",
      description: "Smartwatch with a larger display.",
      category: "Smart Watches",
      price: 399.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/71W+RrSPINL._AC_SL1500_.jpg",
    },
    {
      id: "14",
      name: "Samsung Galaxy Watch 4",
      maker: "Samsung",
      description: "Smartwatch with advanced health features.",
      category: "Smart Watches",
      price: 249.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/61em2RBifsL._AC_SL1500_.jpg",
    },
    {
      id: "15",
      name: "Fitbit Versa 3",
      maker: "Fitbit",
      description: "Fitness-oriented smartwatch.",
      category: "Smart Watches",
      price: 229.99,
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/61CZSoSnVPL._AC_SL1500_.jpg",
    },
    {
      id: "16",
      name: "Garmin Venu 2",
      maker: "Garmin",
      description: "GPS smartwatch with advanced fitness features.",
      category: "Smart Watches",
      price: 399.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/71sh8UMeT+L._AC_SL1417_.jpg",
    },
    {
      id: "17",
      name: "Oculus Quest 2",
      maker: "Meta",
      description: "Immersive virtual reality headset.",
      category: "VR",
      price: 299.99,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_SL1500_.jpg",
    },
    {
      id: "18",
      name: "PlayStation VR",
      maker: "Sony",
      description: "Virtual reality headset for PlayStation.",
      category: "VR",
      price: 299.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/51G8NFN0AFL._AC_SL1500_.jpg",
    },
    {
      id: "19",
      name: "HoloLens 2",
      maker: "Microsoft",
      description: "Mixed reality smartglasses.",
      category: "AR",
      price: 3500.0,
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/51TtfKIAtSL._AC_SL1000_.jpg",
    },
    {
      id: "20",
      name: "Magic Leap 1",
      maker: "Magic Leap",
      description: "Augmented reality headset.",
      category: "AR",
      price: 2295.0,
      rating: 3.9,
      image: "https://m.media-amazon.com/images/I/71IRTWr5--L._SL1500_.jpg",
    },
    {
      id: "21",
      name: "Google Nest Hub",
      maker: "Google",
      description: "Smart display with Google Assistant.",
      category: "Smart Home",
      price: 99.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/614RoGCz8vL._AC_SL1200_.jpg",
    },
    {
      id: "22",
      name: "Amazon Echo Show 10",
      maker: "Amazon",
      description: "Smart display with Alexa.",
      category: "Smart Home",
      price: 249.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/51EVETDOOeL._AC_SL1000_.jpg",
    },
    {
      id: "23",
      name: "Apple HomePod mini",
      maker: "Apple",
      description: "Compact smart speaker.",
      category: "Smart Home",
      price: 99.0,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/81U4G573MuL._AC_SL1500_.jpg",
    },
    {
      id: "24",
      name: "Sonos One",
      maker: "Sonos",
      description: "Wireless smart speaker.",
      category: "Smart Home",
      price: 199.0,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/616dyBmxCAL._AC_SL1000_.jpg",
    },
    {
      id: "25",
      name: "Apple TV 4K",
      maker: "Apple",
      description: "Stream your favorite videos in 4K HDR quality.",
      category: "Streaming Devices",
      price: 179.0,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/815g8Uo656S._AC_SL1500_.jpg",
    },
    {
      id: "26",
      name: "Roku Streaming Stick+",
      maker: "Roku",
      description: "Portable streaming device.",
      category: "Streaming Devices",
      price: 44.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61NcquKe00L._AC_SL1500_.jpg",
    },
    {
      id: "27",
      name: "Amazon Fire Stick 4K",
      maker: "Amazon",
      description: "4K streaming media stick.",
      category: "Streaming Devices",
      price: 49.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/41GYmjbeVSL._AC_SL1000_.jpg",
    },
    {
      id: "28",
      name: "Google Chromecast with Google TV",
      maker: "Google",
      description: "Stream your favorite entertainment.",
      category: "Streaming Devices",
      price: 49.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/51zUyjdP1oL._AC_SL1500_.jpg",
    },
    {
      id: "29",
      name: "Nvidia Shield TV",
      maker: "Nvidia",
      description: "High-performance streaming media player.",
      category: "Streaming Devices",
      price: 149.99,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/518UNbV34gL._AC_SL1500_.jpg",
    },
    {
      id: "30",
      name: "Ring Video Doorbell 4",
      maker: "Ring",
      description: "Home security starts at the front door.",
      category: "Smart Home",
      price: 199,
      image: "https://m.media-amazon.com/images/I/61LbvlbShHL._SL1000_.jpg",
    },
  ];

  



