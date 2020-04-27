<template>
<v-layout
    justify-center align-content-center
    text-xs-center
    wrap
    >
    <v-flex xs12>
      <v-card color="purple darken-4" dark>
        <v-card-title>
          <h5>Encuesta de satisfacción</h5>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12>
      <v-card-text>1=Pésimo/ 2=Malo/ 3=Regular/ 4=Bueno/ 5=Excelente</v-card-text>
    </v-flex>
    
      <v-flex xs12 md6>
          <v-text-field
            prepend-inner-icon="fa-user"
            v-model="survey.name"
            label="Nombre"
            class="text1"
            solo
            ></v-text-field>
        
        </v-flex>

        
      <v-flex xs12 md6>
         <v-text-field
            prepend-inner-icon="far fa-user"
            v-model="survey.lastname"
            label="Apellido"
            class="text1"
            solo
            ></v-text-field>  
      </v-flex>
      
      <v-flex xs12>
          <v-text-field
            prepend-inner-icon="fa-envelope"
            v-model="survey.email"
            label="E-mail"
            solo
            ></v-text-field>
             
          
      </v-flex>
      
    <v-flex xs12 md5 xl4>
      <v-card color="blue" dark :height="alto">
        <v-card-title>
          <h5>Acerca del contenido</h5>
        </v-card-title>
        <v-card-text>
          <h5>Los contenidos han cubierto sus espectativas:</h5>
          <v-rating v-model="survey.p1" background-color="blue lighten-5" color="blue lighten-4" small></v-rating>
          
          <h5>Los contenidos se han tratado con la profundidad que esperaba:</h5>
          <v-rating v-model="survey.p2" background-color="blue lighten-5" color="blue lighten-4" small></v-rating>

          <h5>Los temas ha sido útiles para su organización:</h5>
          <v-rating v-model="survey.p3" background-color="blue lighten-5" color="blue lighten-4" small></v-rating>
          <h5>En conclusión que puntuación le daría al contenido del evento:</h5>
          <v-rating v-model="survey.p4" background-color="blue lighten-5" color="blue lighten-4" small></v-rating>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 md5 xl4>
      <v-card color="indigo" dark indigo :height="alto">
        <v-card-title>
          <h5>Acerca de la metodología</h5>
        </v-card-title>

        <v-card-text>
          <h5>La duración del evento ha sido la adecuada:</h5>
          <v-rating v-model="survey.p5" background-color="indigo lighten-5" color="indigo lighten-4" small></v-rating>

          <h5>La metodología se ha adecuado a los contenidos:</h5>
          <v-rating v-model="survey.p6" background-color="indigo lighten-5" color="indigo lighten-4" small></v-rating>

          <h5>Las condiciones ambientales (salón, recursos utilizados) han sido adecuados:</h5>
          <v-rating v-model="survey.p7" background-color="indigo lighten-5" color="indigo lighten-4" small></v-rating>

          <h5>En conclusión que puntuación le daría a la metodología:</h5>
          <v-rating v-model="survey.p8" background-color="indigo lighten-5" color="indigo lighten-4" small></v-rating>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 md5 xl4>
      <v-card color="purple" dark purple :height="alto">
        <v-card-title>
          <h5>Acerca de los aspectos generales</h5>
        </v-card-title>
        <v-card-text>
          <h5>Los expositores dominan la materia:</h5>
          <v-rating v-model="survey.p9" background-color="purple lighten-5" color="purple lighten-4" small></v-rating>

          <h5>Los contenidos se han expuesto con la debida claridad:</h5>
          <v-rating
            v-model="survey.p10"
            background-color="purple lighten-5"
            color="purple lighten-4"
            small
          ></v-rating>

          <h5>La forma en que los expositores abordan los temas despiertan el interés:</h5>
          <v-rating
            v-model="survey.p11"
            background-color="purple lighten-5"
            color="purple lighten-4"
            small
          ></v-rating>

          <h5>En conclusión que puntuación le daría a las exposiciones:</h5>
          <v-rating
            v-model="survey.p12"
            background-color="purple lighten-5"
            color="purple lighten-4"
            small
          ></v-rating>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md5 xl4>
      <v-card color="deep-purple" dark purple :height="alto">
        <v-card-title>
          <h5>¿Tiene alguna estrategia de cómo aprovechar los datos?</h5>
        </v-card-title>
        <v-card-text>
          <v-radio-group v-model="survey.p13" column>
            <v-radio
              label="Recien hemos empezado a diseñarla"
              value="Recien hemos empezado a diseñarla"
            ></v-radio>
            <v-radio
              label="Estamos implementando iniciativas y proyectos aislados"
              value="Estamos implementando iniciativas y proyectos aislados"
            ></v-radio>
            <v-radio
              label="Tenemos una estrategia integral bien orquestada"
              value="Tenemos una estrategia integral bien orquestada"
            ></v-radio>
            <v-radio label="Aun no hemos empezado" value="Aun no hemos empezado"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 md5 xl4>
      <v-card color="blue" dark :height="alto">
        <v-card-title>
          <h5>¿Cúal es su rol en el proceso de toma de decisiones de su empresa?</h5>
        </v-card-title>
        <v-card-text>
          <v-radio-group v-model="survey.p14" column>
            <v-radio label="Tomo la decisión" value="Tomo la decisión"></v-radio>
            <v-radio label="Evaluo el proyecto/propuesta" value="Evaluo el proyecto/propuesta"></v-radio>
            <v-radio
              label="Estoy involucrado con el (los) proyecto(s), pero no tomo la desisión"
              value="Estoy involucrado con el (los) proyecto(s), pero no tomo la desisión"
            ></v-radio>
            <v-radio label="Ninguna de las anteriores" value="Ninguna de las anteriores"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md5 xl4>
      <v-card color="indigo" dark indigo :height="alto">
        <v-card-title>
          <h5>¿En qué tecnologías piensa invertir en los próximos 3 años?</h5>
        </v-card-title>
        <v-card-text>
          <v-textarea  v-model="survey.p15" label=" Por favor describa brevemente"></v-textarea>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 md5 xl4>
      <v-card color="deep-purple" dark :height="alto">
        <v-card-title>
          <h5>¿Existe algún tema de IBM que le guste tratar para un próximo Meetup?</h5>
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="survey.p16" label=" Por favor describa brevemente"></v-textarea>
        </v-card-text>
      </v-card>
    </v-flex>
    
    
    <v-flex xs12>
       <v-btn
            block
            color="info"
             @click="add"
            >
            Enviar
            </v-btn>
      </v-flex>
        <v-flex xs12>
      <v-card>
        <v-card-title>
          <h5>Muchas gracias por su atención y colaboración</h5>
        </v-card-title>
      </v-card>
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

