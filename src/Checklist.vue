<template lang="pug">
#app.h-screen.items-center.h-full.flex
  .bg-gray-100.text-center.max-w-sm.px-3.py-4.m-auto.rounded-lg
    template(v-if="!isAllChecked")
      Checkbox(v-for="antipattern in antipatterns" :key="antipattern.name"
        @click.native="toggle(antipattern)" :antipattern="antipattern")
    
    template(v-else)
      .bg-gray-100.text-center.max-w-sm.px-3.py-4.m-auto.rounded-lg
        video(controls autoplay)
          source(src="@/assets/video/bongo-cat.mp4" type="video/mp4")

</template>

<script>
import Checkbox from "./components/Checkbox.vue";

export default {
  name: "app",
  components: {
    Checkbox
  },
  data() {
    return {
      antipatterns: [
        { name: "Accidental complexity", checked: false },
        { name: "Boat Anchor", checked: false },
        { name: "God Object", checked: false },
        { name: "Golden Hummer", checked: false },
        { name: "Hard Code", checked: false },
        { name: "Magic Values", checked: false },
        { name: "Premature Optimization", checked: false },
        { name: "Reinventing the Wheel", checked: false },
        { name: "Soft Code", checked: false },
        { name: "Spaghetti Code", checked: false }
      ]
    };
  },
  computed: {
    isAllChecked() {
      return this.antipatterns.every(antipattern => antipattern.checked);
    }
  },
  methods: {
    toggle(antipattern) {
      antipattern.checked = !antipattern.checked;
    }
  }
};
</script>
