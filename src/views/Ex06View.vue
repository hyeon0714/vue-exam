<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <select name="telecom2">
        <option value="">통신사 선택</option>
        <option value="kt">kt</option>
        <option value="skt">skt</option>
        <option value="lg">lg</option>
        <option value="기타">기타</option>
    </select>
    <br>
    <select name="telecom" v-model="telecom"> <!--기본값을 지정한값으로 한다(v-model로 바뀐값을 보낼수도 있다)-->
        <option value="">통신사 선택</option>
        <option value="kt">kt</option>
        <option value="skt">skt</option>
        <option value="lg">lg</option>
        <option value="기타">기타</option>
    </select>

    <p>선택한 이동 통신사는 {{ telecom }}입니다</p> <!--v-model의 양방향 속성으로 실시간으로 값이 바뀐다-->
</template>

<script>
    export default{
        name: "Ex06View",
        components: {},
        data(){
            return{
                title: "vue공부",
                subtitle: "폼-selectbox: 양방향 바인딩 ->폼에는 그냥 v-model사용",
                telecom: "lg"
            }
        }
    }
</script>