const products = [
  {
    id: 1,
    name: 'Yams',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    imageUrl: 'http://dummyimage.com/201x131.bmp/dddddd/000000',
    price: 30.29,
    quantity: 50
  },
  {
    id: 2,
    name: 'Soap - Hand Soap',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    imageUrl: 'http://dummyimage.com/179x148.bmp/dddddd/000000',
    price: 18.93,
    quantity: 21
  },
  {
    id: 3,
    name: 'Coffee Caramel Biscotti',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    imageUrl: 'http://dummyimage.com/231x175.png/cc0000/ffffff',
    price: 31.32,
    quantity: 56
  },
  {
    id: 4,
    name: 'Wine - Red, Concha Y Toro',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    imageUrl: 'http://dummyimage.com/236x174.png/5fa2dd/ffffff',
    price: 57.83,
    quantity: 9
  },
  {
    id: 5,
    name: 'Buffalo - Striploin',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    imageUrl: 'http://dummyimage.com/161x125.bmp/cc0000/ffffff',
    price: 51.9,
    quantity: 88
  },
  {
    id: 6,
    name: 'Stainless Steel Cleaner Vision',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    imageUrl: 'http://dummyimage.com/117x151.jpg/cc0000/ffffff',
    price: 27.0,
    quantity: 11
  },
  {
    id: 7,
    name: 'Eggplant Italian',
    description: 'In congue. Etiam justo.',
    imageUrl: 'http://dummyimage.com/143x231.png/5fa2dd/ffffff',
    price: 73.48,
    quantity: 10
  },
  {
    id: 8,
    name: 'Sage - Rubbed',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    imageUrl: 'http://dummyimage.com/219x213.png/dddddd/000000',
    price: 67.47,
    quantity: 72
  },
  {
    id: 9,
    name: 'Bar Special K',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    imageUrl: 'http://dummyimage.com/143x152.png/cc0000/ffffff',
    price: 48.73,
    quantity: 11
  },
  {
    id: 10,
    name: 'Napkin - Dinner, White',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    imageUrl: 'http://dummyimage.com/228x214.jpg/ff4444/ffffff',
    price: 65.38,
    quantity: 58
  },
  {
    id: 11,
    name: 'Asparagus - White, Canned',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    imageUrl: 'http://dummyimage.com/134x237.png/ff4444/ffffff',
    price: 51.2,
    quantity: 84
  },
  {
    id: 12,
    name: 'Clams - Littleneck, Whole',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    imageUrl: 'http://dummyimage.com/192x107.jpg/5fa2dd/ffffff',
    price: 45.84,
    quantity: 80
  },
  {
    id: 13,
    name: 'Juice - Apple 284ml',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    imageUrl: 'http://dummyimage.com/166x194.jpg/5fa2dd/ffffff',
    price: 34.22,
    quantity: 86
  },
  {
    id: 14,
    name: 'Horseradish - Prepared',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    imageUrl: 'http://dummyimage.com/165x198.jpg/dddddd/000000',
    price: 21.24,
    quantity: 62
  },
  {
    id: 15,
    name: 'Wine - Redchard Merritt',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    imageUrl: 'http://dummyimage.com/157x123.png/ff4444/ffffff',
    price: 51.58,
    quantity: 92
  },
  {
    id: 16,
    name: 'Daikon Radish',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    imageUrl: 'http://dummyimage.com/192x208.png/5fa2dd/ffffff',
    price: 69.04,
    quantity: 24
  },
  {
    id: 17,
    name: 'Grapes - Green',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    imageUrl: 'http://dummyimage.com/241x204.png/dddddd/000000',
    price: 44.2,
    quantity: 80
  },
  {
    id: 18,
    name: 'Cheese - Brick With Pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    imageUrl: 'http://dummyimage.com/113x117.jpg/5fa2dd/ffffff',
    price: 86.1,
    quantity: 32
  },
  {
    id: 19,
    name: 'Glaze - Apricot',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    imageUrl: 'http://dummyimage.com/138x206.png/dddddd/000000',
    price: 46.83,
    quantity: 93
  },
  {
    id: 20,
    name: 'Parsley Italian - Fresh',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    imageUrl: 'http://dummyimage.com/178x176.jpg/5fa2dd/ffffff',
    price: 38.49,
    quantity: 90
  }
]

module.exports = products
