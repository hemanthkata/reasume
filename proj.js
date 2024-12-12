// Script to toggle between light and dark themes
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    this.textContent = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});
