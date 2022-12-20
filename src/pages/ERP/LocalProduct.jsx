import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SplitButton } from 'primereact/splitbutton';
import Popup from 'reactjs-popup';

import masterApi from '../../apis/masterApi';
import LoaderErp from './LoaderErp';
import { toast } from 'react-toastify';

const LocalProductNew = () => {
  const navigate = useNavigate();

  const [pageStatus, setPageStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [channelProductTypes, setChannelProductTypes] = useState([]);
  const [stores, setStores] = useState([]);
  const [addByStorePopupOpen, setAddByStorePopupOpen] = useState(false);
  const [referChannelPopupOpen, setReferChannelPopupOpen] = useState(false);

  const getChannelProductTypes = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/products/types');
      setPageStatus('loaded');
      setChannelProductTypes(data.data.types);
    } catch (err) {
      console.log(err);
    }
  };

  const getStores = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/stores/');
      setPageStatus('loaded');
      setStores(data.data.stores);
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/masterProducts');
      setPageStatus('loaded');
      setProducts(data.data.masterProducts);
    } catch (err) {
      setPageStatus('error');
      toast.error('An error ocurred!');
      // console.log(err);
    }
  };

  useEffect(() => {
    getProducts();

    getChannelProductTypes();

    getStores();
  }, []);

  if (pageStatus === 'loading') return <LoaderErp />;

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
          src={
            rowData.images[0] ||
            'https://erp.ginee.com/erp/webpack/assets/no-product-icon-8edd1a7b028b1e4097c2..png'
          }
          alt={'product-img'}
          style={{ height: '4.5rem' }}
        />
        <span>{rowData.name}</span>
      </div>
    );
  };

  const masterIdTemplate = ({ _id }) => {
    return (
      <span
        style={{
          margin: 0,
          display: 'block',
          fontSize: '0.8rem',
          textAlign: 'center',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
          color: 'var(--bs-primary)',
          whiteSpace: 'break-spaces',
        }}
      >
        {_id}
      </span>
    );
  };

  const bindedStoreTemplate = ({ bindedStore }) => {
    if (!bindedStore) return '---';

    return (
      <span
        style={{
          margin: 0,
          display: 'block',
          fontSize: '0.8rem',
          textAlign: 'center',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
          color: 'var(--bs-primary)',
          whiteSpace: 'break-spaces',
        }}
      >
        {bindedStore.id}
      </span>
    );
  };

  const bindedProductTemplate = ({ bindedProduct }) => {
    if (!bindedProduct) return '---';

    return (
      <span
        style={{
          margin: 0,
          display: 'block',
          fontSize: '0.8rem',
          textAlign: 'center',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
          color: 'var(--bs-primary)',
          whiteSpace: 'break-spaces',
        }}
      >
        {bindedProduct}
      </span>
    );
  };

  const timeTemplate = ({ createdAt, updatedAt }) => {
    const formatDate = date =>
      new Date(date).toLocaleString(window.navigator.language, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      });

    return (
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
  };

  const actionsTemplate = rowData => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* {editPopup(rowData)} */}

        <Link
          to={`/erp/product-local-edit/${rowData._id}`}
          className="btn btn-link btn-slim text-start link-success"
        >
          Edit
        </Link>

        {/* <button
          className="btn btn-link btn-slim text-start link-primary"
          // onClick={pullData}
        >
          Publish to Store
        </button> */}

        {<DeletePopup productId={rowData._id} />}
      </div>
    );
  };

  const AddByStorePopup = () => {
    const [selectedChannel, setSelectedChannel] = useState(
      channelProductTypes[0]
    );
    const [selectedStore, setSelectedStore] = useState();
    const [popupStatus, setPopupStatus] = useState();

    return (
      <Popup
        open={addByStorePopupOpen}
        onClose={() => setAddByStorePopupOpen(false)}
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          padding: 0,
          width: 'min(36rem, 92vw)',
        }}
      >
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
            <p className="m-0">Auto add By Store</p>
            <i
              className="la la-close la-lg cursor-pointer"
              onClick={() => setAddByStorePopupOpen(false)}
            ></i>
          </div>

          <form
            style={{ color: '#333', padding: '0 1rem 1rem 1rem' }}
            onSubmit={async e => {
              try {
                e.preventDefault();

                if (!selectedStore) {
                  setPopupStatus('');
                  return toast.error('Please select a store.');
                }

                setPopupStatus('loading');
                await masterApi.post('/masterProducts/create-by-store', {
                  storeId: selectedStore,
                });
                setPopupStatus('');

                setAddByStorePopupOpen(false);
                await getProducts();
              } catch ({ response }) {
                setPopupStatus('error');

                if (response && response.data && response.data.message)
                  return toast.error(response.data.message);

                toast.error('An error ocurred!');
              }
            }}
          >
            {/* Channel */}
            <div style={{ marginBottom: '0.9rem', marginTop: '1rem' }}>
              <label
                htmlFor="channel"
                style={{ display: 'block', lineHeight: 2 }}
              >
                Channel
              </label>

              <select
                value={selectedChannel}
                onChange={e => setSelectedChannel(e.target.value)}
                name="channel"
                className="form-select form-select-sm cursor-pointer"
                style={{ fontSize: '0.9rem' }}
              >
                {channelProductTypes.map(el => (
                  <option className="dropdown-item" value={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            {/* Store */}
            <div style={{ marginBottom: '0.9rem', marginTop: '1rem' }}>
              <label
                htmlFor="store"
                style={{ display: 'block', lineHeight: 2 }}
              >
                Store
              </label>

              <select
                value={selectedStore}
                onChange={e => setSelectedStore(e.target.value)}
                name="store"
                className="form-select form-select-sm cursor-pointer"
                style={{ fontSize: '0.9rem' }}
              >
                <option
                  className="dropdown-item"
                  selected={!selectedStore}
                  disabled
                ></option>
                {stores
                  .filter(el => el.storeType === selectedChannel)
                  .map(el => (
                    <option className="dropdown-item" value={el.id} key={el.id}>
                      {el.storeNameNew}
                    </option>
                  ))}
              </select>
            </div>

            <div
              style={{
                marginTop: '2.5rem',
                marginLeft: 'auto',
                display: 'flex',
                flexDirection: 'row-reverse',
                gap: '1rem',
              }}
            >
              <button
                className={`btn btn-primary ${
                  popupStatus === 'loading' || !selectedStore ? 'disabled' : ''
                }`}
                type="submit"
                disabled={
                  popupStatus === 'loading' ||
                  !selectedChannel ||
                  !selectedStore
                }
              >
                {popupStatus === 'loading' ? (
                  <span
                    className="spinner-border spinner-border-sm mx-2"
                    style={{ color: 'var(--bs-white)' }}
                  ></span>
                ) : null}
                Create Master Product
              </button>

              <button
                className="btn btn-secondary"
                type="none"
                onClick={() => setAddByStorePopupOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Popup>
    );
  };

  const DeletePopup = ({ productId }) => {
    const [popupStatus, setPopupStatus] = useState();

    const deleteProduct = async () => {
      try {
        setPopupStatus('loading');
        await masterApi.delete(`/masterProducts/${productId}`);
        setPopupStatus('');

        await getProducts();
      } catch ({ response }) {
        setPopupStatus('error');

        if (response && response.data && response.data.message)
          return toast.error(response.data.message);

        toast.error('An error ocurred!');
      }
    };

    return (
      <Popup
        trigger={
          <button className="btn btn-link btn-slim text-start link-danger">
            Delete
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          display: 'flex',
          width: 'min(30rem, 90vw',
          flexDirection: 'column',
          justifyContent: 'space-around',
          minHeight: '13rem',
          padding: '1.5rem 1rem',
        }}
      >
        {close => (
          <>
            <h5>
              <i
                className="la la-close la-lg cursor-pointer"
                style={{
                  marginRight: '0.5rem',
                  background: 'var(--bs-danger)',
                  color: '#fff',
                  borderRadius: '50%',
                  padding: '5px 3px',
                }}
              ></i>
              Are you sure you want to delete this product?
            </h5>

            <div style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
              <p>
                1. After deleting, Master Product in the product list will be
                deleted immediately
              </p>
              <p>
                2. After deleting Master Product, Master Product bound to the
                Channel Product will be immediately unbind
              </p>
            </div>

            <div
              style={{
                marginTop: '1.2rem',
                marginLeft: 'auto',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <button className="btn btn-secondary" onClick={close}>
                Cancel
              </button>
              <button
                className="btn btn-danger"
                disabled={popupStatus === 'loading'}
                onClick={async () => {
                  await deleteProduct();
                  close();
                }}
              >
                {popupStatus === 'loading' ? (
                  <span
                    className="spinner-border spinner-border-sm mx-2"
                    style={{ color: 'var(--bs-white)' }}
                  ></span>
                ) : null}
                Confirm Delete
              </button>
            </div>
          </>
        )}
      </Popup>
    );
  };

  const ReferChannelPopup = () => {
    const [selectedChannel, setSelectedChannel] = useState(
      channelProductTypes[0]
    );

    return (
      <Popup
        open={referChannelPopupOpen}
        onClose={() => setReferChannelPopupOpen(false)}
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          padding: 0,
          width: 'min(36rem, 92vw)',
        }}
      >
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
            <p className="m-0">Auto add By Store</p>
            <i
              className="la la-close la-lg cursor-pointer"
              onClick={() => setReferChannelPopupOpen(false)}
            ></i>
          </div>

          <p style={{ padding: '1rem', paddingBottom: 0 }}>
            Go to the channel products and "sync" the products to create master
            products binded with that product.
          </p>

          <div style={{ padding: '0 1rem' }}>
            <label
              htmlFor="channel"
              style={{ display: 'block', lineHeight: 2 }}
            >
              Channel
            </label>

            <select
              value={selectedChannel}
              onChange={e => setSelectedChannel(e.target.value)}
              name="channel"
              className="form-select form-select-sm cursor-pointer"
              style={{ fontSize: '0.9rem' }}
            >
              {channelProductTypes.map(el => (
                <option className="dropdown-item" value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              margin: '2.5rem 1rem 1rem auto',
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: '1rem',
            }}
          >
            <Link
              to={`/erp/product-${selectedChannel}`}
              className={'btn btn-primary'}
            >
              Confirm
            </Link>

            <button
              className="btn btn-secondary"
              type="none"
              onClick={() => setReferChannelPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>
    );
  };

  const items = [
    {
      label: 'Add Product',
      command: e => {
        navigate('/erp/product-local-add');
      },
    },
    {
      label: 'Auto Add by Store',

      command: e => {
        setAddByStorePopupOpen(true);
      },
    },
    {
      label: 'Refer Channel Products',
      command: e => {
        setReferChannelPopupOpen(true);
      },
    },
  ];

  return (
    <React.Fragment>
      {<AddByStorePopup />}
      {<ReferChannelPopup />}

      <div className="card">
        <div className="card-body">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Master Product List</h4>

            <SplitButton
              style={{ fontSize: '0.8rem' }}
              className="p-button-sm btn-primary mb-2"
              label="Add Product"
              model={items}
            ></SplitButton>
          </div>
          <DataTable
            value={products}
            showGridlines
            responsiveLayout="scroll"
            size="small"
          >
            <Column
              body={productImageTemplate}
              header="Master Product & Image"
            ></Column>

            <Column
              body={bindedStoreTemplate}
              header="Binded Store"
              resizeable={false}
              style={{ maxWidth: '7.4rem' }}
            ></Column>

            <Column
              body={bindedProductTemplate}
              header="Binded Product"
              resizeable={false}
              style={{ maxWidth: '7.4rem' }}
            ></Column>

            {/*   <Column body={priceTemplate} header="Default Price"></Column>

          <Column body={priceTemplate} header="Price"></Column>*/}

            <Column
              body={masterIdTemplate}
              header="M ID"
              resizeable={false}
              style={{ maxWidth: '7.4rem' }}
            ></Column>

            <Column
              body={timeTemplate}
              header="Time"
              style={{ minWidth: '9.5rem' }}
            ></Column>

            <Column
              body={actionsTemplate}
              header="Actions"
              frozen={true}
            ></Column>
          </DataTable>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LocalProductNew;
