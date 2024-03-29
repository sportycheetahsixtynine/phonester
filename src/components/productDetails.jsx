import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./productCard";
import { Wrapper } from "./products";
import { storeProducts } from "../data";

const ProductPage = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ProductImgBig = styled.div`
  margin-right: 100px;

  img {
    max-width: 400px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px auto;

    img {
      margin: 20px auto;
      width: 310px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 20px auto;

    img {
      margin: 20px auto;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin: 20px auto;

    img {
      margin: 20px auto;
    }
  }
`;

const ProductDescription = styled.div`
  h1 {
    font-size: 38px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

class ProductDetail extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const product = storeProducts.find(
      product => product.id === this.props.match.params.id
    );
    this.setState({ product });
  }

  render() {
    const { onAdd } = this.props;
    const { product } = this.state;

    return (
      <Wrapper>
        <ProductPage>
          <ProductImgBig>
            <img src={product.img} alt={product.title} />
          </ProductImgBig>
          <ProductDescription>
            <h1>{product.title}</h1>
            <h2>Price: ${product.price}</h2>
            <h2>Description:</h2>
            <p>{product.info}</p>
            <Button
              onClick={() => onAdd(product.id)}
              disabled={product.inCart}
              style={{ marginRight: "10px" }}
            >
              {product.inCart ? "Added " : "Add to Cart "}{" "}
              <i className="fa fa-shopping-cart"></i>
            </Button>
            <Button outline>
              <Link to="/products" style={{ color: "#ffbd3e" }}>
                Continue shopping
              </Link>
            </Button>
          </ProductDescription>
        </ProductPage>
      </Wrapper>
    );
  }
}

export default ProductDetail;
