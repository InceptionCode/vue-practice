<template>
  <section class="feature-section">
    <h1 class="section-title">Features</h1>
    <div class="card-wrapper">
      <div class="card"
        v-for="post in featurePreview"
        :key="post.id"
      >
        <nuxt-link :to="'post/' + post.id">
          <div class="card-img-container">
            <img :src="post.postThumbnail" alt="">
          </div>
          <div class="card-preview">
            <h1 class="preview-title">{{post.postTitle}}</h1>
            <p class="preview">{{post.postContent}}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['featurePreview']
}
</script>

