

const { notEqual } = require('assert');
const fs = require('fs')

//without duplication
//add student
// const addStudent = (id, studentName, gradeSchool, aComment) => {
//     const students = loadStudent();
//     students.push({
//         id, studentName, gradeSchool, aComment
//     })
//     saveStudent(students)
// }
///////////add student with duplication 
const addStudent = (id, studentName, gradeSchool, aComment) => {
        const students = loadStudent();
        const duplicateId = students.filter(function (students) {
            return students.id === id
        })
        if (duplicateId.length === 0) {
            students.push({
                id, studentName, gradeSchool, aComment
            })
            saveStudent(students)
            console.log("student has add sucess")
        }
        else {
            console.log("student has been add before")

        }

    };
////////////////////////remove student by id 

const removeStudent = (id, studentName, gradeSchool, aComment) => {
        const students = loadStudent()
        const studentSchool = students.filter(function (students) {
            return students.id !== id

        })

        if (students.length > studentSchool.length) {
            console.log("student removed")
            saveStudent(studentSchool)

        }
        else {
            console.log("Student not removed ")
        }



    }

////////////show student
const showStudent = (id, studentName, gradeSchool, aComment) => {
        const students = loadStudent()
        const student = students.find((student) => {
            return student.id === id

        })

        if (student) {
            console.log("id = " + student.id)
            console.log("name = " + student.studentName)
            console.log("gradeSchool = " + student.gradeSchool)
            

        }

    }

/////////// list of student     


const listStudent = () => {
    const students = loadStudent()
     students.forEach(student=> {
        console.log("id = " + student.id)
        console.log("name = " + student.studentName)
        console.log("gradeSchool = " + student.gradeSchool)
        console.log("aComment = " + student.aComment )
        console.log("")
         
     });

    
}





const loadStudent = () => {
    try {
        const convertdata = fs.readFileSync('data.json'.toString())
        return JSON.parse(convertdata)
    }

    catch (e) {
        return []
    }


};
const saveStudent = (students) => {
    const saveData = JSON.stringify(students)
    fs.writeFileSync('data.json', saveData)
}
module.exports = {
    addStudent, removeStudent, showStudent,listStudent


}
