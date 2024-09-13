Shopware.Service('cmsService').registerCmsBlock({
    name: 'CmsDemo-cms-element',
    category: 'text-image',
    label: 'sw-cms.elements.label',
    component: 'sw-cms-CmsDemo-cms-element',
    previewComponent: 'sw-cms-preview-CmsDemo-cms-element',
    slots: {
        left: 'text',
        right: 'image'
    }
});