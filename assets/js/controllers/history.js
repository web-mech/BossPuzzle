define(['models/history','can'],function(Hist){
	return can.Control({
		view:'tpl-history',
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