sap.ui.define([],
	function () {

		return {
			contactTitleText: function (sContact) {
				var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

				switch (sContact) {
				case "S":
					return resourceBundle.getText("ContactTitleS");
				case "O":
					return resourceBundle.getText("ContactTitleO");
				case "A":
					return resourceBundle.getText("ContactTitleA");
				default:
					return sContact;
				}
			}
		};
	});