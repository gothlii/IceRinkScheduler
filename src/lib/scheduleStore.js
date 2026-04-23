import { createClient } from "@supabase/supabase-js";
import { DEFAULT_WEEKS } from "../data/defaultSchedule";

function normalizeSupabaseWeek(week) {
  const dayData = week.data || week.days || {};

  return {
    id: String(week.id ?? week.label),
    label: week.label ?? "Vecka",
    subtitle: week.subtitle ?? week.range ?? "",
    sort_order: week.sort_order ?? 0,
    days: dayData,
  };
}

function createSupabaseClient() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
}

export async function loadSchedule() {
  const client = createSupabaseClient();

  if (!client) {
    return {
      source: "local",
      weeks: DEFAULT_WEEKS,
    };
  }

  const table = import.meta.env.VITE_SUPABASE_TABLE || "weeks";
  const { data, error } = await client.from(table).select("*").order("sort_order", { ascending: true });

  if (error) {
    return {
      source: "local",
      weeks: DEFAULT_WEEKS,
      error,
    };
  }

  if (!data || data.length === 0) {
    return {
      source: "local",
      weeks: DEFAULT_WEEKS,
    };
  }

  return {
    source: "supabase",
    weeks: data.map(normalizeSupabaseWeek),
  };
}
