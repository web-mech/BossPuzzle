define(['moment','can'],function(moment){
	var _time = can.Construct.extend({
		init:function(){
			this.active = can.compute(false);
			this.now = can.compute(moment(new Date()).set('minute',0).set('second',0));
			this.now.bind('change',this.onNow.bind(this));
			this.elapsed = can.compute(moment(this.now()).format('mm:ss'));
			this.intervalHandle = false;
			this.interval = 1000;
		},
		start:function(){
			this.intervalHandle = setInterval(this.tick.bind(this),this.interval);
			this.active(true);
		},
		tick:function(){
			this.now(this.now()+this.interval);
		},
		onNow:function(ev,val){
			this.elapsed(moment(val).format('mm:ss'));
		},
		stop:function(){
			if(this.intervalHandle){
				clearInterval(this.intervalHandle);
			}
			this.active(false);
			this.reset();
		},
		reset:function(){
			this.active(false);
			this.now(moment(new Date()).set('minute',0).set('second',0));
			this.elapsed(moment(this.now()).format('mm:ss'));
		}
	});
	return new _time();
});