insert into orders
    ( firstName, lastName, email, address, city, state, zip, shippingmethod, cardNumber, expiration, cvv, grandtotal )
values
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
returning orderid ;