<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 24" :key="n"
          cols="12"
          sm="8" md="6" lg="4" xl="3"
      >
          <v-skeleton-loader
            type="card"
          >
          </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default{
    name:"skeletonloaderVue",
    created(){
      console.log("skelton created")
    },
    computed:{
    }

}
</script>