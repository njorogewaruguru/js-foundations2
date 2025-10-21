function showMarks(details) {
    for (let i = 0; i < details.length; i++) {
        let student = details[i];
        let total = 0;
        console.log(`\nName: ${student.studentName}`);
        console.log("Subjects and Marks")
        for (let j = 0; j < student.marks.length; j++) {
            let subject = student.marks[j]
            console.log(`${subject.subject}: ${subject.score}`)
            total += subject.score;
        }
        let average = total / student.marks.length;
        let status;
        if(average >= 50){
            status = "Pass"
        } else {
            status = "Fail"
        }
        console.log(`Average: ${average.toFixed(2)}`)
        console.log(`Result: ${status}`);
    }
}

let details = [
    {
        studentName: 'Hannah',

        marks: [{ subject: "Math", score: 95 }, { subject: "Language", score: 90 }, { subject: "Science", score: 80 }, { subject: "Comp", score: 90 }]
    },
    {
        studentName: 'Mary',

        marks: [{ subject: "Math", score: 90 }, { subject: "Language", score: 70 }, { subject: "Science", score: 68 }, { subject: "Comp", score: 57 }]
    },
    {
        studentName: 'James',

        marks: [{ subject: "Math", score: 64 }, { subject: "Language", score : 79 }, { subject: "Science", score: 78 }, { subject: "Comp", score: 49 }]
    },

    {
        studentName: 'Ben',

        marks: [{ subject: "Math", score: 46 }, { subject: "Language", score : 30 }, { subject: "Science", score: 28 }, { subject: "Comp", score: 49 }]
    }

]
showMarks(details)
