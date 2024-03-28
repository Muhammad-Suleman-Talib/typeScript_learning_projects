const userDataString: string | null = localStorage.getItem('userData');
if (userDataString) {
    // @ts-ignore
    const userData: UserData = JSON.parse(userDataString);
    const { name } = userData;
    
    const welcomeMessage = {
        title: "🌟 Welcome to Stars Developers! 🌟",
        message: `🚀welcome ${ name} to Stars Developers community .where every coder becomes a guiding star in our constellation of innovation. 🌠 Glide through the cosmos of coding excellence with us. 🌌 Join the stellar journey at StarsDevelopers.com and let your programming prowess light up the skies! 💫 #StarsDevelopers #CodeGalaxy 🌟😊.`
    };

    const h1 = document.createElement('h1');
    h1.textContent = welcomeMessage.title;
    document.body.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = welcomeMessage.message;
    document.body.appendChild(p);

    console.log(userData);
} else {
    console.error("User data not found in local storage.");
}