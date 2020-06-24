sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/resource/ResourceModel",
		"nmsfiori/Customer/model/models",
		"nmsfiori/Customer/controller/HelloDialog"
	],
	function (UIComponent, ResourceModel, models, HelloDialog) {
		return UIComponent.extend("nmsfiori.Customer.Component", {

			metadata: {
				manifest: "json"
			},

			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				this.setModel(models.createRecipient());

				var i18nModel = new ResourceModel({
					bundleName: "nmsfiori.Customer.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");

				this._helloDialog = new HelloDialog(this.getRootControl());
			},

			exit: function () {
				this._helloDialog.destroy();
				delete this._helloDialog;
			},

			openDialog: function () {
				this._helloDialog.open();
			}
		});
	}
);