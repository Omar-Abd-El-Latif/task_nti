
const yargs = require("yargs");
const students = require('./data.js')


////////////////////add student
yargs.command({
    command: 'add',

    describe: 'add student',

    builder: {

        id: {
            describe: "id added",
            demandOption: true,
            type: 'number'

        },
        studentName: {
            describe: "studentName added",
            demandOption: true,
            type: 'string'
        },
        gradeSchool: {
            describe: "gradeSchool added",
            demandOption: true,
            type: 'number'
        },
        aComment: {
            describe: "aComment added",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {

        students.addStudent(argv.id, argv.studentName, argv.gradeSchool, argv.aComment)

    }
})
/////////////////////////////////delet student
yargs.command({
    command: 'delet',

    describe: 'delet by id',

    builder: {

        id: {
            describe: "id for delet ",
            demandOption: true,
            type: 'number'

        }
    },
    handler: function (argv) {
        students.removeStudent(argv.id, argv.studentName, argv.gradeSchool, argv.aComment)
    }
})


///////////////////show student

yargs.command({
    command: 'show',

    describe: 'show by id',

    builder: {

        id: {
            describe: "id for show ",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        students.showStudent(argv.id, argv.studentName, argv.gradeSchool, argv.aComment)
    }
})

///////////////show list of student
yargs.command({
    command: 'list',

    describe: 'show by id',

 
    handler: function (argv) {
        students.listStudent(argv.id, argv.studentName, argv.gradeSchool, argv.aComment)
    }
})



yargs.parse()


