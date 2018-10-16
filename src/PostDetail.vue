<template>
  <article class="col-sm-12 text-center">
		<h1>{{ name }} super</h1>	
		<img :src="image">
		<p>Damage: {{ damage }}</p>	
  </article>
</template>

<script>
import { ALL_LINKS_QUERY } from './graphql';

export default {
  data () {
    return {
      pokemons: [],
			paginate: ['blogs'],
			name: '',
			image: '',
			damage: ''
    }
  },
  created(){
		const windowLocation = window.location.href;
		const windowLocationSplit = windowLocation.split("/");
		const pokemonNumber = windowLocationSplit.slice(-1)[0];
		const b = this.pokemons.find((item) => item.number === pokemonNumber);
		if (b){
			this.name = b.name;
			this.image = b.image;
			this.damage = b.attacks.fast[0].damage;
		}
  },
  apollo: {
    pokemons: {
      query: ALL_LINKS_QUERY
    }
	},
	mounted(){



	}
}

</script>

<style>

</style>
