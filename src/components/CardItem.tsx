import "./CardItem.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
export default function CardItem() {
  return (
    <div className="card">
      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock"
        alt="John"
        style={{ width: "100%", height: "100px" }}
      />
      <h6>new dream </h6>
      <div style={{ margin: "15px 0" }}>
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
      </div>
    </div>
  );
}
