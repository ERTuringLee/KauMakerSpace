var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var indexRouter = require('./routes/index');
var mongoUrl = "mongodb://localhost:27017/platform"
var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')
var session = require('express-session');
var ejs = require('ejs')

var app = express();
var sess;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter);


app.use(session({
  secret: 'abcdefgh',
  resave: false,
  saveUninitialized: true
}))
app.listen(6508, function () {
  console.log("Server running on 6508");
})
const transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: "kaulogiclab@gmail.com",
    pass: "shsflghlfhdusrntlf"
  },
  secure: true
}))
app.post('/login', function (request, response) {
  sess = request.session;
  let user = request.body.user;
  let userId = user.userId;
  let userPassword = user.userPassword; 
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    let resResult = {}
    if (userId === "admin") {
      DB.collection('adminData').find({userId:userId}).toArray(function (err, result) {
        if(userPassword === result[0].userPassword) {
          resResult["sucess"] = 1;
          sess.username = "관리자";
          sess.name = userId;
          response.json(resResult);
        } else {
          resResult["sucess"] = 0;
          resResult["error"] = "incorrect";
          response.json(resResult);
        }
      })
    } else {
      DB.collection('userData').find({userId: userId}).toArray(function (err, result) {
        if (result.length === 0) {
          resResult["success"] = 0;
          resResult["error"] = "not found";
          response.json(resResult);
          return;
        }
        if (userPassword === result[0].userPassword) {
          resResult["success"] = 1;
          sess.username = result[0].username;
          sess.name = userId;
          response.json(resResult);
        } else {
          resResult["success"] = 0;
          resResult["error"] = "incorrect";
          response.json(resResult)
        }
      })
    }
  })
  
  // sess.name = user.username;
})
app.get('/session', function (request, response) {
  sess = [request.session.name, request.session.username];
  response.send(sess);
  response.end();
})

app.post('/logout', function (request, response) {

})

app.post("/space_register", function (request, response) {
  let user = request.body.user;
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
  })
})
app.post("/festival_register", function (request, response) {
  var user = request.body.user;
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('festivalData').find({
      id: parseInt(user.id)
    }).toArray(function (err, result) {
      if (err) throw err;
      DB.collection('festivalData').updateOne({
        id: parseInt(user.id)
      }, {
        $set: {
          remain: result[0].remain - 1,
          register: result[0].register + 1
        }
      })
    })
    DB.collection('festival_register').insertOne(user).then(function (res) {
      response.send(res)
    })

  })
})

app.get('/space', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('spaceData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/space/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('spaceData').find({
      id: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/equipment', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('equipmentData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/equipment/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('equipmentData').find({
      id: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/notice', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('noticeData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/notice/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('noticeData').find({
      no: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/festival', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('festivalData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/festival/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('festivalData').find({
      id: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/goods/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('goodsData').find({
      id: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/notice', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('noticeData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/notice/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('noticeData').find({
      no: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/activity', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('activityData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/activity/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('activityData').find({
      id: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/information', function (request, response) {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('informationData').find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})
app.get('/information/:id', function (request, response) {
  var paramId = parseInt(request.params.id)
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, function (err, mongodb) {
    if (err) throw err;
    const DB = mongodb.db('platform')
    DB.collection('informationData').find({
      no: paramId
    }).toArray(function (err, result) {
      if (err) throw err;
      response.send(result)
    })
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});