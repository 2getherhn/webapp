//@ts-check
import React, { useMemo } from 'react';

import { withError } from '@capdilla/react-d-form';
import { Row, Card, CardBody, FormGroup, Label, Button, Col } from 'reactstrap';
import Select from 'react-select';

// interface Iinput extends IFormComponent {
//   onBlur: (value: any) => any;
// }

const Components = {
  Input: withError(
    ({ name, label, onChange, onBlur, props, value, placeholder, error }) => {
      return (
        <Col>
          <FormGroup className="form-group has-float-label">
            <Label>{label}</Label>
            <input
              className="form-control"
              value={value}
              placeholder={placeholder}
              name={name}
              onChange={(e) => onChange(e.target.value)}
              onBlur={(e) => onBlur(e.target.value)}
              {...props}
            />
            {error && (
              <div className="invalid-feedback d-block">{error.content}</div>
            )}
          </FormGroup>
        </Col>
      );
    }
  ),
  Select: withError(
    ({
      name,
      label,
      onChange,
      onBlur,
      props,
      value,
      placeholder,
      error,
      options,
    }) => {
      const indexedValues = useMemo(
        () =>
          options.reduce(
            (acc, option) => ({ ...acc, [option.value]: option }),
            {}
          ),
        [options]
      );

      return (
        <Col>
          <FormGroup className="form-group has-float-label">
            <Label>{label}</Label>
            <Select
              className={`react-select `}
              classNamePrefix="react-select"
              options={options}
              onChange={(e) => onChange(e.value)}
              // onBlur={(e) => onBlur(e.target.value)}
              value={indexedValues[value]}
            />
            {error && (
              <div className="invalid-feedback d-block">{error.content}</div>
            )}
          </FormGroup>
        </Col>
      );
    }
  ),
};

export default Components;
