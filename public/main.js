var message = document.getElementsByClassName("message");

Array.from(message).forEach(function(element) {
      element.addEventListener('click', function(){
        const mood = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('message-delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'chatter': chatter,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
