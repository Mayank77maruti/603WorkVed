var formContainer = document.getElementById("form-container") // Container Where the form is located

function ajaxSuccess() {
    formContainer.innerHTML = `
    <div class="alert alert-success" role="alert">
        The Information Has Been Mailed To You<br>Thank you! 
    </div>
    <button type="button" class="btn btn-info" onclick="restartEmail()">Send To Another Email</button>

    `
}
function ajaxError() {
    formContainer.innerHTML = `
    <div class="alert alert-danger" role="alert">
        Uh-oh! We Are Having Trouble Reaching Our Systems <br>
        Please Try Again Later
    </div>
    <button type="button" class="btn btn-info" onclick="restartEmail()">Try Again</button>

    `
}
function restartEmail() {
    formContainer.innerHTML = `
<form action="" id="formEmail" onsubmit="return false">
        <div class="form-group">
          <label>
            Email:
          </label>
          <input type="email" class="form-control" placeholder="Enter Email">
        </div>
        <button class="btn btn-primary" onclick="submitEmail()">Send To Email</button>
       </form>
       `
}

function submitEmail() {

    var formData = new FormData(document.getElementById("formEmail"))

    // Implement EmailJS API Here to make this work
    url = ""
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url)
    xhr.send(formData)

    xhr.onload = function () {
        if (xhr.status == 200) {
            ajaxSuccess()
        }
        else {
            ajaxError()
        }
    }

    xhr.onerror = function () {
        ajaxError()
    }
}