import React, { useState, useEffect } from "react";
import "./App.css"

export default function App() {

  const [optionManufacturedSince, setOptionManufacturedSince] = useState()
  const [optionColor, SetOptionColor] = useState()
  const [optionPrice, SetOptionPrice] = useState()


  const cars = [
    { model: "Gol G4", manufacturedSince: "2008", color: "Cinza", price: 20000 },
    { model: "Fiat Uno", manufacturedSince: "2008", color: "Vermelho", price: 17000 },
    { model: "Belina", manufacturedSince: "2008", color: "Preto", price: 20000 },
    { model: "Fiat 147", manufacturedSince: "2008", color: "Preto", price: 2000 },
    { model: "Polo", manufacturedSince: "2000", color: "Vermelho", price: 16000 },
    { model: "Palio", manufacturedSince: "2008", color: "Preto", price: 16000 },
    { model: "Fusca", manufacturedSince: "1978", color: "Preto", price: 2000 },
    { model: "Saveiro VW", manufacturedSince: "1978", color: "Cinza", price: 2000 },
    { model: "Golf VW", manufacturedSince: "2000", color: "Cinza", price: 16000 },
    { model: "Megane", manufacturedSince: "1978", color: "Vermelho", price: 17000 },
    { model: "Kombi", manufacturedSince: "2000", color: "Vermelho", price: 17000 },
    { model: "Kia Bongo", manufacturedSince: "2000", color: "Preto", price: 17000 },
    { model: "Meriva", manufacturedSince: "2000", color: "Vermelho", price: 20000 },
    { model: "Mobilete", manufacturedSince: "2000", color: "Vermelho", price: 2000 },
    { model: "Kawasaki", manufacturedSince: "1978", color: "Vermelho", price: 20000 },
    { model: "Hornet", manufacturedSince: "1978", color: "Preto", price: 17000 },
    { model: "Fiesta", manufacturedSince: "1978", color: "Cinza", price: 16000 },
    { model: "CB300", manufacturedSince: "1978", color: "Vermelho", price: 2000 },
    { model: "HB20", manufacturedSince: "2008", color: "Preto", price: 20000 },
    { model: "Ford KA", manufacturedSince: "2008", color: "Vermelho", price: 20000 },
    { model: "Biz", manufacturedSince: "2000", color: "Preto", price: 20000 },
    { model: "Kadett", manufacturedSince: "2000", color: "Cinza", price: 20000 },
    { model: "Caravan", manufacturedSince: "1978", color: "Preto", price: 20000 },
    { model: "Caravan", manufacturedSince: "1978", color: "Cinza", price: 20000 },
    { model: "Focus", manufacturedSince: "2008", color: "Preto", price: 17000 },
    { model: "BMW", manufacturedSince: "2008", color: "Cinza", price: 17000 },
    { model: "Hillux", manufacturedSince: "2000", color: "Cinza", price: 17000 },
    { model: "Opala", manufacturedSince: "1978", color: "Cinza", price: 17000 },


  ]

  useEffect(() => {
    setOptionManufacturedSince("Selecione...")
    SetOptionColor("Selecione...")
    SetOptionPrice("Selecione...")

  }, []);

  const filteredCarsManu2000ColorBlack = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Preto") {
      return car
    }
    return false
  })


  const filteredCarsManu1978ColorRed = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Vermelho") {
      return car
    }
    return false
  })


  const filteredCarsManu2008ColorBlack = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Preto") {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorRed = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Vermelho") {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorRed = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Vermelho") {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorBlack = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Preto") {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorGray = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Cinza") {
      return car
    }
    return false
  })

  const filteredCarsManu2008Price200 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008Price17 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008Price16 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008Price20 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.price === 2000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000Price200 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000Price17 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000Price16 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000Price20 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.price === 2000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978Price200 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978Price17 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978Price16 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978Price20 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.price === 2000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorGray = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Cinza") {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorBlackPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Preto" && car.price === 20000) {
      return car
    }
    return false
  })


  const filteredCarsManu2008ColorRedPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Vermelho" && car.price === 20000) {
      return car
    }
    return false
  })

  console.log(filteredCarsManu2008ColorRedPrice200)

  const filteredCarsManu2008ColorGrayPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Cinza" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorBlackPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Preto" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorRedPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Vermelho" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorGrayPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Cinza" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorBlackPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Preto" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorRedPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Vermelho" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorGrayPrice200 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Cinza" && car.price === 20000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorBlackPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Preto" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorRedPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Vermelho" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorGrayPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Cinza" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorBlackPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Preto" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorRedPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Vermelho" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorGrayPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Cinza" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorBlackPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Preto" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorRedPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Vermelho" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu1978ColorGrayPrice17 = cars.filter(car => {
    if (car.manufacturedSince === "1978" && car.color === "Cinza" && car.price === 17000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorBlackPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Preto" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorRedPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Vermelho" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2008ColorGrayPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2008" && car.color === "Cinza" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorBlackPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Preto" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorRedPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Vermelho" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorGrayPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Cinza" && car.price === 16000) {
      return car
    }
    return false
  })

  const filteredCarsManu2000ColorGrayPrice16 = cars.filter(car => {
    if (car.manufacturedSince === "2000" && car.color === "Cinza" && car.price === 16000) {
      return car
    }
    return false
  })






  const filteredCarsManu2008 = cars.filter(car => {
    if (car.manufacturedSince === "2008") {
      return car.manufacturedSince
    }
    return false
  })

  const filteredCarsManu2000 = cars.filter(car => {
    if (car.manufacturedSince === "2000") {
      return car.manufacturedSince
    }
    return false
  })

  const filteredCarsManu1978 = cars.filter(car => {
    if (car.manufacturedSince === "1978") {
      return car.manufacturedSince
    }
    return false
  })

  const filteredCarsColorBlack = cars.filter(car => {
    if (car.color === "Preto") {
      return car.color
    }
    return false
  })

  const filteredCarsColorRed = cars.filter(car => {
    if (car.color === "Vermelho") {
      return car.color
    }
    return false
  })

  const filteredCarsColorGray = cars.filter(car => {
    if (car.color === "Cinza") {
      return car.color
    }
    return false
  })

  const filteredCarsPrice200 = cars.filter(car => {
    if (car.price === 20000) {
      return car.price
    }
    return false
  })

  const filteredCarsPrice17 = cars.filter(car => {
    if (car.price === 17000) {
      return car.price
    }
    return false
  })

  const filteredCarsPrice16 = cars.filter(car => {
    if (car.price === 16000) {
      return car.price
    }
    return false
  })

  const filteredCarsPrice20 = cars.filter(car => {
    if (car.price === 2000) {
      return car.price
    }
    return false
  })

  const handleChangeManu = (event) => {
    setOptionManufacturedSince(event.target.value)

  }

  const handleChangeColor = (event) => {
    SetOptionColor(event.target.value)
  }

  const handleChangePrice = (event) => {
    SetOptionPrice(event.target.value)
  }

  const showCars = () => {
    if (optionManufacturedSince === "2008" && optionColor === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2008.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>

    } else if (optionManufacturedSince === "2008" && optionColor === "Vermelho" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2008ColorRed.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>

    } else if (optionManufacturedSince === "2008" && optionColor === "Preto" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2008ColorBlack.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }
    else if (optionManufacturedSince === "2000" && optionColor === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2000.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionManufacturedSince === "2000" && optionColor === "Vermelho" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2000ColorRed.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionManufacturedSince === "2000" && optionColor === "Preto" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2000ColorBlack.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }
    else if (optionManufacturedSince === "2000" && optionColor === "Cinza" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu2000ColorGray.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }
    else if (optionManufacturedSince === "1978" && optionColor === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu1978.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionManufacturedSince === "1978" && optionColor === "Preto" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu1978ColorBlack.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionManufacturedSince === "1978" && optionColor === "Vermelho" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu1978ColorRed.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionManufacturedSince === "1978" && optionColor === "Cinza" && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsManu1978ColorGray.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionColor === "Preto" && optionManufacturedSince === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsColorBlack.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionColor === "Vermelho" && optionManufacturedSince === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsColorRed.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionColor === "Cinza" && optionManufacturedSince === "Selecione..." && optionPrice === "Selecione...") {
      return <div>
        {filteredCarsColorGray.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "Selecione..." && optionColor === "Selecione...") {
      return <div>
        {filteredCarsPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "Selecione..." && optionColor === "Selecione...") {
      return <div>
        {filteredCarsPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "16000" && optionManufacturedSince === "Selecione..." && optionColor === "Selecione...") {
      return <div>
        {filteredCarsPrice16.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2008" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2008Price200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2008" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2008Price17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "16000" && optionManufacturedSince === "2008" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2008Price16.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "2000" && optionManufacturedSince === "2008" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2008Price20.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2000" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2000Price200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2000" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2000Price17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "16000" && optionManufacturedSince === "2000" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2000Price16.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "2000" && optionManufacturedSince === "2000" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu2000Price20.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "1978" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu1978Price200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "1978" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu1978Price17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "16000" && optionManufacturedSince === "1978" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu1978Price16.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "2000" && optionManufacturedSince === "1978" && optionColor === "Selecione...") {
      return <div>
        {filteredCarsManu1978Price20.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "2000" && optionManufacturedSince === "Selecione..." && optionColor === "Selecione...") {
      return <div>
        {filteredCarsPrice20.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2008" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu2008ColorBlackPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }
    else if (optionPrice === "20000" && optionManufacturedSince === "2008" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu2008ColorRedPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2008" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu2008ColorGrayPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2000" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu2000ColorBlackPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2000" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu2000ColorRedPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "2000" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu2000ColorGrayPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "1978" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu1978ColorBlackPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "1978" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu1978ColorRedPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "20000" && optionManufacturedSince === "1978" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu1978ColorGrayPrice200.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2008" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu2008ColorBlackPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }
    else if (optionPrice === "17000" && optionManufacturedSince === "2008" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu2008ColorRedPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2008" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu2008ColorGrayPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2000" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu2000ColorBlackPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2000" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu2000ColorRedPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "2000" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu2000ColorGrayPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "1978" && optionColor === "Preto") {
      return <div>
        {filteredCarsManu1978ColorBlackPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "1978" && optionColor === "Vermelho") {
      return <div>
        {filteredCarsManu1978ColorRedPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    } else if (optionPrice === "17000" && optionManufacturedSince === "1978" && optionColor === "Cinza") {
      return <div>
        {filteredCarsManu1978ColorGrayPrice17.map((car, index) => (
          <p key={index}>Modelo: {car.model}, Ano de fabricação: {car.manufacturedSince}, Cor: {car.color}, Preço: {car.price}</p>
        ))}
      </div>
    }



  }

  return (
    <>
      <div className="background">
        <div className="allThings">
          <div className="OptionsSelections">
            <label htmlFor="manufacturedSince">Ano de fabricação: </label>
            <select id="manufacturedSince" onChange={handleChangeManu} name="select">
              <option value="Selecione...">Selecine...</option>
              <option name="manufacturedSince" value="2008">2008</option>
              <option name="manufacturedSince" value="2000">2000</option>
              <option name="manufacturedSince" value="1978">1978</option>
            </select >
            <label htmlFor="color"> Cor: </label>
            <select id="color" name="select" onChange={handleChangeColor}>
              <option value="Selecione...">Selecine...</option>
              <option name="color" value="Preto">Preto</option>
              <option name="color" value="Vermelho">Vermelho</option>
              <option name="color" value="Cinza">Cinza</option>
            </select>
            <label htmlFor="price"> Valor: </label>
            <select id="price" onChange={handleChangePrice} name="select">
              <option value="Selecione...">Selecine...</option>
              <option name="price" value="20000">20000</option>
              <option name="price" value="17000">17000</option>
              <option name="price" value="16000">16000</option>
              <option name="price" value="2000">2000</option>
            </select>
          </div>
          <div className="result-css">

            <div>{showCars()}</div>
          </div>
        </div>
      </div>


    </>
  )
}

