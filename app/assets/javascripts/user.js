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
  
  function addUser(name,user_id) {
    var html =`<div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                <p class='chat-group-user__name'>'${name}'</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`

    $("#chat-group-users").append(html);
                }


  $("#user-search-field").on("keyup",function(e){
    e.preventDefault();
    var input = $("#user-search-field").val();
    if (input == "") {
      $("#user-search-result").empty();
      return false
    }
    // console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: "json"
    })

    .done(function(data) {
      $("#user-search-result").empty();
      console.log(data)
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


  $("#user-search-result").on("click", ".user-search-add", function () {
    console.log("クリックOK")
    var name = $(this).data("user-name");
    var user_id = $(this).data("user-id");
    addUser(name, user_id);
    $(this).parent().remove();
  });
  
  $("#chat-group-users").on("click", ".js-remove-btn", function(e){
    $(this).parent().remove();
  });
});