class Survey{
  constructor(name, lastname, email, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,){
    this.name = name;
    this.lastname = lastname;
    this.email = email; 
    this.event="IOT 2019-12-05";
    this.p1=p1;
    this.p2=p2;
    this.p3=p3;
    this.p4=p4;
    this.p5=p5;
    this.p6=p6;
    this.p7=p7;
    this.p8=p8;
    this.p9=p9;
    this.p10=p10;
    this.p11=p11;
    this.p12=p12;
    this.p13=p13;
    this.p14=p14;
    this.p15=p15;
    this.p16=p16;
  }
}
  export default {
    data () {
      return {
        alertS:false,
        alertE:false,
        survey: new Survey(),
        snackbar:false,
        succA: false,
      colorValue:'',
      text:'',
      switchMe: false,
      alto:300,
      }
    },
    methods: {
       
      add(){
        
        
        axios.post('/api/surveys/',this.survey)
        .then(response => {
          
          console.log(response);
          this.snackbar=true;
        this.colorValue='success';
        this.text='ENCUESTA EXITOSA';
        })
        .catch(error => {
          console.log(error);
        this.snackbar=true;
        this.colorValue='error';
        this.text='ENCUESTA FALLIDA';
        }); 

        this.survey= new Survey();
      }
    }
  }
</script>
