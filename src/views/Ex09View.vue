<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <p v-if="age<20">당신은 미성년자입니다</p>
    <p v-else-if="age>=20 && age<80">당신은 성인입니다</p>
    <p v-else>당신은 노인입니다</p>
</template>

<script>
    export default{
        name: "Ex09View",
        components: {},
        data(){
            return{
                title: "vue 공부",
                subtitle: "if문",
                age: 80
            }
        },
        methods: {

        }
    }
</script>