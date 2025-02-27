const renderForm = (form) => {
    return (
        `${form}`
    )
}

const onLoadCreate = () => {

    const createForm = document.getElementById('createType');
    createForm.addEventListener('onChange', (e) => {
        const resultHTML = e.target.innerHTML;
        if (e.target.value === 1) {
            resultHTML.innerHTML = renderForm(taskForm);
        } else if (e.target.value === 2) {
            resultHTML.innerHTML = renderForm(notebookForm);
        } else if (e.target.value === 3) {
            resultHTML.innerHTML = renderForm(bookForm);
        } else {
            resultHTML.innerHTML = '';
        }


    })
}