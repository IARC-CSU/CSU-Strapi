import type { StrapiApp } from '@strapi/strapi/admin';
import favicon from './extensions/favicon.ico'
import iarc_logo from './extensions/iarc-logo.png'

export default {
  config: {
    locales: [ 'fr', 'es', 'no', 'ru' , 'fil' ],
      head: { 
      favicon: favicon 
    },
    auth : { 
      logo : iarc_logo 
    } ,
    menu: {
      logo: iarc_logo
    }, 
    theme: {
      light : {
        colors: {
          
          primary100: "#efefe0", // background color icon/text selected 
          primary200: "#293255" , // border color 
          primary500: "yellow" , 
          primary600 : "#d37f64" , 
          buttonPrimary500: "#d37f64", // button form 
          buttonPrimary600: "#d37f64", // button form
          danger700: "#b72b1a",
        }
      },
    }
  },
  bootstrap( app: StrapiApp ) {

    console.log( app );
  
  },
};
