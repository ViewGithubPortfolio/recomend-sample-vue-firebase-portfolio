<template>
    <div>
        <transition name="fade">
            <p class="popupl" v-if="errorMessIsShow_vuex">{{ errorMessBody_vuex }}</p>
        </transition>
    </div>
</template>
<script>

export default {
    name:"errorPopUp",
    props:{
    },
    computed:{
      errorMessIsShow_vuex(){
        return this.$store.getters.errorMessIsShow
      },
      errorMessBody_vuex(){
        if (this.$store.getters.errorMessBody === null){
          return "error ocurred"
        }else{
          return this.$store.getters.errorMessBody
        }
        
      }

    },
    data(){
        return {
        }

    }
}
</script>
<style lang="css" scoped>
.popupl {
    position: fixed;
    top: 5%;
    left: 15%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color:orange;
    border: 1px solid orange;
    z-index: 1000;
  }
</style>