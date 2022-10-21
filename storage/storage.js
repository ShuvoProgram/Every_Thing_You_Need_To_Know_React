// const addToLocalStorage = () => {
//     const idInput = document.getElementById('storage-id');
//     const id = idInput.value;
//     const valueInput = document.getElementById('storage-value');
//     const value = valueInput.value;
//     //
//     if (id && value) {
//         localStorage.setItem(id, value);
//     }
//     idInput.value = '';
//     valueInput.value = '';
// }

const addToLocalStorage = () => {
    const idInput = document.getElementById("StorageId");
    const idField = idInput.value;
    const idInput2 = document.getElementById("StorageId2");
    const idField2 = idInput2.value;
    const idInput3 = document.getElementById("StorageId3");
    const idField3 = idInput3.value;
    const data = {idField, idField2, idField3};
    // if (idInput && idInput2 && idInput3 && idField && idField2 && idField3){
    //     localStorage.setItem('key', idField, idField2, idField3)
    // }

    if(localStorage.getItem('people')){
        // console.log('load data');
        const peopleData = JSON.parse(localStorage.getItem('people'));
        const oldPeople = [...peopleData, data];
        localStorage.setItem('people', JSON.stringify(oldPeople));
        
    } else {
        localStorage.setItem('people',JSON.stringify([data]));
    }
}
