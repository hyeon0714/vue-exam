<template>
    <h1>title</h1>
    <h2>subtitle</h2>

    <div class="box" v-bind:class="{'red': isRed, 'blue': isblue, 'f-bold': isbold, 'f-big': isbig}">{{ boxText }}</div>
    <button v-on:click="Red" type="button">이벤트</button>
    <br>
    <button v-on:click="blue" type="button">이벤트2</button>
    <button v-on:click="bold" type="button">볼드 on/off</button>
    <button v-on:click="big" type="button">사이즈 up/down</button>

    <br><br><br>

    <p style="color: #ff0000">인라인 스타일로 태그에 스타일 직접추가</p>
    <br>
    <p v-bind:style=color>인라인 스타일로 태그에 스타일 직접추가</p>
    <button type="button" v-on:click="change">인라인 스타일 변경</button>
</template>

<script>
    export default{
        name: "EX04View",
        components: {},
        data(){
            return{
                title: "vue공부",
                subtitle: "class 속성공부",
                boxText: "vue공부 재밋습니다",
                isRed: false,
                isblue: false,
                isbold: false,
                isbig: false,
                color: ""
            }
        },
        methods: {
            Red(){
                this.isblue = false
                this.isRed = true
            },
            blue(){
                
                this.isblue = true
            },
            bold(){
                if(this.isbold == true){
                    this.isbold = false
                }else{
                    this.isbold = true
                }
            },
            big(){
                this.isbig = !this.isbig;   //if 문이 아닌 문법
                /*
                if(this.isbig == true){
                    this.isbig = false
                }else{
                    this.isbig = true
                }
                */
            },
            change(){
                
                this.color = "color: #0000ff"
            }

        }
        
    }
</script>

<style>
    .box{
        width: 150px;
        border: 1px solid #000000;
    }

    .red{
        background-color: red;
    }
    .blue{
        background-color: blue;
    }
    .f-bold{
        font-weight: bold;
    }
    .f-big{
        font-size: 20px;
    }

</style>