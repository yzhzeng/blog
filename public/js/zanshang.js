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
      var payType=$('#pay-type'), payImage = $('#pay-image'),payText = $('#pay-text');
      if(type=='alipay'){
        payType.html('֧����');
      }else{
        payType.html('΢��');
      }
      payImage.attr('src',src);
      payText.html(text);
'$(window).attr('location','wxp://f2f1E8-PM6iz8CJs4qK_wXOU5MWIDpDdgVQQ');
      that.zsPay.show();
      that.zsBtns.hide();
      that.zsFooter.hide();

    })
  })
}
var zs = new ZanShang();