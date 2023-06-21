import React from 'react';
import styles from "./WorldMap.module.css";
import worldMap from "./world-map.png";

export default function WorldMap() {
  return (
    <>
      <div className="container mt-5">
        <h3 className={`text-center fw-bold ${styles.h3}`}>Мир <span className={styles.spanText}>большой</span>, сделайте первый шаг к его покорению!</h3>
        <div className={`mt-4 ${styles.distributionMap}`}>
          <img src={worldMap} alt="map" />
          <button className={styles.mapPoint} style={{ top: "60%", left: "25%" }}>
            <div className={styles.centeredY}>
              <p className={styles.countryName}>Южная Америка</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "33%", left: "59%" }}>
            <div className={styles.centeredY}>
              <p>Ближний Восток</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "70%", left: "83%" }}>
            <div className={styles.centeredY}>
              <p>Австралия и Океания</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "20%", left: "14%" }}>
            <div className={styles.centeredY}>
              <p>Северная Америка</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "40%", left: "45%" }}>
            <div className={styles.centeredY}>
              <p>Африка</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "35%", left: "74%" }}>
            <div className={styles.centeredY}>
              <p>Азия</p>
            </div>
          </button>
          <button className={styles.mapPoint} style={{ top: "25%", left: "48%" }}>
            <div className={styles.centeredY}>
              <p>Европа</p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
