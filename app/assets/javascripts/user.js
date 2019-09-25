$(function(){
  var search_list = $("#user-search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                </div>
                </div>`
                
                search_list.append(html);
  }

  function appendNoUser(user) {
    var html = `<div class = "chat-group-user clearfix">${user}</div>`
                search_list.append(html);
  }



  $("#user-search-field").on("keyup",function(e){
    e.preventDefault();
    var input = $("#user-search-field").val();
    // console.log("あああああ");


    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: "json",
      processData: false,
      contentType: false
    })

    .done(function(data) {
      $("#user-search-result").empty();
      if (data.length !== 0) {
        data.forEach(function(user){
        appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーが見つかりません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
  })
});
});