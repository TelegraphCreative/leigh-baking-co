<template>
  <div class="tabs | pattern-bg--02 relative">
    <!-- Tabs Menu -->
    <nav class="tabs-menu | mb-14">
      <ul class="overflow-scroll">
        <li v-for="(item, index) in tabs" @click="updateTab(index)">
          <button class="link -black">{{ item.name }}</button>
        </li>
      </ul>
    </nav>

    <!-- Tabs Content -->
    <div class="tabs-content">
      <slot name="tabsContent"></slot>
    </div>
  </div>
</template>
<script>
import anime from "animejs";
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // Initialize with active
    const _this = this;
    _this.tabs.forEach((tab, i) => {
      if (typeof tab.active != "undefined" && tab.active != null) {
        const buttons = _this.$el.querySelectorAll("button.link"),
          activeButton = buttons[i],
          tabs = _this.$el.querySelectorAll(".tab"),
          activeTab = tabs[i],
          marker = "-active";

        // Update Menu
        buttons.forEach(button => {
          // Remove Markers
          button.classList.remove(marker);
          // Mark Active
          activeButton.classList.add(marker);
        });
        // Update Content
        tabs.forEach(tab => {
          // Remove Markers
          tab.classList.remove(marker);
          // Mark Active
          activeTab.classList.add(marker);
        });
      }
    });
  },
  methods: {
    updateTab(index) {
      const _this = this,
        tabs = _this.$el.querySelectorAll(".tab"),
        activeTab = tabs[index],
        buttons = _this.$el.querySelectorAll("button.link"),
        activeButton = event.target,
        marker = "-active";

      // Update Menu
      buttons.forEach(button => {
        // Remove Markers
        button.classList.remove(marker);
        // Mark Active
        activeButton.classList.add(marker);
      });

      // Animate
      // Hide Inactiveo
      tabs.forEach(tab => {
        anime({
          targets: tab,
          opacity: 0,
          duration: 400,
          easing: "easeInOutQuad",
          complete: function() {
            // Remove Markers
            tab.classList.remove(marker);
            // Mark Active
            activeTab.classList.add(marker);

            // Show Active
            anime({
              targets: activeTab,
              opacity: 1,
              duration: 400,
              easing: "easeInOutQuad"
            });
          }
        });
      });
    }
  }
};
</script>
