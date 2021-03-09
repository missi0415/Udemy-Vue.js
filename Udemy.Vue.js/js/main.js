// main.js
//他のところに変数を定義すればプロパティに持っていける
var data =　{
  message: 'こんにちは',
  name: 'よしぴー'
}
var vm = new Vue({
  el: '#app',
  data: data,
  computed: {
    myData: function(){
      return this.$data;
    }
  }
})
  console.log (data === vm.$data);
  console.log(vm);
