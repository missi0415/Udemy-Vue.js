<!--//App.Vue-->
<!-- v-bind=>: v-on=>@  名前付きv-slot: =># -->
ただし
<template>
  <div>
    <LikeHeader>
      <p>{{slotProps}}</p>
      <h2>みなさん</h2>
      <h2>こんにちは</h2>
      <h3>はじめまして</h3>
      <template #[title]></template>
    </LikeHeader>
    
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>
//コメント
<script>
import LikeHeader from "./components/LikeHeader.vue"
  export default {
    data() {
      return {
        number: 14,
        title: "タイトル"
      };
    },
    components: {
      LikeHeader
    },
    methods: {
      incrementNumber(value) {
        this.number = value;
      }
    }
  };
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: blue;
}
</style>
