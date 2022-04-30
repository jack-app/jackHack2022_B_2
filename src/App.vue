<template>
<h1 style="text-align:center">感じるタイピング
</h1>


<img src="@/assets/denkyuu-preview.png" 
class="class2"
>

<img src="@/assets/hasami-preview.png" 
class="class4">

<img src="@/assets/huurinn.png" 
class="class6">


  <Game />
</template>

<script>
import Game from '@/components/Game'
export default {
  components: { Game }
}
</script>

<style lang="scss">
h1 {

   font-size: 75px;
   color: #7fffd4;
  text-shadow:1px 1px 0 #000, -1px -1px 0 #000,
              -1px 1px 0 #000, 1px -1px 0 #000,
              0px 1px 0 #000,  0-1px 0 #000,
              -1px 0 0 #000, 1px 0 0 #000;

}

.class2{
  position: absolute;
  top: 270px;
  left: 100px;
  width: 220px;
  height: 167px;
}

.class4{
  position: absolute;
  top: 280px;
  left: 1130px;
  width: 164px;
  height: 150px;
}

.class6{
  position: absolute;
  top: 430px;
  left: 160px;
  width: 100px;
  height: 210px;
}


body {
  background-image:url("assets/background.jpg");
  background-size: cover; width: 100%;、height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
