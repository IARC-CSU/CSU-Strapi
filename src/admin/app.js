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
  console.log(" ===> app totop ", app);
};

export default {
  config,
  bootstrap,
};
