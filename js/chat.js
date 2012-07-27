/**
 * 
 */

var chatDojo = chatDojo || {};

chatDojo.chat = {
	start : function(user) {
		var messages = [];
		var histories = [];
		
		this.lastUser = null;
		
		this.forms = document.querySelectorAll('.chat');
		for (var i = 0, t = this.forms.length; i < t; ++i) {
			histories[i] = this.forms[i].querySelector('.history');
			messages[i] = this.forms[i].querySelector('.message');
			
			this.forms[i].onsubmit = (function(i, evt){
				this.addHistory(histories[i], messages[i].value, user);
				messages[i].value = "";
				
				return false;
			}).bind(this, i);
		}
	},
	addHistory: function(history, message, user) {
		if (this.lastUser !== user) {
			history.value += user + '\n';
		}
		
		history.value += message + '\n';
		history.scrollTop = history.scrollHeight;
		
		this.lastUser = user;
	}
};