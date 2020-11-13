import React from 'react';
import Core, { GetComponent } from '@capdilla/react-d-form';
import { Row } from 'reactstrap';

import FormComponents from './FormComponents';

const Elm = (props) => GetComponent(FormComponents, props);

{
  /* <Row>
<Colxx xxs="12" md="6" className="mb-5">
  <label>
    <IntlMessages id="form-components.state-single" />
  </label>
  <Select
    components={{ Input: CustomSelectInput }}
    className="react-select"
    classNamePrefix="react-select"
    name="form-field-name"
    value={selectedOption}
    onChange={setSelectedOption}
    options={selectData}
  />
</Colxx>
<Colxx xxs="12" md="6">
  <label>
    <IntlMessages id="form-components.state-multiple" />
  </label>
  <Select
    components={{ Input: CustomSelectInput }}
    className="react-select"
    classNamePrefix="react-select"
    isMulti
    name="form-field-name"
    value={selectedOptions}
    onChange={setSelectedOptions}
    options={selectData}
  />
</Colxx>
</Row> */
}

export default class Form extends Core {
  render() {
    return (
      <div className="av-tooltip tooltip-label-right">
        <Row>
          {this.rows((rows) => (
            <>
              {this.fieldFn(rows, (r, key) => (
                <Elm key={key} {...r} />
              ))}
            </>
          ))}
        </Row>
      </div>
    );
  }
}
