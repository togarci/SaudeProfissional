<template>
	<div class="content-input flex-column col-md-12 p-0 m-0">
		<div><label>{{ label }}</label><template v-if="required">*</template></div>
		<template v-if="type === 'select'">
			<select :name="name" class="input">
				<option value="Selecione" selected disabled> {{ placeholder }} </option>
				<slot name="options"></slot>
			</select>
		</template>
		<template v-else-if="type === 'money'">
			<div class="d-flex col-md-12 p-0 m-0">
				<div class="input-money-icon col-md-1 pr-3 pl-3 m-0">R$</div>
				<input type="text" :placeholder="placeholder" :name="name" class="input">
			</div>
		</template>
		<template v-else>
			<input :name="name" :type="type" class="input col-md-12 m-0" :placeholder="placeholder">
		</template>
	</div>
</template>

<script>
export default {
	name: 'v-input',
	props: {
		placeholder: {
			type: String
		},
		label: {
			type: String
		},
		required: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		name: {
			type: String
		}
	},
	methods: {

	},
}
</script>

<style>

</style>