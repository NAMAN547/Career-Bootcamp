
  const socket = io();

  const chatInput = document.getElementById("chat-input");
  const chatBtn = document.getElementById("btn");
  const chatList = document.getElementById("chat-msg-list")
  const loginSection = document.getElementById("login-section");
  const loginBtn = document.getElementById("login-btn");
  const loginInput = document.getElementById("login-input");

  loginBtn.addEventListener("click",()=>{

    let username = loginInput.value;

    socket.emit("login", {

        username : username
    })


    loginSection.classList.add("hide")


  })

  chatBtn.addEventListener("click",(e)=>{

    const message = chatInput.value;

   socket.emit("send-msg", {msg : message})

    chatInput.value = ""

  });

  socket.on("recieved-msg", (data)=>{

    const li = document.createElement("li");

    li.setAttribute("class", "list-group-item");

    li.innerText = ` ${data.username} : ${data.msg}`;

    chatList.append(li)

  })
