
<template>
  <div >Hello world</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { SetupContext } from '@vue/runtime-core';

  export default defineComponent({
    name: 'InfoDialog',
    props: {
      // id: propTypes.string,
      modelValue: {
        type: Boolean,
        required: true,
      },
    },
    setup(props, ctx: SetupContext) {
      console.log(' === info dialog === ', props, ctx)
      return { close };
    },
  });
</script>
<style scoped>
  .customer-form-dialog {
    background-color: aliceblue;
  }
</style>
