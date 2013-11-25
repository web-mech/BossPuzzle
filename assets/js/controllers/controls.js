define(['jquery','can','models/time','models/board','models/history'],function($,can,Time,Board,Hist){
	return can.Control({
		view:'assets/views/controls.mustache',
		init:function(){
			this.render();
			Board.complete.bind('change',this.onComplete.bind(this));
		},
		onComplete:function(ev,complete){
			if(complete === true && Time.active()){
				Hist.setHistory(Board.moves(),Time.elapsed(),JSON.stringify(Board.list.attr()));
				Time.stop();
			}
		},
		".start click":function(el,ev){
			Time.start();
			Board.shuffle();
			Hist.disable();
		},
		".stop click":function(el,ev){
			Time.stop();
			Hist.enable();
			Board.reset();
		},
		'.history click':function(el,ev){
			if(Hist.enabled()){
				Board.history(JSON.parse(Hist.table));
			}
		},
		render:function(){
			this.element.html(can.view(this.view,{
				Time: Time,
				Board:Board,
				Hist:Hist
			}));
		}

	});
});