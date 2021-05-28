'use strict';

window.addEventListener('load', function (){

    let addFileBtn = document.querySelector('#addFileBtn');
    addFileBtn.addEventListener('change', handleFiles, false);

    function handleFiles() {
        const fileList = this.files;
        console.log(fileList);
    }

});