let num = document.querySelectorAll(".b");
let Submit = document.getElementById("bb");
let box_1 = document.getElementById("one");
let box_2 = document.getElementById("two");
let s = document.getElementsByTagName("span");
// console.log(num);
// console.log(Submit);
// console.log(box_1);
// console.log(box_2);
// console.log(s);

num.forEach(function (ele) {

    ele.onclick = function () {
        //remove active class from all elements
        num.forEach(function (e) {
            e.classList.remove("active");

        })
        this.classList.add("active");

        // console.log(this.innerHTML);
        s[0].innerHTML = this.innerHTML;

    }

})

Submit.onclick = function () {
    Submit.style.backgroundColor = "white";
    Submit.style.color = "#fc7614";
    box_2.classList.remove("hidden");
    // s.innerHTML = this.innerHTML;

}

