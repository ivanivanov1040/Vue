<template>
  <div>
    <b-container>
    <b-row>
      <b-col cols="12" class="alignTitle">
        <h3>Търси играч</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        <label>Изберете платформа:</label>
      </b-col>
      <b-col cols="8">
        <select name="platform" class="form-control" v-model="platform">
          <option value="pc">PC</option>
          <option value="xb1">XBox One</option>
          <option value="ps4">PlayStation 4</option>
        </select>
      </b-col>      
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        Изберете мод:
      </b-col>
      <b-col cols="8">
        <select name="mod" class="form-control" v-model="mod">
          <option value="solo">Solo</option>
          <option value="duo">Duo</option>
          <option value="squad">Squad</option>
        </select>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4" class="alignText">
        Играч
      </b-col>
      <b-col cols="6">
        <input v-model="username" class="form-control" placeholder="въведи име">  
      </b-col>
      <b-col cols="2" class="alignText">
        <button v-on:click="findPlayer" class="btn btn-dark">Намери играч</button> 
      </b-col>
    </b-row>
    </b-container>  
    <div class="mt-4">
    <h4 class="alignTitle">{{name}}</h4>
    <b-card v-bind:img-src="rankImg" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <b-row>
          <b-col cols="4">
            <label>Топ 10: </label>
            <span class="spanAlign">{{top10}}</span>
          </b-col>
          <b-col cols="4">
            <label>Изиграни мачове: </label>
            <span class="spanAlign">{{matches}}</span>
          </b-col>
          <b-col cols="4">
            <label>Убийства: </label>
            <span class="spanAlign">{{kills}}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <label>Изиграно време: </label>
            <span class="spanAlign">{{timePlayed}}</span>
          </b-col>
          <b-col cols="4">
            <label>Убийства на мач: </label>
            <span class="spanAlign">{{killsPerMatch}}</span>
          </b-col>
          <b-col cols="4">
            <label>Точки: </label>
            <span class="spanAlign">{{score}}</span>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card> 
  </div>  
  </div>
</template>

<script>
import constants from '../../constants'
/* eslint-disable */
export default {
  name: 'SearchPlayer',
  data(){
    return{
      rankImg: '',
      wins: '',
      top10: '',
      matches: '',
      kills: '',
      timePlayed: '',
      killsPerMatch: '',
      score: '',
      name: '',
    }
  },
  props:{
    mod: '',
    platform: '',
    username: '',    
  },
  methods:{
    findPlayer(){
      this.$http.get(constants.URL + 'profile/' + this.platform + '/' + this.username + '?key=' + constants.Key).then(response  => {
        let news = response.body.info;
        let groupe = response.body.group;
        this.rankImg = response.body.info.rank;   
        this.name = this.username;
        if(this.mod == 'solo')
        {      
          this.$data.wins = response.body.group.solo.wins;
          this.$data.top10 = response.body.group.solo.top10;
          this.$data.matches = response.body.group.solo.matches;
          this.$data.kills = response.body.group.solo.kills;
          this.$data.timePlayed = response.body.group.solo.timePlayed;
          this.$data.killsPerMatch = response.body.group.solo.killsPerMatch;
          this.$data.score = response.body.group.solo.score;           
        }
     
        });
    },    
    on() {
          console.log(this.$data.wins);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alignText{
  text-align: right;
}

b-col.span{
  text-align: right;
}
.alignTitle{
  text-align: center;
}
.spanAlign{
  float: right;
}
.card-img-left{
  height: 100px;
  width: 100px;
}
</style>
