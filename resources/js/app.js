// import Swup from "swup";
// const swup = new Swup();

// Vue
window.Vue = require("vue");

// Imports
// import site_menu from "./_components/SiteMenu";
// import scroll_to from "./_components/ScrollTo";
// import contact_form from "./_components/ContactForm";
import lazysizes from "lazysizes";

// Vue App
const app = new Vue({
  el: "#app",

  data() {
    return {
      siteName: "Leigh Baking Co."
    };
  },

  components: {
    site_menu,
    scroll_to
    // contact_form,
  }
});