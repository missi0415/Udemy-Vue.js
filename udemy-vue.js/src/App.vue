<!--//App.Vue-->
<template>
<!-- テンプレート内はdivで囲む -->
<div>
  <!-- v-bind=> :
       v-on  => @ -->
  <LikeHeader header-text="hello">
    <!-- テンプレートタグはdomに反映されな
    特定の要素をslot毎に別々に反映させたい
    v-slot:好き名前引数を取る 
    必ず<template>タグを用いる
    親<template v-slot:title></template>
    子<slot name:title"></slot>-->
    <template v-slot:title>
      <h2>こんにちは</h2>
    </template>
    <template v-slot:number>
      <p>{{ number }}</p>
    </template>
  </LikeHeader>
  <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
</div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
  export default {
    data() {
      return {
        number: 14
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
