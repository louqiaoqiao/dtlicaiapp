<template>
	<div class="content">
        <header class="clearfix">
			<div class="top user_top">
		    	<h1>实名认证</h1>
		        <div class="kfyy"><a href="tel:4008826722">400-882-6722</a><!-- <span>09:00-11:30 13:30-16:30</span> --></div>   
		    </div>
		    <br class="clear">
		</header>
        <form id="inputForm" name="creator" method="post" class="reg_form">
        <p class="share"></p>
            <input type="hidden" name="__token__" value="{$Request.token}" />
            
            <div class="row">
                <label><i class="icon iconfont">&#xe704;</i>手机号码</label>
                <span class="srcddz"><input type="text"  id="phoneId" value="18166009820" name="phoneId"></span>
            </div>
           <div class="row">
                <label><i class="icon iconfont">&#xe7e0;</i>身份证号</label>
                <span class="srcddz"><input type="text" name="certif_id"  placeholder="身份证号" id="certif_id" ><em class="xinhao"></em></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe7d5;</i>真实姓名</label>
                <span class="srcddz"><input type="text"  id="cust_nm" placeholder="真实姓名" name="cust_nm"></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe7c6;</i>银行卡号</label>
                <span class="srcddz"><input name="bankCardId"  onkeyup="changekh()" id="capAcntNo" maxlength="23" placeholder="请绑定本人名下银行卡" type="text"><input name="capAcntNo" value="" onchange="checkcapAcntNo()" id="bankCardId" type="hidden"></span>
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe7b1;</i>开户银行</label>
                <span class="srcddz">
                 <select name="bank_id" id="bank_id">
               		 <option value="9999">请选择您的开户银行</option>
                      <option value="0102">中国工商银行</option>
                      <option value="0103">中国农业银行</option>
                      <option value="0104">中国银行</option>
                      <option value="0105">中国建设银行</option>
                      <option value="0301">交通银行</option>
                      <option value="0303">中国光大银行</option>
                      <option value="0304">华夏银行</option>
                      <option value="0305">中国民生银行</option>
                      <option value="0308">招商银行</option>
                      <option value="0306">广发银行</option>
                      <option value="0309">兴业银行</option>
                      <option value="0310">浦东发展银行</option>
                      <option value="0315">恒丰银行</option>
                      <!-- <option value="0316">浙商银行股份有限公司</option>
                      <option value="0318">渤海银行股份有限公司</option> -->
                      <option value="0403">中国邮政储蓄银行</option>
                      <option value="0302">中信银行</option>
                      <option value="0307">平安银行</option>
              </select>
              <input type="hidden" name="bank_nm" id="bank_nm" />
            </span>
                
            </div>
            <div class="row">
                <label><i class="icon iconfont">&#xe651;</i>开户城市</label>
                <span class="srcddz">
                <select id="province" name="province" onchange="select()" style="width:40%">
             <!-- <option value="请选择省份名">请选择省份名</option>-->
           </select>
            <select id="city"  name="city_id" style="width:40%;margin-left:.5rem;">
               <!-- <option value="">请选择城市名</option> -->
              </select>
              <input type="hidden" id="cityCode" name="newlocation"></span>
            </div>
            <p class="agreenxy"><input type="checkbox" name="isAgree" class="isagreen" id="isAgree">阅读并同意协议,<a href="javascript:;" class="open-about">《个人账户开通协议(商户与持卡人签订)》</a></p>
            <p class="p_btn"><span class="submit" id="subButton" onclick="checkForm();">提交信息</span></p>  
            <p class="login-fy-tsym">温馨提示：富友账户首次登录密码为手机号后6位。</p>       
        </form>
    	
             
    </div>
</template>

<script>
</script>

<style>
</style>