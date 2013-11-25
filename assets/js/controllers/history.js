define(['can','models/history'],function(can,Hist){
	return can.Control({
		view:'assets/views/history.mustache',
		init:function(){
			this.render();
		},
		render:function(){
			this.element.html(can.view(this.view,{
				Hist:Hist
			}));	
		}
	})
});