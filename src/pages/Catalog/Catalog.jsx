import React from 'react';
import ServiceItem from '../../components/ServiceItem';
import CatalogOfServices from '../../data/CatalogOfServices.js'

export default function Catalog() {


  return (
    <div>
      <div className="album mt-3 pb-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {CatalogOfServices.map((arr, id) => {
              return (
                <ServiceItem
                  key={id}
                  id={arr.id}
                  img={arr.img}
                  title={arr.title}
                  description={arr.description}
                  date={arr.date}
                  price={arr.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
