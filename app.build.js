({
    appDir: "./assets",
    baseUrl: "./assets/js/lib",
    dir: "public/production",
    mainConfigFile:'assets/js/app.js',
    optimize:"none",
    paths: {
        'jquery':'jquery/jquery.min',
		'can':'canjs/dist/can.jquery',
		'moment':'moment/moment',
		'models':'../models',
		'controllers':'../controllers',
		'views': 'views.production.js',
		'array':'array/lib/util'
    }
})