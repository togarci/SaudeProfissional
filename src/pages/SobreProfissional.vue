<template>
    <div class="col-md-8 col-sm-12 p-sm-0 m-sm-0">
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
                        ></v-input>
                    </div>

                    <div class="col-md-8 p-0 mt-4 m-0">
                        <v-input
                            :label="'CPF'"
                            :placeholder="'Digite um CPF'"
                            :required="true"
                        ></v-input>
                    </div>
                    <div class="col-md-8 p-0 mt-4 m-0">
                        <v-input
                            :label="'Número de celular'"
                            :placeholder="'(00) 0 0000-0000'"
                            :required="true"
                        ></v-input>
                    </div>
                    <div class="row mt-4 pt-0">
                        <div class="col-md-6">
                            <v-input
                                :label="'Estado'"
                                :type="'select'"
                                :placeholder="'Selecione'"
                                :required="true"
                            ></v-input>
                        </div>
                        <div class="col-md-6">
                            <v-input
                                :label="'Cidade'"
                                :placeholder="'Selecione'"
                                :type="'select'"
                                :required="true"
                            ></v-input>
                        </div>
                    </div>
                </div>
            </template>
        </card-cadastro>
    </div>
</template>

<script>
const CardCadastro = () => import('@/components/CardCadastro.vue');
const vInput = () => import('@/components/vInput.vue');

import imgDesk1 from '@/assets/imgs/desktop-pagina-1.png';

export default {
    components: {
        CardCadastro,
        vInput
    },
    data() {
        return {
            srcImg: imgDesk1
        }
    },
    methods: {
        changeRoute() {
            this.$router.push({ name: 'Sobre o atendimento' });
        }
    }
}
</script>

<style>

</style>