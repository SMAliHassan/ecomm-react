import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';

import masterApi from '../../apis/masterApi';
import LoaderErp from './LoaderErp';

// import shopeeLogo from '../../assets/images/logo/shopee.svg';
// import lazadaLogo from '../../assets/images/logo/lazada.svg';
// import tokopediaLogo from '../../assets/images/logo/tokopedia.svg';
// import blibliLogo from '../../assets/images/logo/blibli.svg';
// import shopifyLogo from '../../assets/images/logo/shopify.svg';
import tokopediaSmall from '../../assets/images/logo/small/tokopedia.svg';

// const logos = {
//   shopee: shopeeLogo,
//   lazada: lazadaLogo,
//   blibli: blibliLogo,
//   shopify: shopifyLogo,
//   tokopedia: tokopediaLogo,
// };

const LocalPrice = () => {
  const [pageStatus, setPageStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [masterPriceStatus, setMasterPriceStatus] = useState();
  const [channelPriceStatus, setChannelPriceStatus] = useState();

  const getProducts = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/masterProducts/price');

      setPageStatus('loaded');
      setProducts(data.data.products);
    } catch ({ response }) {
      setPageStatus('error');

      if (response && response.data && response.data.message)
        return toast.error(response.data.message);

      toast.error('An error ocurred!');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (pageStatus === 'loading') return <LoaderErp />;

  const updatePrice = async ({
    newChannelPrice,
    newMasterPrice,
    productId,
  }) => {
    try {
      newMasterPrice && setMasterPriceStatus('loading');
      newChannelPrice && setChannelPriceStatus('loading');

      await masterApi.patch('/masterProducts/price', {
        channelPrice: newChannelPrice,
        masterPrice: newMasterPrice,
        masterProductId: productId,
      });

      setChannelPriceStatus('');
      setMasterPriceStatus('');

      await getProducts();
    } catch ({ response }) {
      newMasterPrice && setMasterPriceStatus('error');
      newChannelPrice && setChannelPriceStatus('error');

      if (response && response.data && response.data.message)
        return toast.error(response.data.message);

      toast.error('An error ocurred!');
    }
  };

  const masterPricePopup = product => {
    return (
      <Popup
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        trigger={
          <button className="btn btn-md btn-link btn-slim text-start">
            <i className="la-pen la la-lg cursor-pointer"></i>
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          padding: 0,
          width: 'min(33rem, 90vw)',
        }}
      >
        {close => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                borderBottom: '1px solid #cccccc',
                padding: '1rem',
                fontSize: '1rem',
              }}
            >
              <p className="m-0">Edit Default Price</p>
              <i className="la la-close la-lg"></i>
            </div>

            <form
              style={{ color: '#333', padding: '0 1rem 1rem 1rem' }}
              onSubmit={async e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const { newMasterPrice } = Object.fromEntries(formData);

                await updatePrice({ newMasterPrice, productId: product._id });
                close();
              }}
            >
              <div style={{ marginBottom: '0.9rem', marginTop: '1rem' }}>
                <label
                  htmlFor="newMasterPrice"
                  style={{ display: 'block', lineHeight: 2 }}
                >
                  Change Price to (in Rp)
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 6px',
                  }}
                  name="newMasterPrice"
                  placeholder="The default price should be between 0-100,000,000 Rp"
                  type="number"
                  required
                  min={0}
                  max={100000000}
                />
              </div>

              <div
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  gap: '1rem',
                }}
              >
                <button
                  className={`btn btn-primary ${
                    masterPriceStatus === 'loading' ? 'disabled' : ''
                  }`}
                  type="submit"
                  disabled={masterPriceStatus === 'loading'}
                >
                  {masterPriceStatus === 'loading' ? (
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      style={{ color: 'var(--bs-white)' }}
                    ></span>
                  ) : null}
                  Save
                </button>

                <button
                  className="btn btn-secondary"
                  type="none"
                  onClick={close}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    );
  };

  const channelPricePopup = product => {
    return (
      <Popup
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        trigger={
          <button className="btn btn-md btn-link btn-slim text-start">
            <i className="la-pen la la-lg cursor-pointer"></i>
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          padding: 0,
          width: 'min(33rem, 90vw)',
        }}
      >
        {close => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                borderBottom: '1px solid #cccccc',
                padding: '1rem',
                fontSize: '1rem',
              }}
            >
              <p className="m-0">Edit Price</p>
              <i
                className="la la-close la-lg cursor-pointer"
                onClick={close}
              ></i>
            </div>

            <p style={{ margin: 0, padding: '0 1rem 0.3rem 1rem' }}>
              <i
                className="la la-info-circle"
                style={{
                  background: 'var(--bs-primary)',
                  borderRadius: '50%',
                  fontSize: '1.2rem',
                  marginRight: '4px',
                  color: '#fff',
                }}
              ></i>
              This is the actual price of the product in the channel store
            </p>

            <form
              style={{ color: '#333', padding: '0 1rem 1rem 1rem' }}
              onSubmit={async e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const { newChannelPrice } = Object.fromEntries(formData);

                await updatePrice({ newChannelPrice, productId: product._id });
                close();
              }}
            >
              <div style={{ marginBottom: '0.9rem', marginTop: '1rem' }}>
                <label
                  htmlFor="newChannelPrice"
                  style={{ display: 'block', lineHeight: 2 }}
                >
                  Change Price to (in Rp)
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 6px',
                  }}
                  name="newChannelPrice"
                  placeholder="Channel Price"
                  type="number"
                  required
                  min={0}
                  max={100000000}
                />
              </div>

              <div
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  gap: '1rem',
                }}
              >
                <button
                  className={`btn btn-primary ${
                    channelPriceStatus === 'loading' ? 'disabled' : ''
                  }`}
                  type="submit"
                  disabled={channelPriceStatus === 'loading'}
                >
                  {channelPriceStatus === 'loading' ? (
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      style={{ color: 'var(--bs-white)' }}
                    ></span>
                  ) : null}
                  Save
                </button>

                <button
                  className="btn btn-secondary"
                  type="none"
                  onClick={close}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    );
  };

  const storeTemplate = ({ bindedStore }) => {
    return (
      <div
        style={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <img
          // crossOrigin="Anonymous"
          src={tokopediaSmall}
          alt={bindedStore.storeType}
          style={{ width: '2rem' }}
        />
        <span>{bindedStore.storeNameNew || bindedStore.storeName}</span>
      </div>
    );
  };

  const productImageTemplate = rowData => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <img
          crossOrigin="Anonymous"
          src={rowData.images[0]}
          alt={rowData.name}
          style={{ height: '4rem' }}
        />
        <span
          style={{
            fontSize: '0.95rem',
            width: '14rem',
            wordBreak: 'break-all',
            overflowWrap: 'break-word',
            whiteSpace: 'break-spaces',
          }}
        >
          {rowData.name.length > 63
            ? rowData.name.slice(0, 60) + '...'
            : rowData.name}
        </span>
      </div>
    );
  };

  const masterIdTemplate = ({ _id }) => (
    <p
      style={{
        margin: 0,
        fontSize: '0.8rem',
        overflowWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        textAlign: 'center',
        // maxWidth: '5.4rem',
      }}
    >
      {_id}
    </p>
  );

  const priceTemplate = rowData => {
    return (
      <span>
        {/* Rp {rowData.channelPrice} */}
        Rp{' '}
        {Number(rowData.channelPrice).toLocaleString(window.navigator.language)}
        {channelPricePopup(rowData)}
      </span>
    );
  };

  const masterPriceTemplate = rowData => {
    return (
      <span>
        {/* Rp {rowData.masterPrice} */}
        Rp{' '}
        {Number(rowData.masterPrice).toLocaleString(window.navigator.language)}
        {masterPricePopup(rowData)}
      </span>
    );
  };

  const createdAtTemplate = ({ createdAt }) => (
    <span style={{ fontSize: '0.8rem' }}>
      {new Date(createdAt).toLocaleDateString(window.navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })}
    </span>
  );

  return (
    // <div className="row" style={{ '--bs-gutter-x': 0 }}>
    <div className="card">
      <div className="card-body">
        <h4>Price Management</h4>

        <DataTable
          value={products}
          resizableColumns
          columnResizeMode="expand"
          showGridlines
          responsiveLayout="scroll"
          scrollDirection="both"
        >
          <Column
            body={productImageTemplate}
            header="Master Product & Image"
          ></Column>
          <Column body={storeTemplate} header="Store"></Column>

          <Column body={masterPriceTemplate} header="Default Price"></Column>

          <Column body={priceTemplate} header="Price"></Column>

          <Column body={createdAtTemplate} header="Created At"></Column>

          <Column
            body={masterIdTemplate}
            header="M ID"
            resizeable={false}
            style={{ maxWidth: '7.4rem' }}
          ></Column>
        </DataTable>
      </div>
    </div>
    // </div>
  );
};

export default LocalPrice;
