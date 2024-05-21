import "./CardItem.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
export default function NewCardItem() {
  return (
    <div className="cardNew">
      <img
        src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
        alt="John"
        style={{ width: "100%", height: "65px" }}
      />
      <h6 style={{ padding: "5px", margin: 0 }}>show New</h6>
      <div style={{ margin: "15px 0" }}>
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
      </div>
    </div>
  );
}
