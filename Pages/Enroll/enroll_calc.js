$(document).ready(function() {
	function resetPanel() {
		$("#year").removeClass("w3-text-red");
		$("#month").removeClass("w3-text-red");
		$("#day").removeClass("w3-text-red");
		$("#EnrollResp").removeClass("w3-green");
		$("#EnrollResp").removeClass("w3-orange");
		$("#EnrollResp").removeClass("w3-red");
		$("#EnrollResp").removeClass("w3-leftbar w3-border-red w3-pale-red w3-text-black");
	}
	$("#year").change(function() {
		$("#year").removeClass("w3-text-red");
		$("#EnrollResp").addClass("w3-hide");
	});
	$("#month").change(function() {
		$("#month").removeClass("w3-text-red");
		$("#EnrollResp").addClass("w3-hide");
	});
	$("#day").change(function() {
		$("#day").removeClass("w3-text-red");
		$("#EnrollResp").addClass("w3-hide");
	});
	$("#checkBDay").on("click", function() {
		let errorFlag = 0;
		if ($("#year").val() == null) {
			$("#year").addClass("w3-text-red");
			errorFlag = 1;
		}
		if ($("#month").val() == null) {
			$("#month").addClass("w3-text-red");
			errorFlag = 1;
		}
		if ($("#day").val() == null) {
			$("#day").addClass("w3-text-red");
			errorFlag = 1;
		}
		if (errorFlag == 1) {
			$("#EnrollResp").text("Please fix the above fields in red. These are required. Thank you.");
			$("#EnrollResp").addClass("w3-leftbar w3-border-red w3-pale-red w3-text-black");
			$("#EnrollResp").removeClass("w3-hide");
			return;
		}

		const birthMonth = $("#month").val();
		const birthDay = $("#day").val();
		const birthYear = $("#year").val();
		const birthday = new Date(birthYear, birthMonth, birthDay);

		// Updating these values should affect the rest of the calculations without needing to update rest of the code.
		// The code for "Too young" will need to be updated manually below
		const schoolYear = 2023;
		const cutoffStartMonth = 8; // Zero indexed month. 8 = September
		const cutoffStartDay = 2;
		const cutoffEndMonth = 3;// Zero indexed month. 3 = April
		const cutoffEndDay = 2;

		const gradeTKStart = new Date(schoolYear - 5, cutoffStartMonth, cutoffStartDay);
		const gradeTKEnd = new Date(schoolYear - 4, cutoffEndMonth, cutoffEndDay);

		const gradeKStart = new Date(schoolYear - 6, cutoffStartMonth, cutoffStartDay);
		const gradeKEnd = new Date(schoolYear - 5, cutoffStartMonth, cutoffStartDay - 1);

		const grade1Start = new Date(schoolYear - 7, cutoffStartMonth, cutoffStartDay);
		const grade1End = new Date(schoolYear - 6, cutoffStartMonth, cutoffStartDay - 1);

		const grade2Start = new Date(schoolYear - 8, cutoffStartMonth, cutoffStartDay);
		const grade2End = new Date(schoolYear - 7, cutoffStartMonth, cutoffStartDay - 1);

		const grade3Start = new Date(schoolYear - 9, cutoffStartMonth, cutoffStartDay);
		const grade3End = new Date(schoolYear - 8, cutoffStartMonth, cutoffStartDay - 1);

		const grade4Start = new Date(schoolYear - 10, cutoffStartMonth, cutoffStartDay);
		const grade4End = new Date(schoolYear - 9, cutoffStartMonth, cutoffStartDay - 1);

		const grade5Start = new Date(schoolYear - 11, cutoffStartMonth, cutoffStartDay);
		const grade5End = new Date(schoolYear - 10, cutoffStartMonth, cutoffStartDay - 1);

		const grade6Start = new Date(schoolYear - 12, cutoffStartMonth, cutoffStartDay + 1);
		const grade6End = new Date(schoolYear - 11, cutoffStartMonth, cutoffStartDay - 1);

		let grade = "No";
		let startdate = "No";
		let canstarttoday = "No";

		if (birthday > new Date(2019, 3, 2)) {
			grade = "young";
		} else if (birthday >= gradeTKStart && birthday <= gradeTKEnd) {
			grade = "TK";
		} else if (birthday >= gradeKStart && birthday <= gradeKEnd) {
			grade = "K";
		} else if (birthday >= grade1Start && birthday <= grade1End) {
			grade = "1";
		} else if (birthday >= grade2Start && birthday <= grade2End) {
			grade = "2";
		} else if (birthday >= grade3Start && birthday <= grade3End) {
			grade = "3";
		} else if (birthday >= grade4Start && birthday <= grade4End) {
			grade = "4";
		} else if (birthday >= grade5Start && birthday <= grade5End) {
			grade = "5";
		} else if (birthday >= grade6Start && birthday <= grade6End) {
			grade = "6";
		} else {
			grade = "old";
		}

		resetPanel();

		if (grade == "old") {
			$("#EnrollResp").addClass("w3-red");
			$("#EnrollResp").text("Sorry, your student is currently too " + grade + " to be eligible for enrollment. REALMS is for grades TK-6th at this time.");
		} else if (grade == "young") {
			$("#EnrollResp").addClass("w3-orange");
			$("#EnrollResp").text("Sorry, your student may be too " + grade + " to be eligible for enrollment currently. Please verify with Jessica @ (760) 375-1010");
		} else {
			$("#EnrollResp").addClass("w3-green");
			$("#EnrollResp").text("Wonderful news! Your student is eligible to enroll for grade " + grade + " today!");
		}
		$("#EnrollResp").removeClass("w3-hide");

	});
});