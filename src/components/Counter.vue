<template>
  <div>
    <div><span class="count" data-testid="count">{{ multiplierCount }}</span></div>
    <button @click="increment">Increments</button>
    <button @click="decrement">Decrements</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    multiplier: { type: Number, default: 1 }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  },
  computed: {
    multiplierCount: function() {
      return this.count * this.multiplier;
    }
  }
};
</script>
