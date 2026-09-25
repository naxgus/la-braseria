"use server";

export type ReservationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function reserveTable(
  _prevState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const date = String(formData.get("date") ?? "");
  const time = String(formData.get("time") ?? "");
  const guests = Number(formData.get("guests"));

  if (!name || !phone || !date || !time || !guests) {
    return { status: "error", message: "Por favor, completa todos los campos." };
  }

  const today = new Date().toISOString().slice(0, 10);
  if (date < today) {
    return { status: "error", message: "La fecha no puede estar en el pasado." };
  }

  // TODO: guardar la reserva (base de datos) o enviar email/WhatsApp al local.
  console.log("Nueva reserva:", { name, phone, date, time, guests });

  return {
    status: "success",
    message: `Gracias, ${name}. Hemos recibido tu solicitud y te confirmaremos por teléfono.`,
  };
}
