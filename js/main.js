function Who() {
    alert("제작자 : JUNBAL");
}

function callNumber() {
    let age = document.getElementById('age');

    if(age.value == '') {
        alert("나이를 입력하세요!");
        age.focus();
        return false;
    }

    if(age.value < 0 || age.value > 100) {
        alert("99세 이하만 가능한 서비스입니다.");
        age.focus();
        return false;
    }

    writeNumber(age.value);
}

function writeNumber(age) {
    let num = [];
    if(age <= 50) {
        // 랜덤 값 추출하기
        for(let i = 0; i < 6; i++){
            num.push(Math.floor(Math.random()*45)+1); 
            for(let c = 0; c<i; c++){
                if (num[i] === num[c]) {
                    num.pop();
                    i--;  
                }
            }
        }
        // 정렬 하기
        num.sort(function(a, b){return a - b});

        // 해당 배열 값을 result 자리에 대입 시키기
        document.getElementById('resultNum1').innerHTML = num[0];
        document.getElementById('resultNum2').innerHTML = num[1];
        document.getElementById('resultNum3').innerHTML = num[2];
        document.getElementById('resultNum4').innerHTML = num[3];
        document.getElementById('resultNum5').innerHTML = num[4];
        document.getElementById('resultNum6').innerHTML = num[5];
    } else {
        alert("서비스 구현 중입니다.")
    }
    
}