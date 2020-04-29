// Person constructor
// function Person() {
//   this.name = 'Sid';
// }

// const sid = new Person();
// console.log(sid)

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  // console.log(this)
  this.birthday = new Date(dob);
  this.getAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate
    // return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const sid = new Person('Sid', '03-23-1990')
// const baby = new Person('Baby', '05-03-1989')


console.log(sid.getAge())

//  const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
