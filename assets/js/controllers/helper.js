define(['can'],function(can){
	can.Mustache.registerHelper('renderRow', function(list,index,options){
		var row = [];
		var out = [];
		switch(index()){
			case 0:
			 	row = list.slice(0,4);
			break;
			case 1:
				row = list.slice(4,8);
			break;
			case 2:
				row = list.slice(8,12);
			break;
			case 3:
				row = list.slice(12,16);
			break;
		}

		for(var i =0;i<row.length;i++){
			out.push( options.fn({cell: can.view.render('assets/views/cell.mustache',{index:row.attr(i)})}) );
		}
		return out.join("");
	});
	
	can.Mustache.registerHelper('boardEmptySlot', function(slot){
		return slot.val > 0 ? '' : 'empty';
	});

	can.Mustache.registerHelper('gameActive', function(active){
		return active() ? 'Stop' : 'Start';
	});

	can.Mustache.registerHelper('gameActiveClass', function(active){
		return active() ? 'stop' : 'start';
	});

	can.Mustache.registerHelper('historyEnabled', function(enabled){
		return enabled() ? 'enabled' : 'disabled';
	});
});
