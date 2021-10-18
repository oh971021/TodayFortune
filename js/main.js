function Who() {
    alert("제작자 : JUNBAL");
}

function callNumber() {
    let age = document.getElementById('age');

    if(age.value == '') {
        alert("나이를 입력하세요!")
        age.focus();
        return false;
    }

    if(age.value < 0 || age.value > 100) {
        alert("99세 이하만 가능한 서비스입니다.")
        age.focus();
        return false;
    }

    let num = [];
    for(let i = 0; i < 6; i++){
        num.push(Math.floor(Math.random()*45)+1); 
        for(let c = 0; c<i; c++){
            if (num[i] === num[c]) {
                num.pop();
                i--;  
            }
        }
    }
    
    alert(num); 
}