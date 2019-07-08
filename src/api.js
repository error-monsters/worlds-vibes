import axios from 'axios';


// const baseURL = "https://restcountries.eu/rest/v2/name/saudi%20arabia?fullText=true";

export const searchContersName = (name) => {
    return axios({
      method: 'get',
      url: `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
    })
  }





  export default searchContersName





  




