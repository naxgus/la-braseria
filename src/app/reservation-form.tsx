"use client";

import { useActionState } from "react";
import { reserveTable, type ReservationState } from "./actions";

const initialState: ReservationState = { status: "idle", message: "" };

const fieldClass =
  "w-full border-b border-gold/30 bg-transparent px-1 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-gold focus:outline-none";
const labelClass =
  "mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/80";

export function ReservationForm() {
  const [state, formAction, pending] = useActionState(
    reserveTable,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-8 sm:gap-y-8"
    >
      <div className="col-span-2">
        <label htmlFor="name" className={labelClass}>
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={fieldClass}
        />
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="600 000 000"
          className={fieldClass}
        />
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label htmlFor="guests" className={labelClass}>
          Comensales
        </label>
        <select
          id="guests"
          name="guests"
          required
          defaultValue="2"
          className={`${fieldClass} [&>option]:bg-black`}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "persona" : "personas"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>
          Fecha
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className={`${fieldClass} [color-scheme:dark]`}
        />
      </div>

      <div>
        <label htmlFor="time" className={labelClass}>
          Hora
        </label>
        <select
          id="time"
          name="time"
          required
          defaultValue="21:00"
          className={`${fieldClass} [&>option]:bg-black`}
        >
          {["13:00", "13:30", "14:00", "14:30", "20:30", "21:00", "21:30", "22:00"].map(
            (t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ),
          )}
        </select>
      </div>

      <div className="col-span-2 flex flex-col items-center gap-5 pt-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full border border-gold px-10 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
        >
          {pending ? "Enviando..." : "Solicitar reserva"}
        </button>

        <p
          aria-live="polite"
          className={`min-h-6 text-center text-sm ${
            state.status === "error" ? "text-red-400" : "text-gold"
          }`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
