const express = require('express');
const passport = require('passport');
const dbConnection = require('../database/config');
const db = require('../database/index.js')
// Note: define the router
var router = express.Router();

// dealing with sign up request 
router.route('/sign-up')
  .post(function (req, res) {
    console.log(req.body)
    const user = req.body;
    //add user role
    user.id_Roles = 1;
    // check if the account exist
    db.isAccountExist(user, function(err, result) {
      if(err) {
        throw err
      } else if(result.length === 0) {
        // insert Doctor  info
          db.insertUserInfo(user, function(err, insertId) {
             console.log(insertId)
             db.selectDoctorInfo(insertId, function(err, results) {
               if(err) throw err;
               console.log(results);
               res.send({
                 state:"USER_NOT_EXIST",
                 data: results[0],
               });
             });
          });
      } else {
        console.log(" Exist")
        res.send({
          state: "USER_EXIST",
          data: null
        });
      }
    });
  })


// dealing with sign in request
router.route('/login')
  .post(function (req, res) {
    console.log(req.body)
    var user = { id: 1, email: 'e@e.com' }
    req.login(user, function (done) {
      res.send(user)
    })

  })

  router.route('/create-patient')
  .post(function (req, res) {
    console.log(req.body)
    var user = { id: 1, email: 'e@e.com' }
    res.send(user)
  })


router.route('/delete')
  .get(function (req, res) {
    req.session.destroy();
    res.send('session has been deleted')
  })

router.route('/check')
  .get(authenticationMiddleware(), function (req, res) {
    res.send('autho')
  })

//Note:test
router.route('/test')
  .post( function (req, res) {
    console.log(req.body)
    res.send('done')
  })  

//Note : 
function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.send({

      success: "!!!!auth"
    });
  }
}

//Note: add the passport function 
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var query = `select * from login where id=\"${id}\"`
  dbConnection.query(query, function (err, data) {
    if (err) {
      return done(null, err)
    }
    done(null, data[0]);
  })

});






module.exports = router;