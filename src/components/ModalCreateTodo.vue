<template>
  <div class="modal-mask">
    <div class="modal">
      <div class="modal__header">
        <p>Новая задача</p>
        <span class="close" @click="$emit('cancel')">&times;</span>
      </div>
      <div class="modal__body">
        <input v-model="newTodo.title" type="text" placeholder="Название задачи">
        <textarea v-model="newTodo.task" placeholder="Описание задачи"></textarea>
      </div>
      <div class="modal__footer">
        <slot name="footer">
          <button @click="$emit('save')">Сохранить</button>
          <button @click="$emit('cancel')">Отменить</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateTodo',
  props: {
    newTodo: {
      type: Object,
      default: () => {} 
    }
  },
  // data() {
  //   return {
  //     newTodo: {
  //       title: '',
  //       task: ''
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  z-index: 999;
  position: absolute;
  top: 30%;
  left: calc(50% - 150px);

  &__header {
    margin-bottom: 20px;
    position: relative;

    .close {
      position: absolute;
      top: -25px;
      right: 0;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  textarea {
    resize: vertical;
  }
  input, textarea {
    width: 100%;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid #000;
  
    &:focus {
      outline: none;
    }
  }

}
</style>
