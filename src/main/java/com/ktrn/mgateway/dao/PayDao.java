package com.ktrn.mgateway.dao;

import java.util.List;

import com.ktrn.mgateway.vo.PayVO;

public interface PayDao {
	
	public List<PayVO> selectPayInfoAllBy(String key, String order_seq);
	
	public List<PayVO> selectedPayInfo(int year, int month, int day);
}
