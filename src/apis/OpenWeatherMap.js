import axios from "axios";


export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
//   params: {
//     appid: "2e3920666e272c712a5a715e370aa055"
//   }
});
