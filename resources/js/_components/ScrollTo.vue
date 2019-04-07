<template>
  <a @click="scrollTo" :href="'#' + to" v-html="text" :class="classes"></a>
</template>

<script type="text/babel">
import anime from "animejs";
export default {
  props: {
    to: {
      required: true
    },
    offset: {
      required: true,
      default: 0
    },
    classes: {
      required: true,
      default: ''
    },
    text: {
      required: true,
      default: 'Click here'
    }
  },
  methods: {
    scrollTo() {
      console.log(this.to)
      const element = document.querySelector("#" + this.to);
      const elementOffset = element.offsetTop;
      anime({
        targets: "html, body",
        scrollTop: elementOffset - this.offset,
        duration: 500,
        easing: "easeInOutQuad"
      });
    }
  }
};
</script>