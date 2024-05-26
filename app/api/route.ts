import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/client";

export async function GET() {
  const supabase = createClient();
  const { data: notes } = await supabase
    .from("Schedules")
    .select()
    .eq("selected", true);

  // return <pre>{JSON.stringify(notes, null, 2)}</pre>

  return NextResponse.json({
    SelectedSchedule: notes,
  });
}
