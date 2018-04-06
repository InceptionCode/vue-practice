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
    <app-control-input v-model="editPost.thumbnailLink"
      type="text"
      label="Thumbnail Link"
    />
    <app-control-input v-model="editPost.content"
      type="textarea"
      label="Content"
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
import AppControlInput from '@/components/AppControlInput'
import AppButton from '@/components/AppButton'

export default {
 layout: "nav",
 props: ['loadedPost'],
 components: {
   'app-control-input': AppControlInput,
   'app-button': AppButton
 },
 data() {
    return {
      editPost: this.post 
        ? { ...this.post } 
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            content: ''
          }
    }
  },
  methods: {
    savePost() {
      console.log(this.editPost);
    },
    cancelPost () {
      this.$router.push('/App/admin');
    }
  }
}
</script>
