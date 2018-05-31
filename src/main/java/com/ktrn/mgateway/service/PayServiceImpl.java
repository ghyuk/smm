package com.ktrn.mgateway.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ktrn.mgateway.dao.PayDao;
import com.ktrn.mgateway.vo.PayVO;

@Service
public class PayServiceImpl implements PayService {

	Logger log = Logger.getLogger(PayServiceImpl.class);
	
	@Autowired
	private PayDao payDao;
	
	@Override
	public List<PayVO> selectPayInfoAllBy(String key, String order_seq) {
		log.info("select all pay info service");
		
		List<PayVO> list = null;
		list = payDao.selectPayInfoAllBy(key, order_seq);
		
		return list;
	}

	@Override
	public List<PayVO> selectedPayInfo(int year, int month, int day) {
		log.info("select pay info service");
		
		List<PayVO> list = null;
		list = payDao.selectedPayInfo(year, month, day);
		
		return list;
	}

}
