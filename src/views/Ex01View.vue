<template>
    <p>examview</p>
    <p>{{ title }}</p>
    <p>{{content}}</p>
</template>


<script>
export default{
    name:"Ex01View",
    components: {},
    data() {
        return {
            title: "바인딩된 제목",
            content: "vue 시작"
        };
    
    },
    methods: {},
    };
</script>
<style>

</style>