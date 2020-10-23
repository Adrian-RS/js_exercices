//Crear una lista de estudiante y recorrer la lista e imprimir cada estudiante
let students = ['Juan', 'Maria', 'Pedro', 'Maxwell'];


//solution one
students.forEach(student => {
    console.log(student);
});


//solotion two
for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}