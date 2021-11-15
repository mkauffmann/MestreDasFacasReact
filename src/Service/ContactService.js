import axios from "axios";


export class ContactService{

    BaseUrl = "http://localhost:3306/mestre_das_facas";


    novamensagem(){

        return axios.post(this.BaseUrl + "novamensagem",).then(res => res.data);



    }



}