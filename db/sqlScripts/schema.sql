DROP TABLE IF EXISTS products, features, styles, skus, categories, photos, related;

CREATE TABLE products (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(50),
  slogan VARCHAR(125),
  description VARCHAR(500),
  category VARCHAR(50),
  default_price VARCHAR(10)
);

CREATE TABLE styles (
  style_id INTEGER NOT NULL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  name VARCHAR(100),
  original_price VARCHAR(15),
  sale_price VARCHAR(15),
  default_ BOOLEAN
);

CREATE TABLE features (
  id INTEGER NOT NULL PRIMARY KEY,
  product_id INTEGER,
  feature VARCHAR(80),
  value VARCHAR(255)
);

CREATE TABLE skus (
  id INTEGER NOT NULL PRIMARY KEY,
  style_id INTEGER,
  size VARCHAR(10),
  quantity INTEGER
);

CREATE TABLE categories (
  id INTEGER NOT NULL PRIMARY KEY,
  category VARCHAR(80)
);

CREATE TABLE photos (
  id INTEGER NOT NULL PRIMARY KEY,
  style_id INTEGER,
  url VARCHAR(600),
  thumbnail_url VARCHAR(600)
);
CREATE TABLE related (
  id INTEGER NOT NULL PRIMARY KEY,
  current_product_id INTEGER,
  related_product_id INTEGER
);

\COPY products FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/products.csv' DELIMITER ',' CSV HEADER;
\COPY styles FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/styles.csv' DELIMITER ',' CSV HEADER;
\COPY skus FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/skus.csv' DELIMITER ',' CSV HEADER;
\COPY features FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/features.csv' DELIMITER ',' CSV HEADER;
\COPY photos FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/photos-edited.csv' DELIMITER ',' CSV HEADER;
\COPY related FROM '/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/starterData/related.csv' DELIMITER ',' CSV HEADER;
