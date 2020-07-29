<template>
  <div class="card-group">
    <div class="card-group__header">
      <input
        v-if="isEdit"
        v-model="title"
        ref="title"
        type="text"
        @blur="setNewTitle"
        @keyup.enter="setNewTitle"
      >
      <div v-else>
        <span class="title">{{ title }}</span> 
        <span class="edit" @click="edit">
          <font-awesome-icon icon="pen" size="sm" class="icon-pen" />
        </span>
      </div>
    </div>
    <div class="card-group__body">
      <Card
        v-for="(todo, index) in todos"
        :key="index"
        :title="todo.title"
        :task="todo.task"
      />
    </div>
    <div class="card-group__footer">
      <button @click="$emit('createTodo', title)">Добавить задачу</button>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'CardGroup',
  components: { Card },
  data() {
    return {
      title: 'Новая группа',
      isEdit: false
    }
  },
  computed: {
    todos() {
      return this.$store.state.todoGroup.todos
    }
  },
  methods: {
    edit() {
      this.isEdit = true
      this.$nextTick(() => this.$refs.title.select())
    },
    setNewTitle() {
      this.$store.commit('createTodoGroupTitle', this.title)
      this.isEdit = false
    }
  }
}
</script>

<style scoped lang="scss">
.card-group {
  min-width: 300px;
  height: 350px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #777575;
  background-color: rgb(66, 66, 66);

  &__header {
    margin-bottom: 10px;
    padding-top: 10px;

    input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #f2f2f2;
      color: #f2f2f2;

      &:focus {
        outline: none;
      }
    }

    .edit {
      margin-left: 10px;
      font-weight: 700;
      cursor: pointer;

      .icon-pen:hover {
        color: lightblue;
      }
    }
  }

  &__body {
    height: 255px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgb(110, 110, 110);
      border-radius: 5px;
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgb(160, 158, 158);
    }
  }

  &__footer {
    width: 100%;
    padding: 10px 0;

    button {
      padding: 7px 10px;
      background-color: forestgreen;
      color: #f2f2f2;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: lighten(forestgreen, 10);
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>

