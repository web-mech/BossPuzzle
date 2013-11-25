({
    baseUrl: "./assets/js/lib/",
    paths: {
        'jquery':'jquery/jquery.min',
		'can':'canjs/dist/can.jquery',
		'moment':'moment/moment',
		'css':'require-css/css',
		'models':'../models',
		'controllers':'../controllers',
		'views': 'views.production',
		'styles':'../../css',
		'array':'array/lib/util'
    },
    //name: "../../../public/production/production",
    name: "../app",
    out: "public/production/js/app.js"
})