<template>
    <div class="progress-bar-content align-items-center justify-content-between d-flex p-0 mb-3 col-md-12">
        <div class="content-progress col-md-9 p-0 m-0">
            <div class="progress p-0 m-0 h-100"  :class="currentPage === 1 ? 'col-md-6' : 'col-md-12'"></div>
        </div>
        <div class="col-md-auto"> {{ currentPage }} de {{ totalPages }} </div>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    computed: {
        currentPage: {
            get() {
                return this.$store.state.currentPage;
            }
        }
    },
    data() {
        return {            
            totalPages: 2
        }
    }
}
</script>

<style>

</style>