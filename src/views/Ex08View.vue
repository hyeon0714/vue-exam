<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <table border="1">
        <thead>
            <tr>
                <th>순번</th>
                <th>번호</th>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="i" v-for="(personVo, i) in pList"><!--personVo에는 pList의 값이 담기고 i는 순번을 확인하기 위한 변수-->
                <td>{{ i+1 }}</td>  <!--배열에서 순번을 올리는법(변수 i를 추가로 준다)-->
                <td>{{ personVo.no }}</td>
                <td>{{ personVo.name }}</td>
                <td>{{ personVo.hp }}</td>
                <td>{{ personVo.company }}</td>
            </tr>
        </tbody>
    </table>
    <!--
    <button type="button" v-on:click="getList">데이터 불러오기</button> 버튼을 눌럿을때 리스트 출력
    -->

    <span v-for="(ra) in radioAge" v-bind:key="ra">
        <label>{{ ra.text }}</label>
        <input type="radio" name="age" v-bind:value="ra.code" v-model="inAge">
    </span>

    <p>나이는 {{ inAge }}입니다</p>
</template>

<script>
    export default{
        name: "Ex08View",
        components: {},
        data(){
            return{
                title: "vue공부",
                subtitle: "배열",
                pList: [],
                inAge: 30,
                radioAge: [
                    {text: "10대", code:10},
                    {text: "20대", code:20},
                    {text: "30대", code:30},
                    {text: "기타", code:"etc"},
                ]
            }
        },
        methods:{
            getList(){

                let personList = [ //eslint-disable-line no-unused-vars
                    {no: 1, name:"정우성", hp: "010-1111-1111", company: "02-111-1111"},
                    {no: 22, name:"정우성", hp: "010-2222-2222", company: "02-222-2222"},
                    {no: 17, name:"정우성", hp: "010-3333-3333", company: "02-333-3333"}
                ];

                this.pList = personList;

                
            }
        },
        created(){  //created는 생성과 동시에 리스트를 출력시킨다

            this.getList();
        }
    }
</script>