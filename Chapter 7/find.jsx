// array mehtod 

// find method 
// it return the  first element we are looking for ... 

let student = [{id:1,name: "alex"}, {id:2, name: "john"}];

let result = student.find(student => {
    return student.id === 1
})

console.log(result);