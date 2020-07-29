<template>
  <div class="home">
    <ModalCreateTodo
      v-if="modalCreate"
      :newTodo="newTodo"
      @save="save"
      @cancel="cancel"
    />
    <div class="filters">
      <div class="filters__search">
        <input type="text" placeholder="search...">
        <font-awesome-icon icon="search" size="sm" class="icon-search" />
      </div>
      <div class="filters__is-done">
        <label for="all">
          <input type="radio" name="is-done" id="all">
          <span>All</span>
          <div class="check"></div>
        </label>
        <label for="done">
          <input type="radio" name="is-done" id="done">
          <span>Done</span>
          <div class="check"></div>
        </label>
        <label for="undone">
          <input type="radio" name="is-done" id="undone">
          <span>Undone</span>
          <div class="check"></div>
        </label>
      </div>
    </div>
    <div class="card-group-wrapper">
      <CardGroup
        v-for="(item, index) in todoGroup"
        :key="index"
        @createTodo="createTodo"
      />
    </div>
    <div class="create-group" @click="createGroup(newTodoGroup.title)">+</div>
  </div>
</template>

<script>
import CardGroup from '@/components/CardGroup'
import ModalCreateTodo from '@/components/ModalCreateTodo'
export default {
  name: 'Home',
  components: { CardGroup, ModalCreateTodo },
  data() {
    return {
      modalCreate: false,
      newTodoGroup: {
        id: Math.round(Math.random() * 100000),
        title: 'Новая группа',
        todos: []
      },
      newTodo: {}
    }
  },
  computed: {
    todoGroup() {
      return this.$store.state.todoGroups
    }
  },
  methods: {
    createTodo() {
      this.modalCreate = true
    },
    createGroup() {
      this.$store.commit('createTodoGroup', this.newTodoGroup)
    },
    save() {
      this.$store.commit('createTodo', this.newTodo)
      this.newTodo = {}
      this.cancel()
    },
    cancel() {
      this.modalCreate = false  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  min-height: 100vh;
  padding: 0 60px;
  background: rgb(58, 58, 58);

  .filters {
    height: 60px;
    display: flex;
    align-items: center;

    &__search {
      margin-left: auto;
      margin-right: 40px;
      position: relative;

      input {
        padding: 3px 30px 3px 10px; 
        background-color: transparent;
        border: 1px solid #777575;
        border-radius: 4px;
        color: #f2f2f2;

        &:focus {
          outline: none;
        }
      }

      .icon-search {
        position: absolute;
        top: 4px;
        right: 10px;
        cursor: pointer;
      }
    }

    &__is-done {
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center; 
      user-select: none;
      font-size: 14px;

      input {
        position: absolute;
        visibility: hidden;
      }

      label {
        // margin-left: 15px;
        // margin-right: 10px;
        position: relative;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }

      .check {
        display: block;
        position: absolute;
        top: 2px;
        left: -15px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid #777575;
        transition: border .25s linear;

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: 2px;
          left: 2px;
          width: 6px;
          height: 6px;
          margin: auto;
          border-radius: 50%;
        }
      }
      input[type=radio]:checked ~ .check::before {
        background-color: forestgreen;
      }
    }
  }

  .card-group-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .create-group {
    width: 60px;
    height: 60px;
    font-size: 53px;
    border-radius: 50%;
    background-color: forestgreen;
    cursor: pointer;
    user-select: none;
    position: fixed;
    bottom: 30px;
    right: 30px;

    &:hover {
      background-color: lighten(forestgreen, 10);
    }
  }
}
</style>
