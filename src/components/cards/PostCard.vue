<template>
  <div :style="{ backgroundImage: 'url(' + image + ')' }" class="itens">
    <router-link :to="`/posts/${slug}`">
      <div>
        <h3>{{ title }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import windowWidthMixin from '../../mixins/windowWidthMixin.js'
export default {
  name: 'PostCard',
  data() {
    return {
      image: '',
      title: '',
      description: '',
      slug: '',
      mobileWidth: false
    }
  },
  mixins: [windowWidthMixin],
  created() {
    this.image = this.post.image
    this.title = this.post.title
    this.description = this.post.description
    this.slug = this.post.url
  },
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.itens {
  display: flex;
  width: 100%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  border-radius: 1em;
  transition: transform 0.3s ease;
}

.itens:hover {
  transform: scale(1.01);
}

.itens h3 {
  font-size: 26px;
  margin: 2%;
  text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333,
    1px 1px 0 #333;
}

.itens a {
  text-decoration: none;
  color: inherit;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

@media (max-width: 992px) {
  .itens h3 {
    font-size: 20px;
  }
}
</style>
