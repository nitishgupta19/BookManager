-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 17, 2023 at 07:20 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_manager`
--
DROP DATABASE IF EXISTS `book_manager`;
CREATE DATABASE IF NOT EXISTS `book_manager` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `book_manager`;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `iBookId` int NOT NULL AUTO_INCREMENT,
  `vName` varchar(100) NOT NULL,
  `vAuthor` varchar(100) NOT NULL,
  `vDescription` varchar(200) NOT NULL,
  `vPublisher` varchar(100) NOT NULL,
  `iPrice` int NOT NULL,
  `iTotalPages` int NOT NULL,
  `iUserId` int NOT NULL,
  PRIMARY KEY (`iBookId`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`iBookId`, `vName`, `vAuthor`, `vDescription`, `vPublisher`, `iPrice`, `iTotalPages`, `iUserId`) VALUES
(1, 'geetaa', 'krishana', 'spritual book', 'krishna', 999, 5000, 6),
(2, 'one', 'one', 'one', 'one', 123, 123, 6),
(3, 'two', 'two', 'two', 'two', 123, 123, 6),
(4, 'three`', 'three', 'three', 'three', 123, 123, 6),
(5, 'hello ', 'hello', 'hello', 'hello', 123, 123, 6),
(6, 'hello', 'hello', 'hello', 'hello', 123, 123, 6),
(7, 'two', 'teowjf', 'jsldfljkj', 'jklsdfgjkl`', 123, 123, 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `iUserId` int NOT NULL AUTO_INCREMENT,
  `vFirstName` varchar(50) NOT NULL,
  `vLastName` varchar(50) NOT NULL,
  `vFullName` varchar(120) NOT NULL,
  `vEmail` varchar(80) NOT NULL,
  `vPassword` text NOT NULL,
  `eStatus` varchar(50) NOT NULL,
  `dtCreatedAt` timestamp NOT NULL,
  `dtModifiedAt` timestamp NOT NULL,
  `vAccessKey` varchar(255) NOT NULL,
  PRIMARY KEY (`iUserId`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`iUserId`, `vFirstName`, `vLastName`, `vFullName`, `vEmail`, `vPassword`, `eStatus`, `dtCreatedAt`, `dtModifiedAt`, `vAccessKey`) VALUES
(3, 'hello', 'user', 'hello user', 'hello@yopmail.com', '$2a$10$WPxis0qXcDmMIDNtW87p3u4oOiJkwLPSjXvRolfRcMnM4omQuCN6m', 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '933955_sndk-task_1694977532932'),
(6, 'honey', 'honey', 'honey honey', 'honey@yopmail.com', '$2a$10$7fmh7gQ6KYf3twgZE.M6r.Dj7n1iBIR1aZxQ0H7LBKq5qnryg8wcG', 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(5, 'nitish', 'gupta', 'nitish gupta', 'nitish@yopmail.com', '$2a$10$sY1CdsvDVRHVoomQhh3/zOfS3J2hLkRYJ8dFNTgllGd9Q/B5xHxcS', 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(7, 'yuwam', 'sharma', 'yuwam sharma', 'yuwam@yopmail.com', '$2a$10$c1kkdjeftARlfFbhKRcMA.Bw04lJUV0Hp2khrh1YrU/GLYzLspN6O', 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '411059_sndk-task_1694968194364');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
