// main.js

var data =　{
  message: 'こんにちは',
  name: 'よしぴー'
}
//コンポーネントの登録
//つかえない
Vue.component("compo", {
  template: '<p>コンポーネント<p>'
});

var vm = new Vue({
  data: data,
  computed: {
    myData: function(){
      return this.$data;
    }
  }
})
vm.$mount('#app')

//テンプレートプロパティ
new Vue({
  data: {
    name: 'よしぴー'
  },
  template: '<h1>こんにちは、{{name}}</h1>'
}).$mount('#app2')

new Vue({
  data: {
    name: 'よしぴー'
  },
  render: function(h){
    console.log(h('h1','こんにちは' + this.name))
    return h('h1','こんにちは' + this.name);
    //これをVNode仮想ノード
    //domをつくったのではなくjsのオブジェクトを作っている
  },
}).$mount('#app3')

var dir = document.createElement('div');
console.log(dir)
console.dir(dir)
console.log(document)
console.dir(document)

new Vue({
  el: '#app4',
  data: {
    name: 'よしぴー'
  },
  beforeCreate: function(){
    console.log('beforeCreate');
  },
  created: function(){
    console.log('Create');
  },
  beforeMount: function(){
    console.log('beforeMount');
  },
  mounted: function(){
    console.log('mounted');
  },
  updated: function(){
    console.log('updated');
  },
  beforeDestroy: function(){
    console.log('beforeDestroy');
  },
  destroyed: function(){
    console.log('destroyed');
  },
  methods: {
    destroy: function(){
      this.$destroy()
    }
  }
})

