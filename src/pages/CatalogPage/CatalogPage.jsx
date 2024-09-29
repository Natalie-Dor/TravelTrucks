import CampersList from '../../components/CampersList/CampersList';

import { useEffect, useState } from 'react';
import { getCampers } from '../../campers-api';
import css from './CatalogPage.module.css';
import FilterCamper from '../../components/FilterCamper/FilterCamper';
export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  // loading , error
  useEffect(() => {
    setLoading(true);
    getCampers()
      .then(data => setCampers(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className={css.catalogPage}>
      <FilterCamper />
      {loading && <b>Loading campers...</b>}
      {campers.length > 0 && <CampersList campers={campers} />}
    </section>
  );
}
