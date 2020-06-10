$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message-list-box">
          <div class="message-list-box__user-info">
            <div class="user-info__name">
              ${message.user_name}
            </div>
            <div class="user-info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list-box__message">
            <p class="message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message-list-box">
          <div class="message-list-box__user-info">
            <div class="user-info__name">
              ${message.user_name}
            </div>
            <div class="user-info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list-box__message">
            <p class="message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
    })
  });
  
});


