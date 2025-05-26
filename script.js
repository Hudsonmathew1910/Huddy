function togglemenu()
{
const menuu=document.getElementById('menuit');
if(menuu.style.display==='none')
{menuu.style.display='flex';}
else{menuu.style.display='none';}
}

function showSection(id)
{
document.querySelectorAll('.content').forEach(section=>{section.classList.remove('active');});
document.getElementById(id).classList.add('active');
}