sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("nmsfiori.Customer.controller.App", {

			onInit: function () {

			},
			onOpenDialog: function () {
				this.getOwnerComponent().openDialog();
			}
		});
	});