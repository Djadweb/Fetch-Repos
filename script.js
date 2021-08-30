
    async function fetchData() {
        try {
            const result = await fetch("https://api.github.com/users/djadweb/repos");      
            const data = await result.json();            
            return data;
        } catch (error) {
            console.log(error)
        }        
      }
      
      ( async() => {
        const data = await fetchData();
        for(let i = 0; i < data.length - 1; i++) {
            let divElement = document.createElement("div");
            let textElement = document.createTextNode(data[i].name);
            divElement.appendChild(textElement);
            divElement.setAttribute("id", "repo");
            document.body.appendChild(divElement);
        }
      })()
      