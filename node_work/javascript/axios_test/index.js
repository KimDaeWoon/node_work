import axios from "axios";

//let axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data));
