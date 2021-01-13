<template>
    <v-btn @click="increment">{{ text }}</v-btn>
</template>
<script>
export default {
  name: 't-button',
  data () {
    return {
      count: 0
    }
  },
  computed: {
    times () {
      return this.count > 1
        ? 'times'
        : 'time'
    },
    text () {
      return `I have been clicked ${this.count} ${this.times}`
    }
  },
  methods: {
    increment () {
      this.count += 1
    }
  }
}
</script>