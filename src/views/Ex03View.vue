<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <p>{{ counter }}</p>
    <button v-on:click="plus"  type="button">더하기(+)</button>
    <button type="button" v-on:click="minus">빼기(-)</button>
    <br>
    <br>
    <button v-on:click="message" type="button">메세지 출력</button>
    <p>{{ me }}</p>

</template>

<script>
    export default{
        name: "Ex03View",
        components: {},
        data() {
            return{
                title: "view공부",
                subtitle: "클릭이벤트 + 메소드",
                counter: 0,
                me: ""
            };
        },
        methods: {
            plus: function plus(){
                console.log("클릭"),
                this.counter++
            },
            minus(){    //생략도 가능
                console.log("클릭2"),
                this.counter--
            },
            message(){  //클릭으로 메세지 출력
                this.me = "메세지 출력"
                
            }
        }

    }
</script>