define(['models/time','models/board','controllers/helper','can'],function(Time,Board){
	return can.Control({
		view:'tpl-board',
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