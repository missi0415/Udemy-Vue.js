// Home.vue
<template>
  <div>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title |lowerCase | upperCase}}</h2>
    <!-- パイプ記号を入れて適応させたいフィルターを入れる -->
    <p>{{subTitle | upperCase | lowerCase}}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";

export default {
  data() {
    return{
      temData: "hello",
      title: "Welcom to Tokyo",
      subTitle: "Tokyo is a great city",
      number:0
    };
  },
  components: {
    CountNumber
  },
  filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
  },
  directives: {
    border(el,binding){
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round){
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow){
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
      }
    }
  }
};
</script>