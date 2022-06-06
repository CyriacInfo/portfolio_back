/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `articles` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR (255) NOT NULL,
  `description` VARCHAR (255) NOT NULL,
  `paraf` TEXT,
  `imgName` VARCHAR (255) NOT NULL,
  `technologies` VARCHAR (255) NOT NULL,
  `date` VARCHAR (255) NOT NULL,
  `urlProject` VARCHAR (200)
) ENGINE = InnoDB;