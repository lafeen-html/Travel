import React from 'react';
import ServiceItem from './ServiceItem';
import CatalogOfServices from '../data/CatalogOfServices.js'

export default function ServiceList() {



  return (
    <div>
      <div className="album mt-3 pb-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {CatalogOfServices.map((arr, id) => {
              return (
                <ServiceItem
                  key={id}
                  id={id}
                  img={arr.img}
                  title={arr.title}
                  description={arr.description}
                  data={arr.data}
                  price={arr.price}
                />
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}
