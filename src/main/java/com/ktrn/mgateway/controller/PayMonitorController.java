package com.ktrn.mgateway.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ktrn.mgateway.service.PayService;
import com.ktrn.mgateway.vo.PayVO;

@Controller
@RequestMapping(value="/PayMonitoring")
public class PayMonitorController {
	Logger log = Logger.getLogger(PayMonitorController.class);
	
	@Autowired
	private PayService payService;
	
	
	@RequestMapping(value="/selectAll.do")
	public String selectAll(Model model	){
		log.info("Select All Call Success");
		
		List<PayVO> list = payService.selectPayInfoAllBy("trans_reg_date", "asc");
		
		model.addAttribute("list", list);
		
		
		return "pay_monitor";
	}
	

}
