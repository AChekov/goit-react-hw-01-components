import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(data => (
          <li className={css.item} key={data.id}>
            <span className={css.label}>{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
