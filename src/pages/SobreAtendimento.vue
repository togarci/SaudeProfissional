<template>
    <div class="col-md-8 col-sm-12 p-sm-0 m-sm-0">
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
                        ></v-input>
                    </div>
                    <div class="col-md-8 mt-4 p-0 m-0">
                        <v-input
                            :label="'Informe o preço da consulta'"
                            :placeholder="'Valor'"
                            :type="'money'"
                            :required="true"
                        >

                        </v-input>
                    </div>
                    <div class="mt-4">
                        <radio-input
                            :label="'Formas de pagamento da consulta'"
                            :required="true"
                        ></radio-input>
                    </div>
                </div>
            </template>
        </card-cadastro>
    </div>
</template>

<script>
const CardCadastro = () => import('@/components/CardCadastro.vue');
const vInput = () => import('@/components/vInput.vue');
const radioInput = () => import('@/components/radioInput.vue');

import imgDesk2 from '@/assets/imgs/desktop-pagina-2.png'

export default {
    components: {
        CardCadastro,
        vInput,
        radioInput
    },
    data() {
        return {
            srcImg: imgDesk2
        }
    },
    methods: {
        nextRouter() {
            this.$router.push({ name: 'Resumo' });
        },
        backRouter() {
            this.$router.push({ name: 'Sobre o profissional' });
        }
    }
}
</script>

<style>
</style>