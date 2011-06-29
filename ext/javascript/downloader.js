function download(logger, service) {
  console.log("Processing " + service.name);
  var req = new XMLHttpRequest();
  req.open(service.method, service.url(), true);
  req.onreadystatechange = function() { 
    if (req.readyState == 4) {
      console.log("Download complete: " + service.url() + " status " + req.status);
      if (req.statusText) console.log(req.statusText);
      // store it
      store(logger, service, req.responseText);
      if (logger) logger("DONE<br/>");
    }
  };
  if (logger) logger("Downloading: " + service.name);
  req.send();
};

function process_downloads(logger) {
  console.log("Processing: " + available_services.length);
  for (var i = 0; i < available_services.length; i++) {
    download(logger, available_services[i]);
  }
}
