CREATE DATABASE db_vent2u;

USE db_vent2u;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `vents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `temp` varchar(255) DEFAULT NULL,
  `fan` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `location` tinyint DEFAULT NULL,
  `open` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `presets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `temp` tinyint DEFAULT NULL,
  `fan` tinyint DEFAULT NULL,
  `light` tinyint DEFAULT NULL,
  `seat` tinyint DEFAULT NULL,
  `user_id` tinyint DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users`
(`username`,
`password`,
`first_name`,
`last_name`,
`createdAt`,
`updatedAt`)
VALUES
(
"nikolaj",
"assForCash",
"nikolaj",
"bigDig",
NOW(),
NOW());

INSERT INTO `presets`
(
`temp`,
`fan`,
`light`,
`seat`,
`user_id`,
`createdAt`,
`updatedAt`)
VALUES
(
1,
1,
1,
1,
1,
NOW(),
NOW());