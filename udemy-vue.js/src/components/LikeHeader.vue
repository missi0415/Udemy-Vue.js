<!--LikeHeager.vue-->
<template>
<div>
  <slot :user="user" text="text"></slot>
  <!-- 値を渡しているslotだけが値が表示できるほかは空白 -->
  <slot></slot>
  <hr>
  <p>いいねの数</p>
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

<style scoped>
h1 {
  color: red;
}
</style>