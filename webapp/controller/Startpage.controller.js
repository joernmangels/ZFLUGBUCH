sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter",
	"sap/ui/table/library"

], function (Controller, Sorter, Library) {
	"use strict";

	var SortOrder = Library.SortOrder;

	return Controller.extend("de.mangels.zfb.ZFLUGBUCH.controller.Startpage", {
		onInit: function () {

			this.getView().setModel(this.getOwnerComponent().getModel("GLOBAL"), "global");
			// this.getView().setModel(this.getOwnerComponent().getModel("DATA"), "data");

			var oModelC = this.getOwnerComponent().getModel("DATA");
			this.getView().setModel(oModelC, "data");
			// oModelC.attachRequestCompleted(function (oEvent) {
			// 	sap.ui.core.BusyIndicator.hide();
			// });

			//Initial sorting
			// var oView = this.getView();
			// var oTable = oView.byId("mainTable");
			// oTable.setEnableGrouping(false);
			// var oLfdnrColumn = oView.byId("lfdnr");
			//oView.byId("mainTable").sort(oLfdnrColumn, SortOrder.Descending);
			//oTable.getBindingContext

		},
		handleFullscreen1: function (evt) {
			var path = jQuery.sap.getModulePath("de.mangels.zfb.ZFLUGBUCH");
			switch (path) {
			case ".":
				var oCore = sap.ui.getCore();
				if (!this._oShell) {
					//	this._oShell = sap.ui.getCore().byId("Shell1");
					this._oShell = oCore.byId("Shell1");
				}

				if (evt.getSource().getPressed()) {
					//MessageToast.show(evt.getSource().getId() + " Pressed");
					this._oShell.setAppWidthLimited(false);
				} else {
					//MessageToast.show(evt.getSource().getId() + " Unpressed");
					this._oShell.setAppWidthLimited(true);
					//this._getSplitApp().setMode('ShowHideMode');
				}

				break;
			default:
				var config = sap.ushell.services.AppConfiguration;

				if (evt.getSource().getPressed()) {
					config.setApplicationFullWidth(true);
				} else {
					config.setApplicationFullWidth(false);
				}

				break;
			}
		},
		sortLfdnr: function (oEvent) {
			var oView = this.getView();
			var oTable = oView.byId("mainTable");
			// var oLfdnrColumn = oView.byId("lfdnr");
			// oTable.sort(oLfdnrColumn, this._bSortColumnDescending ? SortOrder.Descending : SortOrder.Ascending, /*extend existing sorting*/
			// 	true);
			// this._bSortColumnDescending = !this._bSortColumnDescending;

			var oSorter = new Sorter({
				path: 'data>lfdnr',
				descending: this._bSortColumnDescending ? true : false
			});

			oTable.getBinding("rows").sort(oSorter);
			this._bSortColumnDescending = !this._bSortColumnDescending;
		},
		onRefresh: function (oEvent) {
			this.getOwnerComponent().handleRefresh(oEvent, this.getView());
		},
		onCreate: function (oEvent) {
			this.getOwnerComponent().handleCreate(oEvent, this.getView());
		},
		onDelete: function (oEvent) {
			this.getOwnerComponent().handleDelete(oEvent, this.getView());
		},
		onChange: function (oEvent) {
			this.getOwnerComponent().handleChange(oEvent, this.getView());
		},
		onUpload: function (oEvent) {
			this.getOwnerComponent().handleUpload(oEvent, this.getView());
		},
		onInfo: function (oEvent) {
			this.getOwnerComponent().handleInfo(oEvent, this.getView());
		}

	});
});