import axios from "axios";

import { BACKEND_API_URL } from "@/constants/env";

const instance = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
