<template>
    <ul>
        <li v-for='item in items'> 
            {{ item }}
        </li>
    </ul>
</template>
<script>
export default {
  name: 'Normal',
  data() {
      return {
          items : [ 'normal', 'normal', 'normal', 'normal' ],
      }
  }
}
</script>
