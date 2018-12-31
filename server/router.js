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
    db.isAccountExist(user, function (err, result) {
      if (err) {
        throw err
      } else if (result.length === 0) {
        // insert Doctor  info
        db.insertUserInfo(user, function (err, insertId) {
          console.log(insertId)
          db.selectDoctorInfo(insertId, function (err, results) {
            let user = results[0];
            if (err) throw err;
            req.login(user, function (done) {
              res.send({
                state: "USER_NOT_EXIST",
                data: results[0],
              });
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
    let user = req.body;
    db.isAccountExist(user, function (err, result) {
      if (err) {
        throw err;
      } else if (result.length > 0) {
        // if result array more than zero we check on password
        if (user.password === result[0].password) {
          // if password correct select user info
          let user = result[0];
          db.selectDoctorInfo(user.id, function (err, results) {
            if (err) {
              throw err
            } else {
              // add session for the user
              req.login(user, function (done) {
                console.log("user login Success")
                res.send({
                  data: null || results[0],
                  state: "LOGIN_SUCCESS"
                })
              });
            }
          });
        } else {
          // if the password not match user password
          res.send({
            data: null,
            state: "PASSWORD_NOT_CORRECT"
          });
        }
      } else {
        // if the user not exist
        res.send({
          data: null,
          state: "USER_NOT_EXIST"
        });
      }
    });

  })

// service to deal with  create patient request 
router.route('/create-patient')
  .post(authenticationMiddleware(), function (req, res) {
    console.log(req.body);
    const patient = req.body;
    // to determind patient state if pending or in progress
    if (patient.id_Roles === 1) {
      // if id roles refer to doctor make the patient in progress
      patient.id_Progress = 2
    } else {
      // if id roles refer to assistent make the patient pending on pending list
      patient.id_Progress = 1
    }
    db.insertIntoPatientTable(patient, function (err, insertId) {
      console.log(insertId);
      res.send({
        patientId: insertId
      })
    });
  });

// service to deal with getPatients request 
router.route('/patients')
  .post(authenticationMiddleware(), function (req, res) {
    console.log(req.body);
    const doctorId = req.body.doctorId;
    db.selectAllPatientInfo(doctorId, function (err, results) {
      if (err) throw errr;
      if (results.length > 0) {
        res.send({
          data: results
        });
      }
    });
  });
///doctores

// service to deal with getDoctores request 
router.route('/doctores')
  .get(authenticationMiddleware(), function (req, res) {
    db.selectAllDoctors(function (err, results) {
      if (err) throw errr;
      if (results.length > 0) {
        res.send({
          data: results
        });
      }
    })
  });

// service to deal with getDoctores request 
router.route('/send-consult')
  .post(authenticationMiddleware(), function (req, res) {
    console.log(req.body);
    db.insertConsultations(req.body, function(err, insertId){
      if(err) {
        throw err
      } else {
        console.log(insertId)
        db.selectOneConsultation(insertId, req.body.doctorId, function(err, results){
          if(err) {
            throw err;
          } else {
            console.log("GHellllll data",results)
            res.send({
              data: results[0]
            });
          }
        });
      }
    });
  });

// service to deal with get consultation outbox request 
router.route('/get-consult-outbox')
.post(authenticationMiddleware(), function (req, res) {
  console.log(req.body);
  let doctorId = req.body.doctorId
  db.selectConsultationOutbox(doctorId, function(err, results){
    if (err) {
      throw err
    } else {
      res.send({
        data: results
      });
    }
  });
  
});

// service to deal with get consultation inbox request 
router.route('/get-consult-inbox')
.post(authenticationMiddleware(), function (req, res) {
  console.log(req.body);
  let doctorId = req.body.doctorId
  db.selectConsultationInbox(doctorId, function(err, results){
    if (err) {
      throw err
    } else {
      res.send({
        data: results
      });
    }
  });
  
});


// service to deal with logout request
router.route('/logout')
  .post(function (req, res) {
    console.log("logout")
    req.logout()
    req.session.destroy();
    res.send({
      state: 'logout'
    })
  })

router.route('/check')
  .get(authenticationMiddleware(), function (req, res) {
    res.send('autho')
  })

//Note:test
router.route('/test')
  .post(function (req, res) {
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

//Note :to select the patient information
router.route('/patientInformation')
  .post(function (req, res) {
    const id = req.body.id
    db.selectPatientInfo(id, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :to select the patient Cassis
router.route('/patientInCassis')
  .post(function (req, res) {
    const id = req.body.id
    console.log(id)
    db.selectPatientCassis(id, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :to select the Case Info
router.route('/GetCaseInfo')
  .post(function (req, res) {
    const CaseId = req.body.id
    console.log('caseid', CaseId)
    db.selectCaseInfo(CaseId, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


  // this service to deal with update doctor info request 
router.route('/update-doctorinfo')
.post(function (req, res) {
  console.log(req.body)
  db.updateDoctorInfo(req.body, function(err, result){
    if(err) {
      throw err;
    } else {
      // console.log(result)
      db.selectDoctorInfo(req.body.id,function (err,result){
        if(err) throw err;
        if(result.length > 0){
          res.send ({
            data: result[0]
          })
        }
      })
    }
  })
})

//Note :to update the medicalAnalysis Status
router.route('/UpdateAnalysisStatus')
  .post(function (req, res) {
    const CaseId = req.body.id
    const Status = req.body.status

    console.log('status', req.body)
    db.UpdateAnalysisStatus(CaseId, Status, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send('1')
      }
    })
  })



    //Note :to add chief compliant 
    router.route('/AddChiefComplaint')
    .post(function(req,res){
      const data=req.body.data
      

      console.log('status',req.body)
      db.AddChiefComplaint(data,function(err,result){
        if(err){
          throw err
        }else{
          res.send(result)
        }
      })
    })


    //Note :to add physical examination 
    router.route('/AddPhysicalExamination')
    .post(function(req,res){
      const data=req.body.data
      
      console.log('status',req.body)
      db.AddPhysicalExamination(data,function(err,result){
        if(err){
          throw err
        }else{
          res.send(result)
        }
      })
    })


    //Note :to add medical Prescription 
    router.route('/AddMedicalPrescription')
    .post(function(req,res){
      const data=req.body.data
      
      console.log('status',req.body)
      db.AddMedicalPrescription(data,function(err,result){
        if(err){
          throw err
        }else{
          res.send(result)
        }
      })
    })

    //Note :to add medical Analysis 
    router.route('/AddMedicalAnalysis')
    .post(function(req,res){
      const data=req.body.data
      
      console.log('status',req.body)
      db.AddMedicalAnalysis(data,function(err,result){
        if(err){
          throw err
        }else{
          res.send(result)
        }
      })
    })

//Note :Add AddPatientHistory
router.route('/AddPatientHistory')
.post(function(req,res){
  const data=req.body

  db.AddPatientHistory(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})



//Note :Add addAppointment
router.route('/add-appointment')
.post(function(req,res){
  const data=req.body

  db.AddAppointment(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})


//Note :update patient plan (step)
router.route('/UpdatePlanStep')
.post(function(req,res){
  const data=req.body
  console.log('data',data)
 
  db.UpdatePlanStep(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})


//Note :Close patient profile
router.route('/ClosePatientProfile')
.post(function(req,res){
  const data=req.body
  

  db.ClosePatientProfile(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})


//Note :open patient profile
router.route('/OpenPatientProfile')
.post(function(req,res){
  const data=req.body
  

  db.OpenPatientProfile(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})


//Note :Add  Patient Plan 
router.route('/AddPatientPlan')
.post(function(req,res){
  const data=req.body
  

  db.AddPatientPlan(data,function(err,result){
    if(err){
      throw err
    }else{
      res.send(result)
    }
  })
})

//Note :check user session 
router.route('/CheckSession')
.get(function(req,res){
  if(req.isAuthenticated()){
    db.selectDoctorInfo(req.user.id, function (err, results){
      if (err){
        throw err;
      }else{
        res.send({
          data: null || results[0],
          state: "LOGIN_SUCCESS"
        })
      }
     })
    console.log('user login',req.user.id)
  

  }else{
    res.send('0')
  }
})


//Note: add the passport function 
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var query = `select * from Login where id=\"${id}\"`
  dbConnection.query(query, function (err, data) {
    if (err) {
      return done(null, err)
    }
    done(null, data[0]);
  });
});


module.exports = router;