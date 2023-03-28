import favicon from './extensions/favicon.ico';

const config = {
  locales: [
    'ar',
    'fr',
    'cs',
    'de',
    'dk',
    'es',
    'it',
    'ko',
    'no',
    'pt',
    'ru'
  ],
  translations: {
    fr: {
      'Auth.form.email.label': 'test',
      Users: 'Utilisateurs',
      City: 'CITY (FRENCH)',
      // Customize the label of the Content Manager table.
      Id: 'ID french',
    },
  },
  head: {
    favicon: favicon
  },
  // Override or extend the theme
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },

    // overwrite dark theme properties
    dark: {
      // ...
    }
  }
};

const bootstrap = (app) => {
  console.log(" ===> app ", app);
};

export default {
  config,
  bootstrap,
};
