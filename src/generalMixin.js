export default {
    data() {
        return {
            labelInputName: {
                nome: 'Nome Completo',
                cpf: 'CPF',
                numContato: 'Número de celular',
                estado: 'Estado',
                cidade: 'Cidade',
                especialidade: 'Especialidade principal',
                precoConsulta: 'Preço da consulta',
                formaPagamento: 'Forma de pagamento'
            }
        }
    },
    methods: {
        getError(error, fieldName) {
            return error.first(fieldName);
        }
    }
}