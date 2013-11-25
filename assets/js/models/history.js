define(['can'],function(){
	var _history = can.Construct.extend({
		init:function(){
			this.enabled = can.compute(true);
			this.supported = true;
			this.moves = can.compute(0);
			this.time = can.compute('00:00');
			this.table = [];

			if(typeof(Storage)!=="undefined")
			{
				if(localStorage.bossPuzzleMoves && localStorage.bossPuzzleTime){
					this.moves(localStorage.bossPuzzleMoves);
					this.time(localStorage.bossPuzzleTime);
					this.table = localStorage.bossPuzzleTable;

				}else{
					this.enabled(false);
				}
			}
			else
			{
				this.supported =false;
				this.enabled(false)
			}
		},
		enable:function(){
			if(localStorage.bossPuzzleMoves && localStorage.bossPuzzleTime){
				this.enabled(true);
			}
		},
		disable:function(){
			this.enabled(false);
		},
		setHistory:function(moves,time,table){
			if(!this.supported)
				return;
			localStorage.bossPuzzleMoves = moves;
			localStorage.bossPuzzleTime = time;
			localStorage.bossPuzzleTable = table;
			this.moves(localStorage.bossPuzzleMoves);
			this.time(localStorage.bossPuzzleTime);
			this.enabled(true);
		}
	});

	return new _history();
});