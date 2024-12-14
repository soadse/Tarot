let firstBackPressTime = 0; 
window.addEventListener('popstate', function(event) { 
    let currentTime = new Date().getTime(); 
    if (currentTime - firstBackPressTime < 2000) { 
        // Se o segundo clique no botão "voltar" for em menos de 2 segundos após o primeiro, feche o app 
        window.close();
    } else { 
        // Se o primeiro clique no botão "voltar" for registrado 
        firstBackPressTime = currentTime; 
        alert('Pressione "voltar" novamente para fechar o app.'); 
        history.pushState(null, null, location.href); 
        // Prevenir o comportamento padrão de voltar a página 
    };
})

// Prevenir a ação padrão de navegação "voltar" 
history.pushState(null, null, location.href);