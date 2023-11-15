console.log('Loaded EN')

export default {
  hello: 'Hello',
  navigation: {
    main: 'Home',
    services: 'Services',
    reviews: 'Reviews',
    experts: 'Experts',
    buy: 'Buy',
    prices: 'Prices',
    sales: 'Sales',
  },
  mobileMenu: {
    callToAction: 'Enjoy',
  },
  buttons: {
    callback: 'Callback',
    apointment: 'Apointment',
  },
  headerTop: {
    address: 'England',
  },
  hero: {
    callToAction: 'CallToAction',
    desc: 'Description lorem',
  },
  contactsBlock: {
    apointment: 'Apointment',
    callUs: 'CallUs',
  },
  servicesBlock: {
    laserEpilation: {
      title: 'лазерная эпиляция',
    },
    alexandrite: {
      title: 'трехволновой диод александрит',
    },
    cosmetologist: {
      title: 'косметолог/дерматолог',
    },
    correction: {
      title: 'коррекция лица и тела',
    },
    darsonval: {
      title: 'дарсонваль',
    },
    aikun: {
      title: 'айкун',
    },
    hydroFacial: {
      title: 'hydro facial',
    },
    pilates: {
      title: 'пилатес',
    },
    hairCut: {
      title: 'Стрижки',
      desc: 'Профессиональное и тщательные стрижки волос с целью создания или изменения прически, подчеркивания стиля и общего внешнего вида.',
    },
    cleanFace: {
      title: 'Чистка лица',
      desc: 'Уход за кожей, включающий глубокую очистку пор, удаление загрязнений и мертвых клеток, для достижения более здорового и свежего внешнего вида кожи лица.',
    },
    massage: {
      title: 'Ручной массаж',
      desc: 'Манипуляции на теле клиента с целью расслабления мышц, улучшения циркуляции крови и общего физического и психологического комфорта.',
    },

    // laserEpilation: 'Laser',
    // alexandrite: 'Alexandrite',
    // cosmetologist: 'Cosmetologist',
    // сorrection: 'Corretion',
    // darsonval: 'Darsonval',
    // aikun: 'Ikun',
    // hydroFacial: 'Hydro',
    // pilates: 'Pilates',
  },
  about: {
    titleAccent: 'Accent ',
    title: 'Title',
    subtitle: 'subtitle',
  },

  // welcome: 'Hello {name}!',
  // 'about.you': 'Hello {name}! You have {age} yo',
  // 'scope.test': 'A scope',
  // 'scope.more.test': 'A scope',
  // 'scope.more.param': 'A scope with {param}',
  // 'scope.more.and.more.test': 'A scope',
  // 'scope.more.stars#one': '1 star on GitHub',
  // 'scope.more.stars#other': '{count} stars on GitHub',
  // 'missing.translation.in.fr': 'This should work',
  // 'cows#one': 'A cow',
  // 'cows#other': '{count} cows',
} as const

// We can also write locales using nested objects
// export default {
//   hello: 'Hello',
//   welcome: 'Hello {name}!',
//   about: {
//     you: 'Hello {name}! You have {age} yo',
//   },
//   scope: {
//     test: 'A scope',
//     more: {
//       test: 'A scope',
//       param: 'A scope with {param}',
//       and: {
//         more: {
//           test: 'A scope',
//         },
//       },
//       'stars#one': '1 star on GitHub',
//       'stars#other': '{count} stars on GitHub',
//     },
//   },
//   missing: {
//     translation: {
//       in: {
//         fr: 'This should work',
//       },
//     },
//   },
//   'cows#one': 'A cow',
//   'cows#other': '{count} cows',
// } as const;
