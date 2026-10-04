


import { useState, useEffect, useCallback } from "react";
import { peticionUsuarios } from "../../data/peticion.js";

export function useFetch() {
  const [user, SetUser] = useState([]);

  const cargarUsuarios = useCallback(async () => {
    const data = await peticionUsuarios();
    SetUser(data);
  }, []);

  useEffect(() => {
    let activo = true;

    async function recibir() {
      const data = await peticionUsuarios();
      if (activo) SetUser(data);
    }

    recibir();

    return () => {
      activo = false;
    };
  }, []);

  return { user, SetUser, cargarUsuarios };
}