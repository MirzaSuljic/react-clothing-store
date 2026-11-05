import { Navigate, Route, Routes, useParams } from 'react-router';

import { MainLayout } from './components/layout/MainLayout';
import { CartPage } from './pages/CartPage';
import { CategoryPage } from './pages/CategoryPage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { SalePage } from './pages/SalePage';
import { SignInPage } from './pages/SignInPage';

function LegacyProductRedirect() {
  const { id } = useParams();
  return <Navigate to={`/product/${id}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="women" element={<CategoryPage key="women" gender="women" />} />
        <Route path="men" element={<CategoryPage key="men" gender="men" />} />
        <Route path="sale" element={<SalePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="sales" element={<Navigate to="/sale" replace />} />
        <Route path="registration" element={<Navigate to="/contact" replace />} />
        <Route path="detail/:id" element={<LegacyProductRedirect />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
