<template>
    <h1>{{title}}</h1>
    <h2>{{ subtitle }}</h2>

    <form v-on:submit.prevent="submit" action="" method="get">  <!--폼에서 전송은 submit 버튼이 아니라 form에서 v-on:submit으로 제어한다-->
        <label for="name">이름</label>
        <input id="name" type="text" name="name" v-model="personVo.setName"> <!--v-model은 양방향의 속성이 있다 v-bind처럼 받아오기만이 아니다-->
        <br>
        <label for="hp">전화번호</label>
        <input id="hp" type="text" name="hp" v-model="personVo.setHp">
        <br>
        <textarea v-model="personVo.setText"></textarea>
        <br>
        <button v-on:click="write" type="button">값쓰기</button>
        <button type="submit">보내기</button>    
    </form>
</template>

<script>
    export default{
        name: "Ex05View",
        Comments: {},
        data(){
            return{
                title: "vue공부",
                subtitle: "폼-text, textarea 양방향 바인딩",
                personVo: {
                    setName: "",
                    setHp: "",
                    setText: ""
                }
            }
        },
        methods:{
            write(){
                
                this.personVo.setName = "q",
                this.personVo.setHp = "w",
                this.personVo.setText = "e"
                
            },
            submit(){
                console.log(this.personVo);
                console.log(this.personVo.setName);  //v-model로 화면에서 바꾼 값도 받아올수 있다
                console.log(this.personVo.setHp);
                console.log(this.personVo.setText)
                
            }
        }
    }
</script>