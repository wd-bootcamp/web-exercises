import styled from "styled-components";
import ProductList from "@/components/ProductList/ProductList";
import ProductForm from "@/components/ProductForm/ProductForm";

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm />
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
