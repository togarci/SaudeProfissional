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
                        <p>Thyago Odorico Garcia</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>CPF</b>
                        <p>455.435.312-20</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Número de celular ou telefone</b>
                        <p>(12) 99749-4938</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Estado/Cidade</b>
                        <p>São Paulo - Jacareí</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Especialidade principal</b>
                        <p>Neorologista</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Preço da consulta</b>
                        <p>R$ 200,00</p>
                    </div>

                    <div class="col-md-12 p-0 mt-4 m-0">
                        <b>Formas de pagamento da consulta</b>
                        <p>Dinheiro</p>
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