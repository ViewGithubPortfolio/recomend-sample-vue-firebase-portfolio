<template>
  <v-app id="app">
    <v-app-bar 
      app
    >
      <v-icon
        left
      >mdi-send-check</v-icon>
  
      <v-app-bar-title>
          レコメンドサンプル
      </v-app-bar-title>
        
      <template v-slot:extension>
        <v-autocomplete
          :items="items"
          :search-input.sync="search"
          color="red"
          item-text="artist_name_trance_remove_kakko"
          item-value="artist_name_trance_remove_kakko"
          label="アーティスト近傍検索 APIs"
          placeholder="アーティスト名をカタカナで入力してください"
          prepend-icon="mdi-database-search"
          return-object
          @change="(event) => searchNnResult(event)"
        >
        </v-autocomplete>
      </template>
    </v-app-bar>
    
    
    <div v-show="isSkeltonShow_vuex">
      <SkeltonVue></SkeltonVue>
    </div>
    
    <v-main v-show="!isSkeltonShow_vuex">
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import {buildURL, fetchCli,buildHeader,httpMethodsGET} from './lib/dataaccessclient' 
import DB from './lib/dcx'
import SkeltonVue from './components/partsVue/skeletonloaderVue.vue'
export default {
  name: 'App',

  components: {
    SkeltonVue
  },
  created(){
    
  },
  mounted(){
    
  },
  destroyed(){
    
  },
  data () {
    return {
      descriptionLimit: 60,
      entries: [],
      model: null,
      search: null,
      artist_profile_result:null,
      is_list_transision:false,
      artist_id_prefix:"discogs_artist_",
      errorMessIsShow:false,
      errorMessBody:"",
      loading:false
    } 
  },
  computed: {
    items () {
      return this.entries.map(entry =>
        {
          return entry
        }
      )
    },
    isSkeltonShow_vuex(){
      alert(this.$store.getters.isSkeltonShow)
      return this.$store.getters.isSkeltonShow
    }

  },
  watch: {
    async search (val) {
      
      const w_size = val.length
      if(w_size <1) return
      const param_d = {'suggest': val}
      const target_url = buildURL("suggest",param_d)
      const infodict = buildHeader(httpMethodsGET)
      fetchCli(target_url,infodict)
        .then(
          resjson=>{
            const tmp_res_li = resjson["result"];
            tmp_res_li.forEach(element => {
              const record = element["_source"]
              const artsit_id = record["artist_id"]
              record["discogs_artist_id"] = this.artist_id_prefix +artsit_id
              this.entries.push(record)
            })
          }
      ).catch(err_mess=>{
        console.log(err_mess)
        this.$store.dispatch('setErrorMessIsShowAction', true)
        this.$store.dispatch('setErrorMessBodyAction', err_mess)
      }).finally(()=>{
        this.$store.dispatch('setErrorMessIsShowAction', false)
      })
    
    },
  },
  methods:{
    async searchNnResult(data){
      const artistID = data["discogs_artist_id"]
      const artistName = data["artist_name_origine"]
      const artist_name_ja = data["artist_name_trance_remove_kakko"]
      const param_d ={
        "artist_name_trance_remove_kakko":artist_name_ja,
        "artist_name_kakko_none_en":artistName,
        "artistID":artistID
      }
      const target_url =buildURL("/suggestResult",param_d)
      const infodict = buildHeader(httpMethodsGET)
      fetchCli(target_url,infodict)
      .then(
        result =>{
          alert(JSON.stringify(result))
          this.$store.dispatch('setSuggestResultAction', result)
          this.$router.push({path:"/suggestResult"})
          const resultStr = JSON.stringify(result)
          DB.saveCachePage(resultStr,"suggest","suggestResult",target_url)
        }
      ).catch(
        (err_mess)=>{
          console.log(err_mess)
          this.$store.dispatch('setErrorMessIsShowAction', true)
          this.$store.dispatch('setErrorMessBodyAction', err_mess)
        }
      ).finally(
        ()=>{
          this.$store.dispatch('setErrorMessIsShowAction', false)
        } 
      )
     
    }, 
  }
};
</script>
