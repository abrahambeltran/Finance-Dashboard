import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async()=>{
    app.listen(PORT, () => console.log(`SERVER PORT: ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`));