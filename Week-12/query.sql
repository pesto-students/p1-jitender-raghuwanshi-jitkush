select item_des,weight from items where weight=(select min(weight) from items);

select * from warehouse where location="puna";

select * from orders where order_num=(select order_num from customer where cname="Mr. Patil");

select wid,max_store from 
(select wid,count(wid) as max_store from store group by wid)max_store_warehouse 
where max_store=(select max(max_store) from (select wid,count(wid) as max_store from store group by wid)max_store_warehouse) ;

select item_num from order_item_quantity where item_quantity=(select min(item_quantity) from order_item_quantity);

SELECT cust.cno, cust.cname, ord.orderDate, itm.item_des, itm.weight, itm.item_cost FROM customer AS cust
	INNER JOIN orders AS ord ON cust.order_num=ord.order_num
	INNER JOIN order_item_quantity AS oqi ON oqi.order_num = ord.order_num
	INNER JOIN items AS itm ON itm.item_num = oqi.item_num 
    ORDER BY cust.cno ASC;
