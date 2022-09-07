export class PageForecast {
  weather: string;
  temp: number;
  imgSrc: string;
  location: string;
  time: number;
  constructor(weather: string, temp: number, location: string) {
    this.weather = weather;
    this.temp = temp;
    this.imgSrc = "./assets/images/" + weather + ".png";
    this.location = location;
    this.time = 0;
  }
  displayMainForecast(parent: HTMLElement): void {
    let pageForecastContainer = document.createElement("section");
    pageForecastContainer.id = "page-forecast-container";
    parent.appendChild(pageForecastContainer);

    let forecastLocationTitle = document.createElement("h1");
    forecastLocationTitle.id = "forecast-location-title";
    forecastLocationTitle.textContent = this.location;
    pageForecastContainer.appendChild(forecastLocationTitle);

    let forecastDate = document.createElement("span");
    forecastDate.id = "forecast-date";
    this.time === 0
      ? (forecastDate.textContent = "right now.")
      : (forecastDate.textContent = "in " + this.time + " hours.");
    pageForecastContainer.appendChild(forecastDate);

    let forecastMainImage = document.createElement("div");
    forecastMainImage.id = "forecast-main-image";
    forecastMainImage.style.backgroundImage = `url(${this.imgSrc})`;
    pageForecastContainer.appendChild(forecastMainImage);

    let forecastDescription = document.createElement("span");
    forecastDescription.id = "forecast-description";
    forecastDescription.textContent = this.weather;
    pageForecastContainer.appendChild(forecastDescription);

    let forecastMainTemp = document.createElement("h4");
    forecastMainTemp.id = "forecast-main-temp";
    forecastMainTemp.textContent = (this.temp + "Cº") as string;
    pageForecastContainer.appendChild(forecastMainTemp);
  }
  displayReducedForecast(parent: HTMLElement, cachedForecastData: any) {
    //Elements created once
    let reducedForecastContainer = document.createElement("section");
    reducedForecastContainer.id = "reduced-forecast-container";
    parent.appendChild(reducedForecastContainer);

    let leftButton = document.createElement("button");
    leftButton.id = "forecast-left-button";
    leftButton.className='forecast-button';
    leftButton.addEventListener("click", goLeft);
    leftButton.textContent='<';
    reducedForecastContainer.appendChild(leftButton);

    let reducedForecastCardsContainer = document.createElement("section") as any;
    reducedForecastCardsContainer.id = "reduced-forecast-container";
    reducedForecastContainer.appendChild(reducedForecastCardsContainer);

    let rightButton = document.createElement("button");
    rightButton.id = "forecast-right-button";
    rightButton.className='forecast-button';
    rightButton.textContent='>';
    rightButton.addEventListener("click", goRight);
    reducedForecastContainer.appendChild(rightButton);

    //Elements created in iterations
    let data = cachedForecastData.dataseries;
    let firstPosition = 2;

    function displayReducedCards(){
      for (let i=firstPosition; i<=firstPosition+2; i++){
        let newForecast = new PageForecast(data[i].weather, data[i].temp2m, 'Itajai');
        console.log(i);
        let forecastReducedCard = document.createElement("section");
        forecastReducedCard.id = "page-forecast-container";
        reducedForecastCardsContainer.appendChild(forecastReducedCard);
  
        let forecastDate = document.createElement("span") as any;
        forecastDate.id = "forecast-date";
        forecastDate.textContent = "in " + (i-1) + " hours.";
        forecastReducedCard.appendChild(forecastDate);
  
        let forecastMainImage = document.createElement("div");
        forecastMainImage.id = "forecast-main-image";
        forecastMainImage.style.backgroundImage = `url(${newForecast.imgSrc})`;
        forecastReducedCard.appendChild(forecastMainImage);
  
        let forecastReducedTemp = document.createElement("h4");
        forecastReducedTemp.id = "forecast-reduced-temp";
        forecastReducedTemp.textContent = (newForecast.temp + "Cº") as string;
        forecastReducedCard.appendChild(forecastReducedTemp);
      }
    }
    displayReducedCards();

    //Function goRight
    //add one to the first position, remove element in parent, call displayReducedCards

    function goRight(){
      while (reducedForecastCardsContainer.firstChild){
        reducedForecastCardsContainer.removeChild(reducedForecastCardsContainer.lastChild);
      }
      firstPosition++;
      displayReducedCards();
    }
    function goLeft(){
      if(firstPosition > 2){
        while (reducedForecastCardsContainer.firstChild){
          reducedForecastCardsContainer.removeChild(reducedForecastCardsContainer.lastChild);
        }
        firstPosition--;
        displayReducedCards();
      }
     
    }
  }
}
