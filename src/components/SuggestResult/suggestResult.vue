<template>
     <v-container fill-height>
        <v-row 
        >
            <v-col
                cols="12"
                sm="1"
            >   
                <v-row>
                    <v-col>
                        <v-btn
                            color="red"
                            fixed
                            bottom
                            fab
                            height="70" width="70"
                            @click="slotOnFetchData(suggest_result_vuex)"
                        >
                            neighbar_artist
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn
                            color="red"
                            fixed
                            bottom
                            fab
                            height="70" width="70"
                            @click="back_main"
                        >
                            TO MAIN
                        </v-btn>    
                    </v-col>
                    
                </v-row>
            </v-col>
            <v-col
                cols="12"
                sm="10"
            >
                <v-sheet>
                    <v-card>
                        <v-card-title>
                            {{ suggest_result_vuex.artist_name_trance_remove_kakko_ja }}
                        </v-card-title>
                        <v-card-text>
                            <div v-html="build_img_tag(suggest_result_vuex.artist_image_url)"></div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ suggest_result_vuex.content_en }}
                        </v-card-text>
                        <v-card-title>
                            artist_alias
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-title>
                            <div v-for="arist_alias_record in suggest_result_vuex.artist_alias" :key="arist_alias_record.artistAliasID">
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
                            <div v-for="arist_alias_record in suggest_result_vuex.artist_name_variation" :key="arist_alias_record.artistNmaeVariationID">
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
                            <div v-for="artist_urls_record in suggest_result_vuex.artist_urls" :key="artist_urls_record.artistUrlID">
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
                            <v-col v-for="release_record in suggest_result_vuex.releases" :key="release_record.discogs_releaseID">
                                <v-card>
                                    <v-card-title>
                                        {{ release_record.artist_name_trance_remove_kakko_ja }} {{ release_record.artist_name_kakko_none_en  }}
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
import VUEX_DICT from '../../lib/utilyy'
    export default{
        name:'suggestResult',
        components:{

        },
        data(){
            return{

            }
        },
        created(){
            console.log("Suggest Result Created")
            if(this.$store.getters.suggestResult ==null){
                this.onloadSuggestResultPage()
            }else{
                //alert("===========================================================")
            }
            
            
        },
        computed:{
            suggest_result_vuex(){
                return this.$store.getters.suggestResult
            }
        },
        methods:{
            onloadSuggestResultPage(){
                let tmppath =window.location.pathname
                const toPAth = tmppath.replace("/","")
                DB.getLatestSaveAtByCol("toPath",toPAth).then(li =>{
                    if(li.length >0){
                        //alert(JSON.stringify(li))
                        const tmp_res_json = li[0]
                        const temp = tmp_res_json["body"]
                        const dispJson = JSON.parse(temp)
                        const vuex_dipatch = VUEX_DICT.VUEX_DISPATCH_DICT["/suggestResult"]
                    
                        this.$store.dispatch(vuex_dipatch, dispJson)
                        
                    }else{
                        const mainUrl = buildURL(toPAth,{})
                        const infodict = buildHeader(httpMethodsGET)
                        this.$store.dispatch('setIsSkeltonShowAction', true)
                        fetchCli(mainUrl,infodict)
                        .then(res =>{
                            const main_disp = res["result"]
                            const jsonstr = JSON.stringify(main_disp)

                            const vuex_dipatch = VUEX_DICT.VUEX_DISPATCH_DICT["/suggestResult"]
                            //target_url 
                            this.$store.dispatch(vuex_dipatch, main_disp)
                            

                            DB.saveCachePage(jsonstr,toPAth,toPAth,)
                        }).catch(errr =>{
                            console.error("Network someting error")
                            console.error(errr)
                            this.$store.dispatch('setErrorMessIsShowAction', true)
                            this.$store.dispatch('setErrorMessBodyAction', "Network someting error")
                        }).finally(()=>{
                            this.$store.dispatch('setIsSkeltonShowAction', true)
                            this.$store.dispatch('setErrorMessIsShowAction', false)
                        })

                    }
                }).catch(err =>{
                    console.error("occured dexi error")
                    console.error(err)
                    this.$store.dispatch('setErrorMessIsShowAction', true)
                    this.$store.dispatch('setErrorMessBodyAction', "occured dexi error")
                }).finally(()=>{
                    this.$store.dispatch('setErrorMessIsShowAction', false)
                })
            },
            build_url_youtube_url(val){
                const emb_url = val["emb_url"]
                const img_url = val["img_url"]
                const a_tag = '<a target="_blank" href="'+emb_url+'"><img src="' +img_url+'"</a>'
                //alert(a_tag)
                return a_tag
            },
            build_img_tag(val){
                const img_str ="<img src=\"" + val+"\">"
                return img_str
            },
            back_main(){
                this.$router.back(-1)
            },
            slotOnFetchData(record) {
                //alert(JSON.stringify(record))
                const toPath ="/neighborArtists"
                //const record = this.$store.getters.suggestResult
                const artistID = record["artistID"]
                const artistName = record["artist_name_kakko_none_en"]
                const artist_name_ja = record["artsitname_ja"]
                const param_d ={
                    "artist_name_trance_remove_kakko":artist_name_ja,
                    "artist_name_kakko_none_en":artistName,
                    "artistID":artistID
                }
                alert(JSON.stringify(param_d))
                const target_url = buildURL(toPath,param_d)
                const infodict = buildHeader(httpMethodsGET)
                this.$store.dispatch('setIsSkeltonShowAction', true)
                fetchCli(target_url,infodict).then(
                    res_json =>{
                        alert(JSON.stringify(res_json))
                        let resli ={}
                        if(toPath === "/neighborArtists"){
                            resli = res_json["nn_neighbor_artist_result"]
                        }else{
                            resli = res_json
                        }

                        const vuex_dipatch = VUEX_DICT.VUEX_DISPATCH_DICT[toPath]
                        alert(vuex_dipatch)
                        this.$store.dispatch(vuex_dipatch, resli)
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
                        this.$store.dispatch('setIsSkeltonShowAction', false)
                    }).finally(()=>{
                        this.$store.dispatch('setErrorMessIsShowAction', false)
                        this.$store.dispatch('setIsSkeltonShowAction', false)
                    })
            },
        }
    }
</script>

<style>
</style>



