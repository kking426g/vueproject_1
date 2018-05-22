<template>
	<div class="Marquee">
		<div class="content_tip">
			<em>公告</em>
			<MarqueeTips content="我是一个短短的提示！"></MarqueeTips>
		</div>
	</div>
</template>


<script>
import MarqueeTips from 'vue-marquee-tips'

export default {
	name: 'Marquee',
	data: function(){
		return{
			listData: ['item1', 'item2', 'item3']

		}
	},
	components: {
		MarqueeTips
	}
}
</script>

