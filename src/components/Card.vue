<template>
  <div class="card">
    <div class="card__header">
      <div class="card__title">{{ title }}</div>
      <div class="card__controls">
        <label class="checkbox">
          <input type="checkbox" v-model="done" />
          <span class="checkmark"></span>
        </label>
        <font-awesome-icon icon="trash" size="sm" class="icon-trash" />
      </div>
    </div>
    <div class="card__task" @click="active = !active">
      <p :class="{ active: active }">{{ task }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'New Todo'
    },
    task: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      done: false,
      active: false
    }
  }
}
</script>

<style lang="scss">
.card {
  width: 280px;
  padding: 10px;
  margin: auto;
  margin-bottom: 10px;
  border: 1px solid rgb(161, 160, 160);
  border-radius: 4px;

  &__header {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
  }

  &__controls {
    display: flex;
    align-items: center;

    .checkbox {
      width: 15px;
      height: 15px;
      display: block;
      position: relative;
      padding-left: 25px;
      cursor: pointer;

      input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 15px;
        width: 15px;
        border: 1px solid gray;
      }

      .checked {
        text-decoration: line-through;
        color: gray;
      }
    }
    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }
    .checkbox input:checked ~ .checkmark:after {
      display: block;
    }
    .checkbox .checkmark:after {
      top: 0;
      left: 4px;
      width: 3px;
      height: 9px;
      border: solid forestgreen;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .icon-trash {
      cursor: pointer;

      &:hover {
        color: rgb(251, 41, 41);
      }
    }

  }

  &__task {
    text-align: left;
    cursor: pointer;

    p {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p.active {
      white-space: normal;
    }
  }
}
</style>
