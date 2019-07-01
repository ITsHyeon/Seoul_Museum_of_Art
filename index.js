window.onload = function() {
	/* var interval = setInterval(handleRefresh, 3000); */
	handleRefresh();
}

function handleRefresh(target) {
	var url;
	if(target=="exhibition"){
		console.log("exhibition");
		url = "http://openapi.seoul.go.kr:8088/5947747272746e7834306e6768646a/json/ListExhibitionOfSeoulMOAInfo/1/10/";
		$.getJSON(url, exhibitionTraffic);
	} else if(target=="collection"){
		console.log("collection");
		url = "http://openapi.seoul.go.kr:8088/5947747272746e7834306e6768646a/json/SemaPsgudInfoKorInfo/1/10/";
		$.getJSON(url, collectionTraffic);
	} else if(target=="education"){
		console.log("education");
		url = "http://openapi.seoul.go.kr:8088/5947747272746e7834306e6768646a/json/ListEducationOfSeoulMOAInfo/1/10/";
		$.getJSON(url, educationTraffic);
	}
	
}

function exhibitionTraffic(exhibition) {
	var exhibitionDiv = document.getElementById("exhibition");
	var traffic = exhibition.ListExhibitionOfSeoulMOAInfo.row;
	var search = document.getElementById("groupSearch");

	for (var i = 0; i < traffic.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "exhibitionItem");
		/*
		 * div.innerHTML = "<div class='boardTable'><table border='1'><caption><h3>"+
		 * (i+1) +"번째 게시물</h3></caption><tr><th>일련번호</th><td colspan='5'>" +
		 * traffic[i].SDM_BOARD_SEQ + "</td></tr><tr><th>제목</th><td colspan='5'>" +
		 * traffic[i].TITLE + "</td></tr><tr><th>작성부서</th><td>" +
		 * traffic[i].USER_NM + "</td><th>작성일시</th><td>" +
		 * traffic[i].REG_DT + "</td><th>조회수</th><td>" +
		 * traffic[i].READ_CNT + "</td></tr><tr><td colspan='6' align='center'>" +
		 * traffic[i].CONTS + "</td></tr></table></div>";
		 */

		div.innerHTML = "<div class='exContainer'>" + "<img src='"
				+ traffic[i].DP_MAIN_IMG
				+ "' width='300px' height='300px'><br>" + "<p class='exTitle'>"
				+ traffic[i].DP_NAME + "</p>" + "<p class='exDate'>"
				+ traffic[i].DP_START + " ~ " + traffic[i].DP_END
				+ "</p></div>";

		exhibitionDiv.appendChild(div);

	}
}
function collectionTraffic(collection) {
	var collectionDiv = document.getElementById("collection");
	var traffic = collection.SemaPsgudInfoKorInfo.row;
	var search = document.getElementById("groupSearch");

	for (var i = 0; i < traffic.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "collectionItem");
		/*
		 * div.innerHTML = "<div class='boardTable'><table border='1'><caption><h3>"+
		 * (i+1) +"번째 게시물</h3></caption><tr><th>일련번호</th><td colspan='5'>" +
		 * traffic[i].SDM_BOARD_SEQ + "</td></tr><tr><th>제목</th><td colspan='5'>" +
		 * traffic[i].TITLE + "</td></tr><tr><th>작성부서</th><td>" +
		 * traffic[i].USER_NM + "</td><th>작성일시</th><td>" +
		 * traffic[i].REG_DT + "</td><th>조회수</th><td>" +
		 * traffic[i].READ_CNT + "</td></tr><tr><td colspan='6' align='center'>" +
		 * traffic[i].CONTS + "</td></tr></table></div>";
		 */

		div.innerHTML = "<div class='exContainer'>" + "<img src='"
				+ traffic[i].main_image
				+ "' width='300px' height='300px'><br>" + "<p class='exTitle'>"
				+ traffic[i].prdct_nm_korean + "</p>" + "<p class='exDate'>"
				+ traffic[i].manage_no_year + ", " + traffic[i].mnfct_year
				+ "</p></div>";

		collectionDiv.appendChild(div);

	}
}
function educationTraffic(education) {
	var educationDiv = document.getElementById("education");
	var traffic = education.ListEducationOfSeoulMOAInfo.row;
	var search = document.getElementById("groupSearch");

	for (var i = 0; i < traffic.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "educationItem");

/*		div.innerHTML = traffic[i].EDU_IMG+"<br><br><br><br><div class='exContainer'>" + "<img src='"
				+ traffic[i].EDU_IMG
				+ "' width='300px' height='300px'><br>" + "<p class='exTitle'>"
				+ traffic[i].EDU_NAME + "</p>" + "<p class='exDate'>"
				+ traffic[i].EDU_START + " ~ " + traffic[i].EDU_END
				+ "</p></div>";
*/

		div.innerHTML = "<div class='edContainer'><div class='edMainImg'>"
			+ "<img src='" + traffic[i].EDU_IMG + "' width='200px' height='200px'></div>"
			+ "<div class='edContent'><div class='edTitle'>" + traffic[i].EDU_NAME + "</div>"
			+ "<div class='edSubTitle'>교육기간</div>" 
			+ "<div class='edContext'>" + traffic[i].EDU_START + " ~ " + traffic[i].EDU_END + "</div><br>"
			+ "<div class='edSubTitle'>모집기간</div>" 
			+ "<div class='edContext'>" + traffic[i].APP_OPEN + " ~ " + traffic[i].APP_CLOSE + "</div><br>"
			+ "<div class='edSubTitle'>교육대상</div>" 
			+ "<div class='edContext'>" + traffic[i].EDU_TARGET + "(" + traffic[i].CAPA_NUM + "명)</div><br>"
			+ "</div><div class='edApply'><a href='#' onclick='educationApply();'>신청하기 →"
			+ "</a></div></div>";
			
		educationApply(traffic[i].EDU_NAME);
			
		educationDiv.appendChild(div);

	}

}
function educationApply(eduName) {
	console.log(eduName);
	// alert창을 이ㅇ
}