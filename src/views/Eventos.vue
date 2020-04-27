<template>
   <v-layout justify-center align-center row wrap>
    <v-flex xs12 md8 xl8>
      <v-carousel
      :show-arrows="false"
      height="350">
      <v-carousel-item
        contain
        v-for="(item,i) in events"
        :key="i"
        :src="item.src"

      ></v-carousel-item>
    </v-carousel>
  </v-flex>

  <v-flex xs12 md12>
    
  </v-flex>
  <v-spacer/>
    <v-flex
    md3
    v-for="(item,i) in events"
    :key="i">
    <v-card>
        <v-img
          :src="item.src"
          
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div> {{ item.details }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn text color="blue" v-if="item.route != null"
          :to="item.route">REGISTRATE AQUI</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-sheet height="500">
        <v-calendar
          color="primary"
          :now=today
          :value=today
          :events="events"
        ></v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>

</template>
<script>
import image from "@/assets/IoT.jpg"
 
import image2 from "../assets/navidad.jpg"
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
          name: 'IoT en Cloud para empresas',
          details: 'Laura Ordoñez, Nicolas Davila y Jairo Reyes',
          route:"/registroev",
          start: '2019-12-05',
          src: image,
        },
        {src:image2, start: '2019-12-25',}
      ]
      }
    }
  }

</script>