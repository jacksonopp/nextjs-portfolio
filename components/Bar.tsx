import React, { PropsWithChildren } from 'react';
import styles from '../styles/Bar.module.css';
import GagueChart from 'react-gauge-chart';

type Props = {
  percentage: number;
};

const Bar: React.FC<PropsWithChildren<Props>> = ({ children, percentage }) => {
  return (
    <>
      <div className={styles.bar}>
        <p className={styles.bar__title}>{children}</p>
        <GagueChart percent={percentage / 100} nrOfLevels={2} colors={['hsl(213, 92%, 60%)', 'hsl(47, 100%, 50%)']} cornerRadius={8} arcsLength={[0.8, 0.2]} />
      </div>
    </>
  );
};

export default Bar;
