import React, { useState } from 'react';
import styles from './style.module.scss';

const Tooltip = props => {
  let timeout;
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
    setIsClicked(false);
  };

  const handleCopy = () => {
    props.onClick();
    setIsClicked(true);
    // hideTip();
  };

  return (
    <div
      className={styles['tooltip_wrapper']}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onClick={handleCopy}
    >
      {props.children}
      {active && (
        <div className={styles['tooltip']}>
          <p> {isClicked ? 'Copied!' : 'Click to copy'}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
