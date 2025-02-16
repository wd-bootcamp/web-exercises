// app/products/[id]/page.tsx
export default function Product({ params }: { params: { id: string } }) {
    return <h1>Product Page with id: {params.id}</h1>;
}
  