<template>
    <div>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg:'hello'
            }
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>
