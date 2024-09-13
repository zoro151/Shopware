import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'six-images-with-title',
    category: 'text-image',
    label: 'sw-cms.elements.six-images-with-title.label',
    component: 'sw-cms-block-my-image-text-reversed',
    previewComponent: 'sw-cms-block-six-images-with-title',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        image1:'image',
        text1:'text',
        image2:'image',
        text2:'text',
        image3:'image',
        text3:'text',
        image4:'image',
        text4:'text',
        image5:'image',
        text5:'text',
        image6:'image',
        text6:'text'
    }
});