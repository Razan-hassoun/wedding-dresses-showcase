
 function enter(){
    const matiere=prompt("donner la first name");
    let regex=/^[A-Z]+$/;
    if(!regex.test(matiere)){
        alert('enter le nom en majscule')
    }}
 function enter2(){
    const matiere=prompt("donner la last name");
    let regex=/^[A-Z][^0-9]+$/;
    if(!regex.test(matiere)){
        alert('le nom doit  commencer par le majscule et ne contient pas  des chiffres') ;

    }

 }

 function enter1(){
    const matiere=prompt("donner la mesure ");
    let regex=/^[0-9]+$/;
    if(!regex.test(matiere)){
        alert('donner une number')
    }}
    function enter3(){
    const matiere=prompt("donner la email  ");
    let regex=/..@\..../;
    if(!regex.test(matiere)){
        alert('exemple:ex@.com')
    }}
    function enter4(){
    const matiere=prompt("donner le nb de tel ");
    let regex=/^[0-9]+$/;
    if(!regex.test(matiere)){
        alert('le tel contient seulemet du nombre ')
    }
 }
 function pass(){
    var password = document.getElementById("pass").value;

    if (password.length >= 8 && password.length <= 20) {
        alert("Mot de passe valide !");
        // Vous pouvez ajouter ici le code pour traiter le mot de passe valide.
    } else {
        alert("Le mot de passe doit avoir entre 8 et 20 caractères.");
    }
}
