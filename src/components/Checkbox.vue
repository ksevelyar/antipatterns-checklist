<template lang="pug">
.block.flex.flex-row.items-center.cursor-pointer.my-2
  .rounded-full.h-5.w-5.flex.items-center.justify-center(:class="checkboxClasses")
    .rounded-full.h-1.w-1.flex.items-center.justify-center(:class="dotClasses")
  .text-purple-900.px-4 {{ antipattern.name }}
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    antipattern: Object
  },
  computed: {
    dotClasses() {
      return {
        "bg-gray-400": this.antipattern.checked,
        "bg-pink-600": !this.antipattern.checked
      };
    },
    checkboxClasses() {
      return {
        "bg-pink-200": !this.antipattern.checked,
        "bg-green-500": this.antipattern.checked
      };
    }
  }
};
</script>
