import React from 'react';
import dukaan from '../../assets/dukaan.svg';
import indiaFlag from '../../assets/indiaFlag.svg';
import styles from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__wrapper__content']}>
          <div className={styles['footer__wrapper__contentlogo']}>
            <img src={dukaan} alt="Dukaan" />
          </div>
          <div className={styles['footer__wrapper__content__links']}>
            <div className={styles['footer__wrapper__content__links-link']}>
              <p>Contact</p>
              <p>FAQ's</p>
            </div>
            <div className={styles['footer__wrapper__content__links-link']}>
              <p>Tutorials</p>
              <p>Blog</p>
            </div>
            <div className={styles['footer__wrapper__content__links-link']}>
              <p>Privacy</p>
              <p>Banned Items</p>
            </div>
            <div className={styles['footer__wrapper__content__links-link']}>
              <p>About</p>
              <p>
                Jobs <span>3</span>
              </p>
            </div>
            <div className={styles['footer__wrapper__content__links-link']}>
              <p>
                <a
                  href="https://www.facebook.com/mydukaanapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/mydukaanapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/dukaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles['footer__wrapper__copyrights']}>
          <div>
            <p>Dukaan 2023, All rights reserved.</p>
          </div>
          <div className={styles['footer__wrapper__copyrights-flag']}>
            <p>Made in India</p>
            <img src={indiaFlag} alt="India" />
          </div>
        </div>
      </div>
    </footer>
  );
};
