const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">

    <div style="text-align:-webkit-center;">
        <div  style="border:1px solid #000;max-width:570px;padding:10px">

          <span class="timer" style="font-weight:bold;font-size:12px;">
              혜택마감 | <span id="day1" style="font-weight:bold;"></span> ( <span id="countdown1" style="font-weight:bold;"></span>)
          </span>
         <!--<b style="font-size:20px;">현재  [ <span class="counter blink" style="bottom:0px;font-weight:bold;color:blue;">37</span> / 50 명 ] 남았습니다.</b>-->
      </a></div></div>
      <br>
    <h1 class="form-top-title" style="text-indent:0px; text-align: center; font-size:25px;">국내 및 해외 51개 가맹점 운영<br><span style="color: #048948;">두피·탈모 전문 관리센터 닥터모락</span><br>프리미엄 탈모관리 체험이벤트<br>지금 바로 신청하기</h1>
    <div class="form-box-inner">

        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="setTimeout(hoa, 1500); submitted=true;"> <!-- ★★폼 제출버튼 클릭하면, 1.5초간 기다리며 구글폼으로 먼저 들어간뒤 hoa(); 함수가 실행되어 땡큐페이지로 넘어감(25.07.15)★★ -->
          <input type="hidden" name="entry.1969375313" value="유입매체"> 
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                     <!--  <tr id="select_lic">
                            <th>성별<br></th>
                            <td>
                                <select name='entry.1818522882' id='mf' class="form-control" placeholder="성별">

                                    <option value="성별" selected disabled>성별 선택</option>
                                        <option value="여성">여성</option>
                                        <option value="남성">남성</option>
                                        
                                      
                                </select>

                           
                            </td>
                        </tr> -->
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.837281928' id='name' class="form-control" placeholder="이름" maxlength="4">
                        </td>
                    </tr>

                    <tr>
                        <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                        <td>
                            <input type='text' name='entry.513407067' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                        </td>
                    </tr>
                    <!--<tr>
                        <th>원하는 차종</th>
                        <td>
                            <input type='text' name='entry.113453114' id='carname' class="form-control" placeholder="원하는 차종">
                           
                        </td>
                    </tr>-->
                    <tr>
                        <th>체험권 선택</th>
                        <td>
                            <select name="entry.756024446" id='coupon' class="form-control" placeholder="현재 조건">
                                <option value="체험권을 선택하세요" selected disabled>체험권을 선택하세요
                                <option value='두피 정밀진단권'>두피 정밀진단권</option>
                                <option value='두피/탈모 50% 체험권'>두피/탈모 50% 체험권</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>닥터모락<br>지점선택</th>
                        <td>
                            <select name="entry.1470172621" id='local' class="form-control" placeholder="현재 조건">
                                <option value="두피정밀진단 & 탈모관리 체험받을 지점선택" selected disabled>두피정밀진단 & 탈모관리 체험받을 지점선택
                                    <option value='서울 건대점'>서울 건대점</option>
                                    <option value='서울 노원점'>서울 노원점</option>
                                    <option value='서울 당산점'>서울 당산점</option>
                                    <option value='서울 마곡점'>서울 마곡점</option>
                                    <option value='서울 목동점'>서울 목동점</option>
                                    <option value='서울 서울대점'>서울 서울대점</option>
                                    <option value='서울 신도림점'>서울 신도림점</option>
                                    <option value='서울 연신내점'>서울 연신내점</option>
                                    <option value='서울 종로점'>서울 종로점</option>
                                    <option value='서울 용산점'>서울 용산점</option>
                                    <option value='서울 잠실점'>서울 잠실점</option>
                                    <option value='서울 천호점'>서울 천호점</option>
                                    <option value='서울 합정점'>서울 합정점</option>
                                    <option value='서울 홍제점'>서울 홍제점</option>
                                    <option value='서울 공덕역점'>서울 공덕역점</option>
                                    <option value='광주 상무점'>광주 상무점</option>
                                    <option value='경기 광명역점'>경기 광명역점</option>
                                    <option value='경기 군포 산본점'>경기 군포 산본점</option>
                                    <option value='경기 김포 구례점'>경기 김포 구례점</option>
                                    <option value='경기 김포 풍무점'>경기 김포 풍무점</option>
                                    <option value='경기 동탄역점'>경기 동탄역점</option>
                                    <option value='경기 부천 상동점'>경기 부천 상동점</option>
                                    <option value='경기 수원 광교점'>경기 수원 광교점</option>
                                    <option value='경기 수지 성북역점'>경기 수지 성북역점</option>
                                    <option value='경기 시흥 은계점'>경기 시흥 은계점</option>
                                    <option value='경기 안산 고잔점'>경기 안산 고잔점</option>
                                    <option value='경기 안성점'>경기 안성점</option>
                                    <option value='경기 안양 평촌점'>경기 안양 평촌점</option>
                                    <option value='경기 옥길점'>경기 옥길점</option>
                                    <option value='경기 일산 주엽점'>경기 일산 주엽점</option>
                                    <option value='경기 판교점'>경기 판교점</option>
                                    <option value='경기 평택 소사별점'>경기 평택 소사별점</option>
                                    <option value='경기 평택역점'>경기 평택역점</option>
                                    <option value='경기 하남 미사점'>경기 하남 미사점</option>
                                    <option value='인천 구월점'>인천 구월점</option>
                                    <option value='인천 송도점'>인천 송도점</option>
                                    <option value='인천 작전점'>인천 작전점</option>
                                    <option value='인천 청라점'>인천 청라점</option>
                                    <option value='대전 둔산점'>대전 둔산점</option>
                            </select>
                        </td>
                    </tr>
                   <!-- <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1817436242' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr> -->
                   
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료지원하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>

