function manageGrades() {
    const students = [];

    while (true) {
        const name = prompt("Enter student name (or type 'done' to finish):");
        if (name.toLowerCase() === 'done') {
            break; // Exit the loop if user types 'done'
        }

        let totalMarks = 0;
        let validSubjects = 0;

        for (let i = 1; i <= 5; i++) { // Assuming 5 subjects
            let marks;
            while (true) {
                marks = parseInt(prompt(`Enter marks for subject ${i} (0-100):`));
                if (!isNaN(marks) && marks >= 0 && marks <= 100) {
                    totalMarks += marks;
                    validSubjects++;
                    break; // Valid marks, exit the inner loop
                } else {
                    alert("Invalid input. Please enter a number between 0 and 100.");
                }
            }
        }

        // Calculate percentage
        const percentage = (totalMarks / (validSubjects * 100)) * 100;

        // Determine grade based on percentage
        let grade;
        if (percentage > 79) {
            grade = 'A';
        } else if (percentage >= 60) {
            grade = 'B';
        } else if (percentage >= 50) {
            grade = 'C';
        } else if (percentage >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Store the student info
        students.push({ name: name, totalMarks: totalMarks, percentage: percentage, grade: grade });
    }

    // Display results
    if (students.length > 0) {
        let result = "Student Grades:\n";
        students.forEach(student => {
            result += `Name: ${student.name}, Total Marks: ${student.totalMarks}, Percentage: ${student.percentage.toFixed(2)}%, Grade: ${student.grade}\n`;
        });
        alert(result);
    } else {
        alert("No students entered.");
    }
}

manageGrades();
