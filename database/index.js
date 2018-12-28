const dbConnection = require('./config');

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
                bio, location, clinicNumber, clinicName) 
                VALUES ('${insertId}','${user.firstName}','${user.lastName}','${user.specialist}',
                '${user.phoneNumber}','${user.bio}','${user.location}','${user.clinicNumber}','${user.clinicName}');`;
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

// Function to insert patient to Patient table
const insertIntoPatientTable = (patient, callback) => {
  const sql = `INSERT INTO Patients (firstName, middleName, lastName, age, gender,location, maritalStatus,
               phoneNumber, email, insurance, id_Progress, id_Doctor) VALUES ('${patient.firstName}', '${patient.MiddleName}'
               , '${patient.lastName}', '${patient.age}', '${patient.gender}', '${patient.location}', '${patient.maritalStatus}',
               '${patient.Phone}', '${patient.email}', ${patient.insurance}, '${patient.id_Progress}', '${patient.id_Doctor}');`;
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
  const sql = `SELECT * FROM Patients WHERE id_Doctor = '${doctorId}' order by createdAt ASC;`;
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
    MedicalPrescription:''
  }
  const sql1 = `SELECT * FROM ChiefComplaint WHERE caseId='${CaseId}' `
  const sql2 = `SELECT * FROM MedicalHistory WHERE caseId='${CaseId}' `
  const sql3 = `SELECT * FROM PhysicalExamination WHERE caseId='${CaseId}' `
  const sql4 = `SELECT * FROM MedicalAnalysis WHERE caseId='${CaseId}' `
  const sql5 = `SELECT * FROM MedicalPrescription WHERE caseId='${CaseId}' `
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
                    }else{
                      obj['MedicalPrescription'] = results
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



//function to  update the medicalAnalysis Status
const UpdateAnalysisStatus = (Id,status, callback) => {
  const sql = `UPDATE MedicalAnalysis SET STATUS='${status}' WHERE id='${Id}' `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during update info  from medicalAnalysis Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}


//callback(null, obj);
//dbConnection.query(sql1, function(err, results) {})
module.exports.isAccountExist = isAccountExist;
module.exports.insertUserInfo = insertUserInfo;
module.exports.selectDoctorInfo = selectDoctorInfo;
module.exports.insertIntoPatientTable = insertIntoPatientTable;
module.exports.selectAllPatientInfo = selectAllPatientInfo;
module.exports.selectPatientInfo = selectPatientInfo;
module.exports.selectPatientCassis = selectPatientCassis;
module.exports.selectCaseInfo = selectCaseInfo;
module.exports.UpdateAnalysisStatus = UpdateAnalysisStatus;
