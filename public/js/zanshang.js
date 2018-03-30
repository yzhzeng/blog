function ZanShang(){
  this.popbg = $('.zs-modal-bg');
  this.popcon = $('.zs-modal-box');
  this.closeBtn = $('.zs-modal-box .close');
  this.zsbtn = $('.zs-modal-btns .btn');
  this.zsPay = $('.zs-modal-pay');
  this.zsBtns = $('.zs-modal-btns');
  this.zsFooter = $('.zs-modal-footer');
  var that = this;
  $('.show-zs').on('click',function(){
    //������Ͱ�ť���ֵ���
    that._show();
    that._init();
  })
}
ZanShang.prototype._hide = function(){
  this.popbg.hide();
  this.popcon.hide();
}
ZanShang.prototype._show = function(){
  this.popbg.show();
  this.popcon.show();
  this.zsBtns.show();
  this.zsFooter.show();
  this.zsPay.hide();
}
ZanShang.prototype._init = function(){
  var that = this;
  this.closeBtn.on('click',function(){
    that._hide();
  })
  this.popbg.on('click',function(){
    that._hide();
  })
  this.zsbtn.each(function(el){
    $(this).on('click',function(){
      var num = $(this).attr('data-num'); //��ť�Ķ�Ӧ������
      var type = $('.zs-type:radio:checked').val();//���ʽ
      //���ݲ�ͬ���ʽ��ѡ���Ӧ�İ�ť�����������ɶ�Ӧ�Ķ�ά��ͼƬ��������Զ������ͼƬ��·����Ĭ�Ϸ��ڵ�ǰimagesĿ¼��
      //��������Ҫ��һ��Զ��·���������ҵľ���
      //http://caibaojian.com/wp-content/themes/blue/images/pay/'+type+'-'+num+'.png';
      var src = 'images/'+type+'-'+num+'.png';
      var text = $(this).html();
      var payType=$('#pay-type'), payImage = $('#pay-image'),payText = $('#pay-text'),payMode = $('#pay-mode');
      if(type=='alipay'){
        payType.html('֧����');
      }else{
        payType.html('΢��');
	  if(isMobile() && isWeiXin()){
	      payMode.html('������ά��ʶ��֧��');
        }
      }
      payImage.attr('src',src);
      payText.html(text);
      that.zsPay.show();
      that.zsBtns.hide();
      that.zsFooter.hide();
      if(type=='alipay'){
          $(location).attr('href', 'http://www.jb51.net');
      }
    })
  })
}
var zs = new ZanShang();

function isMobile(){
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if(isMobile) {
        return true;
    }else {
        return false;
    }
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

