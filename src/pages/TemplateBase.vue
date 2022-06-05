<template>
	<div class="container-base d-flex justify-content-center align-items-center">
		<zoom-center-transition :duration="200" mode="out-in">
			<router-view/>
		</zoom-center-transition>
	</div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions';
export default {
	components: {
		ZoomCenterTransition
	}
}
</script>

<style>
</style>