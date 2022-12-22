import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { TreeSelect } from 'primereact/treeselect';

import masterApi from '../../apis/masterApi';
import LoaderErp from './LoaderErp';

const LocalProductPublish = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [searchParams] = useSearchParams();

  const [pageStatus, setPageStatus] = useState();
  const [publishStatus, setPublishStatus] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState([]);
  const [height, setHeight] = useState();
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [weight, setWeight] = useState();
  const [newImage, setNewImage] = useState();
  const [status, setStatus] = useState();
  const [minOrder, setMinOrder] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await masterApi.get(`/masterProducts/${productId}`);

      setName(data.data.product.name);
      setCondition(data.data.product.condition);
      setDescription(data.data.product.description);
      setImages(data.data.product.images);
      setHeight(data.data.product.volume.height);
      setLength(data.data.product.volume.length);
      setWidth(data.data.product.volume.width);
      setPrice(data.data.product.masterPrice);
      setWeight(data.data.product.weight);
    };

    const getStoreAndCategories = async () => {
      const { data } = await masterApi.get(
        `/stores/${searchParams.get('storeId')}`
      );
      const store = data.data.store;

      const categoryResp = await masterApi.get(
        `/stores/categories/${store.storeType}`
      );

      const remodelCategories = categs =>
        categs.map(categ => {
          return {
            key: categ.id,
            label: categ.name,
            style: {
              fontSize: '0.8rem',
              width: '12rem',
              padding: '0',
            },
            children: categ.child ? remodelCategories(categ.child) : undefined,
          };
        });

      setCategories(remodelCategories(categoryResp.data.data.categories));
    };

    (async function () {
      setPageStatus('loading');

      await Promise.all([await getProduct(), await getStoreAndCategories()]);

      setPageStatus('');
    })();
  }, [productId, searchParams]);

  const publishProduct = async () => {
    try {
      setPublishStatus('loading');

      const productData = {
        name,
        category_id: selectedCategory,
        price_currency: 'IDR',
        price,
        status,
        min_order: minOrder,
        weight,
        weight_unit: 'GR',
        condition,
        description,
        stock,
        pictures: images,
        dimension: { height, length, width },
      };

      await masterApi.post(`/masterProducts/${productId}/publish`, {
        productData,
        storeId: searchParams.get('storeId'),
      });
      setPublishStatus('');
      toast.success('Product publish to the store successfully!');
      navigate('/erp/product-local');
    } catch ({ response }) {
      setPublishStatus('error');

      if (response && response.data && response.data.message)
        return toast.error(response.data.message);

      toast.error('An error ocurred!');
    }
  };

  if (pageStatus === 'loading') return <LoaderErp />;

  return (
    <div className="card">
      <div className="card-body">
        <h4 style={{ marginBottom: '1rem' }}>Publish to the Store</h4>

        <form
          onSubmit={e => {
            e.preventDefault();
            publishProduct();
          }}
        >
          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Product Name
            </label>
            <input
              maxLength={70}
              style={{
                width: 'min(38rem, 100%)',
                padding: '4px 6px',
              }}
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="condition"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Condition
            </label>
            <div
              style={{
                width: '10rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {[1, 2].map(el => {
                const name = el === 1 ? 'New' : 'Used';

                return (
                  <span key={el}>
                    <input
                      onChange={e => setCondition(Number(e.target.value))}
                      type="radio"
                      id={name}
                      name="condition"
                      value={el}
                      style={{ marginRight: '0.3rem' }}
                      checked={condition === el}
                    />
                    <label style={{ color: '#333' }} htmlFor={name}>
                      {name}
                    </label>
                  </span>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="category"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Category
            </label>

            <TreeSelect
              value={selectedCategory}
              options={categories}
              style={{ height: '2rem', fontSize: '0.95rem', padding: '0' }}
              onChange={e => setSelectedCategory(e.value)}
            />
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="status"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Status
            </label>

            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              name="store"
              className="form-select form-select-sm cursor-pointer"
              style={{ fontSize: '0.9rem', width: 'min(38rem, 100%)' }}
            >
              {['UNLIMITED', 'LIMITED', 'EMPTY'].map(el => (
                <option className="dropdown-item" value={el} key={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="description"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Short Description
            </label>
            <textarea
              name="desription"
              id="description"
              value={description}
              maxLength={800}
              onChange={e => setDescription(e.target.value)}
              style={{
                width: 'min(38rem, 100%)',
                height: '12rem',
                padding: '4px 6px',
              }}
            ></textarea>
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="price"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Price
            </label>
            <input
              required
              value={price}
              onChange={e => setPrice(e.target.value)}
              name="price"
              type="number"
              max={100_000_000_000}
              min={0}
              style={{
                width: 'min(38rem, 100%)',
                padding: '4px 6px',
              }}
            />
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="stock"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              stock
            </label>
            <input
              required
              value={stock}
              onChange={e => setStock(e.target.value)}
              name="stock"
              type="number"
              max={10000}
              min={1}
              style={{
                width: 'min(38rem, 100%)',
                padding: '4px 6px',
              }}
            />
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="minOrder"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              minOrder
            </label>
            <input
              value={minOrder}
              onChange={e => setMinOrder(e.target.value)}
              name="minOrder"
              type="number"
              max={1000}
              min={1}
              style={{
                width: 'min(38rem, 100%)',
                padding: '4px 6px',
              }}
            />
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <label
              htmlFor="images"
              style={{
                display: 'block',
                lineHeight: 2,
                fontSize: '1rem',
                marginBottom: '3px',
              }}
            >
              Product Images (Max 9)
            </label>
            <div style={{ marginBottom: '0.5rem' }}>
              <input
                maxLength={250}
                style={{
                  width: 'min(38rem, 100%)',
                  padding: '4px 6px',
                }}
                name="images"
                value={newImage}
                type="text"
                onChange={e => setNewImage(e.target.value)}
                placeholder="Image URL"
              />
              <a
                href="/add-image"
                className="btn btn-primary"
                style={{ padding: '3px 1rem', marginLeft: '0.5rem' }}
                onClick={e => {
                  e.preventDefault();

                  if (!newImage) return;

                  if (images.length === 9)
                    return toast.error(
                      'Product cannot have more than 9 images.'
                    );

                  setImages([...images, newImage]);
                  setNewImage('');
                }}
              >
                Add
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.3rem' }}>
              {images.map(img => (
                <div
                  style={{ position: 'relative', paddingTop: '1rem' }}
                  key={img}
                >
                  <i
                    className="la la-close cursor-pointer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    onClick={() => {
                      const index = images.findIndex(el => el === img);

                      setImages(images.filter((el, i) => i !== index));
                    }}
                  ></i>

                  <a href={img} target="_blank" rel="noreferrer">
                    <i
                      className="la la-eye"
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                      }}
                    ></i>
                  </a>
                  <img
                    crossOrigin="Anonymous"
                    src={img}
                    alt="product"
                    style={{ width: '6.5rem' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <h5 style={{ marginTop: '3rem' }}>Package Size</h5>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Height */}
            <div>
              <label
                htmlFor="height"
                style={{
                  display: 'block',
                  lineHeight: 2,
                  fontSize: '1rem',
                  marginBottom: '3px',
                }}
              >
                Height (cm)
              </label>
              <input
                type="number"
                min={1}
                max={1000000}
                value={height}
                onChange={e => setHeight(e.target.value)}
                style={{ width: '15rem' }}
              />
            </div>
            {/* Width */}
            <div>
              <label
                htmlFor="width"
                style={{
                  display: 'block',
                  lineHeight: 2,
                  fontSize: '1rem',
                  marginBottom: '3px',
                }}
              >
                Width (cm)
              </label>
              <input
                type="number"
                min={1}
                max={1000000}
                value={width}
                onChange={e => setWidth(e.target.value)}
                style={{ width: '15rem' }}
              />
            </div>
            {/* Length */}
            <div>
              <label
                htmlFor="length"
                style={{
                  display: 'block',
                  lineHeight: 2,
                  fontSize: '1rem',
                  marginBottom: '3px',
                }}
              >
                Length (cm)
              </label>
              <input
                type="number"
                min={1}
                max={1000000}
                value={length}
                onChange={e => setLength(e.target.value)}
                style={{ width: '15rem' }}
              />
            </div>

            {/* Weight */}
            <div>
              <label
                htmlFor="length"
                style={{
                  display: 'block',
                  lineHeight: 2,
                  fontSize: '1rem',
                  marginBottom: '3px',
                }}
              >
                Weight (gm)
              </label>
              <input
                required
                type="number"
                min={1}
                max={10000000}
                value={weight}
                onChange={e => setWeight(e.target.value)}
                style={{ width: '15rem' }}
              />
            </div>
          </div>

          <div
            style={{
              paddingTop: '1rem',
              marginTop: '3rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              borderTop: '1px solid #eee',
            }}
          >
            <Link to="/erp/product-local" className="btn btn-secondary">
              Cancel
            </Link>

            <button
              className={`btn btn-primary ${
                publishStatus === 'loading' ? 'disabled' : ''
              }`}
              type="submit"
              disabled={publishStatus === 'loading'}
            >
              {publishStatus === 'loading' ? (
                <span
                  className="spinner-border spinner-border-sm mx-2"
                  style={{ color: 'var(--bs-white)' }}
                ></span>
              ) : null}
              Publish to Store
            </button>
          </div>
        </form>
      </div>
      <style>
        {'.p-treeselect-label { padding: 0.3rem 0.5rem !important; }'}
      </style>
    </div>
  );
};

export default LocalProductPublish;
