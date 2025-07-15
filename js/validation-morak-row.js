$(document).ready(function(){
    $('#send_message').click(function(){ 
         
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration  - 폼 제출전 마지막 검토하는 로직
        var error = false;
        const regex1 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        // var mf = $('#mf').val();
        // var age = $('#age').val();
        // var nw = $('#now-wg').val();
        // var height = $('#height').val();
        // var hg = $('#hope-wg').val();
        // var carname =$('#carname').val();
        // var id = $('#id-number').val();
        var name = $('#name').val();
        // var email = $('#email').val();
        var phone = $('#phone').val();
        // var message = $('#message').val();
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#phone,#message,#agree11,#mf,#height,#now-wg,#hope-wg,#age').click(function(){
            $(this).removeClass("error_input");
        });
        

         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("휴대폰 번호 입력을 확인하세요.");
        }


        // if(mf == null ){
        //     var error = true;
        //     $('#mf').addClass("error_input");
        //    alert("성별을 선택해주세요.");
        // }else{
        //     $('#mf').removeClass("error_input");
        // }


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully. // 해석 ★★위 검토결과 문제가 없다면, id값이 form_e11인 태그의 action 속성값을 구글폼 url을 넣는다
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1_NUCTOyB_6RGLopas4iuewDFsqSXzRnWJldU_IY7IO_23g/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
            $('#send_message').prop("disabled", false);
            OnSubmit();   // 구글폼만 db드가는지 확인하기 위해 주석처리
            $('#send_message').css({transition:"1s"});
            $('#send_message').css({background:"#222222"});
            $('#send_message').css({color:"#fff"});
            $('#hidden_iframe11').attr("onload", "hoa();");
        }
    });    
   
});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){      // 폼 제출하고 떙큐페이지 넘기는 함수
        alert("신청이 완료되었습니다.");
        $(window).scrollTop(0);
        window.location.href = './result-oz.html';
 }

 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){

    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^[가-힣]+$/;
    const regex = /^[|0-9|]+$/;
    var local = $('#local').val();
    var coupon = $('#coupon').val();
    // var license = $('#license').val();
    // var id = $('#id-number').val();
    var name = $('#name').val();
    // var email = $('#email').val();
    var ph = $('#phone').val();
    // var message = $('#message').val();
    var agree = $('#agree11').is(":checked");



    if(regex2.test(name) && name.length > 1 )
    {
                
        if(ph.substr(0, 3) == "010" && ph.length ==11 && regex.test(ph))
        {
                
                        if( coupon != null )
                        {


                                if( local != null )
                                {



                            
                                                if (agree == true)
                                                {
                                                    $('#send_message').css({transition:"1s"});
                                                $('#send_message').prop("disabled", false);
                                                $('#send_message').prop("value", "체험이벤트 지원혜택 받기");
                                                $('#send_message').css({background:"#0e3b64"});
                                                $('#send_message').css({cursor:"pointer"});
                                                }
                                                else
                                                {
                                                    $('#send_message').css({transition:"1s"});
                                                    $('#send_message').prop("disabled", true);
                                                    $('#send_message').prop("value", "개인정보 동의를 해주세요");
                                                    $('#send_message').css({background:"#595959"});
                                                    $('#send_message').css({cursor:"default"});     
                                                }
                        
                                }
                                else
                                {
                                    $('#send_message').css({transition:"1s"});
                                    $('#send_message').prop("disabled", true);
                                    $('#send_message').prop("value", "지점을 선택하세요.");
                                    $('#send_message').css({background:"#595959"});
                                    $('#send_message').css({cursor:"default"});     
                                }


                        }
                        else
                        {
                        $('#send_message').css({transition:"1s"});
                        $('#send_message').prop("disabled", true);
                        $('#send_message').prop("value", "체험권을 선택하세요.");
                        $('#send_message').css({background:"#595959"});
                        $('#send_message').css({cursor:"default"});     
                        }


                        
                
        }
        else if(ph.length>0)
        {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                    $('#send_message').css({background:"#595959"});
                    $('#send_message').css({cursor:"default"});     
        }
        else
        {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "전화번호를 입력하세요.");
                    $('#send_message').css({background:"#595959"});
                    $('#send_message').css({cursor:"default"});     
        }
    }
    else if(name.length>0)
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "성함 입력을 확인하세요.");
        $('#send_message').css({background:"#595959"});
        $('#send_message').css({cursor:"default"});     
    }
    else
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "성함을 입력하세요.");
        $('#send_message').css({background:"#595959"});
        $('#send_message').css({cursor:"default"});     
    }
  
            

 }
  
    //function form_check1(){  // 자체폼의 "연락처,이름,차종"개별 항목의 id를 변수로 선언한다. << 딥딥폼에 똑같이 입력을 위한 함수네 check1함수가.
        // var mf = $('#mf').val();
        // var age = $('#age').val();
        // var nw = $('#now-wg').val();
        // var carname =$('#carname').val();
        // var tnw= String(nw);
        // var height = $('#height').val();
        // var hw = $('#hope-wg').val();
        // var thw= String(hw);
        // var id = $('#id-number').val();
        //var name = $('#name').val();
        // var email = $('#email').val();
        //var phone = $('#phone').val();
        //var local = $('#local').val();
        //var coupon = $('#coupon').val();
        // var message = $('#message').val();
   

        // if(mf == "여성")
        // {
        //     alert("여성 선택");
        //     $("#female").prop("checked", true);
        // }
        // if(mf == "남성")
        // {
        //     alert("남성 선택");
        //     $("#male").prop("checked", true);
        // }
                                        // ▼▼▼아래 JQuery 문장들이 자체폼 입력시, 딥딥폼에 자동입력 하게하는것
        //$("[name='name']").val(name); // ★읽는법★name속성값이 name인 딥딥폼 입력칸에 name(변수)를 입력해줘
        // $("[name='name']").val(carname); 
        // $("[name='item3']").attr("value",thw);
        // $("[name='item1']").val(carname);  // ★읽는법★name속성값이 item1인 딥딥폼 입력칸에 carname(변수)을 입력해줘.
        // $("[name='item2']").val(height);
        // $("[name='age']").val(age);  
        //$("[name='tel']").val(phone); // ★읽는법★name속성값이 tel인 딥딥폼 입력칸에 phone(변수)을 입력해줘.
        //$("[name='item1']").val(local);
        //$("[name='item2']").val(coupon);
        // $("[name='tel3']").val(phone.substr(7,4)); 
        // $('[name="etc"]').val("견적 요청합니다.");
        //}


$(function(){
 $('#name,#phone,#mf,#age,#message,#agree11,#height,#local,#coupon').bind("keyup click change",form_check);
 //$('#name,#phone,#mf,#age,#message,#agree11,#height,#local,#coupon').bind("keyup click change",form_check1);

})