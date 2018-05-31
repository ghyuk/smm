<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>KTRN Mobile Gateway</title>
<script src="//code.jquery.com/jquery.js"></script>
<script src="/resources/js/bootstrap.js"></script>
<link rel="stylesheet" href="/resources/css/bootstrap.css">
<style type="text/css">
	#loginForm {
	margin-top: 60%;
	}
	fieldset {
	width:400px;
	margin:0 auto;}
	
	input[type="button"]{
	
	height: 50px;
	width:150px;}
	
	h1 {
	text-align: center;}
</style>
<script type="text/javascript">
	$(function(){
		$("#login").click(function(){
			location.href="/login.do";
		})
	})

</script>
</head>
<body>
<fieldset>
	
	<form>
		<div id="loginForm">
			<h1><strong>Mobile Gateway Login</strong></h1><br><br>
			<input class="form-control" type="text" id="login_id" value="" placeholder="ID">
			<br>
			<input class="form-control" type="password" id="login_pw" value="" placeholder="PW">
			<br>
			<input type="button" class="btn btn-primary btn-lg btn-block" id="login" value="log-in">
		</div>	
	</form>
</fieldset>
</body>
</html>