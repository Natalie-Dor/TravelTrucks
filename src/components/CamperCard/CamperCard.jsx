import { Link } from 'react-router-dom';
import css from './CamperCard.module.css';

export default function CamperCard({
  camper: {
    id,
    name,
    price,
    rating,
    location,
    // description,
    // transmission,
    // engine,
    // AC,
    // kitchen,
    gallery,
    // reviews,
  },
}) {
  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt="Camper's photo" className={css.img} />
      <div className={css.cardinfo}>
        <b>{name}</b>

        <b>&euro;{price}.00</b>

        <b> {rating}</b>

        <b>{location}</b>

        <b>
          <Link to={`${id}`}> Show more </Link>
          {/* <Link to={`/payments/${id}`}>Details</Link> */}
        </b>
      </div>
    </div>
  );
}
