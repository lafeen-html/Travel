import React, { useState } from 'react';
import CatalogOfServices from '../../data/CatalogOfServices.js'
import ItemFilter from '../../components/ItemFilter';
import { useItems } from '../../hooks/useItems';
import Pagination from '../../components/UI/pagination/Pagination';

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
                <Pagination pageDataLimit={6} items={sortedAndSearchedItems} />
              </>
            }
          </div>

        </div>
      </div>
    </div>
  )
}
