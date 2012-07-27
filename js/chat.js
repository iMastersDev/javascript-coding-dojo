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
				entries: null,
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
		var entries = chat.entries;
		
		if (chat.lastMessage !== user) {
			var article = document.createElement("article");
			var header = document.createElement("header");
			
			article.setAttribute("class", "entry");
			header.appendChild(document.createTextNode(user));
			
			article.appendChild(header);
			
			entries = document.createElement("ol");
			article.appendChild(entries);
			
			fragment.appendChild(article);
			
			chat.entries = entries;
		}
		
		var li = document.createElement("li");
		var p = document.createElement("p");
		var time = document.createElement("time");
		var date = new Date();

		time.appendChild(document.createTextNode([date.getHours(), date.getMinutes()].join(":")));
		
		p.appendChild(document.createTextNode(chat.message.value));
		li.appendChild(p);
		li.appendChild(time);
		entries.appendChild(li);
		
		chat.history.appendChild(fragment);
		chat.history.scrollTop = chat.history.scrollHeight;
		chat.lastMessage = user;
	}
};
