chrome.runtime.sendMessage({type: 'getUA'}, function(response) {
  const userAgentCode = 'if(navigator.__defineGetter__){navigator.__defineGetter__(\'userAgent\',function(){return '+JSON.stringify(response)+';});}'; // eslint-disable-line max-len
  const textNode = document.createTextNode(userAgentCode);
  const script = document.createElement('script');
  script.appendChild(textNode);
  script.remove();
  const parentNode = document.head||document.documentElement;
  parentNode.appendChild(script);
  parentNode.removeChild(script);
});
