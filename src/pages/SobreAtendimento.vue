<template>
    <div class="d-flex justify-content-center col-md-11 col-12 p-0 m-0">
        <card-cadastro
            :title="'Sobre o atendimento'"
            :subTitle="'Detalhes do atendimento'"
            :imgPath="srcImg"
            @backAction="backRouter"
            @nextAction="nextRouter"
        >
            <template v-slot:form>
                <div class="flex-column">
                    <div class="mt-4 ">
                        <v-input
                            :label="'Especialidade principal'"
                            :placeholder="'Selecione a especialidade'"
                            :type="'select'"
                            :required="true"
                            :name="labelInputName.especialidade"
                            :error="getError(errors, labelInputName.especialidade)"
                            v-model="especialidadeId"
                            v-validate="{ required: true }"
                        >
                            <template v-slot:options>
                                <option 
                                    v-for="especialidade in listEspecialidades" 
                                    :key="especialidade.id" 
                                    :value="especialidade.id"
                                >{{ especialidade.nome }}</option>
                            </template>
                        </v-input>
                    </div>
                    <div class="col-md-8 mt-4 p-0 m-0">
                        <v-input
                            :label="'Informe o preço da consulta'"
                            :placeholder="'Valor'"
                            :type="'money'"
                            :required="true"
                            :maxlength="15"
                            :name="labelInputName.precoConsulta"
                            :error="getError(errors, labelInputName.precoConsulta)"
                            v-model="vlConsulta"
                            v-validate="{ required: true }"
                        >

                        </v-input>
                    </div>
                    <div class="mt-4">
                        <radio-input
                            :label="'Formas de pagamento da consulta'"
                            :required="true"
                            :name="labelInputName.formaPagamento"
                            :error="getError(errors, labelInputName.formaPagamento)"
                            v-model="formaPagamento"
                            v-validate="{ required: true }"
                        ></radio-input>
                    </div>
                </div>
            </template>
        </card-cadastro>
    </div>
</template>

<script>
import imgDesk2 from '@/assets/imgs/desktop-pagina-2.png'
import { TesteFrontService } from '@/services/testeFrontService';
import generalMixin from '@/generalMixin';

const CardCadastro = () => import('@/components/CardCadastro.vue');
const vInput = () => import('@/components/vInput.vue');
const radioInput = () => import('@/components/radioInput.vue');
const serviceTesteFront = new TesteFrontService();

export default {
    components: {
        CardCadastro,
        vInput,
        radioInput
    },
    mixins: [
        generalMixin
    ],
    computed: {
        especialidadeId: {
            get() {
                return this.$store.state.dataAtendimento.especialidadeId;
            },
            set(value) {
                this.$store.commit('setDataAtendimento', { key: 'especialidadeId', value: value });
            }
        },
        especialidadeDescricao: {
            get() {
                return this.$store.state.dataAtendimento.especialidadeDescricao;
            },
            set(value) {
                this.$store.commit('setDataAtendimento', { key: 'especialidadeDescricao', value: value });
            }
        },
        vlConsulta: {
            get() {
                return this.$store.state.dataAtendimento.vlConsulta;
            },
            set(value) {
                this.$store.commit('setDataAtendimento', { key: 'vlConsulta', value: value });
            }
        },
        formaPagamento: {
            get() {
                return this.$store.state.dataAtendimento.formaPagamento;
            },
            set(value) {
                this.$store.commit('setDataAtendimento', { key: 'formaPagamento', value: value });
            }
        },
        listEspecialidades: {
            get() {
                return this.$store.state.listEspecialidades;
            },
            set(value) {
                this.$store.commit('setListEspecialidades', value);
            }
        }
    },
    data() {
        return {
            srcImg: imgDesk2,
        }
    },
    methods: {
        nextRouter() {
            this.$validator.validateAll().then(isValid => {
                if (isValid) {
                    this.$validator.reset();
                    this.$router.push({ name: 'Resumo' });
                }
            });
        },
        backRouter() {
            this.$validator.reset();
            this.$router.push({ name: 'Sobre o profissional' });
        },
        getEspecialidades() {
            serviceTesteFront.getEspecialidades().then(response => this.listEspecialidades = response);
        }
    },
    mounted() {
        this.$store.commit('setCurrentPage', 2);
        this.getEspecialidades();
    },
    watch: {
        especialidadeId(newValue) {
            if (newValue) {
                let especialidade = this.listEspecialidades.find(elem => elem.id == newValue);
                this.especialidadeDescricao = especialidade.nome;
            } else {
                this.especialidadeDescricao = null;
            }
        }
    },
}
</script>

<style>
</style>