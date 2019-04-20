const products = [
  {
    id: 1,
    name: 'Tattoo Choker',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    imageUrl:
      'https://img1.etsystatic.com/038/0/9322811/il_570xN.625004427_i7d1.jpg',
    price: 3029,
    inventory: 50
  },
  {
    id: 2,
    name: 'Baby G Watch',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    imageUrl:
      'https://casiocdn.com/casio-v2/resource/images/products/watches/small/BG169R-3_small.png',
    price: 1893,
    inventory: 21
  },
  {
    id: 3,
    name: 'Slap Bracelet',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    imageUrl:
      'https://img1.etsystatic.com/103/1/8147871/il_fullxfull.836490203_d5j0.jpg',
    price: 3132,
    inventory: 56
  },
  {
    id: 4,
    name: 'Nintendo 64',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    imageUrl:
      'http://static.giantbomb.com/uploads/original/9/99864/2420173-n64_console_set.png',
    price: 5783,
    inventory: 9
  },
  {
    id: 5,
    name: 'Ring Pop',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    imageUrl:
      'https://thefunsocial.com/wp-content/uploads/2017/11/ring-pops_1.jpg',
    price: 519,
    inventory: 88
  },
  {
    id: 6,
    name: 'Easy Bake Oven',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/G/01/toys/detail-page/B001DI4VN0-1-lg.jpg',
    price: 270,
    inventory: 11
  },
  {
    id: 7,
    name: 'Beanie Babies',
    description: 'In congue. Etiam justo.',
    imageUrl:
      'http://demandware.edgesuite.net/aamm_prd/on/demandware.static/-/Sites-joann-product-catalog/default/dwbbb87a8f/images/hi-res/14/14873418.jpg',
    price: 7348,
    inventory: 10
  },
  {
    id: 8,
    name: 'Furby',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    imageUrl:
      'http://stacysrandomthoughts.com/http://stacysrandomthoughts.com/wp-content/2012/09/NewFurby.jpg',
    price: 6747,
    inventory: 72
  },
  {
    id: 9,
    name: 'Bop It',
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    imageUrl:
      'https://img.etsystatic.com/il/7c12c7/882209094/il_570xN.882209094_kgg0.jpg',
    price: 4873,
    inventory: 11
  },
  {
    id: 10,
    name: 'Hungry Hungry Hippos',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    imageUrl:
      'https://www.bing.com/th?id=OIP.18nGbB8rJ7qftaF_QZUi0QHaHa&pid=Api&rs=1&p=0',
    price: 6538,
    inventory: 58
  },
  {
    id: 11,
    name: 'Gelly Roll Pens',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    imageUrl:
      'https://www.bing.com/th?id=OIP.HUCZsP2M2mPwl3xZJPD_yAHaE8&w=300&h=200&c=7&o=5&dpr=2&pid=1.7',
    price: 512,
    inventory: 84
  },
  {
    id: 12,
    name: 'Butterfly Clips',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    imageUrl:
      'https://imgix.bustle.com/uploads/image/2018/2/18/119b6239-8456-46ae-a8d4-cb409edc3eed-butterfly-clips.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70&dpr=2',
    price: 4584,
    inventory: 80
  },
  {
    id: 13,
    name: 'Moon Shoes',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    imageUrl:
      'http://bigtimetoys.com/wp-content/uploads/2018/01/918sMrP0a0L._SL1500_.jpg',
    price: 3422,
    inventory: 86
  },
  {
    id: 14,
    name: 'Hair Crimper',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    imageUrl:
      'http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/k84AAOxycmBS-ot0/$_3.JPG?set_id=2',
    price: 2124,
    inventory: 62
  },
  {
    id: 15,
    name: 'Nintendo Gameboy Color',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    imageUrl:
      'https://www.bing.com/th?id=OIP.TfCBqcDIRwhLhGs9thTVeAHaMG&pid=Api&rs=1&p=0',
    price: 5158,
    inventory: 92
  },
  {
    id: 16,
    name: 'Silly Putty',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    imageUrl:
      'http://2.bp.blogspot.com/-w8wysxGHMBw/UiSSPbmLvYI/AAAAAAAAFOQ/YFjzm-PIIGY/s1600/eeef_original_silly_putty.jpg',
    price: 6904,
    inventory: 24
  },
  {
    id: 17,
    name: 'Lip Smackers',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    imageUrl:
      'https://media1.s-nbcnews.com/j/newscms/2015_12/460431/2d274908021623-2d274907767531-today-lipsmacker-150203-full_f8c9cbe481f31332c9e1725709ef34f3.today-inline-large.jpg',
    price: 442,
    inventory: 80
  },
  {
    id: 18,
    name: 'Spice World',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    imageUrl:
      'https://d3d71ba2asa5oz.cloudfront.net/60000194/images/91sm%2bcaan6l._sl1500_.jpg',
    price: 861,
    inventory: 32
  },
  {
    id: 19,
    name: 'Pokemon Cards',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    imageUrl:
      'http://www.rextechs.net/wp-content/uploads/2015/05/IMG_20150311_0002.jpg',
    price: 4683,
    inventory: 93
  },
  {
    id: 20,
    name: 'Walkman',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    imageUrl:
      'http://cdn.coresites.factorymedia.com/mpora_new/wp-content/uploads/2015/03/Sony-Walkman.jpg',
    price: 3849,
    inventory: 90
  }
]

module.exports = products
