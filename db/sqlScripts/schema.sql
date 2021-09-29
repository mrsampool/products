DROP TABLE IF EXISTS products, features, styles, skus, categories;

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