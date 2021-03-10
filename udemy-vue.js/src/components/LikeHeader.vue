<!--LikeHeager.vue-->
<template>
<div>
  <!-- スロットは複数置くことができる -->
  <slot name="title"></slot>
  <hr>
  <p>いいねの数</p>
  <slot name="number"></slot>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>