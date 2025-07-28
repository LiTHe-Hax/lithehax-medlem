/* import axios from "axios";
import { dev } from "$app/environment";

const DEVELOPMENT_URL = "http://localhost:8000/";
const PRODUCTION_URL = "https://lithehax-medlem-9abc9f434ec7.herokuapp.com/";

const instance = axios.create({
  baseURL: dev ? DEVELOPMENT_URL : PRODUCTION_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

type Method = "get" | "post" | "put" | "patch" | "delete" | "head" | "options";
type Json = [any] | { [key: string]: any };

function request(url: string, method: Method, data?: Json) {
  return instance.request({
    url: url,
    method: method,
    data: data,
    responseType: "json",
  });
}

export default request; */
