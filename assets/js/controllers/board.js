define(['can','models/time','models/board','controllers/helper'],function(can,Time,Board){
	return can.Control({
		view:'assets/views/board.mustache',
		init:function(){
			this.render();			
		},
		".board-item click":function(el,ev){
			if(!Time.active())
				return;
			
			Board.check(el.data('item'));
		},
		render:function(){
			this.element.html(can.view(this.view,{board:Board}));
		}
	});
});