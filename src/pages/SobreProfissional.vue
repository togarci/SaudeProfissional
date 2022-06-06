<template>
    <div class="d-flex justify-content-center col-md-11 col-12 p-0 m-0">
        <card-cadastro
            :title="'Sobre o profissional'"
            :subTitle="'Dados do profissional'"
            :imgPath="srcImg"
            :showBackButton="false"
            @nextAction="changeRoute"
        >
            <template v-slot:form>
                <div class="flex-column">
                    <div class="mt-4">
                        <v-input
                            :label="'Nome Completo'"
                            :placeholder="'Digite o nome completo'"
                            :required="true"
                            :maxlength="50"
                            :name="labelInputName.nome"
                            :error="getError(errors, labelInputName.nome)"
                            v-model="nome"
                            v-validate="{ required: true }"
                        ></v-input>
                    </div>

                    <div class="col-8 p-0 mt-4 m-0">
                        <v-input
                            :label="'CPF'"
                            :placeholder="'Digite um CPF'"
                            :required="true"
                            :mask="'###.###.###-##'"
                            :name="labelInputName.cpf"
                            :error="getError(errors, labelInputName.cpf)"
                            v-model="cpf"
                            v-validate="{ required: true }"
                        ></v-input>
                    </div>
                    <div class="col-8 p-0 mt-4 m-0">
                        <v-input
                            :label="'Número de celular'"
                            :placeholder="'(00) 0 0000-0000'"
                            :required="true"
                            :mask="'(##) # ####-####'"
                            :name="labelInputName.numContato"
                            :error="getError(errors, labelInputName.numContato)"
                            v-model="cel"
                            v-validate="{ required: true }"
                        ></v-input>
                    </div>
                    <div class="row pt-0">
                        <div class="col-6 mt-4">
                            <v-input
                                :label="'Estado'"
                                :type="'select'"
                                :placeholder="'Selecione'"
                                :required="true"
                                :name="labelInputName.estado"
                                :error="getError(errors, labelInputName.estado)"
                                v-model="estadoId"
                                v-validate="{ required: true }"
                            >
                                <template v-slot:options>
                                    <option 
                                        v-for="estado in listEstados" 
                                        :value="estado.id" 
                                        :key="estado.id"
                                    >{{ estado.nome }}</option>
                                </template>
                            </v-input>
                        </div>
                        <div class="col-6 mt-4">
                            <v-input
                                :label="'Cidade'"
                                :placeholder="'Selecione'"
                                :type="'select'"
                                :required="true"
                                :name="labelInputName.cidade"
                                :error="getError(errors, labelInputName.cidade)"
                                v-model="cidadeId"
                                v-validate="{ required: true }"
                            >
                                <template v-slot:options>
                                    <option 
                                        v-for="cidade in listCidades"
                                        :key="cidade.id"
                                        :value="cidade.id"
                                    >{{ cidade.nome }}</option>
                                </template>
                            </v-input>
                        </div>
                    </div>
                </div>
            </template>
        </card-cadastro>
    </div>
</template>

<script>
import imgDesk1 from '@/assets/imgs/desktop-pagina-1.png';
import { TesteFrontService } from '@/services/testeFrontService';
import generalMixin from '@/generalMixin';

const CardCadastro = () => import('@/components/CardCadastro.vue');
const vInput = () => import('@/components/vInput.vue');
const serviceTesteFront = new TesteFrontService();

export default {
    components: {
        CardCadastro,
        vInput
    },
    mixins: [
        generalMixin
    ],
    computed: {
        nome: {
            get() {
                return this.$store.state.dataProfissional.nome;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'nome', value: value });
            }
        },
        cpf: {
            get() {
                return this.$store.state.dataProfissional.cpf;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'cpf', value: value });
            }
        },
        cel: {
            get() {
                return this.$store.state.dataProfissional.cel;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'cel', value: value });
            }
        },
        estadoId: {
            get() {
                return this.$store.state.dataProfissional.estadoId;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'estadoId', value: value });
            }
        },
        estadoDescricao: {
            get() {
                return this.$store.state.dataProfissional.estadoDescricao;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'estadoDescricao', value: value });
            }
        },
        cidadeId: {
            get() {
                return this.$store.state.dataProfissional.cidadeId;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'cidadeId', value: value });
            }
        },
        cidadeDescricao: {
            get() {
                return this.$store.state.dataProfissional.cidadeDescricao;
            },
            set(value) {
                this.$store.commit('setDataProfissional', { key: 'cidadeDescricao', value: value });
            }
        },
        listCidades: {
            get() {
                return this.$store.state.listCidades;
            },
            set(value) {
                this.$store.commit('setListCidades', value);
            }
        },
        listEstados: {
            get() {
                return this.$store.state.listEstados;
            },
            set(value) {
                this.$store.commit('setListEstados', value);
            }
        }
    },
    data() {
        return {
            srcImg: imgDesk1,            
        }
    },
    methods: {
        changeRoute() {
            this.$validator.validateAll().then(isValid => {
				if (isValid) {
                    this.$validator.reset();
                    this.$router.push({ name: 'Sobre o atendimento' });
                }
            });
        },
        getEstados(params) {
            serviceTesteFront.getEstados(params).then(resp => this.listEstados = resp);
        },
        getCidades(params) {
            serviceTesteFront.getCidades(params).then(resp => this.listCidades = resp);
        }
    },
    mounted() {
        this.getEstados();
        this.getCidades();
        this.$store.commit('setCurrentPage', 1);
    },
    watch: {
        estadoId(newValue) {
            if (newValue) {
                let params = { 'estadoId': newValue };
                this.getCidades(params);
                
                let estado = this.listEstados.find(elem => elem.id == newValue);
                this.estadoDescricao = estado.nome;
            } else {
                this.cidadeId = null;
                this.cidadeDescricao = null;
                this.estadoDescricao = null;
                this.getCidades();
            }
        },
        cidadeId(newValue) {
            if (newValue) {
                let cidade = this.listCidades.find(elem => elem.id == newValue);
                this.cidadeDescricao = cidade.nome;
            } else {
                this.cidadeDescricao = null;
            }
        }
    }
}
</script>

<style>

</style>