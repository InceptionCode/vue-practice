<template>
  <div class="admin-post-page">
    <section class="update-form">
      <app-admin-form :post="loadedPost" 
        @savePost="submitPost"
      />
    </section>
  </div>
</template>

<script>
import AppAdminForm from '@/components/admin/AppAdminForm'
import axios from 'axios'

export default {
  components: {
    'app-admin-form': AppAdminForm
  },
  asyncData({params, error}) {
    return (
      axios.get(process.env.baseUrl + 'posts'+ `/${params.postId}.json`)
        .then(payload => {
          return {
            loadedPost: payload.data
          }
        })
        .catch(e => error(e))
    );
  },
  methods: {
    submitPost(postData) {
      const {params} = this.$route;
      const postPayload = { 
        id: params.postId,
        postData
      };
      this.$store.dispatch('editPost', postPayload);
    },
  }
}
/*
Soon to implement: Send user to success page if succesful or to the failed page if form couldn't be submitted.

this.$router.push('../successful-form');
this.$router.push('../error-form');
*/
</script>