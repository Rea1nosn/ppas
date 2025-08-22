export type Language = 'he' | 'en' | 'ru';

export interface Translations {
  // Navigation
  home: string;
  about: string;
  contact: string;
  admin: string;
  login: string;
  logout: string;

  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  heroButtonSecondary: string;

  // Products section
  ourProducts: string;
  cigarettes: string;
  ecigarettes: string;
  heatedTobacco: string;
  disposableVapes: string;
  buyNow: string;
  addToCart: string;
  contactToBuy: string;
  orderCash: string;
  viewDetails: string;
  features: string;
  description: string;
  price: string;
  category: string;

  // Categories
  categoryAll: string;
  categoryCigarettes: string;
  categoryEcigarettes: string;
  categoryHeated: string;
  categoryDisposable: string;

  // About section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutDescription: string;
  aboutProducts: string;
  aboutCustomers: string;
  aboutSatisfied: string;

  // Contact section
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactAddress: string;
  contactPhone: string;
  contactEmailLabel: string;
  contactAddressText: string;

  // Footer
  footerDescription: string;
  footerCatalog: string;
  footerCigarettes: string;
  footerEcigs: string;
  footerHeated: string;
  footerDisposable: string;
  footerSupport: string;
  footerCash: string;
  footerPickup: string;
  footerQuality: string;
  footerFaq: string;
  footerCompany: string;
  footerCareers: string;
  footerPartners: string;
  footerRights: string;

  // Admin panel
  adminPanel: string;
  username: string;
  password: string;
  loginButton: string;
  invalidCredentials: string;
  productManagement: string;
  addProduct: string;
  editProduct: string;
  deleteProduct: string;
  productName: string;
  productPrice: string;
  productImage: string;
  productDescription: string;
  productFeatures: string;
  productCategory: string;
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  confirmDelete: string;
  productAdded: string;
  productUpdated: string;
  productDeleted: string;

  // Currency
  currency: string;
}

