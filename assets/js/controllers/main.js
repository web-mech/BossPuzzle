define(['jquery','controllers/controls','controllers/board','controllers/history','css!styles/styles.css'],function($,Controls,Board,History){
	new Controls('#controls');
	new Board('#board');
	new History('#history');
	$('body').addClass('in');
});