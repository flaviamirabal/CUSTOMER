sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment"
	],
	function (Controller, MessageToast, Fragment) {
		"use strict";

		return Controller.extend("nmsfiori.Customer.controller.HelloPanel", {

			onInit: function () {

			},

			onShowHello: function () {
				var sHello = this.getView().getModel("i18n").getResourceBundle();
				var sName = this.getView().getModel().getProperty("/recipient/name");
				var sMessage = sHello.getText("HelloWorldMessageText");
				sMessage = sMessage.concat(" ").concat(sName);
				MessageToast.show(sMessage);
			},

			onOpenDialog: function () {
				this.getOwnerComponent().openDialog();
			}
		});
	});
