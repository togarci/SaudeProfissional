import axios from 'axios';

export class TesteFrontService {
    constructor() {}
    
    getProfissionais(params) {
        let url = `${process.env.VUE_APP_URL_ROOT}/profissionais`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getCidades(params) {
        let url = `${process.env.VUE_APP_URL_ROOT}/cidades`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getEstados(params) {
        let url = `${process.env.VUE_APP_URL_ROOT}/estados`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }

    getEspecialidades(params) {
        let url = `${process.env.VUE_APP_URL_ROOT}/especialidades`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }
}