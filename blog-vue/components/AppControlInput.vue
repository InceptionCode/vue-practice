<template>
  <div class="input-control">
    <label for="">{{label}}</label>
    <input v-if="controlType === 'input'" 
      v-bind="$attrs"
      :value="value"
      @input="emit('input', $event.target.value)"
    >
    <textarea cols="30" rows="10" 
      v-if="controlType === 'textarea'" 
      :value="value"
      @input="emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    content: {
      type: String,
    }
  }
}
</script>

