fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};
function pageScroll(){
    window.scrollBy(0,-400);
    scrolldelay = setTimeout('pageScroll()',100);
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    if(sTop==0) clearTimeout(scrolldelay);
}
function show_code(obj){
	var code=document.getElementById(obj);
	var pos_x=document.body.clientWidth;
	var pos_y=document.body.clientHeight;
    code.style.left = pos_x*0.4+"px";
	code.style.top = pos_y-pos_x*0.3+"px";
	code.style.display = "block";
}
function hide_code(obj){
	var d=document.getElementById(obj);
	d.style.display = "none";
}