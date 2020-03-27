sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("de.mangels.zfb.ZFLUGBUCH.controller.Main", {
		onInit: function () {

			this.getView().setModel(this.getOwnerComponent().getModel("GLOBAL"), "global");

		}
	});
});