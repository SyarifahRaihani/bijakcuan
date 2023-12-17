-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: bijakcuan_db
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artikel`
--

DROP TABLE IF EXISTS `artikel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artikel` (
  `id` int NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artikel`
--

LOCK TABLES `artikel` WRITE;
/*!40000 ALTER TABLE `artikel` DISABLE KEYS */;
INSERT INTO `artikel` VALUES (1,'Mengoptimalkan Pengelolaan Keuangan untuk Usaha Menengah Kebawah','Usaha menengah kebawah (UMKM) adalah tulang punggung ekonomi di banyak negara. Namun, seringkali UMKM menghadapi tantangan dalam mengelola keuangan mereka dengan efisien dan efektif. Mengoptimalkan pengelolaan keuangan menjadi kunci utama bagi UMKM agar dapat mencapai keberhasilan finansial yang berkelanjutan. Berikut adalah beberapa strategi yang dapat membantu UMKM mengatasi tantangan tersebut:','/assets/artikel/artikel-1.jpg'),(2,'5 Cara Mengatur Keuangan untuk Usaha Kecil Anda','Usaha kecil adalah tulang punggung perekonomian, namun, mengelola		keuangan untuk usaha kecil dapat menjadi tugas yang menantang. Artikel ini akan membahas lima cara efektif untuk mengatur\r\nkeuangan usaha kecil Anda.','/assets/artikel/artikel-2.jpg'),(3,'Strategi Membangun Dana Darurat Bisnis','Dalam dunia bisnis yang penuh dengan ketidakpastian, memiliki dana darurat bisnis menjadi krusial untuk menjaga kelangsungan operasional dan keberlanjutan usaha. Dana darurat bisnis berfungsi sebagai lapisan keamanan yang memberikan perlindungan finansial saat menghadapi situasi darurat atau krisis tak terduga.','/assets/artikel/artikel-3.jpg'),(4,'Cara Efektif Menggunakan Teknologi dalam Pengelolaan Keuangan Bisnis','Pada era digital ini, penggunaan teknologi menjadi kunci bagi pebisnis usaha menengah kebawah untuk meningkatkan efisiensi dan ketepatan dalam pengelolaan keuangan. Berikut adalah beberapa cara\r\nefektif untuk memanfaatkan teknologi guna meraih keberhasilan finansial bisnis Anda:','/assets/artikel/artikel-4.jpg'),(5,'Kiat Meningkatkan Pendapatan Bisnis Tanpa Menambah Utang','Pendapatan adalah salah satu aspek kunci dalam kesuksesan bisnis. Meskipun seringkali pemilik bisnis menghadapi kebutuhan untuk	mendapatkan pendanaan tambahan, ada sejumlah strategi yang dapat diterapkan untuk meningkatkan pendapatan tanpa harus bergantung pada utang tambahan. Berikut adalah beberapa kiat yang dapat membantu Anda meningkatkan pendapatan bisnis tanpa harus bergantung pada utang tambahan:','/assets/artikel/artikel-5.jpg');
/*!40000 ALTER TABLE `artikel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18  1:44:30
