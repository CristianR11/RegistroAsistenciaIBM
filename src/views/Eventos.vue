<template>
  <v-layout justify-center align-center row wrap>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-carousel
          :show-arrows="false"
          height="350"
          cycle>
          <v-carousel-item
            contain
            v-for="(item,i) in events"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://www.themsphub.com/app/uploads/2017/11/IBM-Cloud-Logo.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>IBM Cloud Team</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn text color="blue" to="/registroev">REGISTRATE AQUI</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="6">
          <v-sheet height="500">
            <v-calendar
              color="primary"
              :now=today
              :value=today
              :events="events"
            ></v-calendar>
          </v-sheet>
        </v-col>
    </v-row>
  </v-container>
  </v-layout>
</template>

<script>
import image from "@/assets/webinardata.png"


  export default {
    components: {
      
    },
    data(){
      return{
        
        valor:null,
        date:new Date(),
        today:'2020-07-01',
       
        events: [
        {
          name: 'Aplicación modelos machine learning - IBM Cloud',
          details: 'Webinar 07/2020 - IBM Cloud',
          route:"/registroev",
          start: '2020-07-01',
          src: image,
        },
      ]
      }
    }
  }

</script>