DROP DATABASE IF EXISTS doctorTechDb;

CREATE DATABASE doctorTechDb;

USE doctorTechDb;

DROP TABLE IF EXISTS Login;
		
CREATE TABLE Login (
  `id` INTEGER  AUTO_INCREMENT  NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL ,
  `id_Roles` INTEGER NOT NULL ,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Roles'
-- 
-- ---

DROP TABLE IF EXISTS Roles;
		
CREATE TABLE `Roles` (
  `id` INTEGER  AUTO_INCREMENT  NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Doctors'
-- 
-- ---

DROP TABLE IF EXISTS Doctors;
		
CREATE TABLE Doctors (
  `id` INTEGER NOT NULL,
  `firstName` VARCHAR(25) NOT NULL,
  `lastName` VARCHAR(25) NOT NULL,
  `specialist` VARCHAR(200) NOT NULL,
  `phoneNumber` VARCHAR(15) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `birthDate` DATE NOT NULL,
  `nationality` VARCHAR(50) NOT NULL,
  `bio` MEDIUMTEXT NOT NULL,
  `location` VARCHAR(50) NOT NULL,
  `image` VARCHAR(300) NOT NULL,
  `rateAvg` DOUBLE NOT NULL DEFAULT 0,
  `numRater` INTEGER NOT NULL DEFAULT 0,
  `clinicNumber` VARCHAR(15) NOT NULL,
  `clinicName` VARCHAR(25) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Patients'
-- 
-- ---

DROP TABLE IF EXISTS Patients;
		
CREATE TABLE Patients (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `firstName` VARCHAR(35) NOT NULL,
  `middleName` VARCHAR(35) NOT NULL,
  `lastName` VARCHAR(35) NOT NULL,
  `age` INTEGER(5) NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `location` VARCHAR(250) NOT NULL,
  `maritalStatus` VARCHAR(15) NOT NULL,
  `phoneNumber` VARCHAR(15) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `insurance` INTEGER(15) NOT NULL,
  `id_Progress` INTEGER NOT NULL ,
  `id_Doctor` INTEGER NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Assistant'
-- 
-- ---

DROP TABLE IF EXISTS Assistant;
		
CREATE TABLE Assistant (
  `id` INTEGER  AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `availability` TINYINT(1) NOT NULL,
  `id_Doctor` INTEGER NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Progress'
-- 
-- ---

DROP TABLE IF EXISTS Progress;
		
CREATE TABLE Progress (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`)
);


-- Table PatientCases

DROP TABLE IF EXISTS PatientCases

CREATE TABLE PatientCases (
  `id` INTEGER NOT NULL,
  `patientId` INTEGER NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);



-- ---
-- Table 'ChiefComplaint'
-- 
-- ---

DROP TABLE IF EXISTS ChiefComplaint;
		
CREATE TABLE ChiefComplaint (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER NOT NULL,
  `title` VARCHAR(35) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'MedicalHistory'
-- 
-- ---

DROP TABLE IF EXISTS MedicalHistory;
		
CREATE TABLE MedicalHistory (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER NOT NULL ,
  ` heartDisease` TINYINT(1) NOT NULL,
  `joints` TINYINT(1) NOT NULL,
  `bloodPressure` TINYINT(1) NOT NULL,
  `diabetes` TINYINT(1) NOT NULL,
  `renalDisease` TINYINT(1) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `familyHistory` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'PhysicalExamination'
-- 
-- ---

DROP TABLE IF EXISTS `PhysicalExamination`;
		
CREATE TABLE `PhysicalExamination` (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER NOT NULL ,
  `weight` DOUBLE NOT NULL,
  `height` DOUBLE NOT NULL,
  `bodyTemperature` DOUBLE NOT NULL,
  `headNotes` MEDIUMTEXT NOT NULL,
  `middleBodyNotes` MEDIUMTEXT NOT NULL,
  `bottomBodyNotes` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'MedicalPrescription'
-- 
-- ---

DROP TABLE IF EXISTS `MedicalPrescription`;
		
CREATE TABLE `MedicalPrescription` (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER NOT NULL ,
  `name` VARCHAR(50) NOT NULL,
  `daysInterval` INTEGER NOT NULL,
  `times` INTEGER NOT NULL ,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'PatientPlane'
-- 
-- ---

DROP TABLE IF EXISTS `PatientPlane`;
		
CREATE TABLE `PatientPlane` (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER NOT NULL,
  `medicalPlane` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'MedicalAnalysis'
-- 
-- ---

DROP TABLE IF EXISTS MedicalAnalysis;
		
CREATE TABLE MedicalAnalysis (
  `id` INTEGER NOT NULL,
  `caseId` INTEGER  AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `status` TINYINT(1) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Appointment'
-- 
-- ---

DROP TABLE IF EXISTS Appointment;
		
CREATE TABLE Appointment (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `id_Doctors` INTEGER NOT NULL,
  `id_Patients` INTEGER NOT NULL,
  `date` DATETIME NOT NULL,
  `notes` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Consultants'
-- 
-- ---

DROP TABLE IF EXISTS Consultants;
		
CREATE TABLE Consultants (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `id_Doctors` INTEGER NOT NULL,
  `id_targetDoctor` INTEGER NOT NULL,
  `id_Patients` INTEGER NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Feedback'
-- 
-- ---

DROP TABLE IF EXISTS Feedback;
		
CREATE TABLE `Feedback` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `id_Patients` INTEGER NOT NULL,
  `id_Doctors` INTEGER NOT NULL,
  `message` MEDIUMTEXT NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Login` ADD FOREIGN KEY (id_Roles) REFERENCES `Roles` (`id`);
ALTER TABLE `Doctors` ADD FOREIGN KEY (id) REFERENCES `Login` (`id`);
ALTER TABLE `Patients` ADD FOREIGN KEY (id_Progress) REFERENCES `Progress` (`id`);
ALTER TABLE `Patients` ADD FOREIGN KEY (id_Doctor) REFERENCES `Doctors` (`id`);
ALTER TABLE `PatientCases` ADD FOREIGN KEY (patientId) REFERENCES `Patients` (`id`);
ALTER TABLE `Assistant` ADD FOREIGN KEY (id) REFERENCES `Login` (`id`);
ALTER TABLE `Assistant` ADD FOREIGN KEY (id_Doctor) REFERENCES `Doctors` (`id`);
ALTER TABLE `ChiefComplaint` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `MedicalHistory` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `PhysicalExamination` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `MedicalPrescription` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `PatientPlane` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `MedicalAnalysis` ADD FOREIGN KEY (caseId) REFERENCES `PatientCases` (`id`);
ALTER TABLE `Appointment` ADD FOREIGN KEY (id_Doctors) REFERENCES `Doctors` (`id`);
ALTER TABLE `Appointment` ADD FOREIGN KEY (id_Patients) REFERENCES `Patients` (`id`);
ALTER TABLE `Consultants` ADD FOREIGN KEY (id_Doctors) REFERENCES `Doctors` (`id`);
ALTER TABLE `Consultants` ADD FOREIGN KEY (id_targetDoctor) REFERENCES `Doctors` (`id`);
ALTER TABLE `Consultants` ADD FOREIGN KEY (id_Patients) REFERENCES `Patients` (`id`);
ALTER TABLE `Feedback` ADD FOREIGN KEY (id_Patients) REFERENCES `Patients` (`id`);
ALTER TABLE `Feedback` ADD FOREIGN KEY (id_Doctors) REFERENCES `Doctors` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Login` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Roles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Doctors` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Patients` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Assistant` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Progress` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ChiefComplaint` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `MedicalHistory` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `PhysicalExamination` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `MedicalPrescription` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `PatientPlane` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `MedicalAnalysis` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Appointment` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Consultants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Feedback` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Login` (`id`,`email`,`password`,`id_Roles`) VALUES
-- ('','','','');
-- INSERT INTO `Roles` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `Doctors` (`id`,`firstName`,`lastName`,`specialist`,`phoneNumber`,`gender`,`birthDate`,`nationality`,`bio`,`location`,`image`,`rateAvg`,`numRater`,`clinicNumber`,`clinicName`,`createdAt`) VALUES
-- ('','','','','','','','','','','','','','','','');
-- INSERT INTO `Patients` (`id`,`firstName`,`middleName`,`lastName`,`age`,`gender`,`location`,`maritalStatus`,`phoneNumber`,`email`,`insurance`,`new field`,`id_Progress`,`id_Doctor`,`createdAt`) VALUES
-- ('','','','','','','','','','','','','','','');
-- INSERT INTO `Assistant` (`id`,`name`,`availability`,`id_Doctor`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Progress` (`id`,`status`) VALUES
-- ('','');
-- INSERT INTO `ChiefComplaint` (`patientId`,`title`,`description`,`createdAt`) VALUES
-- ('','','','');
-- INSERT INTO `MedicalHistory` (`patientId`,` heartDisease`,`joints`,`bloodPressure`,`diabetes`,`renalDisease`,`description`,`familyHistory`,`createdAt`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `PhysicalExamination` (`patientId`,`weight`,`height`,`bodyTemperature`,`headNotes`,`middleBodyNotes`,`bottomBodyNotes`,`createdAt`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `MedicalPrescription` (`patientId`,`name`,`daysInterval`,`times`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `PatientPlane` (`patientId`,`medicalPlane`,`createdAt`) VALUES
-- ('','','');
-- INSERT INTO `MedicalAnalysis` (`patientId`,`name`,`description`,`status`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Appointment` (`id`,`id_Doctors`,`id_Patients`,`date`,`notes`,`createdAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `Consultants` (`id`,`id_Doctors`,`id_targetDoctor`,`id_Patients`,`title`,`description`,`createdAt`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Feedback` (`id`,`id_Patients`,`id_Doctors`,`message`,`createdAt`) VALUES
-- ('','','','','');