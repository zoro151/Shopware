Shopware.Service('cmsService').registerCmsElement(
    {
        name: 'cms-element',
        category: 'text-image',
        label: 'My Image Text Block!',
        component: 'sw-cms-block-my-image-text-reversed',
        previewComponent: 'sw-cms-preview-my-image-text-reversed',
        defaultConfig: {
            marginBottom: '20px',
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px',
            sizingMode: 'boxed'
        },
        slots: {
            left: 'text',
            right: 'image'
        }
    }
);