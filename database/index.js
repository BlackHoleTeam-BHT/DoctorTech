const  dbConnection  = require('./config');

 // function to check if the account exist in database
const isAccountExist = (user, callback) => {
   const sql = `select * from Login where email = "${user.email}";`;
   dbConnection.query(sql, function(err, result){
       if(err) {
           console.log("Error during check if this account exist \n"+err)
           callback(err, null);
       } else {
           callback(null, result);
       }
   })
}

// function to insert into Login table Doctor info 

const insertUserInfo = (user , callback) => {
    const sql = ` INSERT INTO Login (id, email, password, id_Roles) 
                 VALUES (null,'${user.email}','${user.password}','${user.id_Roles}');`;
    dbConnection.query(sql, function(err, result){
        if(err) {
            console.log("Error during insert into Login Table \n"+err)
            callback(err, null);
        } else {
            if(user.id_Roles === 1) {
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
    dbConnection.query(sql, function(err, result, feilds) {
        if(err) {
            console.log("Error during insert into Doctor Table \n"+err)
            callback(err, null);
        } else {
            callback(null, insertId);
        }
    })
 }


 // function to select Doctor info from Doctor table
 const selectDoctorInfo = (doctorId, callback) => {
    const sql = `select Doctors.*, Login.email from Login 
                 inner join Doctors
                 on Login.id = Doctors.id and Doctors.id = '${doctorId}';`;
    dbConnection.query(sql, function(err, results) {
        if(err) {
            console.log("Error during select info  from Doctor Table \n"+err)
            callback(err, null);
        } else {
            callback(null, results);
        }
    })
 }

module.exports.isAccountExist = isAccountExist;
module.exports.insertUserInfo = insertUserInfo;
module.exports.selectDoctorInfo = selectDoctorInfo;