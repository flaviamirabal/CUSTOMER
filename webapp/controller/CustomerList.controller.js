sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"nmsfiori/Customer/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function (Controller, JSONModel, formatter, Filter, FilterOperator) {

		return Controller.extend("nmsfiori.Customer.controller.CustomerList", {
			formatter: formatter,
			onFilter: function(oEvent){
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				if (sQuery){
					aFilter.push(new Filter("ContactName", FilterOperator.Contains, sQuery));
				}
				
				var oList = this.byId('idCustomerList');
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
				
			},
			
			onInit: function () {
				var oJModel = new JSONModel({
					currency: "USD"
				});

				this.getView().setModel(oJModel, "currModel");
			}
		});
	});
