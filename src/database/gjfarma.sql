-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gjfarma
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Maybelline'),(2,'Lysoform'),(3,'Listerine'),(4,'Bokang'),(5,'Estrella'),(6,'Protex'),(7,'Downy'),(8,'Cif'),(9,'Skip'),(10,'Vichy');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `shipping_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_idx` (`user_id`),
  KEY `envios_idx` (`shipping_id`),
  CONSTRAINT `envios` FOREIGN KEY (`shipping_id`) REFERENCES `shippings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `usuarios` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Belleza'),(2,'Salud'),(3,'Limpieza');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_idx` (`product_id`),
  KEY `cart_idx` (`cart_id`),
  CONSTRAINT `cart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `productos` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(45) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categorias_idx` (`category_id`),
  KEY `marcas_idx` (`brand_id`),
  KEY `imagen_idx` (`image_id`),
  CONSTRAINT `categorias` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `imagen` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `marcas` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Labial Líquido','Lorem ipsum dolor sit amet.',1200,25,NULL,NULL,NULL),(2,'Limpiador gel con lavandina','Lorem ipsum dolor sit amet.',300,25,NULL,NULL,NULL),(3,'Enjuague bucal','Lorem ipsum dolor sit amet.',450,25,NULL,NULL,NULL),(4,'Termometro digital infrarrojo','Termómetro Infrarrojo Bokang-BK8005 obtiene la temperatura corporal humana midiendo la radiación térmica de la frente del paciente. Memoria que almacena hasta 32 registros de mediciones. Funciona con 2 pilas AA (no incluidas)',2500,7,NULL,NULL,NULL),(5,'Jabón líquido para mano','Protex® te ofrece una prolongada protección contra bacterias para la buena salud de tu piel y la de tu familia.\r\nBeneficios:\r\n-Protex® Macadamia elimina 99.9% de las bacterias de la piel¹\r\n-Su fórmula combinada con extracto de macadamia ayuda a dejar la piel saludable, protegida y con una sensación de humectación',190,35,NULL,NULL,NULL),(6,'Pompones algodón','Elaborados con 100% algodón de máxima pureza, son especialmente recomendados para uso cosmético. Por su nivel de suavidad son especiales par los cuidados diarios de la piel. También se los puede utilizar para sacar el esmalte de las uñas.',120,100,NULL,NULL,NULL),(7,'Suavizante concentrado','Suavizante para la ropa Downy Concentrado protege tu ropa contra los malos olores. Downy posee cápsulas de perfume que neutrializan los malos olores, y permiten que tengas perfume en tu ropa todo el día. Downy Concentrado, vestite de perfume todo el día.\r\n\r\n- Protege de Malos Olores\r\n- Perfume Duradero\r\n- Suavizante Concentrado, Media Tapita Alcanza\r\n- Suavidad Increíble\r\n- Facilita el Planchado',200,70,NULL,NULL,NULL),(8,'Detergente active gel','Cif Detergente Active Gel Limón Verde (500 ml), con fórmula evolucionada, se mantiene por más tiempo en tu esponja versus lavavajillas regulares. Si disfrutaste de una comida un poco grasosa o aceitosa, el detergente de platos Cif Active Gel Limón Verde sin dudas te va a salvar. La grasa se adhiere a los platos y plásticos, y los aceites son inmunes al efecto del agua: lo que necesitas es un detergente líquido como alguno de la línea de Cif Active Gel, que terminan con la grasa de modo definitivo dejando los platos limpios y usando menos cantidad de producto.',185,122,NULL,NULL,NULL),(9,'Jabón líquido baja espuma','El jabón líquido Skip Regular con pH Balanceado, protege contra los 5 signos de daño. Gracias a su tecnología Fibercare Serum el nuevo Skip Fibercare líquido protege tu ropa contra los 5 signos de daño: Mantiene colores, previene pelotitas, elimina manchas, cuida texturas y reduce el amarillentamiento. Recomendaciones: leé bien las instrucciones de las etiquetas que trae cada prenda, ya que no todas son aptas para lavarropas. Luego, separá las prendas por colores; hacé un lavado para ropa blanca y clara, y otro para las de color. Si alguna prenda está manchada, utilizá antes algún prelavado, que se aplica directo sobre la mancha y se deja actuar durante 5 minutos antes del lavado. Dosificación: una tapa al ras (100?ml) basta para una carga completa de ropa. Coloque el producto en el compartimento del lavado de la gaveta de su lavarropas. Para lavado a mano, utilice 1 tapa (100 ML) para una balde de agua (10 L). Para ropa muy sucia, dosifica 1 tapa y media (150?ml). Si se presentan manchas difíciles, aplique el producto directamente sobre las mismas. Ideal para el cuidado diario de tu ropa, ya sea blanca, oscura o de color. No se recomienda el uso en lana y seda.',780,70,NULL,NULL,NULL),(10,'Polvo compacto','¡Lucí una piel bronceada todo el año! Probá el polvo compacto Super Natural Sun.\r\n\r\nTonalizador compacto. Para todo tipo de piel.\r\n\r\nModo de uso:\r\n\r\nUtilizá el cisne aplicador y expandí delicadamente desde el centro hacia los laterales',650,55,NULL,NULL,NULL),(11,'Máscara de pestañas','Obtené pestañas largas e impactantes al instante\r\n\r\nLe da volumen y longitud a las pestañas\r\n\r\nEl cepillo de doble curva impacta en las pestañas desde el comienzo de las mismas para levantarlas y darles volumen\r\n\r\nModo de uso:\r\n\r\nUsar el cepillo aplicandolo en las pestañas desde el comienzo hasa el fina de las mismas. Aplicar hasta obtener el efecto deseado.',1300,75,NULL,NULL,NULL),(12,'Aqualia thermal','Nueva fórmula con 97% de ingredientes de origen natural. Eficacia 48hs, testeada incluso en condiciones extremas como polución, stress y condiciones climáticas adversas. Formulada con una dosis precisa para re hidratar tu piel. Tratamiento hidratante, apto para pieles sensibles, normales a secas.\r\nRecarga de hitradatación a tu piel, propicia un comfort intenso y mantiene la hidratacion hasta 48 horas.Enriquecido con agua mineralizante de Vichy para fortificar y proteger la piel con ingredientes de origen natural,como acido hialurónico y el azucar vegetal manosa. Suave y seguro para todo tipo de pieles,testeado sobre un 100% de pieles sensibles bajo control dermatologico.\r\nSe recomienda a plicar mañana y/o noche sobre la piel perfectamente limpia; colocar el producto con la yema de los dedos, distribuído en 5 puntos del rostro: 3 en la línea media (frente, naríz y mentón) y 2 en los extremos (pómulos); y distribuir desde la línea media del rostro hacia afuera.\r\nSi utilizás un tratamiento anti-edad, primero limpiá tu piel, aplicá el tratamiento hidratante y al final el tratamiento anti-edad. Tu piel estará lista para maquillarse.\r\nEntre los principales componentes se hallan: ácido hialurónico de origen natural, Agua termal mineralizante de Vichy, Azúcares de origen natural y minerales.',4500,43,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin'),(2,'customer');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shippings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` char(80) NOT NULL,
  `zip` int(11) NOT NULL,
  `cost` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` char(45) NOT NULL,
  `last_name` char(45) NOT NULL,
  `password` char(45) NOT NULL,
  `email` char(45) NOT NULL,
  `category` char(45) DEFAULT NULL,
  `avatar` char(80) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `email` (`email`),
  KEY `rols_idx` (`rol_id`),
  CONSTRAINT `rols` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','admin','admin@mail.com',NULL,NULL,1),(2,'Hernan','Diaz','hernan','hernan@mail.com','comprador',NULL,2),(3,'Estrella','Estrella','estrella','estrella@mail.com','vendedor',NULL,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-20 22:02:38
