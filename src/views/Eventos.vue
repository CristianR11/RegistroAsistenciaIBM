<template>
   <v-layout justify-center align-center row wrap>

  <v-flex xs12 md12>
  </v-flex>
  <v-spacer/>
    <v-flex
    md6
    v-for="(item,i) in events"
    :key="i">
    <v-card>
        <v-img
          :src="item.src"
        ></v-img>

        <v-card-title primary-title>
            <div class="title"> {{ item.details }} </div>
        </v-card-title>

        <v-card-actions>
          <v-btn text color="blue" v-if="item.route != null"
          :to="item.route">REGISTRATE AQUI</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
import image from "@/assets/Watson Asistant.jpg"
 

  export default {
    components: {
      
    },
    data(){
      return{
        
        valor:null,
        date:new Date(),
        today:'2019-12-01',
       
        events: [
        {
          name: 'Watson Asitant',
          details: 'Webinar 04/2020 - IBM Cloud',
          route:"/registroev",
          start: '2020-04-28',
          src: image,
        },
      ]
      }
    }
  }

</script>