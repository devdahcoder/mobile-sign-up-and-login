window.addEventListener("load", function () {
    console.log("Page loaded");
    var socialAuthBtn = document.querySelectorAll(".social-auth-btn");
    var socialAudio = new Audio("../../soungeffect/ES_Multimedia Alarm 24 - SFX Producer.mp3");
    var loginInput = document.querySelectorAll("input");
    socialAuthBtn.forEach(function (socialBtn) {
        socialBtn.addEventListener("click", function () {
            console.log("SocialBtn Clicked");
            socialAudio.play();
        });
    });
    loginInput.forEach(function (loginForm) {
        loginForm.addEventListener("input", function (e) {
            console.log(e.target.value);
            socialAudio.play();
        });
    });
});
