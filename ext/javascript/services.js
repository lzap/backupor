var available_services = [];

available_services.push({
  name: "Test",
  method: "GET",
  url: function (param) {
    return "http://www.gnu.org/licenses/gpl-3.0.txt";
  }
});

available_services.push({
  name: "Blogger",
  method: "GET",
  url: function (param) {
    return "http://www.blogger.com/feeds/" + param + "/archive";
  }
});

