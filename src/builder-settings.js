import {
    Builder,
    builder
} from '@builder.io/react';

import './components/Login/Login.builder'
import './components/Heading/Heading.builder';
import './components/profile/profile.builder';
import './components/Dropdown/dropdown.builder'
// Be sure to import all of your components where you use <BuilderComponent /> so they are
// bundled and accessible
// import './components/ProductsList/ProductsList.builder';
// import './components/Hero/Hero.builder';
// import './components/TripleColumns/TripleColumns.builder';
// import './components/DoubleColumns/DoubleColumns.builder';
// import './components/Review/Review.builder';
// import './components/ReviewsSlider/ReviewsSlider.builder';
// import './components/Button/Button.builder';
// import './components/Heading/Heading.builder';
// import './components/HeroWithChildren/HeroWithChildren.builder';
// import './components/DynamicColumns/DynamicColumns.builder';
// import './components/ProductsListWithServerSideData/ProductsListWithServerSideData.builder';

// Add your public apiKey here
const YOUR_KEY = '1ec400a893d84af3aabe46d907a7b9a1';
builder.init(YOUR_KEY);

// Remove this to allow all built-in components to be used too
const OVERRIDE_INSERT_MENU = false;

if (OVERRIDE_INSERT_MENU) {
    // (optionally) use this to hide all default built-in components and fully manage
    // the insert menu components and sections yourself
    Builder.set({
        customInsertMenu: true
    });
}

// (optionally) set these to add your own sections of components arranged as you choose.
// this can be used with or without `customInsertMenu` above

Builder.register('insertMenu', {
    name: 'Simple components',
    items: [{
            name: 'Login'
        },
        {
            name: 'Double Columns'
        },
        {
            name: 'Triple Columns'
        },
        {
            name: 'Dynamic Columns'
        },
    ],
});

Builder.register('insertMenu', {
    name: 'Dynamic components',
    items: [{
            name: 'Hero With Children'
        },
        {
            name: 'Products List'
        },
        {
            name: 'Reviews Slider'
        },
        {
            name: 'Products List SSR'
        },

        // More advanced
        {
            name: 'Hero With Children Alt',
            item: {
                component: {
                    name: 'Hero With Children',
                    options: {
                        image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F349738e6805b481ab6c50bda7e24445e',
                        height: 400,
                    },
                },
                children: [
                    // Supply alternate children
                    {
                        '@type': '@builder.io/sdk:Element',
                        component: {
                            name: 'Heading',
                            options: {
                                text: 'You can edit the contents of this example!',
                                type: 'h4',
                            },
                        },
                    },
                ],
            },
        },
    ],
});

Builder.register('insertMenu', {
    name: 'Blocks',
    items: [{
            name: 'Button'
        },
        {
            item: 'Heading',
            name: 'Nav'
        },

        // More advanced

    ],
});
Builder.register('insertMenu', {
    name: 'Profile components',
    items: [{
            name: 'Button'
        },
        {
            item: 'Profile',
            name: 'Profile'
        },

        // More advanced

    ],
});
Builder.register('insertMenu', {
    name: 'Dropdown components',
    items: [{
            name: 'Button'
        },
        {
            item: 'Dropdown',
            name: 'Dropdown'
        },

        // More advanced

    ],
});