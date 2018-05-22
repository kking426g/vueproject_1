<template>
<div id="app">
    <div class="content_box">
    <div class="content_main">
      <Header></Header>
      <!-- <router-view/> -->
    </div>
    <div class="content_con">
      <Banner></Banner>
      <Marquee></Marquee>
      <Gamelist></Gamelist>
      <Bottom_nav></Bottom_nav>
    </div>
  </div>
</div>

</template>

<script>
import Header from './components/Header';
import Banner from './components/Banner';
import Marquee from './components/Marquee';
import Gamelist from './components/Gamelist';
import Bottom_nav from './components/Bottom_nav';


export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Marquee,
    Gamelist,
    Bottom_nav
  }
}

</script>
