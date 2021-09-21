// Add list function
function addList() {
    
    // Make a new li
    var tag = document.createElement("li");

    // Input text into the new li
    var text = document.querySelector("#text").value;
    // tag.appendChild(document.createTextNode(text));

    tag.innerHTML = text

    // Append li to ul
    document.getElementById("new").appendChild(tag);

    // Clear the input field
    document.querySelector("#text").value = null;
}
    