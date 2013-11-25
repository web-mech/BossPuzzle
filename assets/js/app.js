requirejs.config({
	baseUrl:'./js/lib/',
	paths:{
		'jquery':'jquery/jquery.min',
		'can':'canjs/dist/can.jquery',
		'moment':'moment/moment',
		'css':'require-css/css',
		'models':'../models',
		'controllers':'../controllers',
		'views': '../../views',
		'styles':'../../css',
		'array':'array/lib/util'
	}
});

require(['controllers/main']);

