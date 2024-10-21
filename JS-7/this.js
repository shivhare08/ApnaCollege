//when we want to acces s the properties of the method

const student={     //student is the (THIS)
    name :"shashank",
    math:92,
    science:89,
    english:56,
    getAvg(){
        console.log(this);
        //student.math or this.math == student == this
        let avg = (this.math + this.science + this.english)/3;
        console.log(avg);
    }

}


function getAkvg(){     //here ny default window obj will work as this
    console.log(this);
}



getAkvg()

// console.log(student.getAvg());
