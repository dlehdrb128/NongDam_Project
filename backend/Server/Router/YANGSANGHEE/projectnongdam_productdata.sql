-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: projectnongdam
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `productdata`
--

DROP TABLE IF EXISTS `productdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productdata` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `PRODUCT_LOCAL` varchar(20) NOT NULL,
  `PRODUCT_NAME` varchar(50) NOT NULL,
  `PRODUCT_PRICE` int DEFAULT NULL,
  `PRODUCT_IMG` varchar(2000) NOT NULL,
  `SALE` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdata`
--

LOCK TABLES `productdata` WRITE;
/*!40000 ALTER TABLE `productdata` DISABLE KEYS */;
INSERT INTO `productdata` VALUES (1,'충북','아주싱싱한푸드리퍼브상품 1kg',10000,'/img/Fday_sec2_img_1.png',15),(2,'충남','아주싱싱한푸드리퍼브상품 1kg',20000,'/img/Fday_sec2_img_2.png',NULL),(3,'충북','아주싱싱한푸드리퍼브상품 1kg',15000,'/img/Fday_sec2_img_3.png',NULL),(4,'충북','아주싱싱한푸드리퍼브상품 1kg',10000,'/img/Fday_sec2_img_4.png',10),(5,'충북','아주싱싱한푸드리퍼브상품 1kg',13000,'/img/Fday_sec2_img_6.png',NULL),(6,'충남','아주싱싱한푸드리퍼브상품 1kg',23000,'/img/Fday_sec2_img_7.png',NULL),(7,'충북','아주싱싱한푸드리퍼브상품 1kg',9000,'/img/Fday_sec2_img_8.png',30),(9,'전북','아주싱싱한푸드리퍼브상품 1kg',10000,'/img/Fday_sec2_img_8.png',30),(10,'전남','아주싱싱한푸드리퍼브상품 1kg',20000,'/img/Fday_sec2_img_7.png',20),(11,'전북','아주싱싱한푸드리퍼브상품 1kg',15000,'/img/Fday_sec2_img_4.png',NULL),(12,'전북','아주싱싱한푸드리퍼브상품 1kg',10000,'/img/Fday_sec2_img_6.png',NULL),(13,'전북','아주싱싱한푸드리퍼브상품 1kg',10000,'/img/Fday_sec2_img_5.png',NULL),(14,'전남','아주싱싱한푸드리퍼브상품 1kg',13000,'/img/Fday_sec2_img_3.png',15),(15,'전남','아주싱싱한푸드리퍼브상품 1kg',23000,'/img/Fday_sec2_img_1.png',NULL),(16,'전북','아주싱싱한푸드리퍼브상품 1kg',9000,'/img/Fday_sec2_img_2.png',10);
/*!40000 ALTER TABLE `productdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-11 18:24:30
