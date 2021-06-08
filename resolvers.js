const { students, colleges } = require("./db")

// console.log(students)

const Query = {
  students: () =>  {
    return students.entities
   },
   colleges: () =>{
      return colleges.entities
    },
    student: (parent, args) => {
    const result = students.entities.find(student => student.id == args.id);
    // console.log(result)
     return result;
   },
   college: (parent, args) => {
     const result = colleges.entities.find(college => college.id == args.id);
    //  console.log(args.id);
    //  console.log(result);
     return result;
   }
}

const Student = {
  college: (parent, args) =>{
    const result = colleges.entities.find(college => college.id == parent.collegeId)
    return result;
  }
}

const College = {
  students: (parent, args) =>{
    console.log(parent);
    console.log(parent.studentId);

    const result = students.entities.find(student => student.id == parent.studentId)
    return result;

  }
}



module.exports = {
  Query,
  Student,
  College
}