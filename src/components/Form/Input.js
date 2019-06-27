import React from 'react';
import { Label } from './Label';

export const Input = ({ className, name, label, errors, ...rest }) => (
  <div className={`form-group ${className}`}>
    <Label name={name} label={label} />
    <input className="form-control" name={name} id={name} {...rest} />
    {errors[name] && <small className="text-danger">{String(errors[name])}</small>}
  </div>
);
