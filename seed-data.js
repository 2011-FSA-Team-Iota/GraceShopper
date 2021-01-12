const products = [
  {
    name: 'iphone x',
    price: 299.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone xr',
    price: 99.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 4',
    price: 1999.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 5',
    price: 50,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 6',
    price: 230,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 7',
    price: 500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 8',
    price: 600,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone xs Max',
    price: 800,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11',
    price: 250,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11 proMax',
    price: 80,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11 Pro',
    price: 65,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12',
    price: 25,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12 Pro',
    price: 120,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12 Pro Max',
    price: 400,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 13',
    price: 500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 13 Pro',
    price: 250,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  }
]

module.exports = products
