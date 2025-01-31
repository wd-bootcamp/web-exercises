import FilterBar from '../components/FilterBar';
import BookList from '../components/BookList';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Welcome to My Bookstore!</h1>
      <FilterBar />
      <BookList />
      <Cart />
    </div>
  );
}
