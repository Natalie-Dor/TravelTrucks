// import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCamperById } from '../../campers-api';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
// import CamperCard from '../../components/CamperCard/CamperCard';

export default function CamperDetailsPage() {
  const { camperId } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);
  // loading , error
  useEffect(() => {
    setLoading(true);
    getCamperById(camperId)
      .then(data => {
        console.log(data); // перевір, які дані повертає API
        setCamper(data);
      })
      .finally(() => setLoading(false));
    //     getCamperById(camperId)
    //       .then(data => setCamper(data))
    //       .finally(() => setLoading(false));
  }, [camperId]);
  return (
    <div>
      <h2>Camper Details {camperId}</h2>
      {loading && <b>Loading camper info...</b>}

      {camper && <CamperInfo camper={camper} />}
      {/* <CamperInfo camper={camper} /> */}
      {/* <Outlet /> */}
    </div>
  );
}
