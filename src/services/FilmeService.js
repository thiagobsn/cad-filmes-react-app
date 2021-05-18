import axios from 'axios';
import * as baseendpoints from './baseendpoints';

const BASE_URL = `${baseendpoints.CADFILMES_API}/filmes` 

class FilmeService {

    buscarFilmes(){
        return axios.get(BASE_URL)
            .then(response => response.data)
            .catch(error =>{
                throw error;
            });
    }

    excluirFilme(id){
        return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
                throw error;
            })
    }

}

export default new FilmeService();