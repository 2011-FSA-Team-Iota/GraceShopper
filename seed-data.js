const products = [
  {
    name: 'iphone x',
    price: 29999,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone xr',
    price: 9999,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 4',
    price: 199999,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 5',
    price: 5000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 6',
    price: 23000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 7',
    price: 50000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 8',
    price: 60000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone xs Max',
    price: 80000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11',
    price: 25000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11 proMax',
    price: 8000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 11 Pro',
    price: 6500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12',
    price: 2500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12 Pro',
    price: 12000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 12 Pro Max',
    price: 40000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 13',
    price: 50000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone 13 Pro',
    price: 25000,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  }
]

module.exports = products
