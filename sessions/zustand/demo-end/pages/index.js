import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';
import UserProfile from '../components/UserProfile';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <div style={{ margin: '20px' }}>
      <Header />
      <ThemeToggle />
      <UserProfile />
      <Cart />
    </div>
  );
}
