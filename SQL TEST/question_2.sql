CREATE DATABASE `test_db`;

-- test_db.orders definition

CREATE TABLE `orders` (
  `trx_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `trx_code` char(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `customer_id` bigint unsigned NOT NULL,
  `qty` int unsigned DEFAULT '0',
  `price` int unsigned DEFAULT '0',
  `discount` int unsigned DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`trx_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- STORE PROCEDURE INSERT WITH AUTO GENERATED TRX CODE
CREATE DEFINER=`root`@`localhost` PROCEDURE test_db.storeOrderTrx(
    product_id BIGINT,
    customer_id BIGINT,
    qty INT,
    price INT,
    discount INT
)
BEGIN
    SELECT IF(count(*) < 1,1,count(*)) as total_order FROM orders 
   where created_at between DATE_FORMAT(NOW(),'%Y-%m-%d 00:00:00') 
  and DATE_FORMAT(NOW(),'%Y-%m-%d 23:59:59') INTO @total_order;
    SET @zeroSepatorLength := 4 - LENGTH(@total_order);
   	if @zeroSepatorLength < 0 then 
   		set @zeroSepatorLength := 0; 
   	end if;
    SET @trxCode := CONCAT("MH",DATE_FORMAT(NOW(),'%d%m%Y'), LPAD(@total_order, @zeroSepatorLength, "0"));

	INSERT INTO orders (trx_code,product_id,customer_id, qty, price, discount) 
	values(@trxCode, product_id, customer_id, qty, price, discount);
end;


