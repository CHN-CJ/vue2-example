<template>
    <button
        :class="['my-btn', type]"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        type: String
    }
}
</script>

<style lang="scss">
  .my-btn {
    height: 34px;
    padding: 0 15px;
    border: 1px solid #ddd;
    background-color: #fff;

    &.primary {
        border: 1px solid #ddd;
        background-color: blue;
        color: #fff;
    }

    &.success {
        border: 1px solid #ddd;
        background-color: green;
        color: #fff;
    }

    &.danger {
        border: 1px solid #ddd;
        background-color: red;
        color: #fff;
    }
  }
</style>