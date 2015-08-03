var mongoose = require('mongoose'),
    issue = require('./models/issue.js');

var url = 'mongodb://localhost/sws';
var db = mongoose.connection;
mongoose.connect(url);

issue.find().snapshot().forEach(
  function (instance) {
    if (!Array.isArray(instance.screenshot)){
        instance.screenshot = [ instance.screenshot  ];
        issue.save(instance);
    }
  }
);
