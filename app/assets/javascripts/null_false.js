$(function(){
  $('.button').on('click', function(){
    let isEmpty = false;
    jQuery('#user_nickname, #user_email, #user_password, #user_password_confirmation').each(function(){
      if(jQuery(this).val() === ''){
        alert('必須項目が入力されていません！');
        $(this).focus();
        isEmpty = true;
        return false;
      }
    });

    if(isEmpty)
      return false;
    // else
      // alert('送信完了！');
  });
});

function isZenKatakana(str){
  str = (str==null)?"":str;
  if(str.match(/^[ァ-ヶー ]+$/)){    //"ー"の後ろの文字は全角スペースです。
    return true;
  }else{
    return false;
  }
}

$(function(){
  $('.button').on('click', function(){
    let isEmpty = false;
    jQuery('#user_last_name, #user_first_name, #user_last_name_kana, #user_first_name_kana, #user_postal_code, #user_prefecture, #user_city, #user_house_number').each(function(){
      if(jQuery(this).val() === ''){
        alert('必須項目が入力されていません！');
        $(this).focus();
        isEmpty = true;
        return false;
      }
    });

    if(isEmpty)
      return false;
    // else
      // alert('送信完了！');
  });
});