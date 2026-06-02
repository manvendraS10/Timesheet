sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View", {

        onInit: function () {

        },

        onListItemPress: function (oEvent) {

            var oItem = oEvent.getParameter("listItem");
            var sPageId = oItem.data("to");

            var oSplitApp = this.byId("SplitAppDemo");

            if (sPageId) {
                oSplitApp.toDetail(this.createId(sPageId));
            }
        },

        onPressDetailBack: function () {

            var oSplitApp = this.byId("SplitAppDemo");

            if (oSplitApp) {
                oSplitApp.toDetail(this.createId("dashboardPage"));
            }
        }

    });

});