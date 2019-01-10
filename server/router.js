const express = require('express');
const passport = require('passport');
const dbConnection = require('../database/config');
const db = require('../database/index.js')
const request = require('request')
const nodemailer = require('nodemailer');
var bcrypt = require('bcryptjs');
const multer =require('multer');

// Note: define the router
var router = express.Router();



//Note: config multer

const fileFilter=(req,file,cb)=>{
  if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
    cb(null,true)
  }else{
    cb(null,false)
  }

}

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/')
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload=multer({
  storage:storage,
  fileFilter:fileFilter
})




//Email config
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'DoctorTechApp@gmail.com', // generated ethereal user
    pass: '0781401852' // generated ethereal password
  }
})

// dealing with sign up request 
router.route('/sign-up')
  .post(function (req, res) {
    console.log(req.body)
    const user = req.body;
    //add user role
    user.id_Roles = 1;
    let email = user.email

    bcrypt.hash(user.password, 12)
      .then(function (hashedPassword) {
        user.password = hashedPassword

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

                  let link = 'https://doctortech.herokuapp.com/confirmEmail/' + results[0].id

                  // setup email data with unicode symbols
                  let mailOptions = {
                    from: 'DoctorTech-Team', // sender address
                    to: email, // list of receivers
                    subject: 'Confirmation Email', // Subject line
                    text: 'to confirm your email please press the link below', // plain text body
                    html: `<p>Thanks for Register</p> <h1>To confirm your email please press the link below:<h1><br>
                       <a href=${link}>Confirm</a>" `// html body
                  };
                  //Note : to send email to the client 
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      console.log(error);
                      res.send({
                        state: "USER_NOT_EXIST",
                        data: results[0],
                      });

                    } else {
                      console.log('the email has been sent', results[0].id)
                      res.send({
                        state: "USER_NOT_EXIST",
                        data: results[0],
                      });

                    }
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
        bcrypt.compare(user.password, result[0].password, function (err, data) {
          if (data) {
            if (result[0].is_confirm === 1) {
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
              res.send({
                data: null,
                state: "Not_Confirm"
              });
            }

          } else {
            res.send({
              data: null,
              state: "PASSWORD_NOT_CORRECT"
            });
          }

        })

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
    db.insertConsultations(req.body, function (err, insertId) {
      if (err) {
        throw err
      } else {
        console.log(insertId)
        db.selectOneConsultation(insertId, req.body.doctorId, function (err, results) {
          if (err) {
            throw err;
          } else {
            console.log("GHellllll data", results)
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
    db.selectConsultationOutbox(doctorId, function (err, results) {
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
    db.selectConsultationInbox(doctorId, function (err, results) {
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
    db.updateDoctorInfo(req.body, function (err, result) {
      if (err) {
        throw err;
      } else {
        // console.log(result)
        db.selectDoctorInfo(req.body.id, function (err, result) {
          if (err) throw err;
          if (result.length > 0) {
            res.send({
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
  .post(function (req, res) {
    const data = req.body.data
    console.log('status', req.body)
    db.AddChiefComplaint(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :to add physical examination 
router.route('/AddPhysicalExamination')
  .post(function (req, res) {
    const data = req.body.data

    console.log('status', req.body)
    db.AddPhysicalExamination(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :to add medical Prescription 
router.route('/AddMedicalPrescription')
  .post(function (req, res) {
    const data = req.body.data

    console.log('status', req.body)
    db.AddMedicalPrescription(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :to add medical Analysis 
router.route('/AddMedicalAnalysis')
  .post(function (req, res) {
    const data = req.body.data

    console.log('status', req.body)
    db.AddMedicalAnalysis(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :Add AddPatientHistory
router.route('/AddPatientHistory')
  .post(function (req, res) {
    const data = req.body

    db.AddPatientHistory(data, function (err, result) {
      if (err) {
        throw err
      } else {
        console.log("asdasdasdasd", result)
        res.send({
          insertId: result.insertId,
        })
      }
    })
  })



//Note :Add addAppointment
router.route('/add-appointment')
  .post(function (req, res) {
    const data = req.body

    db.AddAppointment(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :Add addNewCase
router.route('/newCase')
  .post(function (req, res) {
    const data = req.body

    db.AddnewCase(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :update patient plan (step)
router.route('/UpdatePlanStep')
  .post(function (req, res) {
    const data = req.body
    console.log('data', data)

    db.UpdatePlanStep(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :Close patient profile
router.route('/ClosePatientProfile')
  .post(function (req, res) {
    const data = req.body


    db.ClosePatientProfile(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :open patient profile
router.route('/OpenPatientProfile')
  .post(function (req, res) {
    const data = req.body


    db.OpenPatientProfile(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })


//Note :Add  Patient Plan 
router.route('/AddPatientPlan')
  .post(function (req, res) {
    const data = req.body


    db.AddPatientPlan(data, function (err, result) {
      if (err) {
        throw err
      } else {
        res.send(result)
      }
    })
  })

//Note :check user session 
router.route('/CheckSession')
  .get(function (req, res) {
    if (req.isAuthenticated()) {
      db.selectDoctorInfo(req.user.id, function (err, results) {
        if (err) {
          throw err;
        } else {
          res.send({
            data: null || results[0],
            state: "LOGIN_SUCCESS"
          })
        }
      })
      console.log('user login', req.user.id)

    } else {
      res.send('0')
    }
  })

// this service to deal with predicate BreastCancer
router.route('/breast-cancer')
  .post(function (req, res) {
    let featuresObj = req.body;
    // recieve the data and config it to be ready to machine learning
    let features = [parseFloat(featuresObj['Age']), parseFloat(featuresObj['BMI']), parseFloat(featuresObj['Glucose']),
    parseFloat(featuresObj['Insulin']), parseFloat(featuresObj['HOMA']), parseFloat(featuresObj['Leptin']),
    parseFloat(featuresObj['Adiponectin']), parseFloat(featuresObj['Resistin']), parseFloat(featuresObj['MCP1'])];

    request.post('https://dtai.herokuapp.com/breast-cancer/', { form: JSON.stringify({ features: features }) }, function (err, response, body) {
      let result = JSON.parse(body);
      res.send({
        data: {
          predicate: result.predicate === 1 ? 'Negative' : 'Positive',
          accuracy: result.accuracy
        }
      });
    });
  });

// this service to deal with predicate HeartAttack
router.route('/heart-attack')
  .post(function (req, res) {
    let featuresObj = req.body;
    console.log(featuresObj);
    let features = [parseFloat(featuresObj['Age']), parseFloat(featuresObj['Gender']), parseFloat(featuresObj['Cpt']),
    parseFloat(featuresObj['Trestbps']), parseFloat(featuresObj['Chol']), parseFloat(featuresObj['Fbs']),
    parseFloat(featuresObj['Restecg']), parseFloat(featuresObj['Thalach']), parseFloat(featuresObj['Exang']),
    parseFloat(featuresObj['Oldpeak']),
    parseFloat(featuresObj['Slope']), parseFloat(featuresObj['Ca']), parseFloat(featuresObj['Thalium'])];
    request.post('https://dtai.herokuapp.com/heart-attack/', { form: JSON.stringify({ features: features }) }, function (err, response, body) {
      let result = JSON.parse(body);
      console.log(result)  
       res.send({
         data: {
           predicate: result.predicate === 0 ? 'Negative' : 'Positive',
           accuracy: result.accurcy
         }
       });
    });
  })

router.route('/diabetes').post(function (req, response) {
  //Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age
  let featuresObj = req.body;
  // recieve the data and config it to be ready to machine learning
  let features = [parseFloat(featuresObj['Pregnancies']), parseFloat(featuresObj['Glucose']), parseFloat(featuresObj['BloodPressure']),
  parseFloat(featuresObj['SkinThickness']), parseFloat(featuresObj['Insulin']), parseFloat(featuresObj['BMI']),
  parseFloat(featuresObj['DiabetesPedigreeFunction']), parseFloat(featuresObj['Age'])]

  var obj = JSON.stringify({ value: [features] })
  request.post('https://dtai.herokuapp.com/diabetes/predict/', { form: obj }, function (err, res, body) {
  
  let result = JSON.parse(body);
   console.log(result)  
    response.send({
      data: {
        predicate: result.predicate === 0 ? 'Negative' : 'Positive',
        accuracy: result.accuracy
      }
    });
  })
})

//Get the Health predict from python server 
router.route('/Health').post(function (req, response) {
  var obj = JSON.stringify({ wight: req.body.weight, height: req.body.height })
  request.post('https://dtai.herokuapp.com/health/predict/', { form: obj }, function (err, res, body) {
    console.log(body)
    response.send(body)
  })
})


//Email test 
router.route('/email').get(function (req, res) {

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'DoctorTech-Team', // sender address
    to: 'eng.waleed_com@yahoo.com', // list of receivers
    subject: 'Thanks for Register', // Subject line
    text: 'to confirm your email please press the link below', // plain text body
    html: '<b>Hello world?</b>' // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Email Error')

    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send('Sent')

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });


})

// to confirm the email  
router.route('/confirmEmail/:id').get(function (req, res) {
  console.log('params', req.params)
  let id = req.params.id
  db.ConfirmationEmail(id, function (err, result) {
    if (err) {
      throw err
    } else {
      res.redirect('https://doctortech.herokuapp.com/signin')
    }
  })

  // res.send(`<p>the email has been confirmed press in the below link to login</p>
  // <a href="https://doctortech.herokuapp.com/signin">Login</a>`)
})


//to upload image
router.route('/upload').post(upload.single('pic'),function(req,res){
    var id=req.body.id
    var path=req.file.originalname
    console.log('body',id)
    console.log('file',path)

    db.UploadImage(id,path,function(err,result){
      
      if(err){
        throw err
      }else{
        db.selectDoctorInfo(id,function(err,result){
          if(err){
            throw err
          }else{
            res.send(result)
          }
        })
        
      }
    })  
})

//Note: add the passport function 
passport.serializeUser(function (user, done) {
  done(null, user.id);
});


// service to deal with getAppointment request 
router.route('/get-appointment')
  .post(authenticationMiddleware(), function (req, res) {
    var doctorId = req.body.doctorId
    db.getAppointment(doctorId, function (err, results) {
      if (err) throw err;
      if (results.length > 0) {
        res.send({
          data: results
        });
      }
    });
  });

// service to deal with getAppointment request 
router.route('/delete-appointment')
.post(authenticationMiddleware(), function (req, res) {
  console.log(req.body);
  var doctorId = req.body.doctorId;
  var appointmentId = req.body.appointmentId;
  db.deleteAppointment(doctorId, appointmentId, function(err, result){
    if (err) {
      throw err;
    } else {
      db.getAppointment(doctorId, function (err, results) {
        if (err) {throw err;
        } else {
          res.send({
            data: results
          });
        }
      });
    }
  })
});

// service to update the doctor appointment  
router.route('/update-appointment')
.post(authenticationMiddleware(), function (req, res) {
  console.log(req.body);
  let newAppointment = req.body;
  db.updateAppointment(newAppointment, function(err, result){
    if (err) {
      throw err;
    } else {
      db.getAppointment(newAppointment.id_Doctors, function (err, results) {
        if (err) {throw err;
        } else {
          res.send({
            data: results
          });
        }
      });
    }
  })
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