<!--아래 딥딥폼-->
<section id="dbscf" style="display:none;">
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="" target="hidden_iframe12">
<input type="hidden" name="ms" value="S00278004O" />
<input type="hidden" name="ca" value="C05856127P" />
<input type="hidden" name="auto_defense" />
<div class="input_form_area" >

	<div class="input_list">
		<table width=100%>
			
			<tr>
								<td class="input_title">
					자녀<br>이름
					
				</td>
				
				<td class="pb10">
					<input type="text" name="name" class="input_text" >
				</td>
			</tr>
			
			
			<tr>
								<td class="input_title">
					부모님<br>연락처
				</td>
				
				<td class="pb10">
					<input type="tel" name="tel" id = "tel"  maxlength=11 class="input_text" ><!--  -->

				</td>
			</tr>
			<tr>
								<td class="input_title">
					출생년도
				</td>
				
				<td class="pb10">
					<select type="text" name="item1"  class="input_text">
						<option value="">5~17세 자녀만 신청 가능</option>
												<option value="2020년">2020년</option>
												<option value="2019년">2019년</option>
												<option value="2018년">2018년</option>
												<option value="2017년">2017년</option>
												<option value="2016년">2016년</option>
												<option value="2015년">2015년</option>
												<option value="2014년">2014년</option>
												<option value="2013년">2013년</option>
												<option value="2012년">2012년</option>
												<option value="2011년">2011년</option>
												<option value="2010년">2010년</option>
												<option value="2009년">2009년</option>
												<option value="2008년">2008년</option>
											</select>

				</td>
			</tr>
			
			<tr>
								<td class="input_title">
					지역
				</td>
				
				<td class="pb10">
					<select type="text" name="item2"  class="input_text">
						<option value="">지역을 선택하세요</option>
						<option value="서울">서울</option>
						<option value="경기">경기</option>
						<option value="인천">인천</option>
                        <option value="청주">청주</option>
                        <option value="춘천">춘천</option>
					</select>
					
					<div style="padding-top:10px;text-align:left;">
						<font color='red'>해당지역 외 신청불가</font>
					</div>
					

				</td>
			</tr>

			
			
		</table>
	</div>
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup();void(0);'>개인정보 수집 및 이용</a> 에 동의합니다
			</span>
		</p>
	</div>
	<div style="text-align:center;">
		<button class="input_button" onclick="OnSubmit(document.f1);return false" style="cursor:pointer" >
			신청하기
		</button>
	</div>
</div>
</form>
  
  
  </section>


`;

document.body.appendChild(form.content);