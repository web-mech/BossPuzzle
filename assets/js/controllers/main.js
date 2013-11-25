define(['jquery','controllers/controls','controllers/board','controllers/history'],function($,Controls,Board,History){
	new Controls('#controls');
	new Board('#board');
	new History('#history');
	$('body').addClass('in');
});