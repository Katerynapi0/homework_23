'use strict'
/*Вам потрібно зробити конструктор сутності "Студент".

Студент має ім'я, прізвище, рік народження — це властивості. 
Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, 
коли викликаємо .absent() - записується false. 
Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. 
Масив – це властивість, present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
якщо одне з цих значень менше , то - "Добре, але можна краще ", 
якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.*/

class Student{
    constructor(firstName, lastName, birthday){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.marks = [];
        this.attends = new Array(25);
        this.totalLessons = 0;
        this.totalPresents = 0;
    }
    getAgeStudent(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthday;
    }

    addMarks(mark){
        this.marks.push(mark)
    }

    present(){
        const index = this.totalLessons;
        if(index < 25){
            this.attends[index] = true;
            this.totalLessons++;
            this.totalPresents++;
        }else{
            console.log(`Не можна відмітити присутність, всі занняття заповненні.`)
        }
    }

    absent(){
        const index = this.totalLessons;
        if(index < 25){
            this.attends[index] = false;
            this.totalLessons++;
        }else{
            console.log(`Не можна відмітити присутність, всі заннятя заповненні.`)
        }
    }

    summary(){
        const avarageMarks = this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length;
        const perAttends = this.totalPresents / this.totalLessons;

        if(avarageMarks > 90 && perAttends > 0.9){
            console.log(`Молодець!`)
        }else if(avarageMarks > 90 || perAttends > 0.9){
            console.log(`Добре, але можна краще.`)
        }else{
            console.log(`Редиска!`)
        }
    }
}


const student1 = new Student('Христина','Іванчук', 1995);
const student2 = new Student('Демян\'ян','Їжакевич', 1993);

console.log(`${student1.firstName} ${student1.lastName}, вік: ${student1.getAgeStudent()}.`);
student1.addMarks([95, 85, 90, 92, 88]);

student1.present();
student1.present();
student1.absent();

student1.summary(); 

console.log(`${student2.firstName} ${student2.lastName}, вік: ${student2.getAgeStudent()}`);
student2.addMarks([80, 75, 85, 78, 82]);

student2.present();
student2.present();
student2.present();
student2.summary(); 