const dbConnection = require("./config");

// function to check if the account exist in database
const isAccountExist = (user, callback) => {
  const sql = `select * from Login where email = "${user.email}";`;
  dbConnection.query(sql, function(err, result) {
    if (err) {
      console.log("Error during check if this account exist \n" + err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// function to insert into Login table Doctor info

const insertUserInfo = (user, callback) => {
  const sql = ` INSERT INTO Login (id, email, password, id_Roles) 
                 VALUES (null,'${user.email}','${user.password}','${
    user.id_Roles
  }');`;
  dbConnection.query(sql, function(err, result) {
    if (err) {
      console.log("Error during insert into Login Table \n" + err);
      callback(err, null);
    } else {
      if (user.id_Roles === 1) {
        insertIntoDoctorTable(user, result.insertId, callback);
      }
    }
  });
};
// function to insert into Doctors table depend on id_roles
const insertIntoDoctorTable = (user, insertId, callback) => {
  const sql = `INSERT INTO Doctors (id, firstName, lastName, specialist, phoneNumber,
                bio, location, clinicNumber, clinicName) 
                VALUES ("${insertId}","${user.firstName}","${user.lastName}","${
    user.specialist
  }",
                "${user.phoneNumber}","${user.bio}","${user.location}","${
    user.clinicNumber
  }","${user.clinicName}");`;
  dbConnection.query(sql, function(err, result) {
    if (err) {
      console.log("Error during insert into Doctor Table \n" + err);
      callback(err, null);
    } else {
      callback(null, insertId);
    }
  });
};

// function to select Doctor info from Doctor table
const selectDoctorInfo = (doctorId, callback) => {
  const sql = `select Doctors.*, Login.email, Login.id_Roles from Login 
                 inner join Doctors
                 on Login.id = Doctors.id and Doctors.id = '${doctorId}';`;
  dbConnection.query(sql, function(err, results) {
    if (err) {
      console.log("Error during select info  from Doctor Table \n" + err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Function to insert patient to Patient table
const insertIntoPatientTable = (patient, callback) => {
  const sql = `INSERT INTO Patients (firstName, middleName, lastName, age, gender,location, maritalStatus,
               phoneNumber, email, insurance, id_Progress, id_Doctor) VALUES ('${
                 patient.firstName
               }', '${patient.MiddleName}'
               , '${patient.lastName}', '${patient.age}', '${
    patient.gender
  }', '${patient.location}', '${patient.maritalStatus}',
               '${patient.Phone}', '${patient.email}', ${patient.insurance}, '${
    patient.id_Progress
  }', '${patient.id_Doctor}');`;
  dbConnection.query(sql, function(err, result) {
    if (err) {
      console.log("Error during insert into patient table  \n" + err);
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

//function to  select Patient information based on the ID
const selectAllPatientInfo = (doctorId, callback) => {
  const sql = `SELECT * FROM Patients WHERE id_Doctor = '${doctorId}' order by createdAt ASC;`;
  dbConnection.query(sql, function(err, results) {
    if (err) {
      console.log("Error during select info all Patients Table \n" + err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
//function to  select Patient information based on the ID
const selectPatientInfo = (PatientId, callback) => {
  const sql = `SELECT 	* FROM Patients WHERE id = '${PatientId}' `;
  dbConnection.query(sql, function(err, results) {
    if (err) {
      console.log("Error during select info  from Patients Table \n" + err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

//function to  select Patient Cassis based on the Patient ID
const selectPatientCassis = (PatientId, callback) => {
  const sql = `SELECT 	* FROM PatientCases  WHERE patientId = '${PatientId}' `;
  dbConnection.query(sql, function(err, results) {
    if (err) {
      console.log("Error during select info  from PatientCases Table \n" + err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

//function to  select Patient Case Info  based on the Case ID
const selectCaseInfo = (CaseId, callback) => {
  var obj = {
    ChiefComplaint: "",
    MedicalHistory: "",
    PhysicalExamination: "",
    medicalAnalysis: "",
    MedicalPrescription: "",
    PatientPlane: ""
  };
  const sql1 = `SELECT * FROM ChiefComplaint WHERE caseId='${CaseId}' `;
  const sql2 = `SELECT * FROM MedicalHistory WHERE caseId='${CaseId}' `;
  const sql3 = `SELECT * FROM PhysicalExamination WHERE caseId='${CaseId}' `;
  const sql4 = `SELECT * FROM MedicalAnalysis WHERE caseId='${CaseId}' `;
  const sql5 = `SELECT * FROM MedicalPrescription WHERE caseId='${CaseId}' `;
  const sql6 = `SELECT * FROM PatientPlane WHERE caseId='${CaseId}' `;
  dbConnection.query(sql1, function(err, results) {
    if (err) {
      console.log(
        "Error during select info  from ChiefComplaint Table \n" + err
      );
      callback(err, null);
    } else {
      obj["ChiefComplaint"] = results;

      dbConnection.query(sql2, function(err, results) {
        if (err) {
          console.log(
            "Error during select info  from MedicalHistory Table \n" + err
          );
          callback(err, null);
        } else {
          obj["MedicalHistory"] = results;

          dbConnection.query(sql3, function(err, results) {
            if (err) {
              console.log(
                "Error during select info  from PhysicalExamination Table \n" +
                  err
              );
              callback(err, null);
            } else {
              obj["PhysicalExamination"] = results;

              dbConnection.query(sql4, function(err, results) {
                if (err) {
                  console.log(
                    "Error during select info from medicalAnalysis Table \n" +
                      err
                  );
                  callback(err, null);
                } else {
                  obj["medicalAnalysis"] = results;

                  dbConnection.query(sql5, function(err, results) {
                    if (err) {
                      console.log(
                        "Error during select info from MedicalPrescription Table \n" +
                          err
                      );
                      callback(err, null);
                    } else {
                      obj["MedicalPrescription"] = results;

                      dbConnection.query(sql6, function(err, results) {
                        if (err) {
                          console.log(
                            "Error during select info from PatientPlane Table \n" +
                              err
                          );
                          callback(err, null);
                        } else {
                          obj["PatientPlane"] = results;
                          callback(null, obj);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

//function to  update the medicalAnalysis Status
const UpdateAnalysisStatus = (Id, status, callback) => {
  const sql = `UPDATE MedicalAnalysis SET STATUS='${status}' WHERE id='${Id}' `;
  dbConnection.query(sql, function(err, results) {
    if (err) {
      console.log(
        "Error during update info  from medicalAnalysis Table \n" + err
      );
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


//function to  add info MedicalHistory table
const AddPatientHistory = (data, callback) => {
  const sql = `INSERT INTO MedicalHistory (caseId,heartDisease,joints,bloodPressure,diabetes,renalDisease,patientHistory,familyHistory)
   VALUES ('${data.CaseId}','${data.heartDisease}','${data.joints}','${data.bloodPressure}','${data.diabetes}',
   '${data.renalDisease}','${data.patientHistory}','${data.familyHistory}') `
  dbConnection.query(sql, function (err, results) {
    if (err) {
      console.log("Error during insert info  to MedicalHistory Table \n" + err)
      callback(err, null);
    } else {
      callback(null, results);
    }

  })

}

//function to  add chief complaint
const AddChiefComplaint = (data, callback) => {
  const sql = `INSERT INTO ChiefComplaint (caseId,title,description) VALUES ('${data.id}','${data.description}','${data.title}') `
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
middleBodyNotes,bottomBodyNotes) VALUES ('${data.id}','${data.weight}','${data.height}','${data.bodyTemperature}','${data.head}','${data.body}','${data.legs}') `
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
  const sql = `INSERT INTO MedicalPrescription (caseId,name,daysInterval,times) VALUES ('${data.id}','${data.name}','${data.daysInterval}','${data.times}') `
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
  const sql = `INSERT INTO MedicalAnalysis (caseId,name,description,status) VALUES ('${data.id}','${data.name}','${data.description}','${data.status}') `
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

  dbConnection.query(sql, function(err, result) {
    if (err) {
      console.log("Error during update the doctor data info ", err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
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
module.exports.AddChiefComplaint = AddChiefComplaint;
module.exports.AddPhysicalExamination=AddPhysicalExamination;
module.exports.AddMedicalPrescription=AddMedicalPrescription;
module.exports.AddMedicalAnalysis=AddMedicalAnalysis;
module.exports.AddPatientHistory = AddPatientHistory;
module.exports.updateDoctorInfo = updateDoctorInfo;
