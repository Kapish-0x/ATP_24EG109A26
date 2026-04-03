function Product(props) { //prop :{productObj} :{}
    const {productObj} = props;
    //state
    //return Product 
    return (
  <div className="shadow-lg shadow-gray-700 p-6 border-3 border-gray-700 rounded-xl">
    <h2 className="text-2xl text-amber-800">{productObj.title}</h2>
    <p className="font-bold">{productObj.description}</p>
  </div>
);
}

export default Product;