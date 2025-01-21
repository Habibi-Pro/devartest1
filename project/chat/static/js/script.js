document.addEventListener("DOMContentLoaded", function() {
  const messageInput = document.querySelector('.message-input');
  const sendButton = document.querySelector('.send-button');
  const chatBox = document.querySelector('.chat-box');

  // ارسال پیام جدید
  sendButton.addEventListener('click', function() {
      const messageText = messageInput.value.trim();
      
      // اگر پیام خالی نباشد
      if (messageText !== "") {
          const newMessage = document.createElement('div');
          newMessage.classList.add('message', 'right');
          newMessage.innerHTML = `
              <div class="message-content">
                  ${messageText}
              </div>
          `;
          
          // افزودن پیام به جعبه چت
          chatBox.appendChild(newMessage);
          messageInput.value = ""; // پاک کردن ورودی پیام
          
          // پیمایش خودکار به پایین
          chatBox.scrollTop = chatBox.scrollHeight;
      }
  });

  // ارسال پیام با کلید Enter
  messageInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          sendButton.click();
      }
  });

  // پیمایش خودکار به پایین هنگام بارگذاری صفحه
  chatBox.scrollTop = chatBox.scrollHeight;
});
