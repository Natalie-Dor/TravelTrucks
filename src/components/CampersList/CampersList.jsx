import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';

export default function CampersList({ campers }) {
  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
