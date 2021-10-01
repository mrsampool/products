SELECT
  id,
  name,
  slogan,
  description,
  category,
  default_price,
  (SELECT array(
    (SELECT jsonb_build_object(
      'feature', feature,
      'value', value
    ) FROM features WHERE product_id=5 )
  ))
FROM products WHERE id=5;