
// localStorage access with default value
function localStorageDefault(name, defaultValue) {
  var value = localStorage[name];
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}

// display quick user message in the "status" div
function displayOptionMessage(msg, timeout) {
  if (timeout === undefined) {
    timeout = 1000;
  }
  var status = document.getElementById("status");
  status.innerHTML = msg;
  setTimeout(function() {
    status.innerHTML = "";
  }, timeout);
}

function save_options() {
  var select = document.getElementById("interval");
  localStorage["interval"] = select.children[select.selectedIndex].value;

  displayOptionMessage("Options saved.");
}

function restore_options() {
  var favorite = localStorageDefault("interval", "168");
  var select = document.getElementById("interval");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
}
