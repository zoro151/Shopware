import template from './sw-cms-block-my-image-text-reversed.html.twig';
import './sw-cms-block-my-image-text-reversed.scss';

Shopware.Component.register('sw-cms-preview-my-image-text-reversed',{
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});