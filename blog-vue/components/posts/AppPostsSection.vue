<template>
  <section class="post-list">
    <div class="post-wrapper"
        v-for="post in postPreview"
        :key="post.id"
    >
      <div class="card-img-container">
        <img class="left-img posts-img" 
          :src="post.postThumbnail" 
          alt=""
        >
      </div>
      <div class="card-preview">
        <h1 class="preview-title">{{post.postTitle}}</h1>
        <p class="preview">{{post.postContent}}</p>
      </div>
      <nuxt-link class="read-more"
        :to="linkTo(post.id)"
        v-if="isAdmin"
      >
        Edit...
      </nuxt-link>

      <nuxt-link class="read-more"
        :to="linkTo(post.id)"
        v-else
      >
        Read More...
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postPreview: {
      type: Array,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
    } 
  },
  methods: {
    linkTo (id) {
      return this.isAdmin ? 'admin/' + id : 'posts/' + id
    }
  }
}
</script>

