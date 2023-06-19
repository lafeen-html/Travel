import React, { useState } from 'react';
import ServiceItem from '../../components/ServiceItem';
import CatalogOfServices from '../../data/CatalogOfServices.js'
import ItemFilter from '../../components/ItemFilter';
import Select from '../../components/UI/select/Select';
import { useItems } from '../../hooks/useItems';

export default function Catalog() {
  const [items, setItems] = useState(CatalogOfServices);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedItems = useItems(items, filter.sort, filter.query);

  return (
    <div>
      <div className="album mt-3 pb-5 mb-5">
        <div className="container">

          <h2 className="text-center mb-4 fw-bold">Поиск туров и приключений</h2>

          <ItemFilter filter={filter} setFilter={setFilter} />

          <div>
            {!sortedAndSearchedItems.length
              ? <div>
                <h2 className="text-center mt-4 mb-4 pb-5">Туры не найдены</h2>
              </div>
              :
              <>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
                  {sortedAndSearchedItems.map((arr, id) => {
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
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
