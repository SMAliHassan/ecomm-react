import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

const StockList = () => {
  const columns = [
    { name: 'image', header: 'Product & Image', minWidth: 210 },
    { name: 'Variation', header: 'Variation', minWidth: 100 },
    { name: 'Price', header: 'Price', minWidth: 120 },
    { name: 'MSKU', header: 'MSKU', minWidth: 100 },
    { name: 'Available Stock', header: 'Available Stock', minWidth: 110 },
    { name: 'Time', header: 'Time', minWidth: 110 },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4>Master Product List</h4>

        <div className="mt-4">
          <ReactDataGrid idProperty="id" columns={columns} dataSource={[]} />
        </div>
      </div>
    </div>
  );
};

export default StockList;
