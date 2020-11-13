import React from 'react';
import Form from '.';

export default function example() {
  return (
    <Form
      defaultState={{ hola: 'hola', hola2: 'food' }}
      onFormChange={(v) => console.log(v)}
      fields={[
        {
          fields: [
            {
              name: 'hola',
              type: 'Input',
              label: 'Hola',
              placeholder: 'hola',
              validation: { required: true },
            },
            {
              name: 'hola2',
              type: 'Select',
              returnOnlyValue: true,
              options: [
                { value: 'food', label: 'Food' },
                {
                  value: 'beingfabulous',
                  label: 'Being Fabulous',
                  disabled: true,
                },
                { value: 'reasonml', label: 'ReasonML' },
                { value: 'unicorns', label: 'Unicorns' },
                { value: 'kittens', label: 'Kittens' },
              ],
            },
          ],
        },
      ]}
    />
  );
}
