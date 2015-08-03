var mongoose = require('mongoose'),
    issue = require('./models/issue.js');

var url = 'mongodb://localhost/sws';
var db = mongoose.connection;
mongoose.connect(url);

issue.find().snapshot().forEach(
  function (x) {
    if (!Array.isArray(x.screenshot)){
        x.screenshot = [ x.screenshot  ];
        db.jobs.save(x);
    }
  }
);
