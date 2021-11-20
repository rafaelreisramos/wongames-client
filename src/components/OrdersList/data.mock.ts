const dataMock = [
  {
    id: '1',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      number: '**** **** **** 1234',
      purchaseDate: 'Purchase made on May 5, 2021'
    },
    games: [
      {
        id: '1',
        title: 'Game title',
        downloadLink: 'https://wongames.com/game/download/gamelink1',
        img: 'https://source.unsplash.com/151x70',
        price: '$215.00'
      }
    ]
  },
  {
    id: '2',
    paymentInfo: {
      flag: 'visa',
      img: '/img/cards/visa.png',
      number: '**** **** **** 4321',
      purchaseDate: 'Purchase made on May 5, 2021'
    },
    games: [
      {
        id: '1',
        title: 'Game title',
        downloadLink: 'https://wongames.com/game/download/gamelink1',
        img: 'https://source.unsplash.com/151x70',
        price: '$215.00'
      }
    ]
  }
]

export default dataMock
