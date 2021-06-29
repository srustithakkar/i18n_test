import Login from './Login';
import { Builder } from '@builder.io/react';

export const LoginBuilderConfig = {
    name: 'Login',
    // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
    // image:
    //   'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fd6d3bc814ffd47b182ec8345cc5438c0',
    inputs: [
        {
            name: 'title',
            type: 'string',
            defaultValue: 'Your Title Here',
        },
        {
            name: 'title2',
            type: 'string',
            defaultValue: 'Your Title Here',
        },
        {
            name: 'image',
            type: 'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            required: true,
            defaultValue:
                'https://images.unsplash.com/photo-1517249865690-ee36eb09e596?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        },
        {
            name: 'buttonLink',
            type: 'string',
        },
        {
            name: 'buttonText',
            type: 'string',
            defaultValue: 'LogIn',
        },
        {
            name: 'height',
            type: 'number',
            defaultValue: 400,
        },
        {
            name: 'darkMode',
            type: 'boolean',
            defaultValue: false,
        },
        // `advanced: true` hides this option under the "show advanced" toggle
        {
            name: 'parallaxStrength',
            type: 'number',
            advanced: true,
            defaultValue: 400,
        },
    ],
};

Builder.registerComponent(Login, LoginBuilderConfig);
