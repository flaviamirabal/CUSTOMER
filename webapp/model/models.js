sap.ui.define(["sap/ui/model/json/JSONModel"],
	function (JSONModel) {
		"use strict";

		return {
			createRecipient: function () {
				var OData = {
					recipient: {
						name: "World"
					}
				};
				var oModel = new JSONModel(OData);
				return oModel;
			}
		};
	});