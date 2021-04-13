window.addEventListener("load", () => {
    console.log("Page loaded");

    const socialAuthBtn = document.querySelectorAll(".social-auth-btn") as NodeListOf<HTMLButtonElement>;
    const socialAudio = new Audio("../../soungeffect/ES_Multimedia Alarm 24 - SFX Producer.mp3");
    const loginInput = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;

    socialAuthBtn.forEach((socialBtn) => {
        socialBtn.addEventListener("click", () => {
            console.log("SocialBtn Clicked");
            socialAudio.play();
        });
    });

    loginInput.forEach((loginForm) => {
        loginForm.addEventListener("input", (e) => {
            console.log((e as HTMLInputElement).target.value);
            socialAudio.play();
        });
    });

});