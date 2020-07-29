<template>
  <v-row
    justify="center"
  > 
    <v-col cols="8" class="mt-16">
      <v-row align="baseline" justify="center">
        <v-col md="8">
          <v-form ref="amountForm">
            <v-text-field 
              outlined 
              placeholder="Please input the amount of pokemons."
              :rules="numberOnlyRule"
              v-model="pokemonsAmount"
            ></v-text-field>
          </v-form>
          <v-col cols="auto">
            <v-btn color="primary" @click="fetchPokemons" :disabled="loading" :loading="loading">submit</v-btn>
          </v-col>
        </v-col>
      </v-row>      
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods:{
    fetchPokemons() {
      if(this.$refs.amountForm.validate()){
        this.loading=true
        this.$store.dispatch('pokemons/fetchPokemons',{first:this.pokemonsAmount})
          .then(()=>{
            this.loading=false
            this.$router.push({
                path: '/pokemons'
            })
          })  
      }
    }
  },
  data(){
    return{
      pokemonsAmount: null,
      loading: false,
      valid: true,
      numberOnlyRule: [
        v =>  v > 0  || 'Please input a positive number.',
      ]
    }
  }
}
</script>
