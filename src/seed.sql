create table inventory (
    id serial primary key,
    name text not null,
    class varchar(40) not null,
    type text not null,
    brand varchar(20) not null,
    price integer,
    img text not null
);
-- complete skateboards
insert into inventory (
    name, class, type, brand, price, img
) values (
    'CCS Logo Skateboard Complete - Black',
    'skateboard',
    'completes',
    'CCS',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-complete-black1.1498249288.jpg'
),(
    'CCS Treat Me Like A Don - Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-treat-me-like-a-don-skateboard-complete-1.1511001905.jpg'
),(
    'CCS Stranger Danger Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-stranger-danger-skateboard-complete-navy-blue-1.1508410849.jpg'
),(
    'The Killing Floor Anderson Freak Out Skateboard Complete - 8.25"',
    'skateboard',
    'completes',
    'The Killing Floor',
    9995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQABB42-c.1514371609.jpg'
),(
    'Santa Cruz Oil Creep Everslick Skateboard Complete - 8.0',
    'skateboard',
    'completes',
    'Santa Cruz',
    10295,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/s/a/santa-cruz-oil-creep-everslick-skateboard-complete-1.1512817694.jpg'
),(
    'Trap X Coogi New Native Skateboard Complete - 8.50"',
    'skateboard',
    'completes',
    'Trap X Coogi',
    11436,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ965D1-c.1512211968.jpg'

),(
    'Enjoi King Of The Road R7 Skateboard Complete - 8.375" - Jackson Pilz',
    'skateboard',
    'completes',
    'Enjoi',
    9060,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/0/805538618655-c.1505904771.jpg'

),(
    'CCS I Am A Bug Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-i-am-a-bug-skateboard-complete-pink-1.1498249244.jpg'
),(
    'Skate Mental American Food Skateboard Complete - 8.50"',
    'skateboard',
    'completes',
    'Skate Mental',
    9995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/4/842924132784-c.1512211968.jpg'
),(
    'Passport Fountains For Life Kallos Skateboard Complete - 8.50"',
    'skateboard',
    'completes',
    'Passport',
    10295,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ710C7-c.1511436068.jpg'
),(
    'CCS No Enemy Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-no-enemy-skateboard-complete-1.1511001905.jpg'
),(
    'CCS Room Above The Shrimp House Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-room-above-the-shrimp-house-skateboard-complete-1.1511001905.jpg'
),(
    'CCS Bernini Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-bernini-skateboard-complete-1.1511001905.jpg'
),(
    'Paisley Grabs Back Skateboard Complete - 8.25',
    'skateboard',
    'completes',
    'Paisley',
    10995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ96310-c.1498249294.jpg'
),(
    'CCS Reject Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-reject-skateboard-complete.1498249093.jpg'
),(
    'Lipstick Willis Vice II Skateboard Complete - 8.00"',
    'skateboard',
    'completes',
    'Lipstick',
    9995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ6A2FE-c.1505475378.jpg'
),(
    'CCS Squad Goals Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-squad-goals-skateboard-complete-1.1501757119.jpg'
),(
    'CCS Day Rave Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-day-rave-skateboard-complete-1.1501757119.jpg'
),(
    'CCS Long Walks On The Beach Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-long-walks-on-the-beach-skateboard-complete-1.1501757119.jpg'
),(
    'CCS Ball Is Life Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-ball-is-life-skateboard-complete-1.1501757119.jpg'
),(
    'Quartet Bounce to This Skateboard Complete - 8.25"',
    'skateboard',
    'completes',
    'Quartet',
    9995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ37E8B-c.1498251032.jpg'
),(
    'CCS Walrus Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-walrus-skateboard-complete-1.1498249288.jpg'
),(
    'CCS Cyclical Skateboard Complete',
    'skateboard',
    'completes',
    'CCS',
    6995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-cyclical-skateboard-complete-1.1498249093.jpg'
),(
    'Rout After Hours 4 am Skateboard Complete',
    'skateboard',
    'completes',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-4-am-skateboard-complete.1498249289.jpg'
),(
    'Rout The Hunter Cruiser Skateboard Complete',
    'Cruiser',
    'completes',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-the-hunter-cruiser-skateboard-complete-ww-new-1.1498647570.jpg'
),(
    'Rout After Hours 3 am Cruiser Skateboard Complete',
    'Cruiser',
    'completes',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-3-am-cruiser-skateboard-complete-ww-1.1498647570.jpg'
),(
    'Rout After Hours 2 am Cruiser Skateboard Complete',
    'Cruiser',
    'completes',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-2-am-cruiser-skateboard-complete-ww-1.1498647570.jpg'
),(
    'Vision Original Skateboard Complete - 10.00" - Natural Dip',
    'Cruiser',
    'completes',
    'Vision',
    11695,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAC062-c.1518863650.jpg'
),(
    'Plan B Sheffey Ollie Skateboard Complete - 8.00"',
    'skateboards',
    'completes',
    'Plan B',
    9995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ75522-c.1529145571.jpg'
);



