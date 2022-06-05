import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        currentPage: 1,
		dataProfissional: {
			nome: null,
			cpf: null,
			cel: null,
			estadoId: null,
			estadoDescricao: null,
			cidadeId: null,
			cidadeDescricao: null
		},
		dataAtendimento: {
			especialidadeId: null,
			especialidadeDescricao: null,
			vlConsulta: null,
			formaPagamento: null
		},
		listEspecialidades: [],
		listEstados: [],
		listCidades: []
	},
	getters: {
	},
	mutations: {
		setCurrentPage(state, payload) {
            state.currentPage = payload;
        },
		setDataProfissional(state, payload) {
			state.dataProfissional[payload.key] = payload.value;
		},
		setDataAtendimento(state, payload) {
			state.dataAtendimento[payload.key] = payload.value;
		},
		setListEspecialidades(state, payload) {
			state.listEspecialidades = payload;
		},
		setListEstados(state, payload) {
			state.listEstados = payload;
		},
		setListCidades(state, payload) {
			state.listCidades = payload;
		}
	},
	actions: {
	},
	modules: {
	}
})