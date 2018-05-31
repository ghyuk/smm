package com.ktrn.mgateway.service;



import java.util.List;

import com.ktrn.mgateway.vo.PayVO;

public interface PayService {
	
	public List<PayVO> selectPayInfoAllBy(String key, String order_seq);
	
	public List<PayVO> selectedPayInfo(int year, int month, int day);
}
