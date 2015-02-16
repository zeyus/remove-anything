chrome.contextMenus.create({
	title:'Remove This',
	contexts:["all"],
	onclick: function(info, tab) {
		chrome.tabs.executeScript(null, {file: "content.js"});
        chrome.tabs.sendMessage(tab.id, 'deleteCurrentItem');
    }
});