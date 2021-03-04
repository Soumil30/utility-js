const filterupperCase = (character) => {
    
    var ascii = character.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    }

    return false;
}
module.exports = filterupperCase;