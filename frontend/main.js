window.addEventListener('DOMContentLoader', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website caller function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}