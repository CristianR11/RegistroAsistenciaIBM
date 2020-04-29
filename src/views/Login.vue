<template>
  <v-layout justify-center align-content-center text-xs-center wrap>
    <v-flex xs12 md4>
      <h2>Login</h2>
      <v-form ref="form" @submit.prevent="access">
        <v-text-field
          prepend-inner-icon="fa-user"
          v-model="user"
          :rules="[rules.required, rules.emailMatch]"
          label="Usuario"
          class="text1"
          solo
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="fa-key"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          hint="Debe tener minimo 8 caracteres"
          solo
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-btn color="info" @click="access">
          Login
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "firebase";
import router from "../router";
export default {
  data() {
    return {
      user: "",
      password: "",
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      alert: true,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: (mail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail) || "El correo ingresado no es valido",
      },
    };
  },
  methods: {
    access() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(function(data) {
          alert('Acceso concedido');
          router.push("admin");
        })
        .catch(function(error) {
          // Handle Errors here.
          alert('Acceso denegado');
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
  },
};
</script>
