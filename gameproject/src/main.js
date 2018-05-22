// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import './assets/css/common.css'
import './assets/css/wap.css'
import './assets/css/iconic.css'
import './assets/css/flexslider.css'
import './assets/js/iscroll.js'
import './assets/js/myscroll.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
