import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search_result:null,
    artist_profile_result:null,
    res_dialog_flg:false,
    artsit_detail_result:null,
    neighbor_artists_result:null,
    main_disp_cache:null,
    neighborArtists_cache:null,
    suggestResult:null,
    errorMessIsShow:null,
    errorMessBody:null,
    isSkeltonShow:true
  },
  getters: {
    search_result: state => state.search_result, 
    artist_profile_result: state => state.artist_profile_result,
    res_dialog_flg: state => state.res_dialog_flg,
    artsit_detail_result:state => state.artsit_detail_result,
    neighbor_artists_result:state =>state.neighbor_artists_result,
    main_disp_cache:state => state.main_disp_cache,
    neighborArtists_cache:state => state.neighborArtists_cache,
    suggestResult:state => state.suggestResult,
    errorMessIsShow:state => state.errorMessIsShow,
    errorMessBody:state => state.errorMessBody,
    isSkeltonShow:state => state.isSkeltonShow
  },
  mutations: {
    setSearchResult(state, new_search_result) {  
      state.search_result = new_search_result
    },
    setArtistProfileResult(state, new_artist_profile_result) {  
      state.artist_profile_result = new_artist_profile_result
    },
    setRes_dialog_flg(state,new_res_dialog_flg){
      state.res_dialog_flg = new_res_dialog_flg
    },
    setArtsit_detail_result(state,artsit_detail_result){
      state.artsit_detail_result = artsit_detail_result
    },
    setNeighbar_artist_result(state,neighbor_artists_result){
      state.neighbor_artists_result = neighbor_artists_result
    },
    setMain_disp_cache(state,main_disp_cache){
      state.main_disp_cache = main_disp_cache
    },
    setNeighborArtists_cache(state,neighborArtists_cache){
      state.neighborArtists_cache = neighborArtists_cache
    },
    setSuggestResult(state,suggestResult){
      state.suggestResult = suggestResult
    },
    setErrorMessIsShow(state,errorMessIsShow){
      state.errorMessIsShow = errorMessIsShow
    },
    setErrorMessBody(state,errorMessBody){
      state.errorMessBody = errorMessBody
    },
    setIsSkeltonShow(state,isShow){
      state.isSkeltonShow = isShow
    }
  },
  /**Ansync */
  actions: {
    setSearchResultAction({ commit }, new_search_result) {
      commit('setSearchResult', new_search_result)
    },
    setArtistProfileResultAction({ commit }, new_artist_profile_result) {
      commit('setSearchResult', new_artist_profile_result)
    },
    setRes_dialog_flgAction({commit},new_res_dialog_flg){
      commit('setRes_dialog_flg', new_res_dialog_flg)
    },
    setArtsit_detail_resultAction({commit},new_artsit_detail_result){
      commit('setArtsit_detail_result', new_artsit_detail_result)
    },
    setNeighbar_artist_resultAction({commit},new_neighbor_artists_result){
      commit('setNeighbar_artist_result',new_neighbor_artists_result)
    },
    setmain_disp_cacheAction({commit},new_main_disp_cache){
      commit('setMain_disp_cache',new_main_disp_cache)
    },
    setNeighborArtists_cacheAction({commit},new_neighborArtists_cache){
      commit('setNeighborArtists_cache',new_neighborArtists_cache)
    },
    setSuggestResultAction({commit},new_suggestResult){
      commit('setSuggestResult',new_suggestResult)
    },
    setErrorMessIsShowAction({commit},new_errorMessIsShow){
      commit('setErrorMessIsShow',new_errorMessIsShow)
    },
    setErrorMessBodyAction({commit},new_errorMessBody){
      commit('setErrorMessBody',new_errorMessBody)
    },
    setIsSkeltonShowAction({commit},new_isShow){
      commit('setIsSkeltonShow',new_isShow)
    }
  },
  modules: {
  }
})
