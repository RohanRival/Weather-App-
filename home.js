import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";


function Home() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
  const [convertedTemperature, setConvertedTemperature] = useState(null);
  const [theme, setTheme] = useState("light"); // "light" or "dark"
  const [weatherIcon, setWeatherIcon] = useState("");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // UseEffect to change theme class on the root element based on the theme state
  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
        setConvertedTemperature(null);
        setWeatherIcon(res.data.weather[0].icon); // Set the weather icon URL from the API response
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  const convertToCelsius = (tempF) => {
    return Math.round((tempF - 32) * 5 / 9);
  };

  const convertToFahrenheit = (tempC) => {
    return Math.round((tempC * 9 / 5) + 32);
  };

  const handleConvertTemperature = () => {
    if (temperatureUnit === "Celsius") {
      setConvertedTemperature(convertToFahrenheit(data?.main?.temp));
      setTemperatureUnit("Fahrenheit");
    } else {
      setConvertedTemperature(data?.main?.temp);
      setTemperatureUnit("Celsius");
    }
  };
  const LogoutButton = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Perform any logout actions (e.g., clear session, tokens, etc.)
      // Example: localStorage.removeItem('authToken');
  
      // Redirect to the default page (e.g., homepage)
      navigate('/Thank');
     
    };
    return (
      <button
        className={`btn btn-primary ${theme === "dark" ? "btn-light" : ""} fixed-button`}
        onClick={handleLogout}
        id="fixed-button" // Optionally, you can set the id directly in the JSX
      >
        Logout
      </button>
    );
  };
   
  return (
    <div className={`col-md-12 fullheight ${theme === "dark" ? "bg-dark" : ""} `}>
      <div className="wetherBg">
        <h1 className={`heading ${theme === "dark" ? "text-white" : ""}`}>Weather Forecast</h1>


        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
            placeholder="Enter your city"
          />
          <button
            className={`btn btn-primary ${theme === "dark" ? "btn-light" : ""}`}
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
          {Object.keys(data).length > 0 && (
            <button
              className={`btn btn-primary ${theme === "dark" ? "btn-light" : ""}`}
              type="button"
              onClick={handleConvertTemperature}
            >
              Convert to {temperatureUnit === "Celsius" ? "Fahrenheit" : "Celsius"}
            </button>
          )}
          <button
            className={`btn btn-primary ${theme === "dark" ? "btn-light" : ""}`}
            type="button"
            onClick={toggleTheme}
          >
             Theme
          </button>
        </div>
      </div>

      {Object.keys(data).length > 0 && (
        <div className={`col-md-12 text-center ${theme === "dark" ? "bg-dark text-white" : ""}`}>
          <div className={`shadow rounded wetherResultBox ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            
            {weatherIcon && (
              <img
                className="weatherIcon smallIcon mt-5"
                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                alt="Weather Icon"
                />
            )}

            <h5 className={`weatherCity ${theme === "dark" ? "text-white" : ""}`}>
              {data?.name}
            </h5>
            <h6 className={`weatherTemp ${theme === "dark" ? "text-white" : ""}`}>
              {convertedTemperature !== null ? convertedTemperature : data?.main?.temp.toFixed(2)}°{temperatureUnit}
            </h6>
          </div>
        </div>      
      )}
      <LogoutButton/>
      <Footer/>
    </div>
  );
}

export default Home;