<template>
  <div>
    <h1 class="alignTitle">Магазин</h1>
    <div class="row" v-for="i in Math.ceil(items.length / 3)">
    <div class="col-4" v-for="item in items.slice((i - 1) * 3, i *3)">        
        <img v-bind:src="item.images.transparent" class="storeImage"/>        
        <h4 class="alignTitle">{{item.name}}</h4>
        <p class="alignTitle">{{item.cost}} V-Bucks</p>
    </div> 
    </div>    
  </div>  
</template>

<script>
import constants from '../../constants'
/* eslint-disable */
export default {
  name: 'News',
  data(){
    return{
      items:[],
    }
  },
  methods:{    
    getStore: function(){
      this.$http.get(constants.URL + 'store?key=' + constants.Key).then(response  => {        
          this.$data.items = response.body;       
          console.log(this.$data.items);
        });
    },    
  },
  created(){        
    this.getStore();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.alignTitle{
  text-align: center;
}
.storeImage{
    height: 400px;
    width: 250px;
}
</style>
