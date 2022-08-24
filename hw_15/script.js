function getGrade(grade) {
    const grades = Object.keys(gradation);
    for (let i = 0; i < grades.length; i++) {
        if (grade <= grades[i]) {
            return grades[i];
        }
    }
}


class User {
    name = "";
    age = 0;
    img = "";
    role = "";
    courses = [];


    constructor(obj) {
        Object.assign(this, obj)
    }

    render() {
        return `
        <div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            </div>
            ${this.renderCourses()}
        </div>`
    }


    renderCourses() {
        if (this.courses.length > 0) {
            const LENGTH_COURSE_ARR = this.courses.length;
            let formattedText = [];

            for (let i = 0; i < LENGTH_COURSE_ARR; i++) {
                let title = "", mark = "";
                const currentCourse = this.courses[i];
                for (const currentCourseKey in currentCourse) {
                    switch (currentCourseKey) {
                        case "title":
                            title = currentCourse[currentCourseKey];
                            break;
                        case "mark":
                            mark = gradation[getGrade(currentCourse[currentCourseKey])];
                            break;
                    }
                }
                formattedText.push(`<p class="user__courses--course ${this.role}">${title} <span class="${mark}">${mark}</span></p>
                            `);
            }
            return `<div class="user__courses">
                            ${formattedText.join("")}
                    </div>`;
        } else {
            return "";
        }
    }


}


class Student extends User {
    constructor(obj) {
        super(obj);
    }
}

class Lector extends User {
    constructor(obj) {
        super(obj);
    }

    renderCourses() {
        if (this.courses.length > 0) {
            const LENGTH_COURSE_ARR = this.courses.length;
            let formattedText = [];

            for (let i = 0; i < LENGTH_COURSE_ARR; i++) {
                let title = "", score = "", lector = "";
                const currentCourse = this.courses[i];
                for (const currentCourseKey in currentCourse) {
                    switch (currentCourseKey) {
                        case "title":
                            title = currentCourse[currentCourseKey];
                            break;
                        case "score":
                            score = gradation[getGrade(currentCourse[currentCourseKey])];
                            break;
                        case "lector":
                            lector = currentCourse[currentCourseKey];
                    }
                }
                formattedText.push(`<div class="user__courses--course lector">
                    <p>Title: <b>${title}</b></p>
                    <p>Lector's score: <span class="${score}">${score}</span></p>
                    <p>Average student's score: <span class="${score}">${score}</span></p>
                </div>`);
            }
            return `<div class="user__courses admin--info">
                                ${formattedText.join("")}
                     </div>`;
        } else {
            return "";
        }
    }
}


class Admin extends User {
    constructor(obj) {
        super(obj);
    }

    renderCourses() {
        if (this.courses.length > 0) {
            const LENGTH_COURSE_ARR = this.courses.length;
            let formattedText = [];

            for (let i = 0; i < LENGTH_COURSE_ARR; i++) {
                let title = "", score = "", lector = "";
                const currentCourse = this.courses[i];
                for (const currentCourseKey in currentCourse) {
                    switch (currentCourseKey) {
                        case "title":
                            title = currentCourse[currentCourseKey];
                            break;
                        case "score":
                            score = gradation[getGrade(currentCourse[currentCourseKey])];
                            break;
                        case "lector":
                            lector = currentCourse[currentCourseKey];
                    }

                }
                formattedText.push(`
                <div class="user__courses--course admin">
                    <p>Title: <b>${title}</b></p>
                    <p>Admin's score: <span class="${score}">${score}</span></p>
                    <p>Lector: <b>${lector}</b></p>
                </div>
                `);

            }

            return ` <div class="user__courses admin--info">
                                ${formattedText.join("")}
                     </div>`;
        } else {
            return "";
        }
    }
}

const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent"
};

const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "JackSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 20
            },
            {
                "title": "Java Enterprise",
                "mark": 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "AmalSmith",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "NoahSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 50
            }
        ]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "CharlieSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 75
            },
            {
                "title": "Java Enterprise",
                "mark": 23
            }]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "EmilySmith",
        role: "admin",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 10,
                "lector": "Leo Smith"
            },
            {
                "title": "Java Enterprise",
                "score": 50,
                "lector": "David Smith"
            },
            {
                "title": "QA",
                "score": 75,
                "lector": "Emilie Smith"
            }]
    },
    {
        name: "Leo Smith",
        age: 253,
        img: "LeoSmith",
        role: "lector",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 78,
                "studentsScore": 79
            },
            {
                "title": "Java Enterprise",
                "score": 85,
                "studentsScore": 85
            }
        ]
    }
];


const USER_TYPES = {
    student: user => new Student(user),
    admin: user => new Admin(user),
    lector: user => new Lector(user)
}


let renderedOutput = users
    .map(user => USER_TYPES[user.role] ? USER_TYPES[user.role](user) : new User(user))
    .map(user => user.render())
    .join("")


document.write(`<div class="users">
                        ${renderedOutput}
             </div>`);