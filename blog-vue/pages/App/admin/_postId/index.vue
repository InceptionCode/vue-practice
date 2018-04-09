<template>
  <div class="admin-post-page">
    <section class="update-form">
      <app-admin-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AppAdminForm from '@/components/admin/AppAdminForm'

export default {
  components: {
    'app-admin-form': AppAdminForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Darrell Washington',
        title: 'Best Post Ever',
        content: 'Here is the greatest post you will ever see.',
        thumbnailLink: 'https://goo.gl/SQNvnV'
      }
    }
  }
}
</script>

