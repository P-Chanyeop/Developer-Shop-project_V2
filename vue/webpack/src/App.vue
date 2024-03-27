<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index" href="">{{ menu }}</a>
  </div>

  <div v-for="(product, index) in products" :key="index">
    <h4 @click="changeModal">{{ product }}</h4>
    <p>30 만원</p>
    <button @click="increase(index)">허위매물신고</button> <span>신고수 : {{ count[index] }}</span>
  </div>

  <!-- 모달창 디자인 -->
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      // UI의 현재 상태를 데이터로 저장해둔다.
      modal : false,
      count : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : [10000, 20000, 30000]
    }
  },

  // vue 함수 만드는 공간
  // data에 존재하는 변수에 접근하기 위해서는 this 키워드 사용.
  methods: {
    increase(index) {
      this.count[index] += 1;
    },

    changeModal() {
      this.modal = !this.modal;
      console.log(this.modal);
    }
  },

  components: {
  }
}
</script>

<style>
body {
  margin : 0
}

 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color : white;
  padding : 10px;
} 

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background : rgba(0,0,0,0,5);
  position: fixed; 
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
