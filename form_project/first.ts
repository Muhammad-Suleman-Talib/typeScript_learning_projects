
document.getElementById('signupForm')?.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    // @ts-ignore
    const data: { [key: string]: string } = Object.fromEntries(formData.entries());
    console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
    window.location.href = 'second.html';
});
