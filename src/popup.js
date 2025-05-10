document.addEventListener('DOMContentLoaded', function() {
  const runButton = document.getElementById('run');
  
  runButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "takeEmail"});
    });
  });
});
