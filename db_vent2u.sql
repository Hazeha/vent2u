-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1:3307
-- Genereringstid: 20. 11 2020 kl. 13:12:41
-- Serverversion: 8.0.21
-- PHP-version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_vent2u`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `lights`
--

DROP TABLE IF EXISTS `lights`;
CREATE TABLE IF NOT EXISTS `lights` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `room` int NOT NULL,
  `position` tinyint NOT NULL,
  `power` tinyint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `lights`
--

INSERT INTO `lights` (`ID`, `room`, `position`, `power`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 3, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 4, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 5, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 6, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 7, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 8, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 9, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 10, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 11, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 1, 12, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 1, 13, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 1, 14, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 1, 15, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 1, 16, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 1, 17, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 1, 18, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 1, 19, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 1, 20, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 2, 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 2, 2, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 2, 3, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 2, 4, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 2, 5, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 2, 6, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 2, 7, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 2, 8, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 2, 9, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 2, 10, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 2, 11, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 2, 12, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 2, 13, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 2, 14, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 2, 15, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 2, 16, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 2, 17, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 2, 18, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 2, 19, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 2, 20, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 3, 1, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 3, 2, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 3, 3, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 3, 4, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 3, 5, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 3, 6, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 3, 7, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 3, 8, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 3, 9, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 3, 10, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 3, 11, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 3, 12, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 3, 13, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 3, 14, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 3, 15, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 3, 16, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 3, 17, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 3, 18, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 3, 19, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 3, 20, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `presets`
--

DROP TABLE IF EXISTS `presets`;
CREATE TABLE IF NOT EXISTS `presets` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `temp` float NOT NULL,
  `fan` int NOT NULL,
  `light` int NOT NULL,
  `room` int NOT NULL,
  `seat` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `user_id` (`user_id`),
  KEY `seat` (`seat`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `presets`
--

INSERT INTO `presets` (`ID`, `temp`, `fan`, `light`, `room`, `seat`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 26, 22, 2, 1, 19, 1, '0000-00-00 00:00:00', '2020-11-20 13:08:54'),
(2, 24, 60, 80, 1, 8, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `rooms`
--

DROP TABLE IF EXISTS `rooms`;
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `location` tinyint DEFAULT NULL,
  `open` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `rooms`
--

INSERT INTO `rooms` (`id`, `name`, `location`, `open`, `createdAt`, `updatedAt`) VALUES
(1, 'D3-17', 11, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'D3-18', 12, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'string', 0, 0, '2020-11-19 14:37:28', '2020-11-19 14:37:28');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `seats`
--

DROP TABLE IF EXISTS `seats`;
CREATE TABLE IF NOT EXISTS `seats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `temp` varchar(255) DEFAULT NULL,
  `fan` varchar(255) DEFAULT NULL,
  `light` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `seats`
--

INSERT INTO `seats` (`id`, `room`, `position`, `temp`, `fan`, `light`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, '1', '1', NULL, NULL, NULL, '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '1', '2', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '1', '3', NULL, NULL, NULL, '1', '0000-00-00 00:00:00', '2020-11-20 13:08:28'),
(4, '1', '4', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '1', '5', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, '1', '6', NULL, NULL, NULL, '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, '1', '7', NULL, NULL, NULL, '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '1', '8', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '1', '9', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '1', '10', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, '1', '11', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, '1', '12', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, '1', '13', NULL, NULL, NULL, '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, '1', '14', NULL, NULL, NULL, '3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, '1', '15', NULL, NULL, NULL, '4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, '1', '16', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, '1', '17', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, '1', '18', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, '1', '19', NULL, NULL, NULL, '1', '0000-00-00 00:00:00', '2020-11-20 13:08:54'),
(20, '1', '20', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, '2', '1', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, '2', '2', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, '2', '3', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, '2', '4', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, '2', '5', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, '2', '6', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, '2', '7', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, '2', '8', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, '2', '9', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, '2', '10', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, '2', '11', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, '2', '12', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, '2', '13', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, '2', '14', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, '2', '15', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, '2', '16', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, '2', '17', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, '2', '18', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, '2', '19', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, '2', '20', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, '3', '1', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, '3', '2', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, '3', '3', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, '3', '4', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, '3', '5', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, '3', '6', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, '3', '7', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, '3', '8', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, '3', '9', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, '3', '10', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, '3', '11', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, '3', '12', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, '3', '13', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, '3', '14', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, '3', '15', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, '3', '16', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, '3', '17', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, '3', '18', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, '3', '19', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, '3', '20', NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `createdAt`, `updatedAt`) VALUES
(1, '123', 'admin', '32', '123', '0000-00-00 00:00:00', '2020-11-20 12:39:11'),
(2, 'Anamika', 'admin', 'Anamika', 'Root', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `vents`
--

DROP TABLE IF EXISTS `vents`;
CREATE TABLE IF NOT EXISTS `vents` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `room` int NOT NULL,
  `position` tinyint NOT NULL,
  `temp` tinyint DEFAULT NULL,
  `fan` tinyint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Data dump for tabellen `vents`
--

INSERT INTO `vents` (`ID`, `room`, `position`, `temp`, `fan`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 2, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 3, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 4, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 5, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 6, NULL, NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 7, NULL, NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 8, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 9, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 10, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 1, 11, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 1, 12, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 1, 13, NULL, NULL, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 1, 14, NULL, NULL, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 1, 15, NULL, NULL, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 1, 16, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 1, 17, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 1, 18, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 1, 19, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 1, 20, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 2, 1, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 2, 2, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 2, 3, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 2, 4, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 2, 5, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 2, 6, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 2, 7, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 2, 8, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 2, 9, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 2, 10, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 2, 11, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 2, 12, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 2, 13, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 2, 14, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 2, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 2, 16, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 2, 17, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 2, 18, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 2, 19, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 2, 20, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 3, 1, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 3, 2, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 3, 3, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 3, 4, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 3, 5, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 3, 6, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 3, 7, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 3, 8, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 3, 9, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 3, 10, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 3, 11, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 3, 12, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 3, 13, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 3, 14, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 3, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 3, 16, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 3, 17, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 3, 18, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 3, 19, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 3, 20, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `presets`
--
ALTER TABLE `presets`
  ADD CONSTRAINT `presets_ibfk_1` FOREIGN KEY (`seat`) REFERENCES `vents` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;