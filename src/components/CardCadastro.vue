<template>
	<div id="card-cadastro" class="col-md-12 p-0 m-0">
		<div v-if="showBackButton" class="mt-5 mb-md-4 mb-sm-0 back-button-action col-md-1" @click="backAction">
			<i class="fa-solid fa-angle-left"></i>
		</div>
		<div class="card-cadastro col-12 pt-5 pb-5 pl-md-5 pr-md-0 mb-md-5 mb-sm-0" 
			:class="showBackButton ? 'mt-2' : 'mt-5'">
			<h2 class="mb-4 col-md-12 pl-md-4 p-sm-0">{{ title }}</h2>
			<div class="d-flex col-md-12 pl-md-4 p-sm-0 m-sm-0 pr-md-0">
				<div class="form p-0 m-0 col-md-5 col-12">
					<h5>{{ subTitle }}</h5>
					<slot name="form"></slot>
				</div>
				<div class="d-flex img-content align-items-center col-md-7 p-0 pb-3 pr-0">
					<img :src="imgPath">

				</div>
			</div>
			<div class="mt-4 pr-md-0 pl-md-4 p-sm-0 col-md-12">
				<div v-if="btnCadastro" class="col-md-5 p-0 m-0">
					<button class="btn-cadastro col-md-12 p-1 m-0">CADASTRAR PROFISSIONAL</button>
					<button class="btn-second col-md-12 p-1 mt-2 m-0">Editar cadastro</button>
				</div>
				<div v-else class="col-md-5 p-0 m-0">
					<progress-bar/>
					<button @click="nextAction" class="btn-next col-md-12 p-1 m-0">PRÓXIMO</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const progressBar = () => import('@/components/ProgressBar.vue');

export default {
	name: 'card-cadastro',
	props: {
		title: {
			type: String
		},
		subTitle: {
			type: String
		},
		imgPath: {
			type: String
		},
		showBackButton: {
			type: Boolean,
			default: true	
		},
		btnCadastro: {
			type: Boolean,
			default: false
		}
	},
	components: {
		progressBar
	},
	methods: {
		nextAction() {
			this.$emit('nextAction');
		},
		backAction() {
			this.$emit('backAction');
		}
	}
}
</script>

<style>

</style>