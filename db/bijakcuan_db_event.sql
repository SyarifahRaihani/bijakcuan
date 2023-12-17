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
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tentang` text NOT NULL,
  `deskripsi` text NOT NULL,
  `benefit` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `waktu_mulai` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `waktu_selesai` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `link` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Webinar \"Mengelola Keuangan Bisnis dengan Bijak\"','Membahas strategi dan praktik terbaik dalam pengelolaan keuangan bisnis, dengan pemateri ahli keuangan yang terpercaya.','Join perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?\r\n','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event1.jpg','2023-12-11 04:38:27','2024-01-24 01:00:00','https://forms.gle/SxXuKvunfzqwVdsE7','Online Conference'),(2,'Kompetisi Rencana Bisnis','Kompetisi di mana pebisnis dapat menyusun rencana bisnis kreatif dan berpotensi mendapatkan pendanaan.','Join perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?\r\n','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event2.jpg','2023-12-11 04:37:32','2024-01-26 22:00:00','https://forms.gle/SxXuKvunfzqwVdsE7','Online Conference'),(3,'Webinar Dasar-dasar Pengelolaan Keuangan Bisnis','Webinar ini akan membahas konsep dasar pengelolaan keuangan bisnis untuk pebisnis usaha menengah kebawah.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?\r\n','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event3.jpg\r\n','2023-12-11 04:41:10','2023-11-14 06:00:00','https://forms.gle/TvHS41wHFisHwg92A','online Conference'),(4,'Laporan Tren Keuangan Bisnis 2023','Peluncuran laporan tahunan yang menganalisis tren keuangan terbaru yang memengaruhi pebisnis usaha menengah ke bawah.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event4.jpg','2023-12-11 04:46:32','2024-01-14 07:00:00','https://forms.gle/TvHS41wHFisHwg92A','Online Conference'),(5,'Seminar \"Mengelola Keuangan di Era Digital\"','Seminar untuk membahas teknologi terkini yang dapat membantu dalam pengelolaan keuangan bisnis.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event5.jpg','2023-12-11 04:53:23','2023-12-24 07:00:00','https://forms.gle/TvHS41wHFisHwg92A','Online Conference'),(6,'Laporan Tren Teknologi Finansial','Peluncuran laporan tahunan yang menganalisis tren teknologi finansial yang relevan untuk bisnis menengah.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event6.jpg','2023-12-11 04:53:23','2023-12-25 04:00:00','https://forms.gle/TvHS41wHFisHwg92A','Online Conference'),(7,'Seminar \"Strategi Keuangan untuk Kewirausahaan\"','Seminar tentang strategi keuangan khusus untuk pemilik bisnis kecil dan menengah.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event7.jpg','2023-12-11 04:53:23','2023-12-25 22:00:00','https://forms.gle/TvHS41wHFisHwg92A','Online Conference'),(8,'Sesi \"Membangun Dana Darurat\"','Sesi pemahaman dan perencanaan tentang pentingnya memiliki dana darurat untuk bisnis.','Ikuti perjalanan bersama kami ke dunia pengelolaan keuangan, dengan fokus khusus pengenalan pada dasar-dasar pengelolaan keuangan, investasi, dan perencanaan keuangan pribadi. ??\r\n\r\nDalam kolaborasi dengan Financial Advisor berpengalaman, event ini dirancang sebagai pengalaman yang mendalam, memperkenalkan peserta pada esensi pengelolaan keuangan dengan cara yang menyenangkan dan interaktif.\r\n\r\nBaik Anda seorang pemula atau ingin meningkatkan keterampilan Anda, program ini dirancang khusus untuk Anda! Bersiaplah untuk menyelami dasar-dasar dan lebih jauh lagi dengan bimbingan dari para ahli industri.\r\n\r\nJangan lewatkan kesempatan luar biasa ini untuk memulai perjalanan pengelolaan keuangan Anda! ?\"','✅ Diskusi dengan ahli keuangan secara live\r\n✅ Pengetahuan dan wawasan\r\n✅ E-Sertifikat\r\n✅ Relasi baru','/assets/event/event8.jpg','2023-12-11 04:53:23','2023-12-26 23:00:00','https://forms.gle/TvHS41wHFisHwg92A','Online Conference');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
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
