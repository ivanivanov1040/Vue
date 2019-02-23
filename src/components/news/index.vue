<template>
  <div>
    <h1 class="alignTitle">Новини</h1>
    <div class="parrent" v-for="obj in br">
      <b-card v-bind:img-src="obj.image" img-alt="Card image" img-left class="col-12">
      <b-card-text>
        <h3>{{obj.title}}</h3>
        <p>{{obj.body}}</p>
      </b-card-text>
    </b-card>
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
      br:[
        {
          body:'',
          title:'',
          image:''
        },
        {
          body: '',
          title:'',
          image:''
        },
        {
          body: '',
          title:'',
          image:''
        }
      ]
    }
  },
  methods:{    
    getNews: function(){
      this.$http.get(constants.URL + 'news?key=' + constants.Key).then(response  => {        
          let news = response.body.br;
          for (let i = 0; i <= 2; i++)
                        {
                            this.$data.br[i].body = news[i].body;
                            this.$data.br[i].title = news[i].title;
                            this.$data.br[i].image = news[i].image;
                        }
        });
    },    
  },
  created(){
    this.getNews();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.image{
  width: 200px;
  height: 200px;
  margin-top: 5px;
  margin-right: 5px;
}

img{
  height: 100%;
  max-width: 100%;
  display: block;
  margin: auto;
}

.parrent{
  margin: 2px;
}

.content{
  float: right;
  text-align: left;
}

.card-img-left{
  height: 200px;
  width: 200px;
}

</style>
