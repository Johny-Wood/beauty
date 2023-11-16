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
    learnMore: 'Узнать больше',
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
    section: {
      titleAccent: 'Узнайте больше об ',
      title: 'интересующей услуге',
    },
    laserEpilation: {
      title: 'Лазерная эпиляция',
      longDesc:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
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
    emsTesla: {
      title: 'Ems tesla',
    },
    ultrasoundClean: {
      title: 'Ультразвуковая чистка',
    },
    bodySculpture: {
      title: 'Скульптура тела',
    },
    weightLoss: {
      title: 'Похудение',
    },
    lymphaticDrainage: {
      title: 'Лифодренаж',
    },
    trichology: {
      title: 'Трихология',
    },
    hairColoring: {
      title: 'Окрашивание',
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
  collaborations: {
    title: 'О нас говорят',
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
