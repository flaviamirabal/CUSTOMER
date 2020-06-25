sap.ui.define(["../localService/mockserver"],
	function (mockserver) {
		
		//inicialización de servidor mock
		mockserver.init();
		
		//inicialización de componente embebido para html
		sap.ui.require(["sap/ui/core/ComponentSupport"]);
	});