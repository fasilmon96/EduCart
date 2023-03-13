import React, { useContext, useEffect } from "react";
import "./Product.css";

import { useState } from "react";
import { FirebaseContext } from "../Context/FirebaseContext";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Cart";

function Product() {
  const dispatch = useDispatch();

  const { firebase } = useContext(FirebaseContext);
  const [Search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const Nav = useNavigate();

  const handleaddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(handleaddToCart);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  }, []);

  return (
    <div>
      <div className="section2">
        <div className="section1">
          <input
            value={Search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
          />

          <h3 className="vc">Cart Searchengine</h3>
        </div>
        <div></div>
      </div>
      <div className="num1">
        <section className="container">
          {products
            .filter((product) => {
              if (Search == "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(Search.toLowerCase())
              ) {
                return product;
              }
            })

            .map((product) => {
              return (
                <div className="product_container">
                  <img src={product.url} alt="" />

                  <h3 className="h3">{product.name}</h3>
                  <h3 className="h3">{product.category}</h3>
                  <h3 className="h3">{product.price}</h3>
                  <h2 className="h3">
                    <i id="ds" class="fa-solid fa-indian-rupee-sign"></i>
                  </h2>

                  <button
                    onClick={() => {
                      handleaddToCart(product);
                      Nav("/prodec");
                    }}
                    className="button"
                    type="submit"
                  >
                    Addtocart
                  </button>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
}

export default Product;