-- Decks only

insert into inventory (
    name, class, type, brand, price, img
) values (
    'Welcome Loo Dood Nora on Wicked Queen Skateboard Deck - White - 8.60"',
    'skateboards',
    'skateboard Deck',
    'Welcome',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ903E1-1.1526468242.jpg'
),(
    'CCS Logo Skateboard Deck - Black',
    'skateboards',
    'skateboard Deck',
    'CCS',
    2995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-deck-black1.1498249551.jpg'
),(
    'CCS Logo Skateboard Deck - Deep Blue',
    'skateboards',
    'skateboard Deck',
    'CCS',
    2995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-deck-deep-blue-1.1506077461.jpg'
),(
    'CCS Logo Skateboard Deck - Evergreen',
    'skateboards',
    'skateboard Deck',
    'CCS',
    2995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-deck-evergreen-1.1506077461.jpg'
),(
    'CCS Logo Skateboard Deck - Yellow',
    'skateboards',
    'skateboard Deck',
    'CCS',
    2995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-deck-yellow-1.1506077461.jpg'
),(
    'CCS Logo Skateboard Deck - Pink',
    'skateboards',
    'skateboard Deck',
    'CCS',
    2995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-logo-skateboard-deck-pink-1.1506077462.jpg'
),(
    'Welcome Isobel Lay on Stonecipher Skateboard Deck - Yellow - 8.60"',
    'skateboards',
    'skateboard Deck',
    'Welcome',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ903DF-1.1526468242.jpg'
),(
    'Primitive Desarmo Owl Foil Silver 100 Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Primitive',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/P/S/PS18W0061-new-8.25-new-1.1524836851.jpg'
),(
    'Birdhouse Jaws Remix Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Birdhouse',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ77238-new-1.1524836776.jpg'
),(
    'WKND Lips Skateboard Deck - 8.00"',
    'skateboards',
    'skateboard Deck',
    'WKND',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAB087-1.1519382093.jpg'
),(
    'Santa Cruz Acid Dot Everslick Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Santa Cruz',
    5995,
    'https://shop.ccs.com/santa-cruz-acid-dot-everslick-skateboard-deck-8-25'
),(
    'Plan B Leticia MVP Horns Skateboard Deck - 8.00"',
    'skateboards',
    'skateboard Deck',
    'Plan B',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQADF17-1.1519381674.jpg'
),(
    'Pizza Hipster Kovacs Skateboard Deck - 8.40"',
    'skateboards',
    'skateboard Deck',
    'Pizza',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAAE08-1.1519382592.jpg'
),(
    'Welcome Isobel Lay on Stonecipher Skateboard Deck - Rose - 8.60"',
    'skateboards',
    'skateboard Deck',
    'Welcome',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAF955-1.1518258366.jpg'
),(
    'Girl Andrew Brophy 93 Til Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Girl',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/889846113866-1.1518258149.jpg'
),(
    'Chocolate Jesus Fernandez Original Chunk Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Chocolate',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/889846114153-1.1518258790.jpg'
),(
    'Send Help Murawski Ouch Skateboard Deck - 8.375"',
    'skateboards',
    'skateboard Deck',
    'Send Help',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ6D567-1.1516444065.jpg'
),(
    'Heritage Lotti Showgirls R7 Heat Transfer Skateboard Deck - 8.125"',
    'skateboards',
    'skateboard Deck',
    'Heritage',
    5995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/0/805538616620-1.1516444065.jpg'
),(
    'The Killing Floor United White Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'The Killing Floor',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQABB4C-1.1514371610.jpg'
),(
    'Baker Zorilla Barker Boys Skateboard Deck - 8.475"',
    'skateboards',
    'skateboard Deck',
    'Baker',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ6AB50-1.1507374256.jpg'
),(
    'Real Chima Shine Oval SE Skateboard Deck - 8.06"',
    'skateboards',
    'skateboard Deck',
    'Real',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/888560131149-1.1506425948.jpg'
),(
    'Anti-Hero Classic Eagle Skateboard Deck - Navy - 8.50"',
    'skateboards',
    'skateboard Deck',
    'Anti-Hero',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/888560000032-1.1506427100.jpg'
),(
    'Anti-Hero Classic Eagle Skateboard Deck - Grey - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Anti-Hero',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/8/888560000056-1.1506427100.jpg'
),(
    'Quartet Crack Raider Skateboard Deck - 8.25"',
    'skateboards',
    'skateboard Deck',
    'Quartet',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ37E8D-1.1520334032.jpg'
),(
    'Baker Brand Logo Skateboard Deck - White',
    'skateboards',
    'skateboard Deck',
    'Baker',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/a/baker-brand-logo-skateboard-deck-white-8-25-bottom_1.1496698799.jpg'
),(
    'Enjoi Spectrum Skateboard Deck - White - 8.0"',
    'skateboards',
    'skateboard Deck',
    'Enjoi',
    3995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/e/n/enjoi-spectrum-skateboard-deck-8-1-bottom_1_1.1498251218.jpg'
),(
    'CCS Orca Skateboard Deck',
    'skateboards',
    'skateboard Deck',
    'CSS',
    3495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/c/c/ccs-orca-skateboard-1.1524836850.jpg'
),(
    'Element x MLB 2018 LA Est Skateboard Deck - 7.75"',
    'skateboards',
    'skateboard Deck',
    'Element',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/8/2/821301114483-1.1522706118.jpg'
),(
    'Deathwish JF SOTY Trophy Skateboard Deck - 8.50"',
    'skateboards',
    'skateboard Deck',
    'Deathwish',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQ903C1-1.1521196201.jpg'
),(
    'Alien Workshop Guevara Siren Song Skateboard Deck - 8.50"',
    'skateboards',
    'skateboard Deck',
    'Alien Workshop',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQB517D-1.1521197421.jpg'
),(
    'Welcome Balloon Boys Sanchez on Niburu Skateboard Deck - Red - 8.75"',
    'skateboards',
    'skateboard Deck',
    'Welcome',
    4995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAF959-1.1518258366.jpg'
),(
    'Baker T Funk Name Logo Skateboard Deck - 8.125"',
    'skateboards',
    'skateboard Deck',
    'Baker',
    5495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/A/Q/AQAF8AC-1.1516961992.jpg'
);


