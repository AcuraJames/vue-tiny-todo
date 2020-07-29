import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: {},
    todoGroup: {},
    todoGroups: [],
    todoGroupTitle: ''
  },
  mutations: {
    createTodo(state, payload) {
      state.todo = payload
      state.todoGroup.todos.push(state.todo)
    },
    createTodoGroup(state, payload) {
      state.todoGroup = payload
      state.todoGroups.push(state.todoGroup)
    },
    createTodoGroupTitle(state, payload) {
      state.todoGroupTitle = payload
    }
  },
  actions: {},
  modules: {}
})
