

export default function validatePhone(tel) {
    var startsWithIndicator = tel.trim().startsWith('+221');
    if (!startsWithIndicator) {
        return { status: false, message: "Le numéro doit commencer par +221" };
    }

    var lengthValid = tel.trim().length === 13;
    if (!lengthValid) {
        return { status: false, message: "Le numéro doit contenir 13 caractères" };
    }

    var twoNumberStarted = tel.trim().slice(4, 6);
    var validStarts = ['70', '75', '76', '77', '78', '71'];
    if (!validStarts.includes(twoNumberStarted)) {
        return { status: false, message: "Le numéro doit commencer par +221 suivi de 70, 75, 76, 77, 78 ou 71" };
    }

    return true;
}