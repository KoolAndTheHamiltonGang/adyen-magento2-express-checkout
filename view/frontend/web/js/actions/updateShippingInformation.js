define([
    'mage/storage',
    'Adyen_ExpressCheckout/js/helpers/getApiUrl'
], function (storage, getApiUrl) {
    'use strict';

    return function (payload, isProductView) {
        return storage.post(
            getApiUrl('update-shipping-information', isProductView),
            JSON.stringify(payload)
        );
    };
});
