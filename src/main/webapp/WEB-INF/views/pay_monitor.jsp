<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Monitor for Payment</title>
<link rel="stylesheet" href="/resources/css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="/resources/js/bootstrap.js"></script>
<style type="text/css">
	button {
	margin-top: 50px;
	}
	input[type='text']{
	margin-top: 50px;}
	#month {
	margin-top: 50px;}
	#day {
	margin-top: 50px;}
</style>
</head>
<body>
<div class="container" style="width: 95%;!important">
		<%-- <input type="hidden" id="s_id" value="<%=s_id%>'"> --%>
		<table class="table" style="text-align: left; ">
		
			<thead>
			<tr id="top" style="border-color:#fff;!important">
		<td colspan="9"><h1><strong>Payment Monitoring</strong></h1></td>
		<td><input type="text" id="year" class="form-control" placeholder="2018" style="width:100px;" value="2018"></td>
		<td>
			<select class="form-control" id="month" name="month" style="min-width:130px;">
				<option value="">Select Month</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>			
			</select>
		</td>
		<td><input type="text" id="day" class="form-control" placeholder="Insert Day" style="width:100px;"></td>
		<td>
			<div class="form-group row pull-right">
			<div class="col-xs-8">
				<button class="btn btn-primary" id="refresh" type="button">Search</button>
			</div>
		</div>
		</td>
		<td><button class="btn btn-primary" type="button" onclick="load()">Today / Refresh</button></td>
		</tr>
				<tr>
					<th style="background-color: #fafafa; text-align: left;">Ref ID</th>
					<th style="background-color: #fafafa; text-align: left;">TID</th>
					<th style="background-color: #fafafa; text-align: left;">Request Date</th>
					<th style="background-color: #fafafa; text-align: left;">Finish Date</th>
					<th style="background-color: #fafafa; text-align: left;">Status</th>
					<th style="background-color: #fafafa; text-align: left;" >Pay Code</th>
					<th style="background-color: #fafafa; text-align: left;">Pay Message</th>
					<th style="background-color: #fafafa; text-align: left;">BSS Code</th>
					<th style="background-color: #fafafa; text-align: left;" >BSS Message</th>			
					<th style="background-color: #fafafa; text-align: left;">MSISDN</th>			
					<th style="background-color: #fafafa; text-align: left;" width="2%">ICCID</th>			
					<th style="background-color: #fafafa; text-align: left;" width="3%">Payment Type</th>			
					<th style="background-color: #fafafa; text-align: left;" width="3%">Payment Amount</th>			
					<th style="background-color: #fafafa; text-align: left;" width="3%">Authkey</th>			
			</thead>
			<tbody id="ajaxTable" style="border: 1px solid #dddddd">
			
			
			
			
			<c:choose>
				<c:when test="${not empty list }">
					<c:forEach var="result" items="${list }">
						<c:choose>
							<c:when test="${result.trans_status == 1 }">
								<tr class="danger">
							</c:when>
							<c:otherwise>
								<tr>
							</c:otherwise>
						</c:choose>
							<td>${result.refid }</td>
							<td>${result.tid }</td>
							<td>${result.trans_reg_date }</td>
							<td>
								<c:if test="${empty result.trans_fin_date }">-</c:if>
								<c:if test="${not empty result.trans_fin_date }">${result.trans_fin_date }</c:if>
							</td>
							<td>
								<c:if test="${result.trans_status == 1 }">Failure</c:if>
								<c:if test="${result.trans_status == -1 }">Waiting</c:if>
								<c:if test="${result.trans_status == 0 }">Success</c:if>
							</td>
							<td>${result.pay_err_code }</td>
							<td>${result.pay_err_msg }</td>
							<td>${result.bss_err_code }</td>
							<td>${result.bss_err_msg }</td>
							<td>${result.msisdn }</td>
							<td>-</td>
							<td>${result.payment_type }</td>
							<td>${result.payment_amount }</td>
							<td>${result.authkey }</td>
						</tr>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<tr><td colspan="14" style="text-align: center"><h1><strong>No Data</strong></h1>
				</c:otherwise>
			</c:choose>
			</tbody>
		</table>
		
	</div>
</body>
</html>