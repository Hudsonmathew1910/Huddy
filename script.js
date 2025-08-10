function togglemenu() {
  const menuu = document.getElementById('menuit');
  const isHidden = window.getComputedStyle(menuu).display === 'none';
  menuu.style.display = isHidden ? 'flex' : 'none';
}

function showSection(id)
{
document.querySelectorAll('.content').forEach(section=>{section.classList.remove('active');});
document.getElementById(id).classList.add('active');
}
