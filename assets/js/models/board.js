define(['can','array'],function(){
	var _board = can.Construct.extend({
		init:function(count,rows){
			this.count = count+1;
			this.active = can.compute(false);
			this.list = new can.List([]);
			this.rows = new can.List([]);
			this.moves = can.compute(0);
			this.rowCount = rows;
			this.complete = can.compute(false);
			this.reset();
		},
		initList:function(){
			for(var i = 0; i < this.count; i++){
				this.list.push({val:i});
			}
			this.list.splice(0,1);
			this.list.splice(this.list.length,0,{val:0});
		},
		initRows:function(){
			for(var i = 0;i<this.rowCount;i++){
				this.rows.push(i);
			}
		},
		shuffle:function(){
			this.active(true);
			this.list.replace(Array.prototype.shuffle.call(this.list));
			var zero = this.get(0);
			this.list.splice(this.list.indexOf(zero),1);
			this.list.splice(this.list.length,0,zero);
			this.rows.replace(this.rows.slice(0));
		},
		get:function(val){
			for(var i = 0;i<this.list.length;i++){
				if(this.list.attr(i).attr('val') == val){
					return this.list.attr(i);
				}
			}
			return false;
		},
		indexOf:function(val){
			for(var i = 0;i<this.list.length;i++){
				if(this.list.attr(i).attr('val') == val){
					return i;
				}
			}
			return -1;
		},
		history:function(list){
			this.list.replace(list);
			this.rows.replace(this.rows.slice(0));
		},
		check:function(slot){
			var slotIndex = this.indexOf(slot.val);
			var rowOffset = this.rowCount;
			var candidates = [
				slotIndex+1,
				slotIndex-1,
				slotIndex+rowOffset,
				slotIndex-rowOffset
			];

			for(var i = 0;i<candidates.length;i++){
				var candidate = this.list.attr(candidates[i]);
				if(candidate){
					if(candidate.attr('val') == 0){
						var candidateIndex = this.list.indexOf(candidate);
						this.list.splice(this.list.indexOf(slot),1,candidate);
						this.list.splice(candidateIndex,1,slot);
						this.rows.replace(this.rows.slice(0));
						this.moves(this.moves()+1);
						this.checkComplete();
						return;
					}
				}
			}
		},
		checkComplete:function(){
			var z = this.indexOf(0);
			var list = this.list.slice(0);
			
			list.splice(z,1);

			for(var i = 0;i<list.length;i++){
				if(i == 0)
					continue;

				var p = list.attr(i-1).attr('val');
				var c = list.attr(i).attr('val');

				if(p>c){
					return false;
				}
					
			}
			return this.complete(true);
		},
		reset:function(){
			this.active(false);
			this.list.replace([]);
			this.rows.replace([]);
			this.complete(false);
			this.moves(0);
			this.initList();
			this.initRows();
		}
	});
	
	return new _board(15,4);
});