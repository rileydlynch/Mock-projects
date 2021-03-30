-- Tables section

SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS; 
SET FOREIGN_KEY_CHECKS=0;   

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(60),
	last_name VARCHAR(60),
	username VARCHAR(100) NOT NULL,
	password VARCHAR(120) NOT NULL,
	email VARCHAR(100) NOT NULL,
	join_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_login TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE photos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	tags_id INT,
	likes_id INT,
	comments_id INT,
	image_path VARCHAR(255) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users (id),
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE hashtags(
	id INT AUTO_INCREMENT PRIMARY KEY,
	photos_id INT,
	tags varchar(200),
	FOREIGN KEY (photos_id) REFERENCES photos (id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*CREATE TABLE taglinks(
	photos_id INT,
	hashtags_id INT,
	FOREIGN KEY (photos_id) REFERENCES photos (id),
	FOREIGN KEY (hashtags_id) REFERENCES hashtags (id)
    PRIMARY KEY (photos_id,hashtags_id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;*/

CREATE TABLE comments(
	id INT AUTO_INCREMENT PRIMARY KEY,
	users_id INT,
	photos_id INT,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	content varchar(500),
	FOREIGN KEY (photos_id) REFERENCES photos (id),
	FOREIGN KEY (users_id) REFERENCES users (id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE likes(
	id INT AUTO_INCREMENT PRIMARY KEY,
	photo_id INT,
	user_id INT,
	FOREIGN KEY (photo_id) REFERENCES photos (id),
	FOREIGN KEY (user_id) REFERENCES users (id)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE follows(
	followed INT,
	follower INT,
	FOREIGN KEY (followed) REFERENCES users (id),
	FOREIGN KEY (follower) REFERENCES users (id)	
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

-- Triggers section

DELIMITER $$

CREATE TRIGGER after_photos_insert
BEFORE INSERT ON photos FOR EACH ROW
BEGIN
    SET NEW.image_path = REPLACE(NEW.image_path,'\"','');
END$$

DELIMITER ;
