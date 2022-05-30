<template>
	<div>
		<div v-if="showBackButton" class="mt-5 mb-4 back-button-action col-md-1" @click="backAction">
			<i class="fa-solid fa-angle-left"></i>
		</div>
		<div class="card-cadastro col-md-12 pl-5 pt-5 pb-5 pr-0 mb-5" :class="showBackButton ? 'mt-2' : 'mt-5'">
			<h2 class="mb-4 col-md-12 pl-4">{{ title }}</h2>
			<div class="d-flex col-md-12 pl-4 pr-0">
				<div class="form p-0 m-0 col-md-5">
					<h5>{{ subTitle }}</h5>
					<slot name="form"></slot>
				</div>
				<div class="d-flex align-items-center col-md-7 pb-3 pr-0">
					<img :src="imgPath">

				</div>
			</div>
			<div class="mt-4 pr-0 pl-4 col-md-12">
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