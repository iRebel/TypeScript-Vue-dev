<template>
  <div >Hello world</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InfoDialog',
  props: {
    // id: propTypes.string,
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  setup(props, ctx) {
    console.log(' === info dialog === ', props, ctx)
    return {}
  }
})
</script>
<style scoped>
  .customer-form-dialog {
    background-color: aliceblue;
  }
</style>
