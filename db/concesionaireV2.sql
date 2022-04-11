-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-04-2022 a las 17:32:30
-- Versión del servidor: 8.0.27
-- Versión de PHP: 8.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionaireV2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `brand_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `brand_image` varchar(100) DEFAULT NULL,
  `id_brand` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`brand_name`, `brand_image`, `id_brand`) VALUES
('alfa-romeo', 'view/images/alfa-romeo.png', 1),
('aston-martin', 'view/images/aston-martin.png', 2),
('audi', 'view/images/audi.png', 3),
('bmw', 'view/images/bmw.png', 4),
('cadillac', 'view/images/cadillac.png', 5),
('chevrolet', 'view/images/chevrolet.png', 6),
('citroen', 'view/images/citroen.png', 7),
('fiat', 'view/images/fiat.png', 8),
('ford', 'view/images/ford.png', 9),
('honda', 'view/images/honda.png', 10),
('jaguar', 'view/images/jaguar1.png', 11),
('jeep', 'view/images/jeep1.png', 12),
('kia', 'view/images/kia1.png', 13),
('lamborghini', 'view/images/lamborghini1.png', 14),
('lotus', 'view/images/lotus1.png', 15),
('mazda', 'view/images/mazda1.png', 16),
('mercedes', 'view/images/mercedes1.png', 17),
('mini', 'view/images/mini1.png', 18),
('mitsubishi', 'view/images/mitsubishi1.png', 19),
('nissan', 'view/images/nissan1.png', 20),
('opel', 'view/images/opel1.png', 21),
('peugeot', 'view/images/peugeot1.png', 22),
('porsche', 'view/images/porsche1.png', 23),
('renault', 'view/images/renault1.png', 24),
('rolls-royce', 'view/images/rolls-royce1.png', 25),
('seat', 'view/images/seat1.png', 26),
('skoda', 'view/images/skoda1.png', 27),
('subaru', 'view/images/subaru1.png', 28),
('suzuki', 'view/images/suzuki1.png', 29),
('tesla', 'view/images/tesla1.png', 30),
('toyota', 'view/images/toyota1.png', 31),
('volkswagen', 'view/images/volkswagen1.png', 32),
('volvo', 'view/images/volvo1.png', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `car`
--

CREATE TABLE `car` (
  `id` int NOT NULL,
  `marca` int DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `categoria` int DEFAULT NULL,
  `num_bast` int DEFAULT NULL,
  `matricula` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `puertas` int DEFAULT NULL,
  `combustible` int DEFAULT NULL,
  `f_matriculacion` varchar(100) DEFAULT NULL,
  `ex_visual` varchar(100) DEFAULT NULL,
  `ex_tecnico` varchar(100) DEFAULT NULL,
  `precio` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `lat` varchar(500) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `longi` varchar(500) DEFAULT NULL,
  `visitas` int DEFAULT NULL,
  `km` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `car`
--

INSERT INTO `car` (`id`, `marca`, `modelo`, `categoria`, `num_bast`, `matricula`, `color`, `puertas`, `combustible`, `f_matriculacion`, `ex_visual`, `ex_tecnico`, `precio`, `img`, `lat`, `city`, `longi`, `visitas`, `km`) VALUES
(30, 4, 'M3', 2, 1111, 'ASD111', 'Gris', 5, 2, '12/12/2002', 'Aleron:', 'Pantalla:', '10000', 'view/images/bmw1.jpg', '38.83966492354664', 'Albaida', '-0.5200742536293536', 5, 20000),
(31, 3, 'A1', 2, 2222, 'ASD222', 'Verde', 3, 2, '12/12/2002', 'Aleron:', 'Pantalla:', '2000', 'view/images/audi1.jpg', '38.82', 'Ontinyent', '-0.61667', 12, 2000),
(32, 17, 'Peque', 2, 3333, 'ASD333', 'Gris', 5, 1, '12/12/2002', 'Aleron:', 'Pantalla:', '1300', 'view/images/1.jpg', '38.76552703422715', 'Bocairent', '-0.6127558920464871', 6, 10000),
(34, 30, 'Model3', 2, 4444, 'ASD444', 'Rojo', 5, 1, '12/12/2002', 'Aleron:', 'Pantalla:', '14000', 'view/images/tesla1.jpg', '38.81667', 'Ontinyent', '-0.61667', 352, 100),
(35, 9, 'Focus', 2, 5555, 'ASD555', 'Rojo', 5, 3, '12/12/2002', 'Aleron:', 'Pantalla:', '15000', 'view/images/ford1.jpg', '38.80', 'Ontinyent', '-0.61667', 11, 20000),
(36, 1, 'GTA', 3, 6666, 'ASD666', 'Rojo', 5, 4, '12/12/2002', 'Aleron:', 'Pantalla:', '6000', 'view/images/alfaromeo1.jpg', '39.45875203353787', 'Valencia', '-0.38579443215022735', 26, 1500),
(37, 2, 'DB11', 1, 7777, 'ASD777', 'Gris', 5, 1, '12/12/2002', 'Aleron:', 'Pantalla:', '20000', 'view/images/astonmartin1.jpg', '39.502630037162675', 'Paterna', '-0.4434438803040707', 10, 0),
(38, 7, 'C3', 2, 8888, 'ASD888', 'Gris', 5, 3, '12/12/2002', 'Aleron:', 'Pantalla:', '5000', 'view/images/citroen1.jpg', '39.43203291203814', 'Paterna', '-0.4729279527029575', 64, 8000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `car_img`
--

CREATE TABLE `car_img` (
  `id_img` int NOT NULL,
  `car` int DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `car_img`
--

INSERT INTO `car_img` (`id_img`, `car`, `img`) VALUES
(17, 30, 'view/images/bmw1.jpg'),
(18, 30, 'view/images/bmw2.jpg'),
(19, 30, 'view/images/bmw3.jpg'),
(20, 30, 'view/images/bmw4.jpg'),
(21, 31, 'view/images/audi1.jpg'),
(22, 31, 'view/images/audi2.jpg'),
(23, 31, 'view/images/audi3.jpg'),
(24, 31, 'view/images/audi4.jpeg'),
(25, 32, 'view/images/mercedes1.jpg'),
(26, 32, 'view/images/mercedes2.jpg'),
(35, 34, 'view/images/tesla1.jpg'),
(36, 34, 'view/images/tesla2.jpg'),
(37, 35, 'view/images/ford1.jpg'),
(38, 35, 'view/images/ford2.jpg'),
(39, 36, 'view/images/alfaromeo1.jpg'),
(40, 36, 'view/images/alfaromeo2.jpg'),
(41, 37, 'view/images/astonmartin1.jpg'),
(42, 37, 'view/images/astonmartin.jpg'),
(43, 38, 'view/images/citroen1.jpg'),
(44, 38, 'view/images/citroen2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL,
  `cat_name` varchar(100) DEFAULT NULL,
  `cat_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `cat_name`, `cat_image`) VALUES
