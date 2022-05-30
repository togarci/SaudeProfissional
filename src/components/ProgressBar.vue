<template>
    <div class="progress-bar-content align-items-center justify-content-between d-flex p-0 mb-3 col-md-12">
        <div class="content-progress col-md-9 p-0 m-0">
            <div class="progress h-100"></div>
        </div>
        <div class="col-md-auto"> {{ currentPage }} de {{ totalPages }} </div>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    props: {
        currentPage: {
            type: String,
            default: '0'
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