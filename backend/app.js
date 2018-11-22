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
var ejs = require('ejs')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
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
// app.post("/equip_space", function (request, response) {
//   var user = request.body.user;
//   MongoClient.connect(mongoUrl, {
//     useNewUrlParser: true
//   }, function (err, mongodb) {
//     if (err) throw err;
//     var equipment = '',
//       useSpace = '';
//     console.log(user.space2, user.equip8)
//     useSpace = useSpace + user.space1 === true ? "108호" : "";
//     useSpace = useSpace + user.space2 === true ? "109호" : "";
//     equipment = equipment + user.equip1 === true ? "아두이노," : "";
//     equipment = equipment + user.equip2 === true ? "메이크블록," : "";
//     equipment = equipment + user.equip3 === true ? "마인드스톰," : "";
//     equipment = equipment + user.equip4 === true ? "레이저커터," : "";
//     equipment = equipment + user.equip5 === true ? "3D프린터," : "";
//     equipment = equipment + user.equip6 === true ? "액자일드론," : "";
//     equipment = equipment + user.equip7 === true ? "스트라이커 드론," : "";
//     equipment = equipment + user.equip8 === true ? "라즈베리 파이" : "";
//     ejs.renderFile(__dirname + '/equip_space.ejs', {
//       name: user.name,
//       gender: user.gender1 ? "여성" : "남성",
//       phone: user.phone,
//       email: user.email,
//       address: user.address,
//       purpose: user.purpose,
//       space: useSpace,
//       equip: equipment,
//       date: user.date
//     }, function (err, mData) {
//       if (err) throw err;
//       var mOptions = {
//         from: "kaulogiclab@gmail.com",
//         to: "maker@kau.ac.kr",
//         subject: user.name + "님이 장비 및 공간 신청했습니다.",
//         html: mData
//       }
//       transporter.sendMail(mOptions)
//     })
//     const DB = mongodb.db('platform')
//     DB.collection('equip_space').insertOne(user).then(function (result) {
//       console.log(result.result.ok)
//     })

//   })

// })
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