sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"de/mangels/zfb/ZFLUGBUCH/model/models",
	"sap/ui/model/json/JSONModel"

], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("de.mangels.zfb.ZFLUGBUCH.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			//SetUp HostName
			var targetHostname, targetprotocol;
			var currentHostname = window.location.hostname;
			//if (currentHostname === "localhost" || currentHostname === "192.168.2.200") {
			//if (currentHostname === "localhost" || currentHostname === "192.168.2.140") {
			// targetHostname = "192.168.2.200:6581";
			// targetprotocol = "https://";
			//targetHostname = "192.168.2.140";
			//targetHostname = "jmcam.goip.de";
			// } else {
			// 	//targetHostname = "jmangels.goip.de";
			// 	//targetHostname = "jmangels.goip.de:6580";
			targetHostname = "jmangels.goip.de:6581";
			targetprotocol = "https://";
			// }
			// Create Global Model
			var appVersion = this.getManifestEntry("/sap.app/applicationVersion/version");
			var oModel = new JSONModel({
				_APPVERSION: appVersion,
				_URL: targetprotocol + targetHostname
			});
			this.setModel(oModel, "GLOBAL");

			//Load Flugbuchdata
			this.loadData();

		},
		loadData: function () {
			var url;
			var oModel = new JSONModel();
			var oEntry = {};

			var oModelG = this.getModel("GLOBAL");
			var _URL = oModelG.getProperty("/_URL");
			
			// sap.ui.core.BusyIndicator.show();

			url = _URL + "/FLUGBUCH/load_flugdaten.php";

			var datum_start = new Date(2000, 0, 1, 0, 0, 0, 0);
			var datum_ende = new Date(2100, 11, 31, 23, 59, 59, 0);
			var s_datum_start = datum_start.toISOString().substr(0, 19).replace('T', ' ');
			var s_datum_ende = datum_ende.toISOString().substr(0, 19).replace('T', ' ');

			oEntry.TABLE = "FLUGBUCH";
			oEntry.START = s_datum_start;
			oEntry.ENDE = s_datum_ende;

			oModel.loadData(url, oEntry, false, "POST");
			this.setModel(oModel, "DATA");
			//oModel.refresh(true);
			
			// oModel.attachRequestCompleted(function () {
			// 	sap.ui.core.BusyIndicator.hide();
			// });
		},
		handleRefresh: function (evt,oView) {
			// var reload = this.getModel("i18n").getResourceBundle().getText("reload");
			// var oModel = this.getModel("DATA");
			// // oModel.setData({modelData:{}});
			// // oModel.updateBindings(true);
			// if (oModel) {
			// 	// oModel.setData(null);
			// 	// oModel.updateBindings(true);
			// 	oModel.setData([]);
			// }
			// var oTable = oView.byId("mainTable");
			// oTable.getBinding("rows").refresh();
			// this.loadData();
			// sap.m.MessageToast.show(reload);
		}
	});
});