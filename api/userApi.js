import axios from "axios";

// Registrer User
export const registerUser = (userData, history) => {
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then((res) => history.push("/login")) // redirect to login on successful register
    .catch((err) => {
      console.error("Error registering");
    });
};
