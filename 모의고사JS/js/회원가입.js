//input 상자 접근
    let id = document.querySelector('#user-id')
    let pw = document.querySelector('#user-pw1')
    let pwc = document.querySelector('#user-pw2')

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결 
    id.onchange = idCheck; // id = 입력상자
    pw.onchange = pwCheck; // pw = 입력상자
    pwc.onchange = pwComp; // pwc = 입력상자
    

// id 길이 체크
function idCheck(){
    let idL = id.value.length;
    if(idL < 3 || idL > 10 ){
        alert('아이디의 글자수는 3글자이상 10글자 이하 입니다');
        id.select();
    }
}

//비밀번호 길이 체크
function pwCheck(){
    let pwL = pw.value.length;
    if (pwL < 4){
        alert('4글자 이상 입니다')
        pw.value = '';
        pw.focus()
    }
}

// 비밀번호가 맞는지 확인
function pwComp(){
    let pww = pwc.value
    if (pww != pw.value){
        alert('비밀번호가 일치하지 않습니다')
        pwc.value = '';
        pwc.focus()
    }
}