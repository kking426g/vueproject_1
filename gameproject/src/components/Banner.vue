<template>
	<div class="Banner">
		<div class="banner" id="banner1">
			<div class="move" id="move">
				<ul>
					<li><img src="../assets/images/b1.jpg"></li>
					<li><img src="../assets/images/b2.jpg"></li>
					<li><img src="../assets/images/b3.jpg"></li>
					<li><img src="../assets/images/b4.jpg"></li>
					<li><img src="../assets/images/b5.jpg"></li>
					<li><img src="../assets/images/b6.jpg"></li>
					<li><img src="../assets/images/b7.jpg"></li>
					<li><img src="../assets/images/b8.jpg"></li>
				</ul>
			</div>
			<div class="ctrl" id="ctrl"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Banner',
	methods: {

	}
}

window.addEventListener('load', function(event) {
	// here is the Vue code
	var b_width = $(window).width();
	$('#banner1').css({'width':b_width,'height':b_width/720*300});
	$('#move img').attr('width',b_width+'px');
	$('#move img').attr('height',b_width/720*300+'px');
	$('#banner1').myscroll({
		picEl: $('#move'), //图片父级，不传默认为banner内第1个div
		ctrlEl: $('#ctrl'), //控制条父级，包括小圆点和左右箭头，不传默认为banner内第2个div
		libs: true, //是否创建底部小圆点，true || false,不传默认true
		arrows: true, //是否创建左右箭头，true || false,不传默认true
		autoPlay: true, //是否自动播放，true || false,不传默认true
		time: 2000, //自动播放间隔时间，true || false,不传默认2000
		speed: 400, //图片切换速度，不传默认400
		effect: 'left' //轮播的改变方式 top || left || fade，不传默认left
	});
});
</script>