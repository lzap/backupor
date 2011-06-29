// db version: 1

var db = null;

function open() {
  db = openDatabase("backupor", "", "Backupor Database", 10 * 1024 * 1024);

  var M = new Migrator(db);

  M.setDebugLevel(Migrator.DEBUG_HIGH);

  M.migration(1, function(t){
    t.executeSql("create table services(id integer primary key autoincrement, text name, text type)");
    t.executeSql("create table objects(id integer primary key autoincrement, blob data)");
  });

  M.execute();
}

function destroy() {
  var objects = ["table services", "table objects"];
  for (var i = 0; i < objects.length; i++) {
    db.transaction(function (tx) {
      db.executeSql("drop " + objects[i]);
    });
  }
}

function store(service, data) {
  if (db == null) open();
  db.transaction(function (tx) {
    tx.executeSql('insert into objects (data) values (?)', [data]);
  });
  localStorage.setItem(service.name, data);
};

