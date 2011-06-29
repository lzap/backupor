var available_services = [];

available_services.push({
  name: "Test",
  method: "GET",
  params: [],
  url: function (param) {
    return "http://www.gnu.org/licenses/gpl-3.0.txt";
  }
});

available_services.push({
  name: "Blogger",
  method: "GET",
  params: ["Feed id"],
  url: function (params) {
    return "http://www.blogger.com/feeds/" + params[0] + "/archive";
  }
});

