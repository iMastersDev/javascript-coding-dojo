/**
 * 
 */

var chatDojo = chatDojo || {};

chatDojo.chat = {
	start : function() {
		var messages = [];
		var histories = [];
		
		this.forms = document.querySelectorAll('.chat');
		
		for (var i = 0, t = this.forms.length; i < t; ++i) {
			histories[i] = this.forms[i].querySelector('.history');
			messages[i] = this.forms[i].querySelector('.message');
			
			this.forms[i].onsubmit = (function(i, evt){
				histories[i].text += messages[i].value;
				messages[i].value = "";
				
				return false;
			}).bind(undefined, i);
		}
	}
};