function idCard() {
    //First name//

    let userFirstName = document.getElementById("firstName").value;

    //Last name//
    let userLastName = document.getElementById("lastName").value;

    //full name//
    document.getElementById("idFullName").innerHTML = `${userFirstName} ${userLastName}`;

    //Age//
    let userAge =
    document.getElementById("age").value;
    document.getElementById("idAge").innerHTML =`Age: ${userAge}`;

    //Phone number//
    let userPhone = document.getElementById("userPhone").value;
    document.getElementById("idPhone").innerHTML =`Phone Number: ${userPhone}`;

    //Address//
    let userAddress =
    document.getElementById("address").value;
    document.getElementById("idAddress").innerHTML = userAddress;

}
