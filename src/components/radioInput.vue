<template>
	<div class="content-radio-input col-md-12 p-0 m-0">
		<div><label>{{ label }}</label><template v-if="required">*</template></div>
		<label for="checkbox-dinheiro" class="d-flex align-items-center col-md-12 p-3 m-0 mt-2 input-checkbox">
			<div class="col-2">
				<input :name="name" id="checkbox-dinheiro" type="checkbox" v-model="formaPagamento.dinheiro">
			</div>
			<b>Em dinheiro</b>
		</label>
		<label for="checkbox-pix" class="d-flex col-md-12 p-3 m-0 mt-3 input-checkbox">
			<div class="col-2">
				<input :name="name" id="checkbox-pix" type="checkbox" v-model="formaPagamento.pix">
			</div>
			<b>Pix</b>
		</label>
		<label for="checkbox-cartao" class="flex-column col-md-12 p-3 m-0 mt-3 input-checkbox">
			<div class="d-flex">
				<div class="col-2">
					<input :name="name" id="checkbox-cartao" type="checkbox" v-model="formaPagamento.cartao">
				</div>
				<b>Cartão de crédito</b>
			</div>
			<div v-if="formaPagamento.cartao">
				<div class="d-flex col-md-12 p-0 m-0 mt-3">
					<div class="col-2"></div>
					<p>Parcelamento em</p>
				</div>
				<div class="d-flex align-items-center col-md-12 p-0 m-0">
					<div class="col-2"></div>
					<input type="radio" name="parcela" id="parc-1" value="1x sem juros" v-model="parcela">
					<label class="p-1 m-0" for="parc-1">1x sem juros</label>
				</div>
				<div class="d-flex align-items-center col-md-12 p-0 m-0">
					<div class="col-2"></div>
					<input type="radio" name="parcela" id="parc-2" value="2x sem juros" v-model="parcela">
					<label class="p-1 m-0" for="parc-2">2x sem juros</label>
				</div>
				<div class="d-flex align-items-center col-md-12 p-0 m-0">
					<div class="col-2"></div>
					<input type="radio" name="parcela" id="parc-3" value="3x sem juros" v-model="parcela">
					<label class="p-1 m-0" for="parc-3">3x sem juros</label>
				</div>
			</div>
		</label>
		<span v-if="error" class="error-input">{{ `O campo ${name} não é valido` }}</span>
	</div>
</template>

<script>
export default {
	name: 'radio-input',
	props: {
		label: {
			type: String
		},
		required: {
			type: Boolean,
			default: false
		},
		value: [String, Number],
		name: [String],
		error: [String]
	},
	data() {
		return {
			formaPagamento: {
				dinheiro: false,
				pix: false,
				cartao: false
			},
			parcela: null
		}
	},
	mounted() {
		if (this.value === 'Dinheiro') { this.formaPagamento.dinheiro = true }
		else if (this.value === 'Pix') { this.formaPagamento.pix = true }
		else if (this.value) { 
			this.formaPagamento.cartao = true;
			this.parcela = this.value
		}
	},
	watch: {
		'formaPagamento.dinheiro': function() {
			this.formaPagamento.pix = false;
			this.formaPagamento.cartao = false;
			this.parcela = null;
			this.$emit('input', 'Dinheiro');
		},
		'formaPagamento.pix': function() {
			this.formaPagamento.dinheiro = false;
			this.formaPagamento.cartao = false;
			this.parcela = null;
			this.$emit('input', 'Pix');
		},
		'formaPagamento.cartao': function() {
			this.formaPagamento.pix = false;
			this.formaPagamento.dinheiro = false;
		},
		parcela(newValue) {
			this.$emit('input', newValue);
		}
	}

}
</script>

<style>

</style>