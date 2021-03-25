<template>
  <div>
    <label for="title">タイトル</label>
    <input 
      id="title" 
      type="text"
      :value="value"
      @input="eventData.title = $event.target.value"
    >
    <pre>{{eventData.title}}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>