<template>
  <div class="mine-customer-wrap">
    nihao - mine
    <button @click="handleAction" >这里是button</button>
    <info-dialog :modelValue="showInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

// import { SET_CAR_INFO } from 'src/store/constant';
import InfoDialog from 'views/customer/components/info/index.vue'

export default defineComponent({
  components: { InfoDialog },

  setup() {
    const store = useStore()
    const showInfo = ref(false)

    const handleAction = () => {
      console.log(' === store.state.car.count === ', store.state.car.count)
      store.dispatch('car/SET_CAR_INFO', 666)
      console.log(' === customer/mine btn click === ', store)
      console.log(' === store.state.car.count === ', store.state.car.count)
      showInfo.value = !showInfo.value
    }

    return { handleAction, showInfo }
  }
})
</script>

<style scoped>
  .mine-customer-wrap {
    height: 100%;
  }
</style>
