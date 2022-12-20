import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import masterApi from '../../apis/masterApi';
import LoaderErp from './LoaderErp';

const TokopediaProduct = () => {
  const [pageStatus, setPageStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  const getProducts = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/products/tokopedia');
      setPageStatus('loaded');
      setProducts(data.data.products);

      console.log(data.data.products);
    } catch (err) {
      setPageStatus('error');
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (pageStatus === 'loading') return <LoaderErp />;

  // const storeTemplate = ({ store, storeType }) => {
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         gap: '6px',
  //       }}
  //     >
  //       <img
  // crossOrigin="Anonymous"
  //         src="https://erp.ginee.com/erp/images/icon-channel-round/tokopedia.svg"
  //         alt={storeType}
  //         style={{ width: '2rem' }}
  //       />
  //       <span>{store.storeName}</span>
  //     </div>
  //   );
  // };

  const productStoreTemplate = rowData => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <img
          crossOrigin="Anonymous"
          src={rowData.productData.pictures[0].ThumbnailURL}
          alt={rowData.name}
          style={{ height: '5rem', fontSize: '4px' }}
        />
        <div>
          <a
            href={rowData.productData.other.url}
            target="_blank"
            rel="noreferrer"
            className="my-1 text-primary d-block"
            style={{
              wordBreak: 'break-all',
              overflowWrap: 'break-word',
              whiteSpace: 'break-spaces',
              fontSize: '0.95rem',
            }}
          >
            {rowData.name.length > 63
              ? rowData.name.slice(0, 60) + '...'
              : rowData.name}
          </a>
          <span
            className="my-0 px-sm-2 py-sm-1 rounded-3"
            style={{
              fontSize: '0.75rem',
              background: 'var(--bs-secondary)',
            }}
          >
            {rowData.store.storeName}
          </span>
        </div>
      </div>
    );
  };

  const masterIdTemplate = ({ masterProduct }) => {
    if (!masterProduct.length) return '---';

    return (
      <Link
        to={`../product-local/?product=${masterProduct[0]._id}`}
        style={{
          margin: 0,
          display: 'block',
          fontSize: '0.8rem',
          textAlign: 'center',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
          whiteSpace: 'break-spaces',
          color: 'var(--bs-primary)',
        }}
      >
        {masterProduct[0]._id}
      </Link>
    );
  };

  const priceTemplate = rowData => {
    return (
      'Rp ' + Number(rowData.price).toLocaleString(window.navigator.language)
    );
  };

  const formatDate = date =>
    new Date(date).toLocaleString(window.navigator.language, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });

  const timeTemplate = ({ createdAt, updatedAt }) => (
    <div style={{ fontSize: '0.8rem' }}>
      <p className="fw-bold my-1">Created At:</p>
      <p className="my-1" style={{ color: 'rgba(0,0,0,0.55)' }}>
        {formatDate(createdAt)}
      </p>
      <p className="fw-bold my-1">Updated At:</p>
      <p className="my-1" style={{ color: 'rgba(0,0,0,0.55)' }}>
        {updatedAt ? formatDate(updatedAt) : '---'}
      </p>
    </div>
  );

  const actionsTemplate = rowData => {
    const sync = async () => {
      try {
        setTableLoading(true);
        toast.info('Syncing product...', { hideProgressBar: true });
        await masterApi.post(`/products/${rowData._id}/sync`);
        setTableLoading(false);
        toast.success('Sync Complete.');
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          className="btn btn-link btn-slim text-start link-primary"
          onClick={sync}
        >
          Sync
        </button>
        <button className="btn btn-link btn-slim text-start link-primary">
          Edit
        </button>
        <button className="btn btn-link btn-slim text-start link-primary">
          Set Unavailable
        </button>
        <button className="btn btn-link btn-slim text-start link-primary">
          Delete
        </button>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="mb-3"> Products / Tokopedia </h4>

        <DataTable
          value={products}
          loading={tableLoading}
          resizableColumns
          columnResizeMode="expand"
          // showGridlines
          responsiveLayout="scroll"
          scrollable={true}
        >
          <Column
            body={productStoreTemplate}
            header="Product & Store"
            style={{ minWidth: '22rem' }}
          ></Column>

          <Column body={priceTemplate} header="Price"></Column>

          <Column
            body={masterIdTemplate}
            header="M ID"
            resizeable={false}
            style={{ maxWidth: '7.6rem' }}
          ></Column>

          <Column
            body={timeTemplate}
            header="Time"
            style={{ minWidth: '9.5rem' }}
          ></Column>

          <Column
            // body={rowData => (rowData.channelSKU ? rowData.channelSKU : '---')}
            body={({ productData }) => (
              <span style={{ fontSize: '0.9rem' }}>
                {productData.other.sku}
              </span>
            )}
            header="Channel SKU"
          ></Column>

          <Column
            style={{
              boxShadow: '-5px 0px 5px -1px rgba(0,0,0,0.2)',
              marginLeft: '0.5rem',
            }}
            body={actionsTemplate}
            frozen
            alignFrozen="right"
            header="Action"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default TokopediaProduct;
