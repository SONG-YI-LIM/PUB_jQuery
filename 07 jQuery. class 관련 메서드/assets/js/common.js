$(function() {
	var $aside = $("aside"),
		$button = $aside.find("button"),
		$duration = 300;

	// 버튼을 클릭하면 aside 나오도록 해주세요.
	// 선택자.classList.add(remove) = "open";
	// A.addClass("b"); A.removeClass("b"); A.toggleClass("b");
	// A.hasClass("b"); 조건문에서만 사용. A요소에 b라는 클래스가 있으면 true, 없으면 false

	$button.click(function(){
		$aside.toggleClass("open");
		// $aside.stop().animate({left:"0px"}, $duration);
		if($aside.hasClass("open")){
			$aside.stop().animate({left:"-70px"}, $duration, "easeOutBack");
			$button.text("닫기");
			// $button.find("img").attr("src", "../assets/images/ico-arrow-left.png");
		}else{
			$aside.stop().animate({left:"-350px"}, $duration, "easeInBack");
			$button.text("열기");
			// $button.find("img").attr("src", "../assets/images/ico-arrow-right.png");
		}
	});

	// 속성 변경하기, 속성의 값을 반환하기
	// var c = A.attr("src") = A라는 요소에 src라는 속성의 값을 변수명 c에 저장
	// A.attr("b", "c") = A라는 요소에 b라는 속성의 값을 c로 변경
	console.log($button.find("img").attr("src"));
});