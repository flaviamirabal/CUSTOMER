sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	return {
		init: function () {

			var oMockServer = new MockServer({
				/* eslint-disable sap-no-hardcoded-url */
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
				/* eslint-enable sap-no-hardcoded-url */
			});

			var oUriParameters = new UriParameters.fromQuery(window.location.search);

			MockServer.config({
				autorespond: true,
				autorespondAfter: oUriParameters.get("serverDelay") || 500
			});

			var sPath = "../localService";

			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			oMockServer.start();
		}
	};
});