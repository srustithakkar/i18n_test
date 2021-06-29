import { Builder } from '@builder.io/react';
import { Heading } from './Heading';

Builder.registerComponent(Heading, {
  name: 'Heading',

  inputs: [
    {
        type: 'string',
        name: 'text',
        required: true,
        defaultValue: 'NavBar ',
        defaultStyles: {
            textAlign: "center",
            fontSize: "20px",
        },
    },
    {
        type: 'string',
        name: 'type',
        required: true,
        enum: [
            {
                lable: 'Heading 1',
                value: 'h1',
            }
        ],
        defaultValue: 'h4',
        fontFamily: 'arial'
    },
    
    ],
});
