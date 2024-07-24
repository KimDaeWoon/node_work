// 입력상자와 버튼에 접근
let input = document.querySelector('#book');
let addBtn = document.querySelector('#add');
let list = document.querySelector('#bookList');   //div 태그 출력 위치 

// 도서 목록 저장 배열 생성
let books = [];


// 추가 버튼에 클릭 이벤트 연결 (배열에 추가 하는 곳으로 가야됨)
addBtn.onclick = addEvent;



// 배열에 도서 목록 추가
function addEvent(){
    if (input.value == ''){ // (2) 빈것 안들어 오도록 설정
        alert('책 제목을 입력하세요');
        input.focus();
    }else if(books.indexOf(input.value) != -1){  // (3) 앞에서 부터 검색 
    alert('중복된 책입니다')
    input.value = '';
    input.focus()
    }else{
        books.push(input.value)  //  (1) input에 값을 가져와 books 배열에 추가
        input.value = '';
        input.focus();
    
        print() // 보여줘야되니깐 함수 만듦
    }
}


// 문서에 도서목록 출력(<ul><li>)
function print(){
    let blist = '<ul>';
    for(let i = 0; i < books.length; i++){ //배열에 있는애를 대려와야댐
        blist += `<li>${books[i]}<span class='del' id =${i}>삭제</span></li>`;
    } 
    blist += '</ul>'
    list.innerHTML = blist;  //출력 위치에 blist 대입

    // 삭제 버튼 화면이 보이는 상태에서 해야됨 (삭제버튼 -> 배열에서 제거  -> 다시 출력)
    let delList = document.querySelectorAll('.del') // class del 을 가져와야됨
    for (let ele of delList){ // ele = .del 에서 span이라고함. delList 에 span을 하나씩 가져옴. why? 얘들 중에는 클릭이 되기에
        ele.onclick = remove; // 지워라!
    }
}



// 문서에 도서 목록 삭제
// 배열 위치를 알아야 함 -> 삭제 버튼이 눌리는 순간 배열 번호가 들어 와야 됨
function remove(){ // span 태그안에 id 에 방번호 주기 ${i}
   let delNum = this.getAttribute('id') // this 는 이때 클릭된 얘 입니다. span 태그에 id = ${i}속성의 값을 가져오기
   books.splice(delNum,1); // books 배열에 splice 삭제 로 개수  id 속성 값 1개를 삭제
   print();
}

