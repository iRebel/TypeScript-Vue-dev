import { Commit } from 'vuex'

import { SET_CAR_INFO } from 'src/store/constant'

// define your typings for the store state
interface CarState {
  count: number
}

interface ICtx {
  commit: Commit;
  state: CarState
}

const state: CarState = {
  count: 0
}

const actions = {
  [SET_CAR_INFO]({ commit }: ICtx, playload: number): void {
    commit(SET_CAR_INFO, playload)
  }
}

const mutations = {
  [SET_CAR_INFO](newState: CarState, playload: number): void {
    state.count = playload
  }
}

export default {
  namespaced: true, state, actions, mutations
}
