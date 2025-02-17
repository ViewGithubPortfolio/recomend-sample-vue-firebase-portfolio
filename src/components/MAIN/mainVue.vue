<template>
  <v-container fill-height>
        <v-row class="mycolor lighten-1"
        >
            <v-col 
                v-for="record in main_disp" :key="record.artistID"
                cols="12" sm="8" md="6" lg="4" xl="3"
            >
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card>
                    <v-card-title>
                      {{record.artist_name_kakko_none_en}}
                      {{record.artist_name_trance_remove_kakko_ja}}
                    </v-card-title>
                    <v-card-text>
                      <div v-html="build_img_tag(record.artist_image_url)"></div>
                      
                    </v-card-text>
                    <v-card-title>ALIAS</v-card-title>
                    <v-card-title>
                      <div v-for="arist_alias_record in record.artist_alias" :key="arist_alias_record.artistAliasID">
                        <v-chip variant="flat" size="small" color="red">
                          {{ arist_alias_record.alias}}
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-card-title>
                      artist_name_variation
                    </v-card-title>
                    <v-card-title>
                      <div v-for="arist_namevari_record in record.artist_name_variation" :key="arist_namevari_record.artistNmaeVariationID">
                        <v-chip variant="flat" size="small" color="red">
                          {{ arist_namevari_record.nameVariation}}
                        </v-chip>
                      </div>
                    </v-card-title>
                    <v-card-title>
                      artist_urls
                    </v-card-title>
                    <v-card-title>
                      <div v-for="artist_urls_record in record.artist_urls" :key="artist_urls_record.artistUrlID">
                        <v-chip variant="flat" size="small" color="red">
                          {{ artist_urls_record.url}}
                        </v-chip>
                      </div>
                    </v-card-title>
                   <!--OVER RAY-->
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="#036358"
                      >
                        <v-row align="center">
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <div><v-btn @click="slotOnFetchData(record,'/artistDetail')">Artist Detail</v-btn></div>
                            <v-divider></v-divider>
                            <div><v-btn @click="slotOnFetchData(record,'/neighborArtists')">Neighbor Artist</v-btn></div>
                          </v-col>
                        </v-row>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
        </v-row>
      
    </v-container>

</template>
<script>
import {buildURL,buildHeader,httpMethodsGET, fetchCli} from '../../lib/dataaccessclient' 
import DB from '../../lib/dcx'
import VUEX_DICT from '../../lib/utilyy'
export default {
    name:"main_vue",
    components:{
    },
    data(){
        return{
          main_disp:null,
          loading:false
        }
    },
    created(){
      console.log("Maion created")
      this.onloadMainPage()
     
    },
    destroyed(){
      //alert("Main Destory")
    },
    methods:{
      onloadMainPage(){

        let tmppath =window.location.pathname
        const toPAth = tmppath.replace("/","")
        DB.getLatestSaveAtByCol("toPath",toPAth).then(li =>{
            if(li.length >0){
              const tmp_res_json = li[0]
              const temp = tmp_res_json["body"]
              const dispJsonli = JSON.parse(temp)
              alert(JSON.stringify(dispJsonli))
              this.main_disp = dispJsonli

            }else{
              
              const mainUrl = buildURL(toPAth,{})
              const infodict = buildHeader(httpMethodsGET)
              this.$store.dispatch('setIsSkeltonShowAction', true)
              fetchCli(mainUrl,infodict)
              .then(res =>{
                
                this.main_disp = res["result"]
                const jsonstr = JSON.stringify(this.main_disp)
                DB.saveCachePage(jsonstr,toPAth,toPAth)
              
              }).catch(errr =>{
                console.error("Network someting error")
                console.log(errr)
                this.$store.dispatch('setErrorMessBodyAction', errr)
              }).finally(()=>{
                this.$store.dispatch('setIsSkeltonShowAction', false)
              })

            }
        }).catch(err =>{
          console.error("occured dexi error")
          this.$store.dispatch('setErrorMessBodyAction', err)
        }).finally(()=>{
          this.$store.dispatch('setIsSkeltonShowAction', false)
        })
       
      
      }, 
      build_img_tag(val){
          const img_str ="<img src=\"" + val+"\">"
          return img_str
      },
      slotOnFetchData(record,toPath) {
        
        const artistID = record["artistID"]
        const artistName = record["artist_name_kakko_none_en"]
        const artist_name_ja = record["artist_name_trance_remove_kakko_ja"]
        const param_d ={
          "artist_name_trance_remove_kakko":artist_name_ja,
          "artist_name_kakko_none_en":artistName,
          "artistID":artistID
        }
        const target_url = buildURL(toPath,param_d)
        const infodict = buildHeader(httpMethodsGET)
        this.$store.dispatch('setIsSkeltonShowAction', true)
        fetchCli(target_url,infodict).then(     
          res_json =>{
            let resss = {}
            if(toPath == "/neighborArtists"){
              resss = res_json["nn_neighbor_artist_result"]
            }else{
              resss = res_json
            }
            const vuex_dipatch = VUEX_DICT.VUEX_DISPATCH_DICT[toPath]
            
            this.$store.dispatch(vuex_dipatch, resss)
            this.$router.push({path:toPath}).catch(function(err){
                        console.error(err)
                    })
            const jsonstr = JSON.stringify(res_json)
            let tmppath =window.location.pathname
            const fromPAth = tmppath.replace("/","")
            const toPath_not_slush = toPath.replace("/","")
            DB.saveCachePage(jsonstr,fromPAth,toPath_not_slush,target_url)
          }
        ).catch(err =>{
          console.log(err)
          this.$store.dispatch('setErrorMessIsShowAction', true)
          this.$store.dispatch('setErrorMessBodyAction', err)
        }).finally(()=>{
          this.$store.dispatch('setErrorMessIsShowAction', false)
          //
          this.$store.dispatch('setIsSkeltonShowAction', false)

          
        })
      },
     
    }
}
</script>