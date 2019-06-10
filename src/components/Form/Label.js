import React from 'react';
import { startCase } from 'lodash';

export const Label = ({ name, label }) => (
  <label htmlFor={name}>{label || startCase(name)}</label>
);
