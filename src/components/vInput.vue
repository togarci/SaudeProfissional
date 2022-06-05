<template>
	<div class="content-input flex-column col-md-12 p-0 m-0">
		<div><label>{{ label }}</label><template v-if="required">*</template></div>
		<template v-if="type === 'select'">
			<select
				class="input"
				:class="error ? 'error-input' : 'default-input'"
				:value="value"
				:name="name"
				@input="updateValue"
			>
				<option value="Selecione" selected> {{ placeholder }} </option>
				<slot name="options"></slot>
			</select>
		</template>
		<template v-else-if="type === 'money'">
			<div class="d-flex col-md-12 p-0 m-0">
				<div class="input-money-icon col-md-1 pr-3 pl-3 m-0">R$</div>
				<input
					class="input"
					type="text"
					:class="error ? 'error-input' : 'default-input'"
					:maxlength="maxlength"
					:value="value"
					:placeholder="placeholder"
					:name="name"
					@input="updateValue"
				>
			</div>
		</template>
		<template v-else>
			<input
				class="input col-md-12 m-0"
				:class="error ? 'error-input' : 'default-input'"
				:maxlength="mask ? mask.length : maxlength"
				:value="value"
				:name="name"
				:type="type"
				:placeholder="placeholder"
				@input="updateValue"
			>
		</template>
		<span v-if="error" class="error-input">{{ `O campo ${name} não é valido` }}</span>
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
		},
		value: [String, Number],
		mask: {
			type: String
		},
		maxlength: {
			type: Number
		},
		error: String
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: this.updateValue
			};
		},
	},
	methods: {
		setMask(mascara, documento) {
			var i = documento.length;
			var masc = mascara[i];

			if ((mascara[0] !== '#') && (documento[0] !== mascara[0])) {
				documento = mascara[0].concat(documento);
			} else if (masc && masc != '#') {
				documento += masc.substring(0,1);
            }

			if ((mascara === '(##) # ####-####') && i === 3) documento += ' ';
			return documento;
        },
		updateValue(event) {
			let value = event.target.value;

			if (this.mask) {
				value = this.setMask(this.mask, value);
			}

			this.$emit('input', value);
		}
	},
	watch: {
		error() {
			console.log('teste');
		}
	}
}
</script>

<style>

</style>