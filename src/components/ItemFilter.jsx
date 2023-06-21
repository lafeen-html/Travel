import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

export default function ItemFilter({filter, setFilter}) {
  
  return (
    <div className='col d-flex justify-content-between align-items-center my-4'>
        <Input
          value={filter.query}
          type="search"
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск..."
        />
        <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "price", name: "По цене" },
          ]}
        />
      </div>
  )
}
