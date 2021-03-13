<template lang="pug">
.checklist
  Checkbox(
    v-if="!isAllChecked"
    v-for="antipattern in antipatterns"
    :key="antipattern.name"
    @toggle="toggle(antipattern)"
    :name="antipattern.name" :checked="antipattern.checked"
  )
  
  video.checklist__video(v-else controls autoplay)
    source(src="@/assets/bongo-cat.mp4" type="video/mp4")

</template>

<script>
import Checkbox from "@/components/Checkbox.vue"

export default {
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
    }
  },
  computed: {
    isAllChecked() {
      return this.antipatterns.every(antipattern => antipattern.checked)
    }
  },
  methods: {
    toggle(antipattern) {
      antipattern.checked = !antipattern.checked
    }
  }
}
</script>

<style>
.checklist {
  max-width: 60ch;
  padding: 1ch;
  background: #ede9f0;
  border-radius: 1ch;
}

.checklist__video {
  max-width: 100%;
  display: flex;
  border-radius: 0.5ch;
}
</style>
