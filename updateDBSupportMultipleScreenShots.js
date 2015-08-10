db = new Mongo();
db.connect("mongodb://localhost/sws");

function f() {
  db.issues.find( { "screenshot" : { $type : 2 } }  ).snapshot().forEach(
    function (x) {
      if (!Array.isArray(x.screenshot)){
          x.screenshot = [ x.screenshot  ];
          db.jobs.save(x);
      }
    }
  )
}
db.eval(f);
