<template lang="pug">
.checkbox(@click="emitToggle")
  .checkbox__outer-circle(:class="outerCircleClass")
    .checkbox__inner-circle(:class="innerCircleClass")
  .checkbox__name {{ name }}
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    checked: { type: Boolean, default: false }
  },
  computed: {
    outerCircleClass() {
      return { "checkbox__outer-circle_checked": this.checked }
    },
    innerCircleClass() {
      return { "checkbox__inner-circle_checked": this.checked }
    }
  },
  methods: {
    emitToggle() {
      this.$emit("toggle")
    }
  }
}
</script>

<style>
.checkbox {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.checkbox__outer-circle {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #e8b3c2;
}
.checkbox__outer-circle_checked {
  background-color: #85d774;
}

.checkbox__inner-circle {
  width: 0.25rem;
  height: 0.25rem;
  background-color: red;
  border-radius: 100%;
}
.checkbox__inner-circle_checked {
  background-color: #66aa90;
}

.checkbox__name {
  padding-left: 0.5rem;
  color: #3e3355;
}
</style>
