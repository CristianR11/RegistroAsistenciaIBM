<template>
  <v-layout justify-center align-content-center text-xs-center wrap>
    <div>
      <v-data-table
        :headers="headers"
        :items="registrants"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-btn color="warning" @click="logout">
          Logout
        </v-btn>
      </div>
    </div>
  </v-layout>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import router from "../router";
class Registrant {
  constructor(name, lastname, email, phone, position, company) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.position = position;
    this.company = company;
    this.event = "IoT Lau 05-11-2019";
  }
}
export default {
  data() {
    return {
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Apellido", value: "lastname" },
        { text: "Empresa", value: "company" },
        { text: "Cargo", value: "position" },
        { text: "E-mail", value: "email" },
        { text: "Telefono", value: "phone" },
      ],
      alertS: false,
      alertE: false,
      registrant: new Registrant(),
      prueba: "Hola mundo",
      registrants: [],
      snackbar: false,
      succA: false,
      colorValue: "",
      text: "",
    };
  },
  created() {
    this.get();
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    get() {
      console.log("Ejecutando get");

      axios
        .get("/api/registrants/")
        .then((response) => {
          console.log(response);
          this.registrants = response.data;
          this.reset();
        })
        .catch((error) => {
          this.succA = true;
          this.colorValue = "error";
          this.text = "Error";
          console.log(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => router.push("Login"));
    },
  },
};
</script>
