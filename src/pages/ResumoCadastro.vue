<template>
    <div class="content-resumo col-md-8 col-sm-12 p-sm-0 m-sm-0">
        <card-cadastro
            :title="'Revisão do cadastro'"
            :showBackButton="true"
            :imgPath="srcImg"
            :btnCadastro="true"
            @backAction="backRoute"
        >
            <template v-slot:form>
                <div class="flex-column">
                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Nome Completo</b>
                        <p>{{ dataProfissional.nome }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>CPF</b>
                        <p>{{ dataProfissional.cpf }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Número de celular ou telefone</b>
                        <p>{{ dataProfissional.cel }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Estado/Cidade</b>
                        <p>{{ `${dataProfissional.estadoDescricao} - ${dataProfissional.cidadeDescricao}` }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Especialidade principal</b>
                        <p>{{ dataAtendimento.especialidadeDescricao }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Preço da consulta</b>
                        <p>{{ dataAtendimento.vlConsulta }}</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Formas de pagamento da consulta</b>
                        <p v-if="['Dinheiro', 'Pix'].includes(dataAtendimento.formaPagamento)">{{ dataAtendimento.formaPagamento }}</p>
                        <p v-else >{{ `Cartão de crédito - Parcelamento em ${dataAtendimento.formaPagamento}` }}</p>
                    </div>
                </div>
            </template>
        </card-cadastro>
    </div>
</template>

<script>
import CardCadastro from '@/components/CardCadastro.vue';

import imgDesk3 from '@/assets/imgs/desktop-pagina-3.png';

export default {
    components: {
        CardCadastro
    },
    computed: {
        dataProfissional: {
            get() {
                return this.$store.state.dataProfissional;
            }
        },
        dataAtendimento: {
            get() {
                return this.$store.state.dataAtendimento;
            }
        }
    },
    data() {
        return {
            srcImg: imgDesk3
        }
    },
    methods: {
        backRoute() {
            this.$router.push({ name: 'Sobre o atendimento' });
        }
    }
}
</script>

<style>

</style>