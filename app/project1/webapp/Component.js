sap.ui.define([
    "sap/ui/core/UIComponent",
    "project1/model/models",
    "sap/ui/dom/includeStylesheet"
], function (UIComponent, models, includeStylesheet) {
    "use strict";

    return UIComponent.extend("project1.Component", {

        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {

            // Call base component init
            UIComponent.prototype.init.apply(this, arguments);

            // Load custom CSS
            includeStylesheet(
                sap.ui.require.toUrl("project1/css/style.css")
            );

            // Set device model
            this.setModel(
                models.createDeviceModel(),
                "device"
            );

            // Initialize router
            this.getRouter().initialize();
        }

    });
});