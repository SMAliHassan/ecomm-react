import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { toast } from 'react-toastify';
import Popup from 'reactjs-popup';

import LoaderErp from './LoaderErp';
import masterApi from '../../apis/masterApi';

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [pageStatus, setPageStatus] = useState();
  const [editStoreStatus, setEditStoreStatus] = useState();
  // const [newStoreName, setNewStoreName] = useState('');

  const getStores = async () => {
    try {
      setPageStatus('loading');
      const { data } = await masterApi.get('/stores');
      setStores(data.data.stores);
      setPageStatus('loaded');
      console.log(data.data.stores);
    } catch (err) {
      console.log(err);
      setPageStatus('error');

      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  const editPopup = store => {
    const editStore = async newStoreName => {
      try {
        setEditStoreStatus('loading');
        await masterApi.patch(`/stores/${store._id}`, {
          storeName: newStoreName,
        });
        setEditStoreStatus(null);
        await getStores();
      } catch (err) {
        setEditStoreStatus('error');
        toast.error('An error ocurred!');
        console.log(err);
      }
    };

    return (
      <Popup
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }}
        trigger={
          <button className="btn btn-link btn-slim text-start link-success">
            Edit Store
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '0.5rem',
          // display: 'flex',
          padding: 0,
          width: 'min(33rem, 90vw)',
          // flexDirection: 'column',
          // justifyContent: 'space-around',
          // minHeight: '13rem',
          // padding: '2rem',
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
              <p className="m-0">Edit Store</p>
              <i
                className="la la-close la-lg cursor-pointer"
                onClick={close}
              ></i>
            </div>

            <div
              style={{
                margin: '1rem auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                // color: '#666',
              }}
            >
              <img
                src={store.storeData.logo}
                style={{
                  width: 'max(9.5rem, 90%)',
                  aspectRatio: '4 / 3',
                  borderRadius: '5px',
                  marginBottom: '3px',
                }}
                alt="store logo"
              />
              {store.storeNameNew ? (
                <div>
                  <p className="my-0">{store.storeNameNew}</p>
                  <p className="my-0">Original: {store.storeName}</p>
                </div>
              ) : (
                <p className="my-0">{store.storeName}</p>
              )}
            </div>

            <form
              style={{ color: '#333', padding: '0 1rem 1rem 1rem' }}
              onSubmit={async e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const { newStoreName } = Object.fromEntries(formData);
                // setEditStoreStatus('loading');

                await editStore(newStoreName);
                close();
              }}
            >
              <div style={{ marginBottom: '0.9rem' }}>
                <label
                  htmlFor="newStoreName"
                  style={{ display: 'block', lineHeight: 2 }}
                >
                  Store Name
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '4px 6px',
                  }}
                  name="newStoreName"
                  type="text"
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
                    editStoreStatus === 'loading' ? 'disabled' : ''
                  }`}
                  type="submit"
                  disabled={editStoreStatus === 'loading'}
                >
                  {editStoreStatus === 'loading' ? (
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

  const nameLogoTemplate = rowData => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
        }}
      >
        <img
          crossOrigin="Anonymous"
          src={rowData.storeData.logo}
          style={{ width: '3.5rem', borderRadius: '5px' }}
          alt={'store-logo'}
          className="logo"
        />

        <div>
          {rowData.storeNameNew ? (
            <>
              <p className="my-0 lh-sm">{rowData.storeNameNew}</p>
              <p
                className="my-0 lh-sm"
                style={{ color: '#999aaa', fontSize: '0.9rem' }}
              >
                Original: {rowData.storeName}
              </p>
            </>
          ) : (
            <p className="my-0 lh-sm">{rowData.storeName}</p>
          )}

          <span
            className="my-0 p-0"
            style={{ fontSize: '0.8rem', fontWeight: 300 }}
          >
            {rowData.storeType}
          </span>
        </div>
      </div>
    );
  };

  const authorizedTemplate = ({ authorized }) => {
    const text = authorized ? 'Authorized' : 'Expired';
    const textType = authorized ? 'success' : 'error';

    return (
      <p className={`text-${textType}`} style={{ marginBottom: 0 }}>
        {text}
      </p>
    );
  };

  const actionsTemplate = rowData => {
    const pullData = async () => {
      try {
        toast.info(
          'Started pulling the store data, it is expected to take some time, please pay attention to the synchronization of the store data later',
          {
            hideProgressBar: true,
            style: {
              minWidth: '60vw',
              margin: '0 auto',
            },
          }
        );
        await masterApi.post(`/stores/${rowData._id}/pull-data`);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {editPopup(rowData)}

        <button
          className="btn btn-link btn-slim text-start link-primary"
          onClick={pullData}
        >
          Pull Data
        </button>

        <button className="btn btn-link btn-slim text-start link-danger">
          Delete Store
        </button>
      </div>
    );
  };

  const countryRegionTemplate = rowData => {
    // return rowData.storeData.province_name;
    return rowData.countryRegion || rowData.storeData.province_name;
  };

  if (pageStatus === 'loading') return <LoaderErp />;

  return (
    // <div className="row">
    <div className="card">
      <div className="card-body">
        <h4>Store List</h4>

        <div className="mt-4">
          <DataTable
            value={stores}
            showGridlines
            responsiveLayout="scroll"
            size="small"
          >
            <Column body={nameLogoTemplate} header="Name and Logo"></Column>

            <Column
              body={authorizedTemplate}
              header="Authorization Status"
            ></Column>

            <Column
              body={countryRegionTemplate}
              header="Country/Region"
            ></Column>

            <Column
              body={({ authorizedAt }) =>
                new Date(authorizedAt).toLocaleString(
                  window.navigator.language,
                  {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  }
                )
              }
              header="Authorized At"
            ></Column>

            <Column field="authValidFor" header="Auth Validity Period"></Column>

            <Column
              body={actionsTemplate}
              header="Actions"
              frozen={true}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
