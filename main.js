const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const form = document.querySelector("form")
const fieldsets = document.querySelectorAll("fieldset")
const iconError = document.createElement("img")

form.addEventListener("submit", event => {
    event.preventDefault()

    fieldsets.forEach((fieldset, index) => {
        let error = document.createElement("span")

        /* First name */
        if (firstName.value === "" && index === 0) {
            error.innerHTML = "First Name cannot be empty"
            addErrors(firstName, error, iconError)
        }
        else if (firstName.value === true) {
            hideErrors(firstName, error, iconError)
        }
        
        /* Last name */
        if (lastName.value === "" && index === 1) {
            error.innerHTML = "Last Name cannot be empty"
            addErrors(lastName, error, iconError)
        }
        else if (lastName.value === true) {
            hideErrors(lastName, error, iconError)
        }
        
        /* Email */
        if (email.value === "" && index === 2) {
            error.innerHTML = "Email cannot be empty"
            addErrors(email, error, iconError)
        }
        else if (email.value === true) {
            error.innerHTML = "Looks like this is not an email"
            hideErrors(email, error, iconError)
        }
        
        /* Password */
        if (password.value === "" && index === 3) {
            error.innerHTML = "Password cannot be empty"
            addErrors(password, error, iconError)
        }
        else if (password.value === true) {
            hideErrors(password, error, iconError)
        }

        function addErrors(input, error, icon) {
            input.classList.add("error")
            error.classList.add("error")
            icon.src = "./images/icon-error.svg"
            fieldset.appendChild(error)
            fieldset.appendChild(icon)
        }

        function hideErrors(input, error) {
            input.classList.remove("error")
            error.classList.remove("error")
            error.innerHTML = ""
        }
    })
})