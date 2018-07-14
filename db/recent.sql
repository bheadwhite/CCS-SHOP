select orders.orderid, orders.firstname, orders.lastname, inventory.id, inventory.name
from orders, lookup_table, inventory
where orders.orderid = lookup_table.order_id and inventory.id = lookup_table.product_id;