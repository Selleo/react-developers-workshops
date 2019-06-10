import React from 'react';
import { Label } from './Label';

export const Textarea = ({ className, name, label, ...rest }) => (
  <div className={`form-group ${className}`}>
    <Label name={name} label={label} />
    <textarea className="form-control" name={name} id={name} {...rest} />
  </div>
);
