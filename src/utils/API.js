import axios from "axios";

export default {
  search: function() {
    return axios.get('https://randomuser.me/api/?results=100&nat=us');
  }
};