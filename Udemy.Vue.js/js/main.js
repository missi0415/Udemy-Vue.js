// main.js
//ローカル登録　特定のvueからのみアクセスできる
var component = {
  data: function(){
    return {
      number: 12
    }  
  },
  template: '<p>いいね({{number}})<button @click="increment">+1</button></p>',
  methods: {
    increment: function(){
        this.number += 1;
    }  
  }
}

new Vue({
  el: '#app',
  components: {
    'my-component': component
    //第一引数自由な名前　：　変数定義したコンポーネントの名前
    //こうするとappのみが使っている状況になる
  }
})

new Vue({
  el: '#app2',
})
