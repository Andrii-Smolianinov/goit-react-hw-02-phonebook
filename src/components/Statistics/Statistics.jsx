import PropTypes from "prop-types";
import { StatisticsWrapper } from './StylesStatistics';
import { randomColor } from './ChangeColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(item => (
            <li className="item" key={item.id} style={randomColor()}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
            </li>
        ))}                 
      </ul>
    </section>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  arrayWithShape: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};