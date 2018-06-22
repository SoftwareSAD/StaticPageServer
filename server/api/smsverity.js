import crypto from 'crypto'
import http from 'http'
import queryString from 'querystring'
import {SMS} from '../config'

//config
const smsapi= SMS.smsapi
const user = SMS.user
const password = SMS.password
var md5 = crypto.createHash('md5')

function statusStr(result){
  switch(result)
  {
    case '0':
      console.log('短信发送成功')
      break
    case '-1':
      console.log('参数不全')
      break
    case '-2':
      console.log('服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！')
      break
    case '30':
      console.log('密码错误')
      break
    case '40':
      console.log('账户不存在')
      break
    case '41':
      console.log('余额不足')
      break
    case '42':
      console.log('账户已过期')
      break
    case '43':
      console.log('IP地址限制')
      break
    case '50':
      console.log('内容含有敏感字')
      break
  }
};

const _smsverity = {
  send_sms: async(req, res, next) => {
    var smscontent = "尊敬的用户，您的注册验证码为" + req.body.code;
    var phone = req.body.cellphone;
    var pass = md5.update(password).digest('hex');
    var data={
      'u':user,
      'p':pass,
      'm':phone,
      'c':smscontent
    }
    var content=queryString.stringify(data);
    var options={
      hostname : smsapi,
      path:'/sms?'+content,
      method:'GET'
    }
  //创建请求
    var request = http.request(options,function(response){
      response.setEncoding('utf-8');
      response.on('data',function(result){
      statusStr(result)
      });
      response.on('end',function(){
      });
    });
    request.on('error',function(err){
      console.error(err);
    });
    request.end();
    return res.json({code: req.body.code})
  }
}

export default _smsverity
