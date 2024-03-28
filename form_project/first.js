"use strict";
var _a;
(_a = document.getElementById('signupForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // @ts-ignore
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    window.location.href = 'second.html';
});
