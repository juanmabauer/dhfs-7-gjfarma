-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2021 a las 02:30:20
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gjfarma`
--
CREATE DATABASE IF NOT EXISTS `gjfarma` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gjfarma`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Maybelline'),
(2, 'Lysoform'),
(3, 'Listerine'),
(4, 'Bokang'),
(5, 'Estrella'),
(6, 'Protex'),
(7, 'Downy'),
(8, 'Cif'),
(9, 'Skip'),
(10, 'Vichy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `shipping_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Belleza'),
(2, 'Salud'),
(3, 'Limpieza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`) VALUES
(1, 'belleza-labial.png'),
(3, 'product-1640221085430.jpeg'),
(4, 'product-1640221236781.PNG'),
(5, 'product-1640221255794.jpg'),
(6, 'product-1640221816302.JPG'),
(7, 'product-1640222545334.jpg'),
(8, 'product-1640222563727.jpg'),
(9, 'product-1640222571827.jpg'),
(10, 'product-1640222582814.jpg'),
(11, 'product-1640222598432.jpg'),
(12, 'product-1640222610303.jpg'),
(13, 'product-1640222617161.jpg'),
(14, 'product-1640222626782.jpg'),
(15, 'product-1640222633063.jpg'),
(16, 'product-1640222640755.jpg'),
(17, 'product-1640222647042.jpg'),
(18, 'product-1640222932435.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock`, `category_id`, `brand_id`, `image_id`) VALUES
(1, 'Labial Líquido', 'Lorem ipsum dolor sit amet.', 1200, 25, 1, 1, 18),
(2, 'Limpiador gel con lavandina', 'Lorem ipsum dolor sit amet.', 300, 25, 3, 2, 7),
(3, 'Enjuague bucal', 'Lorem ipsum dolor sit amet.', 450, 25, 2, 3, 8),
(4, 'Termometro digital infrarrojo', 'Termómetro Infrarrojo Bokang-BK8005 obtiene la temperatura corporal humana midiendo la radiación térmica de la frente del paciente. Memoria que almacena hasta 32 registros de mediciones. Funciona con 2 pilas AA (no incluidas)', 2500, 7, 2, 4, 9),
(5, 'Jabón líquido para mano', 'Protex® te ofrece una prolongada protección contra bacterias para la buena salud de tu piel y la de tu familia.\r\nBeneficios:\r\n-Protex® Macadamia elimina 99.9% de las bacterias de la piel¹\r\n-Su fórmula combinada con extracto de macadamia ayuda a dejar la piel saludable, protegida y con una sensación de humectación', 190, 35, 2, 6, 10),
(6, 'Pompones algodón', 'Elaborados con 100% algodón de máxima pureza, son especialmente recomendados para uso cosmético. Por su nivel de suavidad son especiales par los cuidados diarios de la piel. También se los puede utilizar para sacar el esmalte de las uñas.', 120, 100, 2, 5, 11),
(7, 'Suavizante concentrado', 'Suavizante para la ropa Downy Concentrado protege tu ropa contra los malos olores. Downy posee cápsulas de perfume que neutrializan los malos olores, y permiten que tengas perfume en tu ropa todo el día. Downy Concentrado, vestite de perfume todo el día.\r\n\r\n- Protege de Malos Olores\r\n- Perfume Duradero\r\n- Suavizante Concentrado, Media Tapita Alcanza\r\n- Suavidad Increíble\r\n- Facilita el Planchado', 200, 70, 3, 7, 12),
(8, 'Detergente active gel', 'Cif Detergente Active Gel Limón Verde (500 ml), con fórmula evolucionada, se mantiene por más tiempo en tu esponja versus lavavajillas regulares. Si disfrutaste de una comida un poco grasosa o aceitosa, el detergente de platos Cif Active Gel Limón Verde sin dudas te va a salvar. La grasa se adhiere a los platos y plásticos, y los aceites son inmunes al efecto del agua: lo que necesitas es un detergente líquido como alguno de la línea de Cif Active Gel, que terminan con la grasa de modo definitivo dejando los platos limpios y usando menos cantidad de producto.', 185, 122, 3, 8, 13),
(9, 'Jabón líquido baja espuma', 'El jabón líquido Skip Regular con pH Balanceado, protege contra los 5 signos de daño. Gracias a su tecnología Fibercare Serum el nuevo Skip Fibercare líquido protege tu ropa contra los 5 signos de daño: Mantiene colores, previene pelotitas, elimina manchas, cuida texturas y reduce el amarillentamiento. Recomendaciones: leé bien las instrucciones de las etiquetas que trae cada prenda, ya que no todas son aptas para lavarropas. Luego, separá las prendas por colores; hacé un lavado para ropa blanca y clara, y otro para las de color. Si alguna prenda está manchada, utilizá antes algún prelavado, que se aplica directo sobre la mancha y se deja actuar durante 5 minutos antes del lavado. Dosificación: una tapa al ras (100?ml) basta para una carga completa de ropa. Coloque el producto en el compartimento del lavado de la gaveta de su lavarropas. Para lavado a mano, utilice 1 tapa (100 ML) para una balde de agua (10 L). Para ropa muy sucia, dosifica 1 tapa y media (150?ml). Si se presentan manchas difíciles, aplique el producto directamente sobre las mismas. Ideal para el cuidado diario de tu ropa, ya sea blanca, oscura o de color. No se recomienda el uso en lana y seda.', 780, 70, 3, 9, 14),
(10, 'Polvo compacto', '¡Lucí una piel bronceada todo el año! Probá el polvo compacto Super Natural Sun.\r\n\r\nTonalizador compacto. Para todo tipo de piel.\r\n\r\nModo de uso:\r\n\r\nUtilizá el cisne aplicador y expandí delicadamente desde el centro hacia los laterales', 650, 55, 1, 1, 15),
(11, 'Máscara de pestañas', 'Obtené pestañas largas e impactantes al instante\r\n\r\nLe da volumen y longitud a las pestañas\r\n\r\nEl cepillo de doble curva impacta en las pestañas desde el comienzo de las mismas para levantarlas y darles volumen\r\n\r\nModo de uso:\r\n\r\nUsar el cepillo aplicandolo en las pestañas desde el comienzo hasa el fina de las mismas. Aplicar hasta obtener el efecto deseado.', 1300, 75, 1, 1, 16),
(12, 'Aqualia thermal', 'Nueva fórmula con 97% de ingredientes de origen natural. Eficacia 48hs, testeada incluso en condiciones extremas como polución, stress y condiciones climáticas adversas. Formulada con una dosis precisa para re hidratar tu piel. Tratamiento hidratante, apto para pieles sensibles, normales a secas.\r\nRecarga de hitradatación a tu piel, propicia un comfort intenso y mantiene la hidratacion hasta 48 horas.Enriquecido con agua mineralizante de Vichy para fortificar y proteger la piel con ingredientes de origen natural,como acido hialurónico y el azucar vegetal manosa. Suave y seguro para todo tipo de pieles,testeado sobre un 100% de pieles sensibles bajo control dermatologico.\r\nSe recomienda a plicar mañana y/o noche sobre la piel perfectamente limpia; colocar el producto con la yema de los dedos, distribuído en 5 puntos del rostro: 3 en la línea media (frente, naríz y mentón) y 2 en los extremos (pómulos); y distribuir desde la línea media del rostro hacia afuera.\r\nSi utilizás un tratamiento anti-edad, primero limpiá tu piel, aplicá el tratamiento hidratante y al final el tratamiento anti-edad. Tu piel estará lista para maquillarse.\r\nEntre los principales componentes se hallan: ácido hialurónico de origen natural, Agua termal mineralizante de Vichy, Azúcares de origen natural y minerales.', 4500, 43, 1, 10, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

DROP TABLE IF EXISTS `rols`;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shippings`
--

DROP TABLE IF EXISTS `shippings`;
CREATE TABLE `shippings` (
  `id` int(11) NOT NULL,
  `address` varchar(80) NOT NULL,
  `zip` int(11) NOT NULL,
  `cost` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(45) NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `avatar` varchar(80) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `password`, `email`, `category`, `avatar`, `rol_id`) VALUES
(8, 'admin', 'admin', '$2a$10$ZIFfRAKdNixeB34sDNfH9uYF11fZkTcvsDiNUT3r4gyzcyttWXaNy', 'admin@mail.com', NULL, 'default-img-user.png', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarios_idx` (`user_id`),
  ADD KEY `envios_idx` (`shipping_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_idx` (`product_id`),
  ADD KEY `cart_idx` (`cart_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorias_idx` (`category_id`),
  ADD KEY `marcas_idx` (`brand_id`),
  ADD KEY `imagen_idx` (`image_id`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shippings`
--
ALTER TABLE `shippings`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `rols_idx` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `shippings`
--
ALTER TABLE `shippings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `envios` FOREIGN KEY (`shipping_id`) REFERENCES `shippings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `usuarios` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `cart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `productos` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `categorias` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `imagen` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `marcas` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `rols` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
