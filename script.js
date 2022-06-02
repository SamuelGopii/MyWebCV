
document.querySelector('input[type="search"]').addEventListener('focus', ()=>{
    document.querySelector('.search').classList.toggle('search-onfocus');
});

document.querySelector('.certificate-para').addEventListener('click', ()=>{
    document.querySelector('.courses').classList.toggle('courses-toggle')
    document.querySelector('.icon-carret-cc').classList.toggle('icon-carret-rotate')
});

document.querySelector('.graduation-para').addEventListener('click', ()=>{
    document.querySelector('.graduation').classList.toggle('graduation-toggle')
    document.querySelector('.icon-carret-g').classList.toggle('icon-carret-rotate')
});

document.querySelector('.post-para').addEventListener('click', ()=>{
    document.querySelector('.post-school').classList.toggle('post-school-toggle')
    document.querySelector('.icon-carret-ps').classList.toggle('icon-carret-rotate')
});
document.querySelector('.school-para').addEventListener('click', ()=>{
    document.querySelector('.school').classList.toggle('school-toggle')
    document.querySelector('.icon-carret-s').classList.toggle('icon-carret-rotate')
});

document.querySelector('.info-ps').addEventListener('click',()=>{
    document.querySelector('aside').innerHTML = "<object type='text/html' data='personal-details.html' width='100%' height='800px'></object>";
})
document.querySelector('.exp').addEventListener('click',()=>{
    document.querySelector('aside').innerHTML = "<object type='text/html' data='experience.html' width='100%'></object>";
})
document.querySelector('.prjs').addEventListener('click',()=>{
    document.querySelector('aside').innerHTML = "<object type='text/html' data='projects.html' width='100%'></object>";
})
document.querySelector('.compan').addEventListener('click',()=>{
    document.querySelector('aside').innerHTML = "<object type='text/html' data='companies-worked.html' width='100%'></object>";
})
document.querySelector('.life').addEventListener('click',()=>{
    document.querySelector('aside').innerHTML = "<object type='text/html' data='life-style.html' width='100%'></object>";
})