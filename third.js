
const inputField = (nameOfCountry) => {



    region(nameOfCountry)
}






const region = (valueOFInput) => {

    const url = `https://restcountries.com/v3.1/region/${valueOFInput}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTheValue(data))
}


const displayTheValue = result => {

    const mainSection = document.getElementById('main-section');

    mainSection.innerHTML = "";

    result.forEach(fol => {
        const viewDisplay = document.createElement('div');

        viewDisplay.innerHTML = `


        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${fol.coatOfArms.png}" class="img-fluid rounded-start" alt="...">
        </div>
       <div class="col-md-8">
       <div class="card-body">
       <h4>name:${fol.name.common}</h4>
       <h4>capital name:${fol.capital[0]}</h4>
       <h4>cca2 name:${fol.cca2}</h4>
      </div>
    </div>
  </div>
</div>
    

    
    `


        mainSection.appendChild(viewDisplay)
        console.log(fol)
    });
}














    // < img class="img-fluid card-img-top" src = "${fol.coatOfArms.png}" alt = "" >

    //     <div class="card-body">

    //         <h4>name:${fol.name.common}</h4>
    //         <h4>capital name:${fol.capital[0]}</h4>
    //         <h4>cca2 name:${fol.cca2}</h4>

    //     </div>


