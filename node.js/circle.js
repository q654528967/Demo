var length=function (r){
	var l=2*r*Math.PI;
	return l.toFixed(2);
}
var area=function(r){
	var a=2*Math.PI*r*r;
	return a.toFixed(2);
}
exports.length=length;
exports.area=area;