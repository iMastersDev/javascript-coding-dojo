/**
 * 
 */
Number.prototype.pad = function(n) {
	var value = this.toString();
	var length = n + 1 - value.length;
	
	return length > 0 ? (new Array(length)).join("0") + value: value;
};