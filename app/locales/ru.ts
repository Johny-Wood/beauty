console.log('Loaded RU')

export default {
  hello: 'Привет',
  navigation: {
    main: 'Главная',
    services: 'Услуги',
    reviews: 'Отзывы',
    experts: 'Специалисты',
    buy: 'Купить',
    prices: 'Цены',
    sales: 'Акции',
  },
  mobileMenu: {
    callToAction: 'Насладитесь пользой',
  },
  buttons: {
    callback: 'Обратный звонок',
    apointment: 'Записаться',
    discuss: 'Обсудить прием',
    allServices: 'Все услуги',
  },
  headerTop: {
    address: 'Дубининская ул., 9, cтр. 1, Москва, Россия, 115054',
  },
  hero: {
    callToAction: 'Широкий спектр услуг для ухода за вашим телом',
    desc: 'Наша клиника предооставляет обширный перечень услуг, который поможет в уходе за вашим телом, и сохранит естественную красоту:',
  },
  contactsBlock: {
    apointment: 'Записаться на прием',
    callUs: 'Или позвоните нам',
  },
  servicesBlock: {
    laserEpilation: {
      title: 'Лазерная эпиляция',
    },
    alexandrite: {
      title: 'Трехволновой диод александрит',
    },
    cosmetologist: {
      title: 'Косметолог/дерматолог',
    },
    correction: {
      title: 'Доррекция лица и тела',
    },
    darsonval: {
      title: 'Дарсонваль',
    },
    aikun: {
      title: 'Айкун',
      desc: 'Процедура, включающая массаж лица и шейного отдела для достижения расслабления, улучшения циркуляции крови, и ухода за кожей с использованием аюрведических масел и техник.',
    },
    hydroFacial: {
      title: 'Hydro facial',
    },
    pilates: {
      title: 'Пилатес',
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
    // laserEpilation: 'лазерная эпиляция',
    // alexandrite: 'трехволновой диод александрит',
    // cosmetologist: 'косметолог/дерматолог',
    // сorrection: 'коррекция лица и тела',
    // darsonval: 'дарсонваль',
    // aikun: 'айкун',
    // hydroFacial: 'hydro facial',
    // pilates: 'пилатес',
  },
  about: {
    titleAccent: 'Посмотрите ',
    title: 'краткое видео о нас',
    subtitle: 'Убедитесь в нашей профессиональности и современном подходе',
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
