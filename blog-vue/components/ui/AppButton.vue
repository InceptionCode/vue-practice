<template>
  <button 
    :class="btnClass"
    v-bind="$attrs"
    v-on="$listeners">
    {{btnValue}}
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String
    },
    btnValue: {
      type: String,
      required: true
    }
  }
}
</script>