export const translations: Record<Language, Translations> = {
  he: {
    // Navigation
    home: 'בית',
    about: 'אודות',
    contact: 'יצירת קשר',
    admin: 'ניהול',
    login: 'כניסה',
    logout: 'יציאה',

    // Hero section
    heroTitle: 'אלקטרו ישראל',
    heroSubtitle: 'מוצרי טבק פרימיום בישראל',
    heroButton: 'רכישה עבור מזומנים',
    heroButtonSecondary: 'צור קשר',

    // Products section
    ourProducts: 'המוצרים שלנו',
    cigarettes: 'סיגריות',
    ecigarettes: 'סיגריות אלקטרוניות',
    heatedTobacco: 'מערכות חימום טבק',
    disposableVapes: 'וייפים חד פעמיים',
    buyNow: 'קנה עכשיו',
    addToCart: 'הוסף לסל',
    contactToBuy: 'צור קשר לרכישה',
    orderCash: 'הזמן במזומן',
    viewDetails: 'צפה בפרטים',
    features: 'תכונות',
    description: 'תיאור',
    price: 'מחיר',
    category: 'קטגוריה',

    // Categories
    categoryAll: 'הכל',
    categoryCigarettes: 'סיגריות',
    categoryEcigarettes: 'סיגריות אלקטרוניות',
    categoryHeated: 'מערכות חימום',
    categoryDisposable: 'חד פעמיים',

    // About section
    aboutTitle: 'אודות אלקטרו ישראל',
    aboutSubtitle: 'הובלת שוק מוצרי הטבק הפרימיום בישראל',
    aboutDescription: 'אנחנו מספקים רק את מוצרי הטבק האיכותיים ביותר עם שירות אמין ומקצועי. כל המוצרים שלנו עוברים בדיקת איכות קפדנית.',
    aboutProducts: 'מוצרים',
    aboutCustomers: 'לקוחות',
    aboutSatisfied: 'מרוצים',

    // Contact section
    contactTitle: 'צור קשר',
    contactSubtitle: 'נשמח לעזור לך עם כל שאלה',
    contactName: 'שם מלא',
    contactEmail: 'אימייל',
    contactMessage: 'הודעה',
    contactSend: 'שלח הודעה',
    contactAddress: 'כתובת',
    contactPhone: 'טלפון',
    contactEmailLabel: 'אימייל',
    contactAddressText: 'תל-אביב, רח\' דיזנגוף 123',

    // Footer
    footerDescription: 'מוצרי טבק פרימיום בישראל',
    footerCatalog: 'קטלוג',
    footerCigarettes: 'סיגריות',
    footerEcigs: 'סיגריות אלקטרוניות',
    footerHeated: 'מערכות חימום',
    footerDisposable: 'חד פעמיים',
    footerSupport: 'תמיכה',
    footerCash: 'תשלום במזומן',
    footerPickup: 'איסוף עצמי',
    footerQuality: 'ערבות איכות',
    footerFaq: 'שאלות נפוצות',
    footerCompany: 'החברה',
    footerCareers: 'קריירה',
    footerPartners: 'שותפים',
    footerRights: 'כל הזכויות שמורות',

    // Admin panel
    adminPanel: 'פאנל ניהול',
    username: 'שם משתמש',
    password: 'סיסמה',
    loginButton: 'התחבר',
    invalidCredentials: 'פרטי כניסה שגויים',
    productManagement: 'ניהול מוצרים',
    addProduct: 'הוסף מוצר',
    editProduct: 'ערוך מוצר',
    deleteProduct: 'מחק מוצר',
    productName: 'שם המוצר',
    productPrice: 'מחיר',
    productImage: 'תמונת המוצר',
    productDescription: 'תיאור המוצר',
    productFeatures: 'תכונות המוצר',
    productCategory: 'קטגוריה',
    save: 'שמור',
    cancel: 'ביטול',
    delete: 'מחק',
    edit: 'ערוך',
    confirmDelete: 'האם אתה בטוח שברצונך למחוק מוצר זה?',
    productAdded: 'המוצר נוסף בהצלחה',
    productUpdated: 'המוצר עודכן בהצלחה',
    productDeleted: 'המוצר נמחק בהצלחה',

    // Currency
    currency: '₪',
  },

  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',

    // Hero section
    heroTitle: 'Electro Israel',
    heroSubtitle: 'Premium Tobacco Products in Israel',
    heroButton: 'Buy with Cash',
    heroButtonSecondary: 'Contact Us',

    // Products section
    ourProducts: 'Our Products',
    cigarettes: 'Cigarettes',
    ecigarettes: 'E-cigarettes',
    heatedTobacco: 'Heated Tobacco Systems',
    disposableVapes: 'Disposable Vapes',
    buyNow: 'Buy Now',
    addToCart: 'Add to Cart',
    contactToBuy: 'Contact to Buy',
    orderCash: 'Order with Cash',
    viewDetails: 'View Details',
    features: 'Features',
    description: 'Description',
    price: 'Price',
    category: 'Category',

    // Categories
    categoryAll: 'All',
    categoryCigarettes: 'Cigarettes',
    categoryEcigarettes: 'E-cigarettes',
    categoryHeated: 'Heated Systems',
    categoryDisposable: 'Disposable',

    // About section
    aboutTitle: 'About Electro Israel',
    aboutSubtitle: 'Leading Israel\'s Premium Tobacco Market',
    aboutDescription: 'We provide only the highest quality tobacco products with reliable and professional service. All our products undergo strict quality control.',
    aboutProducts: 'Products',
    aboutCustomers: 'Customers',
    aboutSatisfied: 'Satisfied',

    // Contact section
    contactTitle: 'Contact Us',
    contactSubtitle: 'We\'re here to help with any questions',
    contactName: 'Full Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSend: 'Send Message',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmailLabel: 'Email',
    contactAddressText: 'Tel Aviv, Dizengoff St. 123',

    // Footer
    footerDescription: 'Premium tobacco products in Israel',
    footerCatalog: 'Catalog',
    footerCigarettes: 'Cigarettes',
    footerEcigs: 'E-cigarettes',
    footerHeated: 'Heated Systems',
    footerDisposable: 'Disposable',
    footerSupport: 'Support',
    footerCash: 'Cash Payment',
    footerPickup: 'Self Pickup',
    footerQuality: 'Quality Guarantee',
    footerFaq: 'FAQ',
    footerCompany: 'Company',
    footerCareers: 'Careers',
    footerPartners: 'Partners',
    footerRights: 'All rights reserved',

    // Admin panel
    adminPanel: 'Admin Panel',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    invalidCredentials: 'Invalid credentials',
    productManagement: 'Product Management',
    addProduct: 'Add Product',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete Product',
    productName: 'Product Name',
    productPrice: 'Price',
    productImage: 'Product Image',
    productDescription: 'Product Description',
    productFeatures: 'Product Features',
    productCategory: 'Category',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    confirmDelete: 'Are you sure you want to delete this product?',
    productAdded: 'Product added successfully',
    productUpdated: 'Product updated successfully',
    productDeleted: 'Product deleted successfully',

    // Currency
    currency: '₪',
  },

  ru: {
    // Navigation
    home: 'Главная',
    about: 'О нас',
    contact: 'Контакты',
    admin: 'Админ',
    login: 'Вход',
    logout: 'Выход',

    // Hero section
    heroTitle: 'Электро Израиль',
    heroSubtitle: 'Премиальные табачные изделия в Израиле',
    heroButton: 'Покупка за наличные',
    heroButtonSecondary: 'Связаться',

    // Products section
    ourProducts: 'Наши товары',
    cigarettes: 'Сигареты',
    ecigarettes: 'Электронные сигареты',
    heatedTobacco: 'Системы нагревания табака',
    disposableVapes: 'Одноразовые вейпы',
    buyNow: 'Купить сейчас',
    addToCart: 'В корзину',
    contactToBuy: 'Связаться для покупки',
    orderCash: 'Заказать наличными',
    viewDetails: 'Подробнее',
    features: 'Особенности',
    description: 'Описание',
    price: 'Цена',
    category: 'Категория',

    // Categories
    categoryAll: 'Все',
    categoryCigarettes: 'Сигареты',
    categoryEcigarettes: 'Электронные',
    categoryHeated: 'Нагревание',
    categoryDisposable: 'Одноразовые',

    // About section
    aboutTitle: 'О компании Электро Израиль',
    aboutSubtitle: 'Лидер рынка премиальных табачных изделий в Израиле',
    aboutDescription: 'Мы предоставляем только самые качественные табачные изделия с надежным и профессиональным обслуживанием. Все наши товары проходят строгий контроль качества.',
    aboutProducts: 'Товаров',
    aboutCustomers: 'Клиентов',
    aboutSatisfied: 'Довольных',

    // Contact section
    contactTitle: 'Связаться с нами',
    contactSubtitle: 'Мы готовы помочь с любыми вопросами',
    contactName: 'Полное имя',
    contactEmail: 'Электронная почта',
    contactMessage: 'Сообщение',
    contactSend: 'Отправить сообщение',
    contactAddress: 'Адрес',
    contactPhone: 'Телефон',
    contactEmailLabel: 'Почта',
    contactAddressText: 'Тель-Авив, ул. Дизенгоф 123',

    // Footer
    footerDescription: 'Премиальные табачные изделия в Израиле',
    footerCatalog: 'Каталог',
    footerCigarettes: 'Сигареты',
    footerEcigs: 'Электронные сигареты',
    footerHeated: 'Системы нагревания',
    footerDisposable: 'Одноразовые',
    footerSupport: 'Поддержка',
    footerCash: 'Оплата наличными',
    footerPickup: 'Самовывоз',
    footerQuality: 'Гарантия качества',
    footerFaq: 'FAQ',
    footerCompany: 'Компания',
    footerCareers: 'Карьера',
    footerPartners: 'Партнеры',
    footerRights: 'Все права защищены',

    // Admin panel
    adminPanel: 'Панель администратора',
    username: 'Имя пользователя',
    password: 'Пароль',
    loginButton: 'Войти',
    invalidCredentials: 'Неверные данные для входа',
    productManagement: 'Управление товарами',
    addProduct: 'Добавить товар',
    editProduct: 'Редактировать товар',
    deleteProduct: 'Удалить товар',
    productName: 'Название товара',
    productPrice: 'Цена',
    productImage: 'Изображение товара',
    productDescription: 'Описание товара',
    productFeatures: 'Особенности товара',
    productCategory: 'Категория',
    save: 'Сохранить',
    cancel: 'Отмена',
    delete: 'Удалить',
    edit: 'Редактировать',
    confirmDelete: 'Вы уверены, что хотите удалить этот товар?',
    productAdded: 'Товар успешно добавлен',
    productUpdated: 'Товар успешно обновлен',
    productDeleted: 'Товар успешно удален',

    // Currency
    currency: '₪',
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.he;
};

export const formatPrice = (price: number, language: Language): string => {
  const priceInShekels = price / 100; // Convert from agorot to shekels
  const currency = getTranslations(language).currency;
  return `${priceInShekels}${currency}`;
};