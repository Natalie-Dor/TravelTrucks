import css from './FilterCamper.module.css';
export default function FilterCamper() {
  return (
    <div className={css.filter}>
      <p>Location</p>
      <p>Filters</p>
      <p>Vehicle equipment</p>
      <p>Vehicle type</p>
      <buttom>Search</buttom>
    </div>
  );
}
