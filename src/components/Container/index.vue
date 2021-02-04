<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style>
.container {
    margin: 0 100px;
}
</style>