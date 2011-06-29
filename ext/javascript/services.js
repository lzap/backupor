var available_services = [];

available_services.push({
  name: "Test",
  description: "Test service that only tests internet connection",
  method: "GET",
  params: [],
  url: function (param) {
    return "http://www.gnu.org/licenses/gpl-3.0.txt";
  }
});

available_services.push({
  name: "Any URL",
  description: "Provide your own url that will be downloaded (e.g. http://myserver.com/file.zip)",
  method: "GET",
  params: [],
  url: function (params) {
    return params[0];
  }
});

available_services.push({
  name: "Blogger",
  description: "Complete backup of Google Blogger",
  method: "GET",
  params: ["Feed id"],
  url: function (params) {
    return "http://www.blogger.com/feeds/" + params[0] + "/archive";
  }
});

