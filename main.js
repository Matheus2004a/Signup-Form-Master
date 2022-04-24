const form = document.querySelector("form")
const fields = document.querySelectorAll("[required]")

function validateField(field, fieldset, iconError) {
    function verifyErrors() {
        let foundError = false

        for (const error in field.validity) {
            // Verifica se tem erro ou não é válido o campo
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError
    }

    function customMessage(typeError) {
        const messages = {
            firstName: {
                valueMissing: "First Name cannot be empty",
            },
            lastName: {
                valueMissing: "Last Name cannot be empty",
            },
            email: {
                valueMissing: "Email cannot be empty",
                typeMismatch: "Looks like this is not an email"
            },
            password: {
                valueMissing: "Password cannot be empty"
            }
        }
        return messages[field.name][typeError]
    }

    function setCustomMessage(message) {
        const spanError = fieldset.querySelector("span.error")

        if (message) {
            spanError.innerHTML = message
            field.classList.add("error")
            iconError.style.display = "block"
        } else {
            spanError.innerHTML = ""
            field.classList.remove("error")
            iconError.style.display = "none"
        }
        return message
    }

    return () => {
        const error = verifyErrors()

        if (error) {
            const message = customMessage(error)

            if (error == "typeMismatch") {
                field.value = "email@example.com"
                field.style.color = "hsl(0, 100%, 74%)"
            }
            setCustomMessage(message)
        } else {
            setCustomMessage()
        }
    }
}

function customValidation(event) {
    event.preventDefault()
    // Store each input
    const field = event.target
    // Store each fieldset
    const fieldset = event.path[1]
    // Store each error icon
    const iconError = event.path[1].children[2]
    const validation = validateField(field, fieldset, iconError)

    validation()
}

fields.forEach(field => {
    field.addEventListener("invalid", customValidation)
    field.addEventListener("blur", customValidation)
})