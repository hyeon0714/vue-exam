<template>
    <p>zzzz</p>
    <h1>{{ title }}</h1>
    <p v-text="title"></p>
    <h2>{{ subtitle }}</h2>
    
    <ul>
        <li>{{ menus }}</li>
        <li>{{ menus[0] }}</li>
        <li>{{ menus[1] }}</li>
        <li>{{ menus[2] }}</li>
    </ul>

    <ul>
        <li v-bind:key="i" v-for="(me, i) in menus">{{ me }}</li>
    </ul><!-- 배열 사용한것-->

    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>핸드폰</th>
                <th>회사</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{personVo.name}}</td>
                <td>{{personVo.hp}}</td>
                <td>{{personVo.company}}</td>
            </tr>
        </tbody>
    </table>

    <p>{{ content }}</p>
    <p v-html="content"></p><!--content 안의 태그를 사용하는법-->
    <img v-bind:src="imgUrl"><!-- 이미지의 주소를 사용하는법(단방향 바인딩)-->
    <p>{{ no*0.3 }}</p>
    <p>{{ "안녕하세요"+personVo.name+"님" }}</p>

</template>

<script>

    export default{
        name: "ex02View",
        components: "",
        data() {
            return{
                title: "메인제목",
                subtitle: "부제목",
                menus: ["게시판", "갤러리", "방명록"],
                personVo: {
                    name: "이효리",
                    hp: "010-9999-9999",
                    company: "02-999-9999"
                },
                content: "지금부터 <strong>열심히</strong>",
                imgUrl: "https://wimg.mk.co.kr/news/cms/202310/20/20231020_01110305000006_L00.jpg",
                no: "300"   //숫자를  ""안에 넣어도 계산은 가능
            };
        }
        
    };
</script>