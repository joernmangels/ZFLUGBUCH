sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	
	
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("de.mangels.zfb.ZFLUGBUCH.controller.Createpage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf de.mangels.zfb.ZFLUGBUCH.view.Createpage
		 */
		onInit: function () {
			var oModel = new JSONModel({
				_lfdnr: 0,
				_datum: "",
				_muster: "",
				_kennzeichen: "",
				_startplatz: "",
				_landeplatz: "",
				_blockzeit1: "",
				_startzeit: "",
				_landezeit: "",
				_blockzeit2: "",
				_flugzeit: "",
				_blockzeit: "",
				_landungen: "",
				_pic: true,
				_flugart: "",
				_bemerkung: ""
			});
			this.getView().setModel(oModel, "datensatz");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf de.mangels.zfb.ZFLUGBUCH.view.Createpage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf de.mangels.zfb.ZFLUGBUCH.view.Createpage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf de.mangels.zfb.ZFLUGBUCH.view.Createpage
		 */
		//	onExit: function() {
		//
		//	}
		onNavButtonPressed: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("home", {}, false);
		}

	});

});