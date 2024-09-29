import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import CamperDetailsPage from '../../pages/CamperDetailsPage/CamperDetailsPage';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <div className={css.container}>
      <h2>TravelTrucks</h2>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
// import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// import css from './App.module.css';
// import Loader from '../Loader/Loader';
// // import Layout from '../Layout/Layout';
// import Navigation from '../Navigation/Navigation';

// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
// const CamperDetailsPage = lazy(() =>
//   import('../../pages/CamperDetailsPage/CamperDetailsPage')
// );
// const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures'));
// const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews'));
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage')
// );

// export default function App() {
//   return (
//     <div className={css.container}>
//       <h1>TravelTrucks</h1>
//       <Navigation />
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/catalog" element={<CatalogPage />} />
//           <Route path="/catalog/:id" element={<CamperDetailsPage />}>
//             <Route path="features" element={<CamperFeatures />} />
//             <Route path="reviews" element={<CamperReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }
