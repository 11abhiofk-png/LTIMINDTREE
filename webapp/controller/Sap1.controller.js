
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, MessageBox, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("project1.controller.Sap1", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Routedashboard").attachPatternMatched(this._onObjectMatched, this);

            // Initialize the user model
            var oUserModel = new JSONModel();
            this.getView().setModel(oUserModel, "oUserModel");
       Event.getParameter("arguments").name;
            var pass_word = oEvent.getParameter("arguments").pass;
            var oUserModel = this.getView().getModel("oUserModel");
            oUserModel.setProperty("/username", user_name);
            oUserModel.setProperty("/password", pass_word);
        },

        onNavigateToList: function () {
            let username = this.getView().byId("Input1").getValue();
            let password = this.getView().byId("Input2").getValue();

            if (username == '' || password == '') {
                MessageBox.error("Invalid Username/Password");
            } else {
                var oNorthwindModel = this.getView().getModel("northwind");

                oNorthwindModel.read("/Employees", {
                    filters: [
                        new Filter("FirstName", FilterOperator.EQ, username),
                        new Filter("Extension", FilterOperator.EQ, password)
                    ],
                    success: function (oData) {
                        if (oData.results.length > 0) {
                            MessageBox.success("Correct credentials");
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("Routedashboard", {
                                name: username,
                                pass: password
                            });
                        } else {
                            MessageBox.error("Incorrect Username/Password");
                        }
                    }.bind(this),
                    error: function (oError) {
                        MessageBox.error("Failed to fetch data from Northwind service");
                    }
                });
            }
        }
    });
});
