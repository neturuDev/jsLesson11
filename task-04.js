class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        let temp = str.split(" ");
        for (let i = 0; i < temp.length; i++) {
            temp[i] = this.ucFirst(temp[i]);
        }
        return temp.join(" ");
    }
}