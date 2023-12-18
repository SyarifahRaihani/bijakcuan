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
-- Table structure for table `course_material`
--

DROP TABLE IF EXISTS `course_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_material` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `topik_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `topik_id` (`topik_id`),
  CONSTRAINT `course_material_ibfk_1` FOREIGN KEY (`topik_id`) REFERENCES `course_topic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_material`
--

LOCK TABLES `course_material` WRITE;
/*!40000 ALTER TABLE `course_material` DISABLE KEYS */;
INSERT INTO `course_material` VALUES (1,'Selamat Datang Di Kelas!',NULL,NULL,1),(2,'Definisi Pengelolaan Keuangan',NULL,NULL,1),(3,'Pentingnya Pengelolaan Keuangan Bisnis',NULL,NULL,1),(4,'Konsep Pendapatan & Biaya',NULL,NULL,2),(5,'Pendapatan vs Biaya',NULL,NULL,2),(6,'Accrual vs Cash Basis',NULL,NULL,2),(7,'Pendapatan vs Penerimaan',NULL,NULL,2),(8,'Biaya vs Pengeluaran',NULL,NULL,2),(9,'Rangkuman',NULL,NULL,2),(10,'Konsep dan Pentingnya Dana Darurat',NULL,NULL,3),(11,'Cara Menghitung Jumlah Dana Darurat',NULL,NULL,3),(12,'Strategi Pengelolaan Dana Darurat Bisnis',NULL,NULL,3),(13,'Rangkuman',NULL,NULL,3),(14,'Jenis-jenis Investasi',NULL,NULL,4),(15,'Risiko dan Manfaat Investasi',NULL,NULL,4),(16,'Cara Memilih Investasi yang Tepat',NULL,NULL,4),(17,'Rangkuman',NULL,NULL,4),(18,'Pengantar Mengelola Keuangan Bisnis',NULL,NULL,5),(19,'Membuat Anggaran',NULL,NULL,5),(20,'Kas',NULL,NULL,5),(21,'Piutang',NULL,NULL,5),(22,'Persediaan',NULL,NULL,5),(23,'Utang',NULL,NULL,5),(24,'Monitor Aset',NULL,NULL,5),(25,'Evaluasi Pengeluaran',NULL,NULL,5),(26,'Perpajakan Bisnis',NULL,NULL,5),(27,'Rangkuman',NULL,NULL,5),(28,'Simulasi Laporan Keuangan pada Bisnis',NULL,NULL,6),(29,'Catatan Atas Laporan Keuangan',NULL,NULL,6),(30,'Rangkuman',NULL,NULL,6),(31,'Konsep Analisa Laporan Keuangan',NULL,NULL,7),(32,'Metode & Rasio Analisa Laporan Keuangan',NULL,NULL,7),(33,'Analisa dengan Metode Analisis Horizontal & Vertikal',NULL,NULL,7),(34,'Analisa Rasio Likuiditas',NULL,NULL,7),(35,'Analisa Rasio Aktivitas',NULL,NULL,7),(36,'Analisa Rasio Profitabilitas',NULL,NULL,7),(37,'Analisa Rasio Cakupan / Coverage Ratio',NULL,NULL,7),(38,'Rangkuman',NULL,NULL,7),(39,'Pengantar Penggunaan QRIS',NULL,NULL,8),(40,'Penerapan QRIS dalam Bisnis Retail dan Layanan',NULL,NULL,8),(41,'Analisis Data melalui QRIS',NULL,NULL,8),(42,'Rangkuman',NULL,NULL,8),(43,'Pengantar Pemasaran dan Promosi Bisnis',NULL,NULL,9),(44,'Penyusunan Rencana Pemasaran',NULL,NULL,9),(45,'Rangkuman',NULL,NULL,9),(46,'Refleksi dan Penutup',NULL,NULL,10);
/*!40000 ALTER TABLE `course_material` ENABLE KEYS */;
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
