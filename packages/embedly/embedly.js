// Write your package code here!
Embedly = {
	extract: function(url) {
		var eSuccess = false;

		if(Meteor.settings.public.embedlyApiKey){
			var embedlyKey = Meteor.settings.public.embedlyApiKey;
		} else {
			var embedlyKey = Meteor.settings.embedlyApiKey;
		}

		var embedlyURL = "http://api.embed.ly/1/extract?key=" + embedlyKey + "&url=" + encodeURIComponent(url);

		$.ajax({
			type: 'GET',
			url: embedlyURL,
			dataType: 'json',
			data: {},
			async: false,
			error: function(xhr) {
				console.log('Embed.ly failed to return useful data about this particular URL.', xhr);
				eSuccess = false;
			},
			success: function(data) {
				embedly = data;
				eSuccess = true;
			}
		});
		if (eSuccess) {
			return embedly;
		} else {
			return false;
		}
	},
	embed: function(url) {
		var eSuccess = false;

		if(Meteor.settings.public.embedlyApiKey){
			var embedlyKey = Meteor.settings.public.embedlyApiKey;
		} else {
			var embedlyKey = Meteor.settings.embedlyApiKey;
		}

		var embedlyURL = "http://api.embed.ly/1/oembed?key=" + embedlyKey + "&url=" + encodeURIComponent(url);
		$.ajax({
			type: 'GET',
			url: embedlyURL,
			dataType: 'json',
			data: {},
			async: false,
			error: function(xhr) {
				console.log('Embed.ly failed to return useful data about this particular URL.', xhr);
				eSuccess = false;
			},
			success: function(data) {
				embedly = data;
				eSuccess = true;
			}
		});
		if (eSuccess) {
			return embedly;
		} else {
			return false;
		}
	}
}
