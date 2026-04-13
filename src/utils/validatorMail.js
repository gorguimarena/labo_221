export default function validateEmail(email) {
    var areSymbols = email.includes('@') && email.includes('.');

    if (!areSymbols) {
        return { status: false, message: "L'email doit contenir '@' et '.'" };
    }
    var parts = email.split('@');

    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
        return { status: false, message: "Format d'email invalide" };
    }

    var subs = email.split('.');

    if (!subs) {
        return { status: false, message: "Format d'email invalide" };
    }
    else if (subs.length < 2 && subs[1].length === 0) {
        return { status: false, message: "Format d'email invalide" };
    } else if (subs[subs.length - 1].length === 0) {
        return { status: false, message: "Format d'email invalide" };
    }

    return true;
}
