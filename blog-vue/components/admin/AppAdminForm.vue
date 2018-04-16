<template>
  <form @submit.prevent="savePost">
    <app-control-input v-model="editPost.author"
      type="text"
      label="Author Name"
    />
    <app-control-input v-model="editPost.title"
      type="text"
      label="Title"
    />
    <app-control-input v-model="editPost.thumbnail"
      type="text"
      label="Thumbnail Link"
    />
    <app-control-input v-model="editPost.content"
      type="textarea"
      label="Content"
      controlType="textarea"
    />
    <app-control-input v-model="editPost.subContent"
      type="textarea"
      label="Content Preview"
      controlType="textarea"
    />
    <app-button type="submit"
      btn-class="save-post"
      btn-value="Save">
    </app-button>
    <app-button type="button"
        btn-class="cancel-post"
        btn-value="Cancel"
        @click="cancelPost"> 
    </app-button>
  </form>
</template>

<script>
import AppControlInput from '@/components/ui/AppControlInput'
import AppButton from '@/components/ui/AppButton'

import moment from 'moment'

export default {
 layout: "nav",
 props: ['post'],
 components: {
   'app-control-input': AppControlInput,
   'app-button': AppButton
 },
 data() {
    return {
      editPost: this.post 
        ? { ...this.post } 
        : {
            thumbnail: '',
            title: '',
            author: '',
            content: '',
            subContent: ''
          }
    }
  },
  methods: {
    savePost() {
      const updatedDate = moment().format('MMMM Do YYYY');
      this.editPost[updatedDate] = updatedDate;
      this.$emit('savePost', this.editPost);
    },
    cancelPost () {
      this.$router.push('/App/admin');
    }
  }
}
</script>
