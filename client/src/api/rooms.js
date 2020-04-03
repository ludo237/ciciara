"use strict";
import httpClient from "@/services/http";

const BASE_URL = process.env.VUE_APP_API_URL;

const getRooms = async () => await httpClient.get(`${BASE_URL}/rooms`);

const getRoom = async roomIdentifier => await httpClient.get(`${BASE_URL}/rooms/${roomIdentifier}`);

export default { getRooms, getRoom };
