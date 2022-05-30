<template>
	<div class="content-radio-input col-md-12 p-0 m-0">
		<div><label>{{ label }}</label><template v-if="required">*</template></div>
		<label for="checkbox-dinheiro" class="d-flex align-items-center col-md-12 p-3 m-0 mt-2 input-checkbox">
			<div class="col-2">
				<input id="checkbox-dinheiro" type="checkbox">
			</div>
			<b>Em dinheiro</b>
		</label>
		<label for="checkbox-pix" class="d-flex col-md-12 p-3 m-0 mt-3 input-checkbox">
			<div class="col-2">
				<input id="checkbox-pix" type="checkbox">
			</div>
			<b>Pix</b>
		</label>
		<label for="checkbox-cartao" class="flex-column col-md-12 p-3 m-0 mt-3 input-checkbox">
			<div class="d-flex">
				<div class="col-2">
					<input id="checkbox-cartao" type="checkbox">
				</div>
				<b>Cartão de crédito</b>
			</div>
			<div class="d-flex col-md-12 p-0 m-0 mt-3">
				<div class="col-2"></div>
				<p>Parcelamento em</p>
			</div>
			<div class="d-flex col-md-12 p-0 m-0">
				<div class="col-2"></div>
				<input type="radio" name="parcela" id="parc-1">
				<label class="p-1" for="parc-1">1x sem juros</label>
			</div>
			<div class="d-flex col-md-12 p-0 m-0">
				<div class="col-2"></div>
				<input type="radio" name="parcela" id="parc-2">
				<label class="p-1" for="parc-2">2x sem juros</label>
			</div>
			<div class="d-flex col-md-12 p-0 m-0">
				<div class="col-2"></div>
				<input type="radio" name="parcela" id="parc-3">
				<label class="p-1" for="parc-3">3x sem juros</label>
			</div>
		</label>
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
		}
	},
	data() {
		return {
			
		}
	}

}
</script>

<style>

</style>