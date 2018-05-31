package com.ktrn.mgateway.vo;

import java.util.Date;

public class PayVO {
	private String trans_id;
	private Date   trans_reg_date;
    private String trans_status;
    private Date   trans_fin_date;
    private String sv_code;
    private String op_code;
    private String ch_code;
    private String so_id;
    private String prod_cd;
    private String msisdn;
    private String iccid;
    private String payment_type;
    private String credit_type;
    private String refid;
    private String tid;
    private int    payment_amount;
    private String authkey;
    private String req_sys_id;
    private String pay_err_code;
    private String Pay_err_msg;
    private String bss_err_code;
    private String bss_err_msg;
    public String getTrans_id() {
        return trans_id;
    }
    public void setTrans_id(String trans_id) {
        this.trans_id = trans_id;
    }
    public Date getTrans_reg_date() {
        return trans_reg_date;
    }
    public void setTrans_reg_date(Date trans_reg_date) {
        this.trans_reg_date = trans_reg_date;
    }
    public String getTrans_status() {
        return trans_status;
    }
    public void setTrans_status(String trans_status) {
        this.trans_status = trans_status;
    }
    public Date getTrans_fin_date() {
        return trans_fin_date;
    }
    public void setTrans_fin_date(Date trans_fin_date) {
        this.trans_fin_date = trans_fin_date;
    }
    public String getSv_code() {
        return sv_code;
    }
    public void setSv_code(String sv_code) {
        this.sv_code = sv_code;
    }
    public String getOp_code() {
        return op_code;
    }
    public void setOp_code(String op_code) {
        this.op_code = op_code;
    }
    public String getCh_code() {
        return ch_code;
    }
    public void setCh_code(String ch_code) {
        this.ch_code = ch_code;
    }
    public String getSo_id() {
        return so_id;
    }
    public void setSo_id(String so_id) {
        this.so_id = so_id;
    }
    public String getProd_cd() {
        return prod_cd;
    }
    public void setProd_cd(String prod_cd) {
        this.prod_cd = prod_cd;
    }
    public String getMsisdn() {
        return msisdn;
    }
    public void setMsisdn(String msisdn) {
        this.msisdn = msisdn;
    }
    public String getIccid() {
        return iccid;
    }
    public void setIccid(String iccid) {
        this.iccid = iccid;
    }
    public String getPayment_type() {
        return payment_type;
    }
    public void setPayment_type(String payment_type) {
        this.payment_type = payment_type;
    }
    public String getCredit_type() {
        return credit_type;
    }
    public void setCredit_type(String credit_type) {
        this.credit_type = credit_type;
    }
    public String getRefid() {
        return refid;
    }
    public void setRefid(String refid) {
        this.refid = refid;
    }
    public String getTid() {
        return tid;
    }
    public void setTid(String tid) {
        this.tid = tid;
    }
    public int getPayment_amount() {
        return payment_amount;
    }
    public void setPayment_amount(int payment_amount) {
        this.payment_amount = payment_amount;
    }
    public String getAuthkey() {
        return authkey;
    }
    public void setAuthkey(String authkey) {
        this.authkey = authkey;
    }
    public String getReq_sys_id() {
        return req_sys_id;
    }
    public void setReq_sys_id(String req_sys_id) {
        this.req_sys_id = req_sys_id;
    }
    public String getPay_err_code() {
        return pay_err_code;
    }
    public void setPay_err_code(String pay_err_code) {
        this.pay_err_code = pay_err_code;
    }
    public String getPay_err_msg() {
        return Pay_err_msg;
    }
    public void setPay_err_msg(String pay_err_msg) {
        Pay_err_msg = pay_err_msg;
    }
    public String getBss_err_code() {
        return bss_err_code;
    }
    public void setBss_err_code(String bss_err_code) {
        this.bss_err_code = bss_err_code;
    }
    public String getBss_err_msg() {
        return bss_err_msg;
    }
    public void setBss_err_msg(String bss_err_msg) {
        this.bss_err_msg = bss_err_msg;
    }
}


