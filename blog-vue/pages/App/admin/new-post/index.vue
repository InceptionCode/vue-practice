<template>
  <div>
    <header class="app-header">
      <h1 class="header-h1">Admin: New Post</h1>
      <app-nav :tabs="tabs"/>
    </header>
    <section class="new-post">
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
    </section>
    <section class="existing-post">
      <h1 class ="section-title">Existing Post</h1>
      <app-posts-section />
    </section>
  </div>
</template>

<script>
import navData from '@/assets/mixins/app-nav'
import AppNav from '@/components/global/AppNav'
import AppPostsSection from '@/components/posts/AppPostsSection'
import AppControlInput from '@/components/AppControlInput'
import AppButton from '@/components/AppButton'

export default {
 layout: "nav",
 components: {
   'app-nav': AppNav,
   'app-posts-section': AppPostsSection,
   'app-control-input': AppControlInput,
   'app-button': AppButton
 },
 mixins: [navData],
 data() {
    return {
      editPost: {
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

