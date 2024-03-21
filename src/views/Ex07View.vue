<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    
    <p>기본</p>
        <label>10대</label>
        <input type="radio" name="age" value="10">
        <label>20대</label>
        <input type="radio" name="age" value="20">
        <label>30대</label>
        <input type="radio" name="age" value="30">
        <label>40대</label>
        <input type="radio" name="age" value="40" checked="checked">
    <br>

        <label>10대</label>
        <input type="radio" name="age" value="10" v-model="pickted">
        <label>20대</label>
        <input type="radio" name="age" value="20" v-model="pickted">
        <label>30대</label>
        <input type="radio" name="age" value="30" v-model="pickted"><!--변수값을 알아서 찾아서 체크한다-->
        <label>40대</label>
        <input type="radio" name="age" value="40" v-model="pickted">
        <p>{{ pickted }}</p><!--radio의 체크박스를 바꾸면 양방향 속성으로 스스로 바뀐다-->
    <br>

    <p>체크박스</p>
        <label>독서</label><input type="checkbox" name="hobby2" value="book">
        <label>여행</label><input type="checkbox" name="hobby2" value="trip">
        <label>인사</label><input type="checkbox" name="hobby2" value="hi" checked="checked">   <!-- checked="checked"로 시작시 박스값을 체크해놓는다 -->
        <label>수면</label><input type="checkbox" name="hobby2" value="sleep">
    <br>
        <label>독서</label><input type="checkbox" name="hobby" value="book" v-model="checked">  <!-- v-model을 이용한 checked로 지정된 값만 찾아서 시작시 체크된다-->
        <label>여행</label><input type="checkbox" name="hobby" value="trip" v-model="checked">
        <label>인사</label><input type="checkbox" name="hobby" value="hi" v-model="checked">
        <label>수면</label><input type="checkbox" name="hobby" value="sleep" v-model="checked">
    <p>{{ checked }}</p>
</template>

<script>
    export default{
        name: "Ex07View",
        components: {},
        data(){
            return{
                title: "vue공부",
                subtitle: "폼-radio,checkbox(양방향 바인딩)",
                pickted: 30,
                checked: ["hi"/*,"book"*/] //checkbox는 여러개를 선택할수 있으므로 값이 배열로 들어가야한다(값이 1개여도 배열로 정리해야한다)
            }
        }
    }
</script>