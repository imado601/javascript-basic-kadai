function today() {

    let date = new Date();
    let sampleday = `${date.getFullYear()}年${(date.getMonth() + 1)}月${date.getDate()}日`;
    return sampleday;

}

console.log(today()); 