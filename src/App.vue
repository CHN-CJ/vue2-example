<template>
  <div id="app">
    <my-button type="danger" @click="output">我的按钮</my-button>
    <br/>
    <my-input placeholder="我的输入框" value="123"></my-input>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    output() {
      console.log("我的按钮")
    }
  }
}
</script>

<style lang="scss">
</style>
