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

SELECT
  style_id,
  name,
  original_price,
  sale_price,
  default_ AS "default?",
  SELECT jsonb_build_object(
    'photos', (SELECT array(
      SELECT jsonb_build_object(
        'thumbnail_url', thumbnail_url,
        'url', url
      ) FROM photos WHERE style_id=5
    ))
  )
FROM styles WHERE product_id=5;



        SELECT
          style_id,
          name,
          original_price,
          sale_price,
          default_ AS "default?",

          (SELECT array(
            SELECT json_build_object(
              'thumbnail_url', thumbnail_url,
              'url', url
            ) FROM photos WHERE photos.style_id=styles.style_id
          ) AS photos),

          (SELECT jsonb_object_agg(
            id, json_build_object(
              'quantity', quantity,
              'size', size
            )
          ) AS "skus"
          FROM skus
          WHERE skus.style_id=styles.style_id)

        FROM styles
        WHERE product_id=5;