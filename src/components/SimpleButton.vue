<template>
  <v-btn @click="onClick">{{ label }}</v-btn>
</template>

<script>

export default {
  name: 'simple-button',

  props: {
    label: {
      type: String,
      required: true,
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
