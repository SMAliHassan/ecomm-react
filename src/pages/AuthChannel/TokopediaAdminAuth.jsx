import React, { useState } from 'react';
import { toast } from 'react-toastify';

import masterApi from '../../apis/masterApi';

const TokopediaAdminAuth = () => {
  const [createStoreStatus, setCreateStoreStatus] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [shopId, setShopId] = useState('');

  const createStore = async () => {
    try {
      setCreateStoreStatus('loading');

      await masterApi.post('/stores/tokopedia', {
        userEmail,
        shopId,
      });

      toast.success('Store created successfully.');
      setCreateStoreStatus('success');
    } catch ({ response }) {
      setCreateStoreStatus('error');

      if (response && response.data && response.data.message)
        return toast.error(response.data.message);

      toast.error('An error ocurred!');
    }
  };

  return (
    <React.Fragment>
      <div
        className="card"
        style={{
          width: 'min(28rem, 90vw)',
          margin: 'auto',
          minHeight: '50vh',
          fontSize: '1rem',
        }}
      >
        <div className="card-body p-3">
          <h2>Create Tokopedia Store</h2>
          {/* <form
            onSubmit={e => {
              e.preventDefault();
              createStore();
            }}
          > */}
          <div className="my-4">
            <label htmlFor="userEmail">
              User's Email (Email to bind the store with)
            </label>
            <input
              name="userEmail"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              type="text"
              style={{ width: '100%', marginTop: '5px', padding: '3px 6px' }}
            />
          </div>

          <div className="my-4">
            <label htmlFor="shopId">Shop IP (ID of the Tokopedia shop)</label>
            <input
              name="shopId"
              value={shopId}
              onChange={e => setShopId(e.target.value)}
              type="text"
              style={{ width: '100%', marginTop: '5px', padding: '3px 5px' }}
            />
          </div>

          <button
            onClick={createStore}
            style={{ float: 'right' }}
            // type="submit"
            className={`btn btn-primary btn-lg ${
              createStoreStatus === 'loading' ? 'disabled' : ''
            }`}
            disabled={'loading' === createStoreStatus}
          >
            {createStoreStatus === 'loading' ? (
              <span
                className="spinner-border spinner-border-sm mx-2"
                style={{ color: 'var(--bs-white)' }}
              ></span>
            ) : null}
            Create Store
          </button>
          {/* </form> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TokopediaAdminAuth;
