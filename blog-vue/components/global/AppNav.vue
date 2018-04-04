<template>
  <div>
    <nav v-if="!isVisible"
      class="app-nav"
    >
      <div @click="isVisible = !isVisible">
        <span class="--hamburger"></span>
        <span class="--hamburger"></span>
        <span class="--hamburger"></span>
      </div>
      <li v-for="tab in tabs"
        :key="tab.id"
        class="navTabs"
      >
        <nuxt-link :to="tab.ref">
          {{tab.name}}
        </nuxt-link>
      </li>
    </nav>
    <app-side-nav 
        @changeVisibility="isVisible = !isVisible"
        :tabs="tabs" 
        :isVisible="isVisible"
    />
  </div>
</template>

<script>
import AppSideNav from "./AppSideNav"

export default {
  components: {
    "app-side-nav": AppSideNav
  },
  props:['tabs'],
  data() {
    return {
      isVisible: false
    }
  }
}
</script>