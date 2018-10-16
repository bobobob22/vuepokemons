<template>
  <div class="col-sm-12">
      <div class="pokemons">
          <!-- <link-item
          v-for="(link, index) in pokemons"
          :key="link.id"
          :link="link"
            @click="showSingle(link)">
          </link-item> -->
          <div 
            class="pokemons-tile"
            v-for="(pokemon, index) in pokemons"
            :key="pokemon.id"
            :link="pokemon"
          >
             <p>{{pokemon.name}}</p> 
             <img :src="pokemon.image">
             <router-link :to="'/post/' + pokemon.number" class="btn btn-primary"> read more </router-link>

             <hr>
          </div>
      </div>


    <paginate
      name="blogs"
      :list="posts"
      :per="10"
      tag="div"
    >
      <section v-for="blog in paginated('blogs')">
        <h2>{{ blog.title }}</h2>
        <router-link :to="'/post/' + blog.id" class="btn btn-primary">read more</router-link>
        <hr>
      </section>
    </paginate>

    <paginate-links
      for="blogs"
      :async="true"
      :show-step-links="true"
      :step-links="{
        next: 'Next',
        prev: 'Previous'
      }"
      :classes="{
        'ul': 'pagination',
        'ul > li': 'page-item',
        'ul > li > a': 'page-link',
      }"  
    >
    </paginate-links>
  </div>
</template>

<script>

import { ALL_LINKS_QUERY } from './graphql';

export default {
  name: 'Blog',
  data () {
    return {
      pokemons: [],
      posts: [],
      paginate: ['blogs']
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json(), error => console.log(error))
      .then(json => this.posts = json, error => console.log(error));
  },
  apollo: {
    pokemons: {
      query: ALL_LINKS_QUERY
    }
  }
}
</script>

<style>
      .pokemons{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .pokemons-tile{
        flex-grow: 1;
        width: 15%;
        margin: 5%;
    }
    .pokemons-tile img{
      max-width: 100%;
    }
</style>
