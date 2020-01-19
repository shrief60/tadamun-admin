var $table;
// Date range filter
var minDateFilter = "";
var maxDateFilter = "";

$(function() {
	$table = $("#submissions_table").dataTable({
		pageLength: 10,
		lengthMenu: [10, 25, 50, 75, 100, 250, 500, 1000],
		order: [[0, "asc"]],
		searching: true,
		responsive: true,
		dom: "Blfrtip",
		buttons: [
			{
				extend: "csv",
				text: '<span class="fa fa-file-excel-o"></span> Excel Export',
				exportOptions: {
					modifier: {
						page: "all",
						search: "applied",
						order: "applied"
					}
				}
			}
		],
		initComplete: function() {
			var column = this.api().column(3);

			var select = $(
				'<select><option value="">إظهار الكل</option></select>'
			)
				.appendTo($(".city-filter"))
				.on("change", function() {
					var val = $.fn.dataTable.util.escapeRegex($(this).val());

					if (val == "") toggleFilteringState(false);
					else toggleFilteringState(true);

					column
						.search(val ? "^" + val + "$" : "", true, false)
						.draw();
				});

			column
				.data()
				.unique()
				.sort()
				.each(function(d, j) {
					select.append(
						'<option value="' + d + '">' + d + "</option>"
					);
				});
		}
	});
});

// Filter By Date
$(function() {
	// var submittedAtColIndex = 10;

	$('input[name="daterange"]').daterangepicker(
		{
			opens: "right",
			locale: {
				applyLabel: "Filter",
				cancelLabel: "Reset"
			}
		},
		function(start, end, label) {
			console.log("FILTERING");

			minDateFilter = new Date(start.format("YYYY-MM-DD")).getTime();
			maxDateFilter = new Date(end.format("YYYY-MM-DD")).getTime();
			appendDateFilter();
		}
	);
});

$('input[name="daterange"]').on("cancel.daterangepicker", function(ev, picker) {
	console.log("RESETTING");

	//do something, like clearing an input
	$('input[name="daterange"]').val("");

	resetFilters();
});

function appendDateFilter() {
	toggleFilteringState(true);

	$.fn.dataTableExt.afnFiltering.push(function(oSettings, aData, iDataIndex) {
		let submittedAtDateIndex = 10;

		if (aData[submittedAtDateIndex] == "") return false;

		if (typeof aData._date == "undefined" || isNaN(aData._date)) {
			aData._date = new Date(aData[submittedAtDateIndex]).getTime();
		}

		if (minDateFilter && !isNaN(minDateFilter)) {
			if (aData._date < minDateFilter) {
				return false;
			}
		}

		if (maxDateFilter && !isNaN(maxDateFilter)) {
			if (aData._date > maxDateFilter) {
				return false;
			}
		}

		return true;
	});

	$table.fnDraw();
}

function resetFilters() {
	toggleFilteringState(false);

	$.fn.dataTableExt.afnFiltering.length = 0;
	$table.fnDraw();
}

// Trigger Download CSV
document
	.querySelector("button.download-submissions-btn ")
	.addEventListener("click", function() {
		// var html = document.querySelector("table").outerHTML;
		// export_table_to_csv(html, "table.csv");

		$(".dt-buttons .dt-button.buttons-csv").click();
	});

// var table2 = document.getElementById("id_table");
var msg = document.getElementById("msg");
var modal = document.getElementById("myModal");
modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function cancel() {
	modal.style.display = "none";
}

function dlt(r) {
	let idCol = $(r)
		.parent("td")
		.siblings(".id");

	//open confirmation panel
	modal.style.display = "block";
	// var i = r.parentNode.parentNode.rowIndex;
	// var tr = table2.getElementsByTagName("tr");
	// var td = tr[i].getElementsByTagName("td")[0];

	document.getElementById("custId").value = idCol.text();
}

function toggleFilteringState(isFiltered) {
	let text = isFiltered ? "Download Filtered Data" : "Download";

	$(".download-submissions-btn").text(text);
}
