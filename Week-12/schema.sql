drop database warehouse;

create database warehouse;

CREATE TABLE city(
    state varchar(25) not null,
    city varchar(25) not null,
    pin integer not null unique,
    primary key(pin));
    
    CREATE TABLE warehouse(
    wid varchar(10) not null unique,
    Wname varchar(25) not null,
    location varchar(35),
    pin integer(10) not null,
	primary key(wid),foreign key(pin) references city(pin));
    
    CREATE TABLE store(
    sid varchar(25) not null unique,
    wid varchar(25) not null,
    storeName varchar(25) not null,
    location varchar(25) not null,
	primary key(sid), foreign key(wid) references warehouse(wid));
    
    CREATE TABLE items(
    item_num varchar(20) not null unique,
    sid varchar(25) not null,
    item_des varchar(30),
    weight decimal(4),
    item_cost decimal(4),
    stock integer not null,
	primary key(item_num), foreign key(sid) references store(sid));

    
    CREATE TABLE orders(
    order_num integer not null unique,
    orderDate date,
    item_num varchar(20) not null,
    primary key(order_num), foreign key(item_num) references items(item_num));
	
    

    
    CREATE TABLE customer(
    cno varchar(10) not null unique,
    cname varchar(25) not null,
    cu_addr varchar(40),
    cu_pin integer(10) not null,
    order_num integer unique,
	primary key(cno),foreign key(order_num) references orders(order_num),
    foreign key(cu_pin) references city(pin));

	CREATE TABLE order_item_quantity(
    oiq_id integer(10) unique,
    order_num integer,
    item_num varchar(20),
    item_quantity integer,
    primary key(oiq_id),foreign key (order_num) references orders(order_num),
    foreign key (item_num) references orders(item_num));

    
    
    
    
