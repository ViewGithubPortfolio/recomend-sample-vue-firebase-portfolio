<template>
    <v-app-bar 
      app
    >
      <v-icon
        left
      >mdi-send-check</v-icon>
  
      <v-app-bar-title>
          Recomdetion Sample
      </v-app-bar-title>
        
      <template v-slot:extension>
        <v-autocomplete
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          item-text="artist_name_trance_remove_kakko"
          item-value="artist_name_trance_remove_kakko"
          label="Public APIs"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
          @change="(event) => searchNnResult(event)"
        >
        </v-autocomplete>
      </template>
    </v-app-bar>
</template>
<script>
import {buildURL} from '../../lib/dataaccessclient'
import {saveCachePage} from '../../lib/dcx'

export default{
    name:"AaabarVue",
    data () {
        return {
        descriptionLimit: 60,
        entries: [],
        isLoading: false,
        res_isloading: false,
        model: null,
        search: null,
        artist_profile_result:null,
        is_list_transision:false,
        artist_id_prefix:"discogs_artist_"
        }
    },
    computed:{
        items(){
            return this.entries.map(entry =>
                {
                    return entry
                }
            )
        }
    },
    watch:{
        async searchNnResult(data){
            
        const artistID = data["discogs_artist_id"]
        const artistName = data["artist_name_origine"]
        const artist_name_ja = data["artist_name_trance_remove_kakko"]
        const param_d ={
            "artist_name_trance_remove_kakko":artist_name_ja,
            "artist_name_kakko_none_en":artistName,
            "artistID":artistID
        }
        alert(JSON.stringify(param_d))
        const target_url =buildURL("get_artist_detail_with_releases",param_d)

        alert(target_url)

        fetch(
            target_url,
            {
                methos:'GET',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                } 
                            
            }).then(
                res =>res.json()
            ).then(
                res =>{
                    this.$store.dispatch('setSuggestResultAction', res)
                    this.$router.app.$emit('appbar_event_global');
                    saveCachePage(res,"suggest")
                }
            ).catch(err =>{
                alert(err)
            }).finally(() =>(
                alert("finally")
            ))
        
        },
    }
}
</script>