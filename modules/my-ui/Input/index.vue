<template>
    <input 
        type="text"
        :placeholder="placeholder"
        :value="value"
        class="my-input"
    />
</template>

<script>
import { stringify } from 'querystring';

export default {
    name: 'MyInput',
    props: {
        placeholder: String,
        value: String
    }
}
</script>

<style lang="scss">
.my-input {
    height: 34px;
    border: 1px solid #ddd;
    background-color: #fff;
}
</style>