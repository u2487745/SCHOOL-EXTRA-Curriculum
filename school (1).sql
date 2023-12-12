-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2023 at 01:12 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `schooling` tinyint(1) NOT NULL DEFAULT 0,
  `teacherInvolvement` tinyint(1) NOT NULL DEFAULT 0,
  `note` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `Fname`, `Lname`, `email`, `number`, `class`, `city`, `schooling`, `teacherInvolvement`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 'sahil', 'khan', 'sahildeshwali1212@gmail.com', '8955892899', 'true', 'Tokyo', 0, 0, 'safasfasfasfasf', '2023-12-02 09:53:17', '2023-12-02 09:53:17'),
(2, 'sahil', 'khan', 'sahildeshwali1212@gmail.com', '8955892899', 'class 4th', 'Tokyo', 0, 0, 'etwetwet', '2023-12-02 10:13:15', '2023-12-02 10:13:15'),
(3, '', '', '', '', 'class 1st', 'London', 0, 0, '', '2023-12-02 10:14:19', '2023-12-02 10:14:19'),
(4, 'dsdfsf', 'dfsdfs', 'admin@admin.com', '4564643645', 'class 3rd', 'Paris', 0, 0, 'dfgsdfgsdfgdsfg', '2023-12-02 10:14:47', '2023-12-02 10:14:47');

-- --------------------------------------------------------

--
-- Table structure for table `circuliumactivities`
--

CREATE TABLE `circuliumactivities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `circuliumactivities`
--

INSERT INTO `circuliumactivities` (`id`, `name`, `des`, `createdAt`, `updatedAt`) VALUES
(1, 'Music', 'Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm, or otherwise expressive content. Definitions of music vary depending on culture, though it is an aspect of all human societies and a cult', '2023-12-02 07:52:36', '2023-12-02 07:52:36'),
(2, 'Dance', 'Dance is an art form, often classified as a sport, consisting of sequences of body movements with aesthetic and often symbolic value, either improvised or purposefully selected. Dance can be categorized and described by its choreography, by its repertoire', '2023-12-02 07:53:20', '2023-12-02 07:53:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `circuliumactivities`
--
ALTER TABLE `circuliumactivities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `circuliumactivities`
--
ALTER TABLE `circuliumactivities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
