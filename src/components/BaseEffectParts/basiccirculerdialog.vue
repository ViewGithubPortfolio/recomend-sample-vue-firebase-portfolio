<template>
    <v-dialog 
        v-model="show_dialog_vuex"
        fullscreen
        >
        <v-container fluid fill-height >
            <v-layout justify-center align-center>
                <v-progress-circular :indeterminate="true" size="120" color="yellow"  width="20"/>
            </v-layout>
      </v-container>
    </v-dialog>
</template>
<script>
export default {
  name: 'BasicCirculerDialog',
  data(){
    return{
        dialog:true
    }
  },
  computed:{
    show_dialog_vuex(){
        //alert("anananananananananaanan")
        return this.$store.getters.res_dialog_flg
    }
  },
  methods:{

  }
}
</script>