(1, 'KM0', 'view/images/pic1.jpg'),
(2, 'Seminuevo', 'view/images/pic2.jpg'),
(3, 'PocosKM', 'view/images/pic3.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id_like` int NOT NULL,
  `username` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `car_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id_like`, `username`, `car_id`) VALUES
(26, 'juanlu', 36),
(108, 'juanlu', 32),
(109, 'juanlu', 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type`
--

CREATE TABLE `type` (
  `id_type` int NOT NULL,
  `type_name` varchar(100) DEFAULT NULL,
  `type_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `type`
--

INSERT INTO `type` (`id_type`, `type_name`, `type_image`) VALUES
(1, 'Electrico', 'view/images/ser-pic1.jpg'),
(2, 'Hibrido', 'view/images/ser-pic2.jpg'),
(3, 'Adaptado', 'view/images/ser-pic3.jpg'),
(4, 'Gasolina', 'view/images/pic6.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `passwd` varchar(100) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `avatar` varchar(500) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `passwd`, `email`, `avatar`, `type`) VALUES
('juanlu', '$2y$12$mWs6iuAdErB7.T77ILose.bl0kcLcPM6yA3CRVbxrHIQO9YMeczI.', 'juanlu@gmail.com', 'https://robohash.org/03f285e94cd53d88f911affef82f38d0', 'client'),
('prueba', '$2y$12$ulIcd0YFlomUnyPSoL543eIa4HbFtrzl0OHXcFT9xEFtjm5/q20Rq', 'prueba@gmail.com', 'https://placeimg.com/400/400/c893bad68927b457dbed39460e6afd62', 'client');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id_brand`),
  ADD UNIQUE KEY `id` (`brand_name`),
  ADD UNIQUE KEY `brand_image` (`brand_image`),
  ADD UNIQUE KEY `id_brand` (`id_brand`);

--
-- Indices de la tabla `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `num_bast` (`num_bast`),
  ADD UNIQUE KEY `matricula` (`matricula`),
  ADD KEY `FK_categoria` (`categoria`),
  ADD KEY `FK_type` (`combustible`),
  ADD KEY `FK_brand` (`marca`);

--
-- Indices de la tabla `car_img`
--
ALTER TABLE `car_img`
  ADD PRIMARY KEY (`id_img`),
  ADD UNIQUE KEY `id` (`id_img`),
  ADD KEY `FK_images` (`car`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `id` (`id_categoria`),
  ADD UNIQUE KEY `cat_name` (`cat_name`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id_like`),
  ADD KEY `FK_likes_car_id` (`car_id`),
  ADD KEY `FK_user_like` (`username`);

--
-- Indices de la tabla `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_type`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `car`
--
ALTER TABLE `car`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `car_img`
--
ALTER TABLE `car_img`
  MODIFY `id_img` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id_like` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT de la tabla `type`
--
ALTER TABLE `type`
  MODIFY `id_type` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `FK_brand` FOREIGN KEY (`marca`) REFERENCES `brand` (`id_brand`),
  ADD CONSTRAINT `FK_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `FK_type` FOREIGN KEY (`combustible`) REFERENCES `type` (`id_type`);

--
-- Filtros para la tabla `car_img`
--
ALTER TABLE `car_img`
  ADD CONSTRAINT `FK_images` FOREIGN KEY (`car`) REFERENCES `car` (`id`);

--
-- Filtros para la tabla `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `FK_likes_car_id` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`),
  ADD CONSTRAINT `FK_user_like` FOREIGN KEY (`username`) REFERENCES `users` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
