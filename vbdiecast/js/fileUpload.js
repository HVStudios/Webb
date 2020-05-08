var input = document.getElementById("addCarImg"),
label = document.querySelector(".customUpload"),
labelText = document.getElementById("labelText"),
labelImg = document.getElementById("labelImg");

	input.onchange = (e) => {
        var fileName = input.files[0].name;

		if (fileName) {
            labelText.innerHTML = "1 image selected";
            labelImg.classList.remove("fa-upload");
            labelImg.classList.add("fa-check");
        } else {
            label.innerHTML = labelText;
        };
    };