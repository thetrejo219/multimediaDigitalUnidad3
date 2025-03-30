"use server";

export async function obtenerUsuario() {
  try {
    // Se envían las cookies para incluir el JWT en la petición.
    const res = await fetch(`${process.env.API_URL}/api/auth/user`, {
      credentials: "include",
    });
    if (!res.ok) throw new Error("Error al obtener el usuario");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
