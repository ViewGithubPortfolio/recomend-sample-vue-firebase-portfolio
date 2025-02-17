<template>
    <v-container fill-height>
        <v-row 
        >
            <v-col
                cols="12"
                sm="1"
            >   
                <v-sheet height="100%">
                    <v-layout
                        
                    >
                        <v-btn
                            color="red"
                            fixed
                            bottom
                            fab
                            height="100" width="100"
                            @click="back_main"
                        >
                            戻る
                        </v-btn>
                        
                    </v-layout>
                   
                </v-sheet>
            </v-col>
            <v-col
                cols="12"
                sm="10"
            >
                <v-sheet>
                    <v-card>
                        <v-card-title>
                            {{ artist_detail_result_vuex.artist_name_trance_remove_kakko_ja }}
                        </v-card-title>
                        <v-card-text>
                            <div v-html="build_img_tag(artist_detail_result_vuex.artist_image_url)"></div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ artist_detail_result_vuex.content_en }}
                        </v-card-text>
                        <v-card-title>
                            artist_alias
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            <div v-for="arist_alias_record in artist_detail_result_vuex.artist_alias" :key="arist_alias_record.artistAliasID">
                                <v-chip variant="flat" size="small" color="red">
                                    {{ arist_alias_record.alias }}
                                </v-chip>
                            </div>
                        </v-card-title>
                        <v-card-title>
                            nameVariation
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            <div v-for="arist_alias_record in artist_detail_result_vuex.artist_name_variation" :key="arist_alias_record.artistNmaeVariationID">
                                <v-chip variant="flat" size="small" color="red">
                                    {{ arist_alias_record.nameVariation }}
                                </v-chip>
                            </div>
                        </v-card-title>
                        <v-card-title>
                            artist urls
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            <div v-for="artist_urls_record in artist_detail_result_vuex.artist_urls" :key="artist_urls_record.artistUrlID">
                                <v-chip variant="flat" size="small" color="red">
                                {{ artist_urls_record.url}}
                                </v-chip>
                            </div>
                        </v-card-title>
                    </v-card>
                    <v-card>
                        <v-card-title>
                            Realses
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col v-for="release_record in artist_detail_result_vuex.releases" :key="release_record.discogs_releaseID">
                                <v-card>
                                    <v-card-title>
                                        {{ release_record.artsitname_ja }} {{ release_record.artist_name_kakko_none_en  }}
                                    </v-card-title>
                                    <v-card-title>
                                        {{ release_record.discogs_release_tile}}
                                    </v-card-title>
                                    <v-card-text>
                                        <div v-if="release_record.release_video_img_url !== 'N/A'" v-html="build_url_youtube_url(release_record.release_video_img_url)" > </div>
                                        <div v-else><v-img :src='require("@/assets/notexist.png")'></v-img></div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col
                cols="12"
                sm="1"
            ></v-col>
        </v-row>
    </v-container>
   
</template>
<script>
import {buildURL,buildHeader,httpMethodsGET, fetchCli} from '../../lib/dataaccessclient' 
import DB from '../../lib/dcx'

export default{
    name:"artistDetail",
    comments:{

    },
    data(){
        return{

        }
    },
    async created(){
        console.log("artist detail created")
        if(this.$store.getters.artsit_detail_result ==null){
            this.onloadartistDetailPage()
        }
        
    },
    computed:{
        artist_detail_result_vuex(){
            return this.$store.getters.artsit_detail_result
        }
    },
    watch:{
    
    },
    methods:{
        onloadartistDetailPage(){
            let tmppath =window.location.pathname
            const toPAth = tmppath.replace("/","")
            DB.getLatestSaveAtByCol("toPath",toPAth).then(li =>{
                    if(li.length >0){
                        const tmp_res_json = li[0]
                        const temp = tmp_res_json["body"]
                        
                        const dispJsonli = JSON.parse(temp)
                        this.$store.dispatch( "setArtsit_detail_resultAction", dispJsonli)
                    }else{
                        const mainUrl = buildURL(toPAth,{})
                        const infodict = buildHeader(httpMethodsGET)
                        
                        fetchCli(mainUrl,infodict)
                        .then(res =>{
                            const maindisp = res["result"]
                            this.$store.dispatch( "setArtsit_detail_resultAction", maindisp)
                            const jsonstr = JSON.stringify(this.main_disp)
                            DB.saveCachePage(jsonstr,toPAth,toPAth)
                        }).catch(errr =>{
                            console.error("Network someting error")
                            console.log(errr)
                            this.$store.dispatch('setErrorMessIsShowAction', true)
                            this.$store.dispatch('setErrorMessBodyAction', errr)
                            this.$store.dispatch('setIsSkeltonShowAction', false)
                        }).finally(()=>{
                            this.$store.dispatch('setErrorMessIsShowAction', false)
                            this.$store.dispatch('setIsSkeltonShowAction', false)
                        })

                    }
                }).catch(err =>{
                    console.error("occured dexi error")
                    this.$store.dispatch('setErrorMessIsShowAction', true)
                    this.$store.dispatch('setErrorMessBodyAction', err)
                    this.$store.dispatch('setIsSkeltonShowAction', false)
                }).finally(()=>{
                    this.$store.dispatch('setErrorMessIsShowAction', false)
                    this.$store.dispatch('setIsSkeltonShowAction', false)
                })
       
      
      }, 
        build_url_youtube_url(val){
            const emb_url = val["emb_url"]
            const img_url = val["img_url"]
            const a_tag = '<a target="_blank" href="'+emb_url+'"><img src="' +img_url+'"</a>'
            return a_tag
        },
        build_img_tag(val){
          const img_str ="<img src=\"" + val+"\">"
          return img_str
      },
      back_main(){
        this.$router.back(-1)
      }
    }

}
</script>