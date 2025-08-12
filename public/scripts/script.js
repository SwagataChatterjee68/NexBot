document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector('form[action="/login"]');
  if (loginForm) {
    loginForm.addEventListener("submit", function () {
      setTimeout(() => loginForm.reset(), 10);
    });
  }
  const registerForm = document.querySelector('form[action="/register"]');
  if (registerForm) {
    registerForm.addEventListener("submit", function () {
      setTimeout(() => registerForm.reset(), 10);
    });
  }
});

// Sidebar toggle for mobile
const sidebar = document.getElementById("sidebar");
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});
sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Chat logic
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const chatHistoryList = document.getElementById("chatHistoryList");
const newChatBtn = document.getElementById("newChatBtn");

let chatHistory = [];
let chats = [];
let currentChatIndex = null;

function renderHistory() {
  chatHistoryList.innerHTML = "";
  chats.forEach((chat, idx) => {
    const div = document.createElement("div");
    div.className =
      "chat-history-item" + (idx === currentChatIndex ? " active" : "");
    div.textContent = chat.title || "New chat";
    div.onclick = () => {
      currentChatIndex = idx;
      renderHistory();
      renderChat();
    };
    chatHistoryList.appendChild(div);
  });
}

function renderChat() {
  chatMessages.innerHTML = "";
  if (
    currentChatIndex === null ||
    !chats[currentChatIndex] ||
    chats[currentChatIndex].messages.length === 0
  ) {
    chatMessages.innerHTML = `
                    <div class="msg-row msg-bot">
                        <div class="msg-avatar">AI</div>
                        <div>
                            <div class="msg-content">
                                Hi! How can I help you today?
                            </div>
                            <div class="msg-meta">NexBot · ${new Date().toLocaleTimeString(
                              [],
                              { hour: "2-digit", minute: "2-digit" }
                            )}</div>
                        </div>
                    </div>
                `;
    return;
  }
  chats[currentChatIndex].messages.forEach(({ role, text, time }) => {
    const msgRow = document.createElement("div");
    msgRow.className = "msg-row " + (role === "user" ? "msg-user" : "msg-bot");
    msgRow.innerHTML = `
                    <div class="msg-avatar">${
                      role === "user" ? "U" : "AI"
                    }</div>
                    <div>
                        <div class="msg-content">${text}</div>
                        <div class="msg-meta">${
                          role === "user" ? "You" : "NexBot"
                        } · ${time}</div>
                    </div>
                `;
    chatMessages.appendChild(msgRow);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMessage(role, text) {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (currentChatIndex === null) {
    // Start a new chat
    chats.push({ title: "", messages: [] });
    currentChatIndex = chats.length - 1;
  }
  chats[currentChatIndex].messages.push({ role, text, time });
  // Set chat title as first user message
  if (role === "user" && chats[currentChatIndex].messages.length === 1) {
    chats[currentChatIndex].title =
      text.length > 32 ? text.slice(0, 32) + "..." : text;
  }
  renderHistory();
  renderChat();
}

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (!msg) return;
  addMessage("user", msg);
  chatInput.value = "";
  setTimeout(() => {
    addMessage("bot", `This is an AI reply to: "${msg}"`);
  }, 800);
});

newChatBtn.addEventListener("click", function () {
  chats.push({ title: "", messages: [] });
  currentChatIndex = chats.length - 1;
  renderHistory();
  renderChat();
});

// Start with empty chat history and welcome message
renderHistory();
renderChat();
