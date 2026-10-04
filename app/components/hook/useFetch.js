


import { useState, useEffect, useCallback } from "react";
import { peticionUsuarios } from "../../data/peticion.js";

export function useFetch() {
  const [user, SetUser] = useState([]);

  const cargarUsuarios = useCallback(async () => {
    const data = await peticionUsuarios();
    SetUser(data);
  }, []);

  useEffect(() => {
    cargarUsuarios();
  }, [cargarUsuarios]);

  return { user, SetUser, cargarUsuarios };
}