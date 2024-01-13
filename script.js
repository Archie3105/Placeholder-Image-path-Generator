let select = document.querySelector("select");
let inputAll = document.querySelectorAll("input");
let myImg = document.querySelector("img");
let textArea = document.querySelector("textarea");
let downloadBtn = document.getElementsByClassName("blue-btn");

let urlObj = {};

const removeHashTag = (str) => {
    return str.replace("#", "")
}

const addPlus = (str) => {
    return str.split(" ").join("+");
}


const createImagePath = () => {
    urlObj.size = select.value;
    urlObj.text = inputAll[0].value
    urlObj.bgClr = removeHashTag(inputAll[1].value);
    urlObj.textClr = removeHashTag(inputAll[2].value);

    let urlPath = `https://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.textClr}?text=${urlObj.text}`
    myImg.src = urlPath;
    textArea.value = urlPath;


    textArea.focus();
    textArea.select();

    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
}

inputAll.forEach((currElem) => addEventListener("change", createImagePath));

select.addEventListener("change", createImagePath)


// **************************Download Button*************************

document.getElementById('downloadButton').addEventListener('click', function () {
    downloadPhoto(''); // Replace 'photo.jpg' with your actual photo URL or file path
  });
  
  function downloadPhoto(photoUrl) {
    const link = document.createElement('a');
    link.href = textArea.value;
    link.download = 'downloaded_photo.png'; // Specify the filename for the downloaded photo
  
    // Append the link to the body
    document.body.appendChild(link);
  
    // Trigger a click on the link
    link.click();
  
    // Remove the link from the body
    document.body.removeChild(link);
  }
