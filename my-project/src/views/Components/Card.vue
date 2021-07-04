<template >
  <div>

    <div class="login" v-if="done" id="card"  @mousemove="MouseMove"  @click="OnClick">
      <h1> {{msg}}</h1>     
     
  
    </div>
    
    <div class="login" v-else id="card1"  @mouseout="MouseOut"  @click="OnClick"  >
      <h1 > {{msg}}</h1>
 
     
    </div>


  </div>
</template>


<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';
import router from "../../router/index"

export default Vue.extend({
     name:"Card",
     props:['msg'] ,
     data(){

       return{
         done:true          
       }
     },    
    
  methods: {
  
   MouseMove(e:MouseEvent){
       this.done=false;
    //  console.log("Done"+this.done);

    } ,   

     MouseOut(e:MouseEvent){
       this.done=true;
    //  console.log("Done"+this.done);
     

    },   

    OnClick(){
      
     this.$router.push({name: 'modeltype', query:{ data:this.msg}});
     }
   
    }

});


</script>


<style scoped>
#card {
  background-color: #81817f;
  box-shadow: 5px 10px 10px rgb(22, 20, 20);
  padding-top: 50px;
  margin: 12px;
  border-radius: 10px;
  height: 200px;
  width: 200px;  
  display: inline-block;

}

#card1 {
  background-color: #81817f;
  box-shadow: 10px 15px 10px rgb(22, 20, 20);
  padding-top: 50px;
  margin: 12px;
  border-radius: 10px;
  height: 210px;
  width: 210px;
  display: inline-block;
  
}
</style>