chrome.storage.local.get('message', function(data) {
    document.getElementById('message').innerText = data.message;
  });
  