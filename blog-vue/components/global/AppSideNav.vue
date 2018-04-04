<template>
  <nav v-if="isVisible" 
      class="app-side-nav"
  >
    <div @click="$emit('changeVisibility')">
      <span class="--hamburger"></span>
      <span class="--hamburger"></span>
      <span class="--hamburger"></span>
    </div>
    <li v-for="tab in tabs"
      :key="tab.id"
      :class="{sideTabs: true, show: isVisible}"
    >
      <nuxt-link :to="tab.ref">
        {{tab.name}}
      </nuxt-link>
    </li>
  </nav>
</template>

<script>
export default {
  props:['tabs', 'isVisible'],
  methods: {
    displayNav() {
      this.$emit('displayNav');
    }
  }
}
</script>