const products = [
  {
    name: 'Apple iPhone 12 Pro',
    price: 129999,
    description:
      'Meet the new iPhone 12 Pro. 5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/iphone-12-pro-graphite?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 12 Pro Max',
    price: 139999,
    description:
      'Meet the new iPhone 12 Pro. 5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-12-pro-max-gold-10132020?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 12',
    price: 94999,
    description:
      'Meet the new iPhone 12 Pro. 5G speed. A14 Bionic, the fastest chip in a smartphone. And a Pro camera system that takes low-light photography to the next level.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-12-white-10132020?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 12 Mini',
    price: 84999,
    description:
      "The new iPhone 12 mini is the world's smallest, thinnest, and lightest 5G phone. Complete with A14 Bionic, the fastest chip in a smartphone. A new dual-camera system. And a beautiful Super Retina XDR display.",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/apple-64gb-5-4in-iphone-12-mini-product-red-mg6j3ll-a?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 11',
    price: 74999,
    description:
      'Meet iPhone 11. A new dual-camera system captures more of what you see and love. The fastest chip ever in a smartphone and all-day battery life let you do more and charge less. Moreover, it features the highest-quality video in a smartphone, so your memories look better than ever. The iPhone 11 comes in 6 stunning color options and features a gorgeous 6.1-inch all-screen Liquid Retina LCD. Get the most of it with your network of choice.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/Apple_iPhone_11_Purple_09102019?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 11 Pro Max',
    price: 119999,
    description:
      'Introducing the iPhone 11 Pro Max. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro. Unleash the full potential of your iPhone 11 Pro Max with your network of choice.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/iphone-11-pro-max-silver?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone 11 Pro',
    price: 109999,
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro. The iPhone 11 Pro comes in 4 new textured matte glass finishes and features a 5.8-inch Super Retina XDR display and the toughest glass in a smartphone. Unleash its full potential with your network of choice.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/Apple_iPhone_11_Pro_Space_Gray_09102019?fmt=pjpg&hei=228'
  },
  {
    name: 'Apple iPhone SE (2020)',
    price: 54999,
    description:
      "iPhone SE is the most powerful 4.7-inch iPhone ever.1more information in foot notes Featuring A13 Bionic, the fastest chip in a smartphone, for incredible performance in apps, games, and photography. Portrait mode for studio-quality portraits and six lighting effects. Next-generation Smart HDR for incredible detail across highlights and shadows. Cinematic-quality 4K video. And all the advanced features of iOS. With long battery life and water resistance,it's so much of the iPhone you love, in a not so big size. So much to love, so little to hold with the iPhone SE and Verizon, America's most awarded network.",
    imgUrl:
      'https://ss73.vzw.com/is/image/VerizonWireless/apple-iphone-se-2020-black-04152020?bgc=ffffff&hei=300&wid=280'
  },
  {
    name: 'Apple iPhone XR',
    price: 49999,
    description:
      "An all-new Liquid Retina display. A12 Bionic. And a 12 MP camera with an f/1.8 wide-angle lens. iPhone XR. It's beautiful any way you look at it. Comes in (PRODUCT) RED, Yellow, White, Coral, Black and Blue colors (subject to availability). Get the most out of your iPhone XR with your network of choice.",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/iPhoneXr_Coral_PureAngles?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy S20 FE 5G UW',
    price: 94999,
    description:
      "Capture the world around you in true-to-life detail using a full system of high-powered, studio-quality lenses. The Samsung Galaxy S20 FE 5G UW's camera makes it easier than ever to take snap pro-quality portraits and beautiful landscapes. And with the 32 MP front-facing camera, stunning selfies are at your fingertips.",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-gs-20-fe-cloud-lavender-smg781vlvv-09112020?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy Z Fold2 5G',
    price: 184999,
    description:
      "Multitask, stream, game and more with the Galaxy Z Fold2 5G's Qualcomm® Snapdragon™ 865 Plus processor and impressive 12GB RAM. And with 256GB of internal storage, you have all the space you need for the things you love.",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-z-fold2-5g-mystic-black-smf916uzkv?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy J7',
    price: 74999,
    description:
      'Meet iPhone 11. A new dual-camera system captures more of what you see and love. The fastest chip ever in a smartphone and all-day battery life let you do more and charge less. Moreover, it features the highest-quality video in a smartphone, so your memories look better than ever. The iPhone 11 comes in 6 stunning color options and features a gorgeous 6.1-inch all-screen Liquid Retina LCD. Get the most of it with your network of choice.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/Apple_iPhone_11_Purple_09102019?fmt=pjpg&hei=228'
  },
  {
    name: 'Samsung Galaxy A51',
    price: 119999,
    description:
      "Game, talk, text and more without worry. The Galaxy A51's long-lasting 4,000 mAh battery gives you hours of power on a single charge. And for those times when you're short on time and juice, Fast Charging will get you fueled up in no time.1",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-a51-4g-smartphone-black-sma515uzkvz?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy S10',
    price: 109999,
    description:
      'Watch your videos come alive on a virtually frameless Cinematic Infinity Display. The Samsung Galaxy S10 gives you more detail, more clarity and a more immersive viewing experience on a slim and streamlined device.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s10-black?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy Note20 Ultra 5G    ',
    price: 54999,
    description:
      "Did someone say lag-free gaming and competition-crushing performance? Galaxy Note20 Ultra 5G brings an optimal gaming experience right to the palm of your hand with a lightning-fast 120 Hz refresh rate display, ultra-fast 5G speeds and the latest Snapdragon™ 865 Plus processor. And with an intelligent battery, you won't have to worry about losing juice mid-game.",
    imgUrl:
      'https://ss73.vzw.com/is/image/VerizonWireless/apple-iphone-se-2020-black-04152020?bgc=ffffff&hei=300&wid=280'
  },
  {
    name: 'Samsung Galaxy Note10',
    price: 49999,
    description:
      "Samsung Galaxy Note10’s 3,500 mAh battery learns your routine and uses it to optimize power and performance throughout the day. Using Superfast Charge, you can get back hours of power with just minutes of charge.2An all-new Liquid Retina display. A12 Bionic. And a 12 MP camera with an f/1.8 wide-angle lens. iPhone XR. It's beautiful any way you look at it. Comes in (PRODUCT) RED, Yellow, White, Coral, Black and Blue colors (subject to availability). Get the most out of your iPhone XR with your network of choice.",
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/davinci-1-front-aura-white?fmt=pjpg&hei=520'
  },
  {
    name: 'Samsung Galaxy S21 Ultra 5G',
    price: 114999,
    description:
      'Welcome to the big screens. Super retina. Even faster Face ID. A12 Bionic. And a breakthrough dual-camera system. iPhone XS is everything you love about iPhone. Taken to the extreme. Comes in silver, gold and space gray colors (subject to availability). Get the most out of your iPhone XS with your network of choiceDesigned with an all-new seamless metal camera, modern matte finishes and ultra-tough glass, the Galaxy S21+ 5G is a head-turner. Choose the color that fits your vibe for a smartphone that looks as good as it performs.',
    imgUrl:
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-flagship-smartphone-palette-p3-black-256gb-smg998uzkev?fmt=pjpg&hei=520'
  }
]

module.exports = products
