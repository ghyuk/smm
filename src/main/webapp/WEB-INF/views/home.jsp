<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript">
	$(function(){
		$("#h").click(function(){
			location.href="/mgateway/PayMonitoring/selectAll.do";
		})
	})

</script>
<body>
<h1 id="h">
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<a href="/PayMonitoring/selectAll.do">a</a>
</body>
</html>
