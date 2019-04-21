// import Swup from "swup";
// const swup = new Swup();

// Vue
window.Vue = require("vue");

// Imports
import site_menu from "./_components/SiteMenu";
import tabs from "./_components/Tabs";
import scroll_to from "./_components/ScrollTo";
// import contact_form from "./_components/ContactForm";
import lazysizes from "lazysizes";
import mailchimp from "./_vendor/MailchimpAjax";

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
    scroll_to,
    tabs
  }
});

require("instafetch.js");
instafetch.init({
  accessToken: "11537687914.1677ed0.326d68f1d8184e47a92a99826383b318",
  target: "instafetch",
  numOfPics: 3,
  caption: false
});

mailchimp();
