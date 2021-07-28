

fetch("https://api.github.com/users/djadweb/repos").then(
    (result) => {
        let resultJson = result.json();
        console.log(resultJson);
        return resultJson;
    }).then(
        (resultJson) => {
            console.log("Total Number of repos : " + resultJson.length);
            return resultJson;
        }
    ).then(
        (resultJson) => {
            console.log("First Repo is : " + resultJson[0].name);
            return resultJson;
        }
    ).then(
        (resultJson) => {
            for(let i = 0; i < resultJson.length - 1; i++) {
                let divElement = document.createElement("div");
                let textElement = document.createTextNode(resultJson[i].name);
                divElement.appendChild(textElement);
                divElement.setAttribute("id", "repo");
                document.body.appendChild(divElement);
            }
        }
    )