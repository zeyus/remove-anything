var lastElementContext;
document.addEventListener('contextmenu', function(event) {
    lastElementContext = event.target;
}, true);
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (lastElementContext && lastElementContext.parentNode) {
        lastElementContext.parentNode.removeChild(lastElementContext);
        lastElementContext = null;
    }
});