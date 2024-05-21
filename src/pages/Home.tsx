import "./Home.css";
import PortraitIcon from "@mui/icons-material/Portrait";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardItem from "../components/CardItem";
import NewCardItem from "../components/NewCardItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const img1 =
  "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

const Home = () => {
  const cards = Array.from({ length: 10 });
  const buttonArr = ["Creative", "Neutral", "Modern", "Stylish", "Modest"];
  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Pick the template You{" "}
        <span style={{ color: "yellow", fontWeight: "bold" }}>Want</span>
      </h2>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {buttonArr?.map((item) => {
            return (
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  color: "black",
                  marginRight: "20px",
                  width: "100px",
                  borderRadius: "8px",
                  borderColor: "2px solid black",
                }}
              >
                {item}
              </Button>
            );
          })}
        </div>
        <div className="input-container">
          <input type="text" placeholder="Enter text" />

          <SearchIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "50%",
              color: "rgb(64, 145, 226)",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
      <div>
        <div className="cards-container">
          {cards.map((_, index) => (
            <div className="container234" key={index}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "60px",

                    paddingLeft: "20px",
                    paddingRight: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <PortraitIcon />
                    <h3>page</h3>
                  </div>
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="container">
                <div className="image-wrapper left">
                  <CardItem />
                </div>
                <div className="image-wrapper right">
                  <div>
                    <NewCardItem />
                  </div>
                </div>
                <button className="btnnn">Button 1</button>
                <button className="btn">Button 2</button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  height: "60px",
                  paddingLeft: "20px",
                }}
              >
                <h3>fiber</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
