<template>
<div class="Header">
	<div class="content_top">
		<div class="title">{{title}}</div>
		<div class="login_btn">
			<span class="right-buttons">
				<a href="./register.html">注册</a>
				<button id="login_icon" class="login_icon" v-on:click="show_right_menu"></button>
			</span>
		</div>
	</div>

	<div v-if="show_right_member" class="right_mask" v-on:click="close_menu"></div>
	<div v-if="show_right_member" class="content_right">
			<div class="right_box">
					<div class="login_box">
							<div class="login_left"><img src="../assets/images/t4.png"></div>
							<div class="login_right">
									<div class="r1">test1234</div>
									<div class="r2">余额: 0.00</div>
							</div>
					</div>
					<div style="clear:both;"></div>
					<div class="right_nav_box">
							<ul class="list">
									<a href="./vip_center.html">
											<i class="icon right_icon_contact"></i>
											我的账户
									</a>
									<a href="./transaction_record.html">
											<i class="icon right_icon_paper"></i>
											交易记录
									</a>
									<div class="right_line"></div>
									<a href="./message.html">
											<i class="icon right_icon_mail"></i>
											最新消息
									</a>
									<a href="./game_message.html">
											<i class="icon right_icon_voide"></i>
											游戏公告
									</a>
									<div class="right_line"></div>
									<a href="">
											<i class="icon right_icon_logout"></i>
											登出
									</a>
							</ul>
					</div>
			</div>
	</div>
		<!-- <div v-else class="content_right">
				<div class="login_box">
						<div class="login_top"><img src="images/t0.png"></div>
						<div class="login_btm"><a href="./login.html">登录</a></div>
				</div>
		</div> -->
		
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: "澳门老葡京",
      show_right_member: false,//顯示會員選項
    }
  },
  
  methods:{
    show_right_menu: function(){
        $(".content_right").css("z-index","100");
        this.show_right_member = true;
        //$(".game_list a").css("pointer-events","none");
    },
    close_menu: function(){
        this.show_right_member = false;
    }
    
  }
}
</script>