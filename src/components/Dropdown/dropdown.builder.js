import { Builder } from '@builder.io/react';
import  Dropdown  from './Dropdown';

Builder.registerComponent(Dropdown, {
    name: 'Dropdown',

    inputs: [
        {
            type: 'string',
            name: 'text',
            required: true,
            defaultValue: 'not a NavBar ',
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
                    lable: 'Profile 1',
                    value: 'h1',
                }
            ],
            defaultValue: 'h4',
            fontFamily: 'arial'
        },

    ],
});
