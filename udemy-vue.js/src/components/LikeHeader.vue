<!--LikeHeager.vue-->
<template>
<div>
  <slot></slot>
</div>
</template>

<script>
// コンポーネントの場合はデータは関数にしなければならない
export default {
  data() {
    return {
      user: {
        firstName: "first",
        lastName: "last"
      }
    }
  }
};
</script>

