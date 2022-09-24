import React, { useState, useEffect } from 'react';
var validator = require('validator');

const FormInput = ({
  value,
  onChange,
  required,
  className = '',
  prefixIcon,
  shouldMatch,
  onError,
  type,
  placeholder,
}) => {
  const [activated, setActivated] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    onError && onError(error);
  }, [onError, error]);

  return (
    <React.Fragment>
      <i
        className={`prefix-icon feather prefix-icon-lg icon-${prefixIcon}`}
        style={{ top: '30%' }}
      ></i>

      <input
        className={`form-control ${className}${error ? 'is-invalid' : ''}`}
        type={showPassword ? 'input' : type}
        value={value}
        placeholder={placeholder}
        onChange={e => {
          required && !activated && setActivated(true);
          setError('');

          onChange(e);
        }}
        onBlur={e => {
          if (required && !e.target.value && activated) {
            setShowPassword(false);
            return setError(placeholder);
          }

          if (shouldMatch && !(shouldMatch.text === value))
            return setError(shouldMatch.error);

          if (type === 'email' && activated && !validator.isEmail(value))
            return setError('Email invalid, please re-enter.');

          if (type === 'tel' && activated && !validator.isMobilePhone(value))
            return setError('Invaild phone number, please re-enter.');

          return setError('');
        }}
      />

      {type === 'password' && !error ? (
        <i
          className="suffix-icon feather cursor-pointer text-dark icon-eye"
          style={{ top: '30%' }}
          onClick={() => setShowPassword(!showPassword)}
          ng-reflect-ng-class="icon-eye"
        ></i>
      ) : null}

      <p
        className="text-danger"
        style={{
          fontWeight: 500,
          marginBottom: '0.5rem',
          lineHeight: 1.3,
        }}
      >
        {error ? error : <br />}
      </p>
    </React.Fragment>
  );
};

export default FormInput;
