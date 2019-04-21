<template>
  <header
    v-click-outside="hide"
    class="site-header | timing-3 property-all duration-1"
    :class="{'-active' : isActive, '-short' : shortMode }"
  >
    <div class="site-header__container | container gutter-sm | timing-3 property-all duration-3">
      <!-- Logo -->
      <h1 class="logo menu-active__dim">
        <a class="logo logo__link" href="/" :rel="this.$parent.siteName">
          <slot name="logo"></slot>
        </a>
      </h1>

      <!-- Toggle -->
      <div @click="toggleMenu" class="btn--toggle" :class="{'-active' : isActive}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menu -->
      <nav
        :aria-label="this.$parent.siteName"
        class="site-menu -lg | menu-bar -end"
        :class="{'-active' : isActive}"
      >
        <ul class="main-menu | timing-3 property-all duration-3">
          <li v-for="item in menu">
            <a
              :href="item.link"
              :class="item.classes"
              @click="goTo(item)"
              v-html="item.name"
              data-no-swup
              class="menu-bar__a | link -light"
            ></a>
          </li>
        </ul>
        <!-- <ul class="utility-menu | timing-3 property-all duration-3">
          <li v-for="item in utilityMenu">
            <a :href="item.link" :class="item.classes" @click="goTo(item)" v-html="item.name" data-no-swup class="menu-bar__a | link"></a>
          </li>
        </ul>-->
      </nav>

      <!-- Offscreen Menu -->
      <transition name="fade-right">
        <div v-if="isActive" class="site-menu -offscreen">
          <nav>
            <ul class="main-menu">
              <li v-for="item in menu">
                <button
                  :class="item.classes"
                  @click="goTo(item)"
                  v-html="item.name"
                  class="menu-bar__a | link -dark | header-md"
                ></button>
              </li>
            </ul>
            <ul class="utility-menu | timing-3 property-all duration-3">
              <li v-for="item in utilityMenu">
                <button
                  :class="item.classes"
                  @click="goTo(item)"
                  v-html="item.name"
                  class="menu-bar__a | link"
                ></button>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script type="text/babel">
import click_outside from "../_directives/ClickOutslide";
import anime from "animejs";
// import Swup from "swup";

export default {
  data() {
    return {
      isActive: false,
      scrollPos: 0,
      shortMode: false,
      doc: null,
      menu: [
        {
          name: "Menu",
          method: "anchor",
          anchorId: "menu",
          link: "/#menu",
          offset: 0,
          classes: "js-section-anchor"
        },

        {
          name: "Custom",
          method: "anchor",
          anchorId: "custom",
          link: "/#custom",
          offset: 0,
          classes: "js-section-anchor"
        },
        {
          name: "About",
          method: "anchor",
          anchorId: "about",
          link: "/#about",
          offset: 0,
          classes: "js-section-anchor"
        },
        {
          name: "Order",
          method: "anchor",
          anchorId: "order",
          link: "/#order",
          offset: 0,
          classes: "js-section-anchor -hide-offscreen"
        }
        // {
        //   name: 'Example.com',
        //   method: 'external',
        //   link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav',
        // }
      ],
      utilityMenu: [
        {
          name: "Order",
          method: "anchor",
          anchorId: "order",
          link: "/#order",
          offset: 0,
          classes: "btn js-section-anchor"
        }
      ]
    };
  },
  mounted() {
    const _this = this;
    const doc = document.querySelector("html");
    _this.doc = doc;

    // Swup
    // const swup = new Swup();

    // Key Escape
    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        _this.hide();
      }
    });

    // Mode on Scroll
    window.addEventListener("scroll", function() {
      if (document.body.getBoundingClientRect().top < -100)
        _this.shortMode = true;
      else _this.shortMode = false;

      // This will swap based on UP/DOWN:
      // if (document.body.getBoundingClientRect().top > _this.scrollPos)
      //   _this.shortMode = false;
      // else _this.shortMode = true;
      _this.scrollPos = document.body.getBoundingClientRect().top;
    });

    // Mode on Load
    window.addEventListener("load", function() {
      if (document.body.getBoundingClientRect().top < -100)
        _this.shortMode = true;
    });
  },
  methods: {
    hide() {
      this.isActive = false;
      this.doc.classList.remove("menu-active");
    },

    toggleMenu() {
      // Handle Toggle
      if (!this.isActive) {
        // Open
        this.isActive = true;
        this.doc.classList.add("menu-active");
      } else {
        // Close
        this.hide();
        // this.isActive = false;
        // this.doc.classList.remove('menu-active');
      }
    },

    goTo(item) {
      const _this = this;

      if (item.method == "anchor") {
        console.log(item.method);

        // if Home
        if (window.location.pathname == "/") {
          _this.hide();
          const element = document.querySelector("#" + item.anchorId);
          const elementOffset = element.offsetTop;
          anime({
            targets: "html, body",
            scrollTop: elementOffset - item.offset,
            duration: 500,
            easing: "easeInOutQuad"
          });
        }
        // if Internal
        else {
          window.location = item.link;
        }
      } else if (item.method == "internal") {
        console.log(item.method);
        window.location = item.link;
        // swup.loadPage({
        //   url: item.link, // route of request (defaults to current url)
        //   method: "GET", // method of request (defaults to "GET")
        //   data: data, // data passed into XMLHttpRequest send method
        //   // customTransition: "", // name of your transition used for adding custom class to html element and choosing custom animation in swupjs (as setting data-swup-transition attribute on link)
        // });
      } else if (item.method == "external") {
        // console.log(item.method)
        window.open(item.link, "_blank");
      }
    }
  },
  directives: {
    "click-outside": click_outside
  }
};
</script>

<style>
/* Offscreen Transitions */
.fade-right-enter-active,
.fade-right-leave-active {
  transition: 0.3s cubic-bezier(0.71, -0.01, 0.25, 0.65) transform;
}
.fade-right-enter,
.fade-right-leave-to {
  transform: translate(100%, 0);
}
</style>
