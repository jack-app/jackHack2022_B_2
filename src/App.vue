<template>


<div style="text-align:center">
<img src="@/assets/header.png" width="800" height="167">
</div>



<img src="@/assets/eye.png" 
class="class1">


<img src="@/assets/denkyuu-preview.png" 
class="class2">

<img src="@/assets/hand-1.png" 
class="class3">

<img src="@/assets/hasami-preview.png" 
class="class4">

<img src="@/assets/ear.png" 
class="class5">

<img src="@/assets/huurinn.png" 
class="class6">

<img src="@/assets/nouse.png" 
class="class7">


<img src="@/assets/leaf_mint.png" 
class="class8">



  <Game />
</template>

<script>
import Game from '@/components/Game'
export default {
  components: { Game }
}
</script>

<style lang="scss">

.class1{
  position: absolute;
  top: 400px;
  left: 1190px;
  width: 90px;
  height: 90px;
}

.class2{
  position: absolute;
  top: 200px;
  left: 1120px;
  width: 210px;
  height: 157px;
}

.class3{
  position: absolute;
  top: 670px;
  left: 100px;
  width: 130px;
  height: 150px;
}

.class4{
  position: absolute;
  top: 520px;
  left: 100px;
  width: 164px;
  height: 150px;
}

.class5{
  position: absolute;
  top: 380px;
  left: 100px;
  width: 130px;
  height: 150px;
}

.class6{
  position: absolute;
  top: 200px;
  left: 130px;
  width: 70px;
  height: 150px;
}

.class7{
  position: absolute;
  top: 670px;
  left: 1170px;
  width: 164px;
  height: 150px;
}

.class8{
  position: absolute;
  top: 520px;
  left: 1170px;
  width: 150px;
  height: 150px;
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
