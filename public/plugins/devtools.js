// Disable all developer tools communication
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => {} : null;
    }
  }
  // Disable browser developer tools
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.onkeydown = function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.shiftKey && e.keyCode === 74)) {
      return false;
    }
  };
  
  // Disable F12 key
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable Ctrl+Shift+I shortcut
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable Ctrl+Shift+J shortcut
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
  });
  console.log(window.location.hostname)
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
    // Redirect to the HTTPS version of the current page
    window.location.href = `https://${window.location.host}${window.location.pathname}`;
  }


// Disable right click
