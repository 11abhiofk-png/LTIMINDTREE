/*global QUnit*/

sap.ui.define([
	"project1/controller/Sap1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Sap1 Controller");

	QUnit.test("I should test the Sap1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
