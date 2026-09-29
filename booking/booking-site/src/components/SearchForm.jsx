import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "../App.css";
import { getDestinations } from "../api/destination";
import { fetchHotels } from "../store/hotelsSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    getDestinations().then((data) => {
      const unique = Array.from(
        new Map(data.map((d) => [d.label, d])).values(),
      ).sort((a, b) => a.label.localeCompare(b.label));

      setDestinations(unique);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setDateError("Please select both check-in and check-out dates");
      return;
    }
    setDateError("");

    dispatch(fetchHotels(destination ? { city: destination } : {}));
    navigate("/hotels");
  };

  return (
    <section className="hero">
      <div className="container">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-field destination-field">
            <FormControl variant="standard" fullWidth size="small">
              <InputLabel>Destination</InputLabel>
              <Select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select destination</em>
                </MenuItem>
                {destinations.map((d) => (
                  <MenuItem key={d.id} value={d.label}>
                    {d.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div
            className={`form-field${dateError && !checkIn ? " field-error" : ""}`}
          >
            <label>Check in *</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => {
                setCheckIn(date);
                if (checkOut && date && checkOut < date) {
                  setCheckOut(null);
                }
                if (date && checkOut) setDateError("");
              }}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={new Date()}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div
            className={`form-field${dateError && !checkOut ? " field-error" : ""}`}
          >
            <label>Check out *</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => {
                setCheckOut(date);
                if (date && checkIn) setDateError("");
              }}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              minDate={checkIn || new Date()}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="form-field small-field">
            <TextField
              variant="standard"
              label="Adults"
              type="number"
              size="small"
              fullWidth
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              slotProps={{ htmlInput: { min: 1 } }}
            />
          </div>

          <div className="form-field small-field">
            <TextField
              variant="standard"
              label="Children"
              type="number"
              size="small"
              fullWidth
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              slotProps={{ htmlInput: { min: 0 } }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            disableElevation
            className="search-button"
            sx={{
              backgroundColor: "#ff9f1c",
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#ed8d0c" },
            }}
          >
            Search
          </Button>

          {dateError && <p className="form-error-message">{dateError}</p>}
        </form>

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">Discover your next destination</span>

            <h1>
              Travel more.
              <br />
              <span>Discover more.</span>
            </h1>

            <p>
              Find unique places to stay and unforgettable destinations. Choose
              your dates, select your destination and start your next adventure.
            </p>

            <a href="#destinations" className="hero-button">
              Explore destinations
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel destination"
            />

            <div className="image-card">
              <span className="rating">★ 4.9</span>

              <div>
                <strong>Summer Escape</strong>
                <p>Best destinations for your vacation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
