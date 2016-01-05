-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` CHAR NULL DEFAULT NULL,
  `Password` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Items'
-- This table defines each item, it is not a list of items which exist
-- ---

DROP TABLE IF EXISTS `Items`;
    
CREATE TABLE `Items` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `ItemName` CHAR NULL DEFAULT NULL,
  `Price` INTEGER NULL DEFAULT NULL,
  `GameEffect` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'This table defines each item, it is not a list of items whic';

-- ---
-- Table 'UserItem'
-- Many-to-Many relationships between items and users
-- ---

DROP TABLE IF EXISTS `UserItem`;
    
CREATE TABLE `UserItem` (
  `UserId` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `ItemId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) COMMENT 'Many-to-Many relationships between items and users';

-- ---
-- Table 'Cats'
-- Types of cats, not a list of all cats
-- ---

DROP TABLE IF EXISTS `Cats`;
    
CREATE TABLE `Cats` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Description` CHAR NULL DEFAULT NULL,
  `GameEffect` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'Types of cats, not a list of all cats';

-- ---
-- Table 'IndividualCats'
-- There are all the cats in the game, not the ''kind of cat''
-- ---

DROP TABLE IF EXISTS `IndividualCats`;
    
CREATE TABLE `IndividualCats` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` INTEGER NULL DEFAULT NULL,
  `Owner` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'There are all the cats in the game, not the ''kind of cat''';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `UserItem` ADD FOREIGN KEY (UserId) REFERENCES `Users` (`id`);
ALTER TABLE `UserItem` ADD FOREIGN KEY (ItemId) REFERENCES `Items` (`id`);
ALTER TABLE `IndividualCats` ADD FOREIGN KEY (Owner) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `UserItem` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Cats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `IndividualCats` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Name`,`Password`) VALUES
-- ('','','');
-- INSERT INTO `Items` (`id`,`ItemName`,`Price`,`GameEffect`) VALUES
-- ('','','','');
-- INSERT INTO `UserItem` (`UserId`,`ItemId`) VALUES
-- ('','');
-- INSERT INTO `Cats` (`id`,`Description`,`GameEffect`) VALUES
-- ('','','');
-- INSERT INTO `IndividualCats` (`id`,`Name`,`Owner`) VALUES
-- ('','','');
