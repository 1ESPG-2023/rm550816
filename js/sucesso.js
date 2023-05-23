
    
    if(JSON.parse(localStorage.getItem("user-token")) != null){
        //const userBemVindo = document.querySelector("#userWelcome");
        let usuario = JSON.parse(localStorage.getItem("user-validado"));
        
        const legenda = document.querySelector("#figure-img figcaption");
        const img = document.querySelector("#img-avatar");

        img.src = usuario.avatarUsuario;
        img.alt = usuario.nomeCompleto;
        
        legenda.textContent = usuario.nomeCompleto +" - "+ usuario.nomeUsuario;
        // userBemVindo.innerHTML = usuario.nomeCompleto;

        const botaoLogout = document.querySelector("#btnLogout");
        botaoLogout.addEventListener("click", ()=>{
            localStorage.removeItem("user-token");
            window.location.href = "../login.html";
        });
    }else{
        window.location.href = "../login.html";
    }
