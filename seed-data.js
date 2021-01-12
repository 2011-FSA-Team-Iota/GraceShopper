const products = [
  {
    name: 'iphone x',
    price: 299.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 99.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 1999.99,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 50,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 230,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 600,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 800,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 250,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 80,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 65,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 25,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 120,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 400,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 500,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  },
  {
    name: 'iphone x',
    price: 250,
    description: 'Blah Blah',
    imgUrl:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459943718'
  }
]

export default products
