document.addEventListener('DOMContentLoaded', function(){
    const themeToggle = document.getElementById('theme-toggle');
    const body = cdocument.body;

    //check is user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }

    //add click event to theme toggle button
    themeToggle.addEventListener('click', function(){
        
        body.classList.toggle('dark-theme');

        const isDark = body.classList.contains('dark-theme');

        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
    });
});