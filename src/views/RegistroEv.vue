<template>
 <v-layout
    justify-center align-content-center
    text-xs-center
    wrap
    >
      <v-flex xs12 md7>
        <v-img
        :src="require('../assets/Watson Asistant.jpg')"
        class="py-1"
        contain
        >
          </v-img>
        </v-flex>
      <v-flex xs12 md5>
        <v-form
        ref="form"
        @submit.prevent="reset"
          >

          <v-text-field
            prepend-inner-icon="fa-user"
            v-model="registrant.name"
            label="Nombre"
            class="text1"
            solo
            ></v-text-field>
          <v-text-field
            prepend-inner-icon="far fa-user"
            v-model="registrant.lastname"
            label="Apellido"
            class="text1"
            solo
            ></v-text-field>  

          <v-text-field
            prepend-inner-icon="fa-industry"
            v-model="registrant.company"
            label="Empresa"
            solo
            ></v-text-field>

          <v-text-field
            prepend-inner-icon="fa-user-tie"
            v-model="registrant.position"
            label="Cargo"
            solo
            ></v-text-field>

          <v-text-field
            prepend-inner-icon="fa-envelope"
            v-model="registrant.email"
            label="E-mail"
            solo
            ></v-text-field>

          <v-text-field
            prepend-inner-icon="fa-mobile-alt"
            v-model="registrant.phone"
            label="Telefono"
            solo
            ></v-text-field>

          <v-btn
            color="info"
            @click="add"
            >
            Registrar
            </v-btn>
        </v-form>
        </v-flex>
        <v-snackbar
          right
          v-model="snackbar"
          :color="colorValue"
          >
          {{ text }}
          <v-btn
          dark
          text
          @click="snackbar = false"
          >
          CERRAR
        </v-btn>
      </v-snackbar>
  </v-layout>
</template>

<script>

import axios from "axios";
class Registrant{
  constructor(name, lastname, email, phone, position, company){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.position =position;
    this.company =company;
    this.event="IoT Lau 05-11-2019";

  }
}
  export default {
    data () {
      return {
        alertS:false,
        alertE:false,
        registrant: new Registrant(),
        registrants:[],
        snackbar:false,
        succA: false,
      colorValue:'',
      text:''
      }
    },
    methods: {
       reset () {
        this.$refs.form.reset()
      },
      get(){
        
        
        axios.get('/api/registrant/')
        .then(response => {
        console.log(response);
        this.registrants=response.data;
        this.reset();
        })
        .catch(error => {
          this.succA=true;
        this.colorValue='error';
        this.text='Error';
        console.log(error);
        
        });
      },
      add(){
        
        console.log(this.registrant);
        
        axios.post('/api/registrants/',this.registrant)
        .then(response => {
          
          console.log(response);
          this.snackbar=true;
        this.colorValue='success';
        this.text='REGISTRO EXITOSO';
        this.reset();
        })
        .catch(error => {
          console.log(error);
        this.$route.replace('');
        this.snackbar=true;
        this.colorValue='error';
        this.text='REGISTRO FALLIDO';
        }); 

        this.registrant= new Registrant();
      }
    }
  }
</script>
