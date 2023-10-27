import "./productsList.css";

export function ProductsList({ products }) {
  return (
    <div className="products-list-container">
      {products.slice(0, 10).map((item) => {
        const { id, title, images, description, price } = item;
        return (
          <div className="product-list" key={id}>
            <h2 className="product-list_title">{title}</h2>
            <img className="product-list_img" src={images[0]} alt={title} />
            <p>${price}</p>
            <p className="product-list_info">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
