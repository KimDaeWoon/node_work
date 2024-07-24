      // 날짜 계산
      // let today = new Date()
      // let firstDay = new Date("2024-04-08")
      // console.log(`${today - firstDay}`) // accent
      // console.log()

      // function sum(a , b){
      //     let sum = 0;
      // b - a
      //     for(let i = b; i >= a; i--){
      //         sum -= i;
      //     }
      //     return sum
      // }
      // console.log()

      let today = new Date();  // 오늘 날짜
      let firstDay = new Date('2024-04-08'); // 처음 만난날 
      let passDay = today - firstDay;
      passDay = Math.floor(passDay / (1000 * 60 * 60 * 24));
      document.querySelector('#accent').innerHTML = passDay + '일';


      // 미래 날짜 계산 => 처리하는 방법이 같고 입력값이 다름
      function dDay(day) { // 입력 받는 값 day 
        let fday = new Date(2024, 3, 8 + day);

        let year = fday.getFullYear();
        let month = fday.getMonth() + 1;
        let day1 = fday.getDate();  // 입력 값 과 변수 명 구분 해야됨
        let date = `${year} 년 ${month} 월 ${day1} 일`; // 여기서 처리 잘 하면 됨 if 문으로 확인
        if (month < 10) {
          date = `${year} 년 ${'0' + month} 월 ${day1} 일`;
        }
        if (day1 < 10) {
          date = `${year} 년 ${month} 월 ${'0' + day1} 일`;
        }

        // if(month < 10){
        //   month = `0${month}`;
        // }

        // day1 = (day1 < 10) ? `0${day1}` : day1;
        document.querySelector('#date' + day).innerHTML = date;
      }
      dDay(100);
      dDay(200);
      dDay(365);
      dDay(500);

      // 과제 월 날짜가 10 보다가 작으면 앞에다가 0을 붙여줘
      // 과제 일 날짜가 10 보다가 작으면 앞에다가 0을 붙여줘