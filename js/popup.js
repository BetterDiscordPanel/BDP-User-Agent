function setUA() {
  chrome.runtime.sendMessage({
    type: 'setUA',
    ua: 'BDP (http://example.com), v0.0.1)',
  });
  window.close();
}

function resetUA() {
  chrome.runtime.sendMessage({
    type: 'resetUA',
  });
  window.close();
}

function bindButtons() {
  document.getElementById('submit-ua-custom').onclick = function() {
    setUA();
  };

  document.getElementById('submit-ua-reset').onclick = resetUA;
}

function initiate() {
  bindButtons();
  fetchUA();
}

function fetchUA() {
  chrome.runtime.sendMessage(
      {
        type: 'getUA',
      },
      (ua) => {
        fetchCurrentUA(ua);
      },
  );
}

function fetchCurrentUA(ua) {
  document.getElementById('current-useragent').innerText = ua;
}

initiate();
