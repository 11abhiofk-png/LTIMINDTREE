
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
            var oUserModel = new sap.ui.model.json.JSONModel();
            this.getView().setModel(oUserModel);
        },

        _onObjectMatched: function (oEvent) {
            var user_name = oEvent.getParameter("arguments").name;
            var pass_word = oEvent.getParameter("arguments").pass; // corrected from 'password' to 'pass'
            this.getView().getModel().setProperty("/username", user_name);
            this.getView().getModel().setProperty("/password", pass_word);
        },

        onNavigateToList: function () {
            let username = this.getView().byId("Input1").getValue();
            let password = this.getView().byId("Input2").getValue();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
           
            if(username === ''||password === ''){
                MessageBox.alert("Incorrect Username");
            }
            else{ 
                oRouter.navTo("Routedashboard", {
                name: username,
                pass: password // consistent with _onObjectMatched
            });}
           
        }
    });
});
``
