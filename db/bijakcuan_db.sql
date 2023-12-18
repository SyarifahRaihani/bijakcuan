CREATE DATABASE  IF NOT EXISTS `bijakcuan_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bijakcuan_db`;
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
INSERT INTO `course_material` VALUES (1,'Selamat Datang Di Kelas!',NULL,NULL,1),(4,'Konsep Pendapatan & Biaya','https://www.youtube.com/embed/nq4TYRomYaA',NULL,2),(5,'Pendapatan vs Biaya','https://www.youtube.com/embed/gOBbqRcHlPU',NULL,2),(6,'Accrual vs Cash Basis','https://www.youtube.com/embed/oFVEN0aXF88',NULL,2),(7,'Pendapatan vs Penerimaan','https://www.youtube.com/embed/tw1YPJHoTEY',NULL,2),(8,'Biaya vs Pengeluaran','https://www.youtube.com/embed/4unonLdINLY',NULL,2),(9,'Rangkuman','https://www.youtube.com/embed/yTj5f1SSM0A',NULL,2),(10,'Konsep dan Pentingnya Dana Darurat','https://www.youtube.com/embed/eWwJ87tN7vQ?si=hLFQL5sJt61RyIYh',NULL,3),(11,'Cara Menghitung Jumlah Dana Darurat','https://www.youtube.com/embed/jsR3OD6okEg',NULL,3),(12,'Strategi Pengelolaan Dana Darurat Bisnis','https://www.youtube.com/embed/JTkvLOwdqao',NULL,3),(13,'Rangkuman',NULL,NULL,3),(14,'Jenis-jenis Investasi','https://www.youtube.com/embed/BpGQMaz9Hwo',NULL,4),(15,'Risiko dan Manfaat Investasi','https://www.youtube.com/embed/BpGQMaz9Hwo',NULL,4),(16,'Cara Memilih Investasi yang Tepat','https://www.youtube.com/embed/BpGQMaz9Hwo',NULL,4),(17,'Rangkuman','https://www.youtube.com/embed/BpGQMaz9Hwo',NULL,4),(18,'Pengantar Mengelola Keuangan Bisnis','https://www.youtube.com/embed/xAI9BGqgdM0',NULL,5),(19,'Membuat Anggaran','https://www.youtube.com/embed/ZspHX6N1PCs',NULL,5),(20,'Kas','https://www.youtube.com/embed/tZEORVQrl_Q',NULL,5),(21,'Piutang','https://www.youtube.com/embed/7Eb0-hV2_ug',NULL,5),(22,'Persediaan','https://www.youtube.com/embed/5P6rXduEct8',NULL,5),(23,'Utang','https://www.youtube.com/embed/2_zwbFLZw7w',NULL,5),(24,'Monitor Aset',NULL,NULL,5),(25,'Evaluasi Pengeluaran','https://www.youtube.com/embed/I3B1H173Ids',NULL,5),(26,'Perpajakan Bisnis',NULL,NULL,5),(27,'Rangkuman',NULL,NULL,5),(28,'Simulasi Laporan Keuangan pada Bisnis','https://www.youtube.com/embed/I3B1H173Ids',NULL,6),(29,'Catatan Atas Laporan Keuangan','https://www.youtube.com/embed/p8FsXrQFZ2w',NULL,6),(30,'Rangkuman','https://www.youtube.com/embed/EN7S5SGbwUg',NULL,6),(31,'Konsep Analisa Laporan Keuangan',NULL,NULL,7),(32,'Metode & Rasio Analisa Laporan Keuangan',NULL,NULL,7),(33,'Analisa dengan Metode Analisis Horizontal & Vertikal',NULL,NULL,7),(34,'Analisa Rasio Likuiditas',NULL,NULL,7),(35,'Analisa Rasio Aktivitas',NULL,NULL,7),(36,'Analisa Rasio Profitabilitas',NULL,NULL,7),(37,'Analisa Rasio Cakupan / Coverage Ratio',NULL,NULL,7),(38,'Rangkuman',NULL,NULL,7),(39,'Pengantar Penggunaan QRIS',NULL,NULL,8),(40,'Penerapan QRIS dalam Bisnis Retail dan Layanan',NULL,NULL,8),(41,'Analisis Data melalui QRIS',NULL,NULL,8),(42,'Rangkuman',NULL,NULL,8),(43,'Pengantar Pemasaran dan Promosi Bisnis',NULL,NULL,9),(44,'Penyusunan Rencana Pemasaran',NULL,NULL,9),(45,'Rangkuman',NULL,NULL,9),(46,'Refleksi dan Penutup',NULL,NULL,10);
/*!40000 ALTER TABLE `course_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_topic`
--

DROP TABLE IF EXISTS `course_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_topic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_topic`
--

LOCK TABLES `course_topic` WRITE;
/*!40000 ALTER TABLE `course_topic` DISABLE KEYS */;
INSERT INTO `course_topic` VALUES (1,'Pengantar'),(2,'Pengelolaan Pendapatan & Biaya'),(3,'Pemahaman Dana Darurat'),(4,'Pengenalan Investasi untuk Bisnis'),(5,'Mengelola Keuangan Bisnis'),(6,'Pembukuan & Laporan Keuangan'),(7,'Analisa Laporan Keuangan'),(8,'Digitalisasi Pembayaran'),(9,'Pemasaran dan Promosi'),(10,'Penutup');
/*!40000 ALTER TABLE `course_topic` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `promo_id` int DEFAULT NULL,
  `paket` varchar(20) NOT NULL,
  `total` int NOT NULL,
  `metode_pembayaran` varchar(255) DEFAULT NULL,
  `status_order` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `is_deleted` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('BC-Bulanan-170282958468073',2,NULL,'Bulanan',98909,NULL,'settlement','2023-12-17 23:13:04','2023-12-17 23:14:50',NULL),('BC-Bulanan-170287349506043',3,NULL,'Bulanan',98941,NULL,'settlement','2023-12-18 11:24:56','2023-12-18 11:25:56',NULL),('BC-Bulanan-20231218-440613',7,NULL,'Bulanan',98976,NULL,'settlement','2023-12-18 12:05:55','2023-12-18 12:06:41',NULL),('BC-Bulanan-20231218-988038',5,NULL,'Bulanan',98994,NULL,'settlement','2023-12-18 11:35:39','2023-12-18 11:50:11',NULL),('BC-Trial-170282118579366',1,NULL,'Trial',0,NULL,NULL,'2023-12-17 20:53:05',NULL,NULL),('BC-Trial-170282174085767',1,NULL,'Trial',0,NULL,NULL,'2023-12-17 21:02:22',NULL,NULL),('BC-Trial-170283134643140',3,NULL,'Trial',0,NULL,NULL,'2023-12-17 23:42:26',NULL,NULL),('BC-Trial-170283326896318',3,NULL,'Trial',0,NULL,NULL,'2023-12-18 00:14:28',NULL,NULL),('BC-Trial-170283333654331',3,NULL,'Trial',0,NULL,'settlement','2023-12-18 00:15:36',NULL,NULL),('BC-Trial-20231218-084940',7,NULL,'Trial',0,NULL,'settlement','2023-12-18 12:04:40',NULL,NULL),('BC-Trial-20231218-124968',5,NULL,'Trial',0,NULL,'settlement','2023-12-18 11:35:32',NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promo`
--

DROP TABLE IF EXISTS `promo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `nama_promo` varchar(255) NOT NULL,
  `deskripsi_promo` varchar(255) DEFAULT NULL,
  `kode_promo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promo`
--

LOCK TABLES `promo` WRITE;
/*!40000 ALTER TABLE `promo` DISABLE KEYS */;
INSERT INTO `promo` VALUES (1,'/assets/promo/image 2.png','Diskon Khusus untuk Pelanggan Kartu BCA','Dapatkan diskon eksklusif dengan total 30% bagi pengguna bank BCA','BCA30CUAN'),(2,'/assets/promo/image 3.png','Bonus E-book Pengelolaan Keuangan untuk Pemula','Berlangganan paket lifetime onus e-book eksklusif tentang pengelolaan keuangan untuk pemula.','EBOO72341K'),(3,'/assets/promo/image 4.png\"','Diskon Pelatihan Pengelolaan Utang','Hemat 25% untuk pelatihan strategi mengelola utang bisnis dengan lebih efektif dan hindari masalah keuangan.','DEBTFREE25'),(4,'/assets/promo/image 5.png','Diskon 15% Seminar Keuangan Online','Nikmati diskon 15% untuk tiket seminar keuangan. Pelajari dari para ahli keuangan tanpa harus keluar rumah.','SEMINAR15OF');
/*!40000 ALTER TABLE `promo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `is_deleted` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

-- LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
-- INSERT INTO `users` VALUES (1,'Afrizal Yogi','afrizalyogi','afrizalyogi@gmail.com','$2b$10$eeXrol7lSSj5OMBWU4DnmeD7DFDGyA4YkstmjDPENoK5EJfAZNwJq','+6288276594407',NULL,NULL,NULL,NULL),(2,'Achmad Imam','achmadimam','achmadimam@gmail.com','$2b$10$Vq2He0MHeVZyjolwoj0Ht.o6EYgKCcOTXEuIhiQxvFJ32.aFf8bs.','+62812345678',NULL,NULL,NULL,NULL),(3,'Amida Zulfa','amidazulfa','amidazulfa@gmail.com','$2b$10$QcpDXrDvjYzK68sVYPq5IuoBt72TKwRg/Jnia2IwCLwjI13MzxeDS','+6281324248',NULL,NULL,NULL,NULL),(4,'a','a','a@a','$2b$10$V07dA9KGDRCjmvawnuFVR.K1HZ5HpqdDdsJNAqWAAKsEX6jd1k9bu','',NULL,NULL,NULL,NULL),(5,'Anandita K','ananditak','ananditak@gmail.com','$2b$10$HJ/3Hi9txMaQC5GO4fMXmOabryagj0ifHjdeNhZCeGOW6S9iBNC.i','+62812367123',NULL,NULL,NULL,NULL),(6,'Anandita K','ananditak','ananditak@gmail.com','$2b$10$LnL3MKeIrgTmqVvxfEhqKulJOyDxJGh7CX8R1CMtCd2DKdv5N85Ym','+62812367123',NULL,NULL,NULL,NULL),(7,'Syarifah','syarifah','syarifah@gmail.com','$2b$10$J5Cdk1.LM/NrFgnCrN8lBOrEzV1eHYSsP30HlifTB9Wyf7CuiyuT.','+628134786234',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
-- UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18 15:20:16
