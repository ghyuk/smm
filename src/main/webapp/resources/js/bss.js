//Call API Gateway
function send(mg_data) {
    var jmg_data = JSON.stringify(mg_data);
   	var request = $.ajax({
    	url: "./ktrnMGServlet",
    	type: "POST",
        data: { 
            "MG_DATA" : jmg_data
        },
    	dataType: "json"
   	});
   	request.done(function(data) {
        console.log("================================");
        console.log("========== return ==============");
        console.log("error     : " + data.ERROR);
        console.log("error_msg : " + data.ERROR_MSG);
        console.log("========== cmd_header ==============");
   		log(data.CMD_HEADER);
   		console.log("");
   		console.log("========== cmd_body ==============");
   		log(data.CMD_BODY);
        console.log("========== result_body ==============");
        log(data.RESULT_BODY);
	});
   
   	request.fail(function(jqXHR, textStatus) { 
    	alert("Error!");
   	});
}
//output log 
function log(obj) {
	for(var key in obj) {
		console.log(key + " : "+obj[key]);
	}
}
//BSS-101
function send_BSS_101() { 
   	var h_obj = new Object(); 
    h_obj.svcode = "HP00005"; 
   	h_obj.opcode = "HPOP101"; 
    h_obj.chcode = "A"; 

   	var b_obj = new Object(); 
   	b_obj.msisdn = "0771012594"; 
   	//b_obj.DISTINGUISH_NO = "23JKORL2O8XZQQCBRACBBOGLSO4="; 
   	//b_obj.SO_ID = "02"; 
   	b_obj.CUST_TP = "A"; 

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-101";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-102
function send_BSS_102(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP102";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.MSISDN = "0771999004";
	//b_obj.DISTINGUISH_NO = "23JKORL2O8XZQQCBRACBBOGLSO4=";
    b_obj.SO_ID  = "05";
	
    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-102";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}
/*
//BSS-201
function send_BSS_201(type){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP201";
	h_obj.CHCODE = "A";
	var json_cmd_header = JSON.stringify(h_obj);
	
	var b_obj = new Object();
	//request from agent
	if(type == "agent"){
		b_obj.LOGIN_ID = "AIRTEL0207";
		b_obj.login_pw = "JWTERSBGCAZ3TKH2MAOZCND6UUC=";
	}
	//request from user
	else{
		b_obj.MSISDN = "0771000050";
		b_obj.DISTINGUISH_NO = "23JKORL2O8XZQQCBRACBBOGLSO4=";
	}
	b_obj.CUST_TP = "A";
	b_obj.user_type = "02";
	b_obj.REQ_SYS_ID = "02";
	var json_cmd_body = JSON.stringify(b_obj);
	
	send(json_cmd_header, json_cmd_body);
}*/

//BSS-301
function send_BSS_301(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP301";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.MSISDN = "0729100089";
	b_obj.ICCID  = "892501700000000722";
//	b_obj.DISTINGUISH_NO = "JWTERSBGCAZ3TKH2MAOZCND6UUC==";
    b_obj.SO_ID  = "05";
	
    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-301";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-302
function send_BSS_302(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP302";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.SO_ID = "01";
	b_obj.MSISDN  = "070XXXXXXXX";
	b_obj.prod_cd = "PDXXXXXXXX";
	b_obj.LOGIN_ID = "NTELS";
	b_obj.ORG_ID = "PZ00000102";
	b_obj.ICCID = "89XXXXXXXXXXXXXXXXX";
	b_obj.CUST_ID = "C000111222";
	b_obj.REQ_SYS_ID = "01";

	var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-302";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-401_1
function send_BSS_401_1(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP401";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.SO_ID = "05";
	b_obj.LOGIN_ID = "NTELS";
	b_obj.prod_cd = "PD00000574";
	b_obj.MSISDN  = "0771000050";
	b_obj.PAYMENT_TYPE = "01";         // Cash
	b_obj.PAYMENT_AMOUNT = "100";
	b_obj.REQ_SYS_ID = "01";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-401";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-401_2
function send_BSS_401_2(){
    var h_obj = new Object();
    h_obj.SVCODE = "HP00005";
    h_obj.OPCODE = "HPOP401";
    h_obj.CHCODE = "A";
    
    var b_obj = new Object();
    b_obj.SO_ID = "05";
    b_obj.LOGIN_ID = "NTELS";
    b_obj.prod_cd = "PD00000574";
    b_obj.MSISDN  = "0771000050";
    b_obj.PAYMENT_TYPE = "02";         // Mobile Money
    b_obj.PAYMENT_AMOUNT = "100";
    b_obj.REQ_SYS_ID = "01";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-401";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-401_3
function send_BSS_401_3(){
    var h_obj = new Object();
    h_obj.SVCODE = "HP00005";
    h_obj.OPCODE = "HPOP401";
    h_obj.CHCODE = "A";
    
    var b_obj = new Object();
    b_obj.SO_ID = "05";
    b_obj.LOGIN_ID = "NTELS";
    b_obj.prod_cd = "PD00000574";
    b_obj.MSISDN  = "0771000050";
    b_obj.PAYMENT_TYPE = "03";         // Credit Card
    b_obj.PAYMENT_AMOUNT = "100";
    b_obj.REQ_SYS_ID = "01";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-401";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-501
function send_BSS_501(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP501";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.SO_ID = "02";
	b_obj.LOGIN_ID = "TIGO0203";
	b_obj.ORG_ID = "NZ00023";
	b_obj.CUST_TP = "A";
	b_obj.CUST_NM = "DAVID";
	b_obj.BIRTH_DAY = "20100101";
	b_obj.EMAIL = "KTRN@GMAIL.COM";
	b_obj.PHONE_NUM = "0708897789";
	b_obj.ADDR_DTL = "NYARUTARAMA";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-501";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-502
function send_BSS_502(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP502";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.SO_ID = "05";
	b_obj.CUST_TP = "A";   
	b_obj.CUST_NM = "flabia";
	b_obj.CORP_REG_NO = "D848059BC9CEC3EB9DB384DC015EABFC";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-502";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-601
function send_BSS_601(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP601";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.MSISDN = "0771012594";
	b_obj.SO_ID = "13";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-601";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//BSS-602
function send_BSS_602(){
	var h_obj = new Object();
	h_obj.SVCODE = "HP00005";
	h_obj.OPCODE = "HPOP602";
	h_obj.CHCODE = "A";
	
	var b_obj = new Object();
	b_obj.SO_ID = "13";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "BSS-602";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//PAY_100
function send_PAY_100(){
    var h_obj = new Object();
    h_obj.SVCODE = "HP00005";
    h_obj.OPCODE = "HPOP401";
    h_obj.CHCODE = "A";
    
    var b_obj = new Object();
    b_obj.TRANS_ID = "0771000050-20180425073652";

    var mg_data = new Object();
    mg_data.CMD_CODE   = "PAY-100";
    mg_data.CMD_TOKEN  = "PASS"
    mg_data.CMD_HEADER = h_obj;
    mg_data.CMD_BODY   = b_obj;

    send(mg_data);
}

//APPROVAL_CC
function send_APPROVAL_CC(){
    var request = $.ajax({
        url: "./ktrnMGServlet4ESICIA",
        type: "POST",
        data: { 
            "refid"     : "0788786834-20180424223754",
            "tid"       : "AAAAAAAAAAAAAAAA",
            "auth_key"  : "BBBBBBBBBBBBBBBB"
        },
        dataType: "json"
    });
    
    request.done(function(data) {
        console.log("================================");
    });
   
    request.fail(function(jqXHR, textStatus) { 
        alert("Error!");
    });

}