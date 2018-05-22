<template>
	<div class="Bottom_nav">
		<div class="bottom_nav login_nav">
			<router-link to="/firstroute">
				<i class="icon btm_recharge"></i>
				{{deposit}}
			</router-link>
			<!-- <a href="./deposit.html">

			</a> -->
			<a href="./withdrawal.html">
				<i class="icon btm_Withdrawal"></i>
				{{withdrawal}}
			</a>
			<a href="./quota_conversion.html">
				<i class="icon btm_quota_conversion"></i>
				{{transfer}}
			</a>
			<a href="">
				<i class="icon btm_hd"></i>
				{{promotion}}
			</a>
			<a href="">
				<i class="icon btm_kf"></i>
				{{contact}}
			</a>
		</div>

    <!-- <div class="bottom_nav" style="display:none;">
			<a href="./login.html">
				<i class="icon btm_login_icon"></i>
				立即登录
			</a>
			<a href="./register.html">
				<i class="icon btm_registered"></i>
				立即注册
			</a>
			<a href="">
				<i class="icon btm_kf"></i>
				在线客服
			</a>
    </div> -->

	</div>
</template>

<script>
export default {
	name: "Bottom_nav",
	data: function(){
		return{
			deposit: "快速充值",
			withdrawal: "线上取款",
			transfer: "额度转换",
			promotion: "优惠活动",
			contact: "在线客服"
		}
	}
}
</script>


