/**
 * https://next.vuex.vuejs.org/guide/structure.html
 * https://next.vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function
*/

// import { InjectionKey } from 'vue'
import { createStore /* createLogger */ } from 'vuex'
import car from './modules/car'
// import task from './modules/task'

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    car
    // task
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})

export default store
