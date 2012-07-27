/**
 * 
 */

var chatDojo = chatDojo || {};

chatDojo.chat = {
	start : function(user) {
		var chat = [];
		
		this.lastUser = null;
		this.forms = document.querySelectorAll('.chat');
		
		for (var i = 0, t = this.forms.length; i < t; ++i) {
			chat[i] = {
				message: this.forms[i].querySelector('.message'),
				history: this.forms[i].querySelector('.history'),
				lastMessage: null
			};
			
			this.forms[i].onsubmit = (function(i, evt){
				this.addHistory(chat[i], user);
				chat[i].message.value = "";
				
				return false;
			}).bind(this, i);
		}
	},
	addHistory: function(chat, user) {
		if (chat.lastMessage !== user) {
			chat.history.value += user + '\n';
		}
		
		chat.history.value += chat.message.value + '\n';
		chat.history.scrollTop = chat.history.scrollHeight;
		
		chat.lastMessage = user;
	}
};