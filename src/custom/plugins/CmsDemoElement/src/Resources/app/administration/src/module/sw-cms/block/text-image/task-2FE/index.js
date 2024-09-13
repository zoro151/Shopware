import './component'

Shopware.Service('cmsService').registerCmsBlock({
    name: 'my-cms-block',
    category: 'text-image',
    label: 'CMS Block implementation',
    component: 'sw-cms-block',
    previewComponent: 'sw-cms-preview',
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
});