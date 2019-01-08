const dbConnection = require('./config');
const moment = require('moment');

// function to check if the account exist in database
const isAccountExist = (user, callback) => {
  const sql = `select * from Login where email = "${user.email}";`;
  dbConnection.query(sql, function (err, result) {
    if (err) {
      console.log("Error during check if this account exist \n" + err)
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

// function to insert into Login table Doctor info 

const insertUserInfo = (user, callback) => {
  const sql = ` INSERT INTO Login (id, email, password, id_Roles) 
                 VALUES (null,'${user.email}','${user.password}','${user.id_Roles}');`;
  dbConnection.query(sql, function (err, result) {
    if (err) {
      console.log("Error during insert into Login Table \n" + err)
      callback(err, null);
    } else {
      if (user.id_Roles === 1) {
        insertIntoDoctorTable(user, result.insertId, callback)
      }
    }
  })
}
// function to insert into Doctors table depend on id_roles
const insertIntoDoctorTable = (user, insertId, callback) => {
  const sql = `INSERT INTO Doctors (id, firstName, lastName, specialist, phoneNumber,
                bio, location, clinicNumber, clinicName, createdAt) 
                VALUES ('${insertId}','${user.firstName}','${user.lastName}','${user.specialist}',
                '${user.phoneNumber}','${user.bio}','${user.location}','${user.clinicNumber}','${user.clinicName}', "${moment().format()}");`;
  dbConnection.query(sql, function (err, result, feilds) {
    if (err) {
      console.log("Error during insert into Doctor Table \n" + err)
      callback(err, null);
    } else {
      callback(null, insertId);
    }
  })
}


// function to select Doctor info from Doctor table
const selectDoctorInfo = (doctorId, callback) => {
  const sql = `select Doctors.*, Login.email, Login.id_Roles from Login 
                 inner join Doctors
                 on Login.id = Doctors.id and Doctors.id = '${doctorId}';`;
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info  from Doctor Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

// function to select  all the Doctors info from Doctor table
const selectAllDoctors = (callback) => {
  const sql = `select Doctors.*, Login.email, Login.id_Roles from Login 
                 inner join Doctors
                 on Login.id = Doctors.id LIMIT 25;`;
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info  from Doctor Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


// Function to insert patient to Patient table
const insertIntoPatientTable = (patient, callback) => {
  const sql = `INSERT INTO Patients (firstName, middleName, lastName, age, gender,location, maritalStatus,
               phoneNumber, email, insurance, id_Progress, id_Doctor, createdAt) VALUES ('${patient.firstName}', '${patient.MiddleName}'
               , '${patient.lastName}', '${patient.age}', '${patient.gender}', '${patient.location}', '${patient.maritalStatus}',
               '${patient.Phone}', '${patient.email}', ${patient.insurance}, '${patient.id_Progress}', '${patient.id_Doctor}', "${moment().format()}");`;
  dbConnection.query(sql, function (err, result) {
    if (err) {
      console.log("Error during insert into patient table  \n" + err)
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  })
}



//function to  select Patient information based on the ID
const selectAllPatientInfo = (doctorId, callback) => {
  const sql = `SELECT * FROM Patients WHERE id_Doctor = '${doctorId}' order by createdAt DESC;`;
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info all Patients Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}
//function to  select Patient information based on the ID
const selectPatientInfo = (PatientId, callback) => {
  const sql = `SELECT 	* FROM Patients WHERE id = '${PatientId}' `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info  from Patients Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })

}

//function to  select Patient Cassis based on the Patient ID
const selectPatientCassis = (PatientId, callback) => {
  const sql = `SELECT 	* FROM PatientCases  WHERE patientId = '${PatientId}' `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info  from PatientCases Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}


//function to  select Patient Case Info  based on the Case ID
const selectCaseInfo = (CaseId, callback) => {
  var obj = {
    ChiefComplaint: '',
    MedicalHistory: '',
    PhysicalExamination: '',
    medicalAnalysis: '',
    MedicalPrescription: '',
    PatientPlane: ''
  }
  const sql1 = `SELECT * FROM ChiefComplaint WHERE caseId='${CaseId}' `
  const sql2 = `SELECT * FROM MedicalHistory WHERE caseId='${CaseId}' `
  const sql3 = `SELECT * FROM PhysicalExamination WHERE caseId='${CaseId}' `
  const sql4 = `SELECT * FROM MedicalAnalysis WHERE caseId='${CaseId}' `
  const sql5 = `SELECT * FROM MedicalPrescription WHERE caseId='${CaseId}' `
  const sql6 = `SELECT * FROM PatientPlane WHERE caseId='${CaseId}' `
  dbConnection.query(sql1, function (err, results) {
    if (err) {
      console.log("Error during select info  from ChiefComplaint Table \n" + err)
      callback(err, null);
    } else {
      obj['ChiefComplaint'] = results

      dbConnection.query(sql2, function (err, results) {

        if (err) {
          console.log("Error during select info  from MedicalHistory Table \n" + err)
          callback(err, null);
        } else {
          obj['MedicalHistory'] = results

          dbConnection.query(sql3, function (err, results) {

            if (err) {
              console.log("Error during select info  from PhysicalExamination Table \n" + err)
              callback(err, null);
            } else {
              obj['PhysicalExamination'] = results

              dbConnection.query(sql4, function (err, results) {

                if (err) {
                  console.log("Error during select info from medicalAnalysis Table \n" + err)
                  callback(err, null);
                } else {
                  obj['medicalAnalysis'] = results

                  dbConnection.query(sql5, function (err, results) {
                    if (err) {
                      console.log("Error during select info from MedicalPrescription Table \n" + err)
                      callback(err, null);
                    } else {
                      obj['MedicalPrescription'] = results

                      dbConnection.query(sql6, function (err, results) {
                        if (err) {
                          console.log("Error during select info from PatientPlane Table \n" + err)
                          callback(err, null);
                        } else {
                          obj['PatientPlane'] = results
                          callback(null, obj)
                        }


                      })

                    }

                  })


                }

              })

            }

          })

        }

      })

    }

  })

}

//function to  update the medicalAnalysis Status
const UpdateAnalysisStatus = (Id, status, callback) => {
  const sql = `UPDATE MedicalAnalysis SET STATUS='${status}' WHERE id='${Id}' `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from medicalAnalysis Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

// This function to add inside Consultions Table
const insertConsultations = (data, callback) => {
  let time = new Date().toISOString();
  const sql = `insert into Consultants (id_Doctors, id_targetDoctor, subject, description,createdAt)
                values("${data.doctorId}", "${data.targetDoctorId}", "${data.subject}", "${data.description}", "${moment().format()}")`
  dbConnection.query(sql, function (err, result) {
    if (err) {
      console.log("Error during insert into  Consultions Table \n" + err)
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }

  });
}


// function to get the consultations outbox from consultations table and doctors table
const selectConsultationOutbox = (doctorId, callback) => {
  const sql = `SELECT Doctors.*, Consultants.id as consultId, Consultants.id_Doctors, Consultants.id_targetDoctor, Consultants.subject,
              Consultants.description,Consultants.createdAt as createdAtConsult from Doctors 
              INNER JOIN Consultants 
              ON Doctors.id = Consultants.id_targetDoctor
              and Consultants.id_Doctors = "${doctorId}" order by createdAtConsult DESC;`;

  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select consultions outbox for doctor  \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

// function to get the consultations inbox from consultations table and doctors table
const selectConsultationInbox = (doctorId, callback) => {
  const sql = `SELECT Doctors.*, Consultants.id as consultId,Consultants.id_Doctors, Consultants.id_targetDoctor, Consultants.subject,
              Consultants.description,Consultants.createdAt as createdAtConsult from Doctors 
              INNER JOIN Consultants 
              ON Doctors.id = Consultants.id_Doctors
              and Consultants.id_targetDoctor = "${doctorId}" order by createdAtConsult DESC;`;

  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select consultions outbox for doctor  \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

// fucntione to select the one consultation depen on id
const selectOneConsultation = (consultId, doctorId, callback) => {
  const sql = `SELECT Doctors.*, Consultants.id_Doctors, Consultants.id_targetDoctor, Consultants.subject,
           Consultants.description,Consultants.createdAt as createdAtConsult from Doctors 
          INNER JOIN Consultants 
          ON Doctors.id = Consultants.id_targetDoctor
          and Consultants.id_Doctors = "${doctorId}"
          and Consultants.id = "${consultId}"`;
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select one consultion outbox for doctor  \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}

//function to  add chief complaint
const AddChiefComplaint = (data, callback) => {
  const sql = `INSERT INTO ChiefComplaint (caseId,title,description, createdAt) 
               VALUES ('${data.id}','${data.description}','${data.title}',"${moment().format()}") `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from ChiefComplaint Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}
//function to  add Physical Examination
const AddPhysicalExamination = (data, callback) => {
  const sql = `INSERT INTO PhysicalExamination (caseId,weight,height,bodyTemperature,headNotes,
                    middleBodyNotes,bottomBodyNotes,diabetes,BloodPressure, createdAt) VALUES ('${data.id}','${data.weight}',
                    '${data.height}','${data.bodyTemperature}','${data.headNotes}','${data.middleBodyNotes}',
                    '${data.bottomBodyNotes}','${data.diabetes}','${data.BloodPressure}', "${moment().format()}") `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from physicalExamination Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })
}


//function to  add medical Prescription
const AddMedicalPrescription = (data, callback) => {
  const sql = `INSERT INTO MedicalPrescription (caseId,name, daysInterval, times, createdAt)
   VALUES ('${data.id}','${data.name}','${data.daysInterval}','${data.times}', "${moment().format()}") `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from MedicalPrescription Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}


//function to  add medical Analysis
const AddMedicalAnalysis = (data, callback) => {
  const sql = `INSERT INTO MedicalAnalysis (caseId,name,description,status, createdAt)
               VALUES ('${data.id}','${data.name}','${data.description}','${data.status}', "${moment().format()}") `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from MedicalAnalysis Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}

// function to update doctor info
const updateDoctorInfo = (newData, callback) => {
  let sql = `update Doctors set firstName = "${newData.firstName}", lastName="${newData.lastName}", specialist = "${newData.specialty}" 
  ,phoneNumber= "${ newData.phoneNumber}", bio="${newData.bio}" , gender= "${newData.gender}", birthDate = "${newData.bDate}", nationality = "${newData.nationality}",
  location = "${newData.location}", clinicName = "${newData.clinicName}", clinicNumber = "${newData.clinicNumber}" where id = ${newData.id};`;

  dbConnection.query(sql, function (err, result) {
    if (err) {
      console.log("Error during update the doctor data info ", err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

//function to  add Appointment 
const AddAppointment = (data, callback) => {
  const sql = `INSERT INTO Appointment (id_Doctors,id_Patients,notes,date) VALUES ('${data.id_Doctors}','${data.id_Patients}','${data.notes}','${data.date}') `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from Appointment Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}


//function to  add newCase 
const AddnewCase = (data, callback) => {
  const sql = `INSERT INTO PatientCases (patientId,title,description,isOpen) VALUES ('${data.patientId}','${data.title}','${data.description}','${data.isOpen}') `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from PatientCases Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}

//function to Update the patient Plan Step
const UpdatePlanStep = (data, callback) => {

  const sql = `UPDATE PatientPlane SET step='${data.step}' WHERE id='${data.Id}' `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from MedicalAnalysis Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}


//function to Close Patient Profile
const ClosePatientProfile = (data, callback) => {

  const sql = `UPDATE PatientCases SET isOpen=0 WHERE id='${data.CaseId}'  `

  UpdatePlanStep(data, function (err, result) {
    if (err) {
      throw err
    } else {

      dbConnection.query(sql, function (err, results) {
        if (err) {
          console.log("Error during update info  from PatientCases close Table \n" + err)
          callback(err, null);
        } else {
          callback(null, results);
        }

      })

    }
  })
}

//function to open Patient Profile
const OpenPatientProfile = (data, callback) => {

  const sql = `UPDATE PatientCases SET isOpen=1 WHERE id='${data.CaseId}' `

  UpdatePlanStep(data, function (err, result) {
    if (err) {
      throw err
    } else {

      dbConnection.query(sql, function (err, results) {
        if (err) {
          console.log("Error during update info  from PatientCases open  Table \n" + err)
          callback(err, null);
        } else {
          console.log('rrr', results)
          callback(null, results);
        }

      })

    }
  })

}

//function to Add Patient Plan Profile
const AddPatientPlan = (data, callback) => {

  const sql = `INSERT INTO PatientPlane (caseId,PhysicalPlan,MedicalPlan,Conclusion,step, createdAt) 
                VALUES ('${data.CaseId}','${data.PhysicalPlan}','${data.MedicalPlan}','${data.Conclusion}', 0, "${moment().format()}");`

  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during insert into   PatientPlane   Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results)
    }
  })

}

//function to  add info MedicalHistory table
const AddPatientHistory = (data, callback) => {
  const sql = `INSERT INTO MedicalHistory (caseId,heartDisease,joints,bloodPressure,diabetes,renalDisease,patientHistory,familyHistory, createdAt)
   VALUES ('${data.CaseId}','${data.heartDisease}','${data.joints}','${data.bloodPressure}','${data.diabetes}',
   '${data.renalDisease}','${data.patientHistory}','${data.familyHistory}', "${moment().format()}") `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during insert info  to MedicalHistory Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}




//update the Confirmation Email 
const ConfirmationEmail = (id, callback) => {

  const sql = `UPDATE Login SET is_confirm=1 WHERE id=${id}`

  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update Login Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results)
    }
  })

}

// function to select Appointment info from Appointment table
const getAppointment = (doctorId, callback) => {
  const sql = `select Patients.firstName, Patients.lastName, Appointment.date 
  FROM Appointment
  INNER JOIN Patients ON Appointment.id_Patients=Patients.id AND Appointment.id_Doctors='${doctorId}'`;
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during select info  from Doctor Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


//callback(null, obj);
//dbConnection.query(sql1, function(err, results) {})
module.exports.ConfirmationEmail = ConfirmationEmail;
module.exports.isAccountExist = isAccountExist;
module.exports.insertUserInfo = insertUserInfo;
module.exports.selectDoctorInfo = selectDoctorInfo;
module.exports.insertIntoPatientTable = insertIntoPatientTable;
module.exports.selectAllPatientInfo = selectAllPatientInfo;
module.exports.selectPatientInfo = selectPatientInfo;
module.exports.selectPatientCassis = selectPatientCassis;
module.exports.selectCaseInfo = selectCaseInfo;
module.exports.UpdateAnalysisStatus = UpdateAnalysisStatus;
module.exports.AddChiefComplaint = AddChiefComplaint;
module.exports.AddPhysicalExamination = AddPhysicalExamination;
module.exports.AddMedicalPrescription = AddMedicalPrescription;
module.exports.AddMedicalAnalysis = AddMedicalAnalysis;
module.exports.AddPatientHistory = AddPatientHistory;
module.exports.UpdatePlanStep = UpdatePlanStep;
module.exports.ClosePatientProfile = ClosePatientProfile;
module.exports.OpenPatientProfile = OpenPatientProfile;
module.exports.AddPatientPlan = AddPatientPlan;
module.exports.selectAllDoctors = selectAllDoctors;
module.exports.insertConsultations = insertConsultations;
module.exports.selectConsultationOutbox = selectConsultationOutbox;
module.exports.selectConsultationInbox = selectConsultationInbox;
module.exports.selectOneConsultation = selectOneConsultation;
module.exports.updateDoctorInfo = updateDoctorInfo;
module.exports.AddAppointment = AddAppointment;
module.exports.AddnewCase = AddnewCase;
module.exports.getAppointment=getAppointment;