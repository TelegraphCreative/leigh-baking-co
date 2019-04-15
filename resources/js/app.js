// import Swup from "swup";
// const swup = new Swup();

// Vue
window.Vue = require("vue");

// Imports
import site_menu from "./_components/SiteMenu";
// import scroll_to from "./_components/ScrollTo";
// import contact_form from "./_components/ContactForm";
import lazysizes from "lazysizes";
require("instafetch.js");

// Vue App
const app = new Vue({
  el: "#app",

  data() {
    return {
      siteName: "Leigh Baking Co."
    };
  },

  components: {
    site_menu
  }
});

instafetch.init({
  accessToken: "2719074.1677ed0.aa4cd508693a4aa884e8478650fcc388",
  target: "instafetch",
  numOfPics: 3,
  caption: false
});
