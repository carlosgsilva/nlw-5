import { http } from "../src/http";
import "./websocket/client"

http.listen(3333, () => console.log("Server is running on port 3333"));