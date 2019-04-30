class Validator {
    isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    isDomain(domain) {
        return /^(([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])\.)*[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(domain)
    }
    isDate(date) {
        var data = date.split(".");
        if (isNaN(Date.parse(data[2] + "-" + data[1] + "-" + data[0]))) {
            return false;
        }
        return true;
    }
    isPhone(phone) {
        return /^\+[\d]{3}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/.test(phone)
    }
}