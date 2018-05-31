package com.ktrn.mgateway.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ktrn.mgateway.vo.PayVO;

@Repository
public class PayDaoImpl implements PayDao {
	Logger log = Logger.getLogger(PayDaoImpl.class);
	
	@Autowired
	private SqlSession session;
	
	@Override
	public List<PayVO> selectPayInfoAllBy(String key, String order_seq) {
		log.info("select all pay info dao");
		
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("key", key);
		map.put("order_seq", order_seq);
		
		return session.selectList("selectPayInfoAllBy", map);
	}

	@Override
	public List<PayVO> selectedPayInfo(int year, int month, int day) {
		log.info("select pay info dao");
		
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("year", year);
		map.put("month", month);
		map.put("day", day);
		
		return session.selectList("selectedPayInfo", map);
	}

}
