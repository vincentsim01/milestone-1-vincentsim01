console.log('project work');

function togglecontenttext(param){
    let contentId = document.getElementById(`${param}projectcontenttext`);
    contentId.classList.toggle("expanded");
}

