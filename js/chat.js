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
				chat[i].message.value = chat[i].message.value.trim();
				
				if (chat[i].message.value !== "") {
					this.addHistory(chat[i], user);
					chat[i].message.value = "";
				}
				
				return false;
			}).bind(this, i);
		}
	},
	addHistory: function(chat, user) {
		var fragment = document.createDocumentFragment();
		var li;
		
		if (chat.lastMessage !== user) {
			li = document.createElement("li");
			li.setAttribute("class", "user");
			li.appendChild(document.createTextNode(user));
			
			fragment.appendChild(li);
		}
		
		li = document.createElement("li");
		li.setAttribute("class", "message");
		li.appendChild(document.createTextNode(chat.message.value));
		fragment.appendChild(li);
		
		chat.history.appendChild(fragment);
		chat.lastMessage = user;
	}
};