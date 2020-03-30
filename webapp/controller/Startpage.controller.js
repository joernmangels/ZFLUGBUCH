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
			this.getView().setModel(this.getOwnerComponent().getModel("DATA"), "data");

			//Initial sorting
			// var oView = this.getView();
			// var oTable = oView.byId("mainTable");
			// oTable.setEnableGrouping(false);
			// var oLfdnrColumn = oView.byId("lfdnr");
			//oView.byId("mainTable").sort(oLfdnrColumn, SortOrder.Descending);
			//oTable.getBindingContext

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

		}
	});
});