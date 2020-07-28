<template>
  <v-row
    justify="center"
  > 
    <v-col cols="8" class="mt-16">
      <v-row align="baseline" justify="center">
        <v-col md="8">
          <v-text-field 
            outlined 
            placeholder="please input the amount of pokemons."
            v-model="pokemonsAmount"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" @click="fetchPokemons" :disabled="loading" :loading="loading">submit</v-btn>
        </v-col>
      </v-row>      
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  methods:{
    fetchPokemons() {
      this.loading=true
      this.$store.dispatch('pokemons/fetchPokemons',{first:this.pokemonsAmount})
        .then(()=>{
          this.loading=false
          this.$router.push({
              path: '/pokemons'
          })
        })
    }
  },
  data(){
    return{
      pokemonsAmount: null,
      loading:false
    }
  },
  components: {
    Logo,
    VuetifyLogo
  },
}
</script>