--Cruisers Only

insert into inventory (
    name, class, type, brand, price, img
) values (
    'Rout After Hours 3 am Cruiser Skateboard Complete',
    'skateboards',
    'Cruiser',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-3-am-cruiser-skateboard-complete-ww-1.1498647570.jpg'
),(
    'Rout After Hours 2 am Cruiser Skateboard Complete',
    'skateboards',
    'Cruiser',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-2-am-cruiser-skateboard-complete-ww-1.1498647570.jpg'
),(
    'Bustin Bonsai Mini 29" Lykos Longboard Complete - 2017',
    'skateboards',
    'Cruiser',
    'Bustin',
    15395,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/u/bustin-bonsai-mini-29-lykos-longboard-complete-2017-1.1498249875.jpg'
),(
    'Sector 9 Shark Bite Shop Built Longboard Complete - Blue - 2017',
    'skateboards',
    'Cruiser',
    'Sector 9',
    15195,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/s/e/sector-9-shark-bite-longboard-complete-blue-2017-1.1497293427.jpg'
),(
    'DB Mandala Cruiser Complete Skateboard - 2017',
    'skateboards',
    'Cruiser',
    'DB',
    14995,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/d/b/db-mandala-cruiser-complete-skateboard-2017-1.1498249697.jpg'
),(
    'DB Aurora Cruiser Complete Skateboard - 2017',
    'skateboards',
    'Cruiser',
    'DB',
    14495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/d/b/db-aurora-cruiser-complete-skateboard-2017-1.1498249875.jpg'
),(
    'Landyachtz Dinghy Surfer Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    13000,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-surfer-longboard-complete-1.1497293853.jpg'
),(
    'Landyachtz Dinghy Emboss Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    13000,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-emboss-longboard-complete-1.1497293853.jpg'
),(
    'Landyachtz Dinghy Birds Deco Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyactz',
    13000,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-birds-longboard-complete-1.1497293853.jpg'
),(
    'Landyachtz Mini Dinghy 26" Floral White Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    12800,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-26-floral-white-longboard-complete-1.1497293853.jpg'
),(
    'Landyachtz Mini Dinghy 26" Canon Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    12800,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-26-canon-longboard-complete-1.1497293854.jpg'
),(
    'Landyachtz Mini Dinghy 24" Ghost Ride Longboard Complete',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    12795,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-24-ghost-ride-longboard-complete-1.1497293854.jpg'
),(
    'Rout The Hunter Cruiser Skateboard Complete',
    'skateboards',
    'Cruiser',
    'Rout',
    6495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-the-hunter-cruiser-skateboard-complete-ww-new-1.1498647570.jpg'
),(
    'Bustin Bonsai Mini 29" Tako Longboard Complete - 2017',
    'skateboards',
    'Cruiser',
    'Bustin',
    15395,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/u/bustin-bonsai-mini-29-tako-longboard-complete-2017.1498249876.jpg'
),(
    'Bustin Pro Skateboard Complete - City - 7.75"',
    'skateboards',
    'Cruiser',
    'Bustin',
    10295,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/u/bustin-pro-7-75-complete-1.1498249697.jpg'
),(
    'Bustin Pro Skateboard Complete - NYC Map - 8.25"',
    'skateboards',
    'Cruiser',
    'Bustin',
    10295,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/b/u/bustin-pro-8-25-complete-1.1498249876.jpg'
),(
    'Landyachtz Dinghy Surfer Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    5095,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-surfer-longboard-deck-1.1497293853.jpg'
),(
    'Landyachtz Dinghy Emboss Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    5095,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-emboss-longboard-deck-1.1497293853.jpg'
),(
    'Landyachtz Dinghy Birds Deco Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    5095,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-dinghy-birds-longboard-deck-1.1497293853.jpg'
),(
    'Landyachtz Mini Dinghy 26" Floral White Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    4895,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-26-floral-white-longboard-deck-1.1497293853.jpg'
),(
    'Landyachtz Mini Dinghy 26" Canon Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    4895,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-26-canon-longboard-deck-1.1497293854.jpg'
),(
    'Landyachtz Mini Dinghy 24" Ghost Ride Longboard Deck',
    'skateboards',
    'Cruiser',
    'Landyachtz',
    4895,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/l/a/landyachtz-mini-dinghy-24-ghost-ride-longboard-deck-1.1497293854.jpg'
),(
    'Rout The Hunter Cruiser Skateboard Deck',
    'skateboards',
    'Cruiser',
    'Rout',
    3495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/a/n/ancient-aliens-2.1498648220.jpg'
),(
    'Rout After Hours 3 am Cruiser Skateboard Deck',
    'skateboards',
    'Cruiser',
    'Rout',
    3495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-3-am-cruiser-skateboard-deck-ww-1.1498647818.jpg'
),(
    'Rout After Hours 2 am Cruiser Skateboard Deck',
    'skateboards',
    'Cruiser',
    'Rout',
    3495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/r/o/rout-after-hours-2-am-cruiser-skateboard-deck-ww-1_1.1498647818.jpg'
),(
    'Bustin Bonsai Mini 29" Lykos Longboard Deck - 2017',
    'skateboards',
    'Cruiser',
    'Bustin',
    7495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/a/q/aq380ce-1_1.1498249876.jpg'
),(
    'Bustin Bonsai Mini 29" Tako Longboard Deck - 2017',
    'skateboards',
    'Cruiser',
    'Bustin',
    7495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/a/q/aq380cd-1.1498249876.jpg'
),(
    'Sector 9 Shark Bite Longboard Deck - Blue - 2017',
    'skateboards',
    'Cruiser',
    'Sector 9',
    7295,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/s/e/sector-9-shark-bite-longboard-deck-blue-2017-1_1.1497293427.jpg'
),(
    'Prism Mash Cruiser Skateboard Complete - Artist Series',
    'skateboards',
    'Cruiser',
    'Prism',
    14495,
    'https://cdn.ccs.com/media/catalog/product/cache/4/small_image/235x/9df78eab33525d08d6e5fb8d27136e95/a/r/artist-mash-bottom.1498249551.jpg'
);

--Wheels