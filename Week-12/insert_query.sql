insert into city value("assam","guwahati",781026);
insert into city value("delhi","pahargang",100010);
insert into city value("bihar","patna",600353);
insert into city value("uttar pradesh","itnagar",98068);
insert into city value("maharastra","puna",200001);
insert into city value("karnataka","bangalore",560062);


insert into warehouse value("gau001","guwHUB","guwahati",781026);
insert into warehouse value("up001","itnagarHUB","itanagar",98068);
insert into warehouse value("mha001","punHUB","puna",200001);
insert into warehouse value("del001","pahHUB","pahargang",100010);
insert into warehouse value("kar001","blrHUB","bangalore",560062);
insert into warehouse value("bihar001","patHUB","patna",600353);
insert into warehouse value("del002","noiHUB","noida",100001);
insert into warehouse value("mha003","mumHUB","mahrastra",200010);
insert into warehouse value("kar001","aurHUB","aurangabad",200062);


insert into store value("gauStr01","gau001","Reliance jio","narengi");
insert into store value("upStr01","up001","Reliance jio","lucknow");
insert into store value("mhaStr01","mha001","Reliance jio","pune");
insert into store value("karStr01","kar001","Reliance jio","bengalore");
insert into store value("delStr01","del001","Reliance jio","paharganj");
insert into store value("bihStr01","bihar001","Reliance jio","patna");
insert into store value("mhaStr02","mha001","Reliance jio","pune");
insert into store value("mhaStr03","mha001","Reliance jio","bengalore");
insert into store value("delStr02","del001","Reliance jio","paharganj");


insert into items value("0001","gauStr01","curd",250,50,100);
insert into items value("0002","upStr01","tropicana",750,90,100);
insert into items value("0003","mhaStr01","getared",350,100,100);
insert into items value("0004","karStr01","apple cider vinager",250,200,100);
insert into items value("0005","delStr01","kinder joy",25,60,100);
insert into items value("0006","bihStr01","coke",0.550,270,100);

update items set weight = 750, item_cost=75 where item_num="0006";



insert into orders value("10234","2018-01-01","0001");
insert into orders value("20234","2022-01-01","0002");
insert into orders value("30234","2019-01-01","0003");
insert into orders value("40234","2020-01-01","0004");
insert into orders value("50234","2021-01-01","0005");
insert into orders value("70234","2022-01-01","0006");



insert into customer value("jit001","jitender","chandmari",781026,10234);
insert into customer value("pat001","Mr. Patil","mg road",200001,20234);
insert into customer value("har001","harry puttar","sarojni",100010,30234);
insert into customer value("jam001","jamie","jp nagar",560062,40234);
insert into customer value("jan001","jante","gulmohar marg",98068,50234);
insert into customer value("neh001","neha","motihari",600353,70234);



insert into order_item_quantity value (12945,10234,"0001",2);
insert into order_item_quantity value (15745,20234,"0002",3);
insert into order_item_quantity value (17045,30234,"0003",4);
insert into order_item_quantity value (18645,40234,"0004",5);
insert into order_item_quantity value (13045,50234,"0005",6);
insert into order_item_quantity value (10845,70234,"0006",7);

select * from customer;
select * from orders;
select *  from items;
select * from store;
select * from warehouse;
select * from city; 
select * from order_item_quantity;