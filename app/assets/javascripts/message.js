$(function(){ 
  function buildHTML(message){
    var img = message.image ? `<img src=${ message.image }>` : "";
    var html =`<div class="message" data-message-id="${message.id}">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                  ${img}
                </div>
              </div>`
            return html;
      }

$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr("action");
  $.ajax({
    url: url,
    type:"POST",
    data: formData,
    dataType: "json",
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  return false;
});


var reloadMessages = function() {
  if (window.location.href.match(/\/groups\/\d+\/messages/)){    // group/:group_id/messagesというURLの時だけ、以降の記述が実行される。
  var href = 'api/messages#index {:format=>"json"}'              // リクエスト先と形式を指定する。
  var last_message_id = $('.message:last').data('message-id');   // カスタムデータ属性を利用して、最新のメッセージIDを取得する。
  
  $.ajax({
    url: href,    //↑でパスを「href」にしている。ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
    type: 'get',    //ルーティングで設定した通りhttpメソッドをgetに指定
    dataType: 'json',
    data: {id: last_message_id}   //dataオプションでリクエストに値を含める
  })
  .done(function(messages) {
    var insertHTML = '';    //追加するHTMLの入れ物を作る
    messages.forEach(function(message) {    //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);    //メッセージが入ったHTMLを取得
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');    //メッセージを追加
  })
})

  .fail(function() {
    alert('自動更新に失敗しました');
  });


};
}
  setInterval(reloadMessages, 5000);
});
