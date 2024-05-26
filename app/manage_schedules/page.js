"use client";
import { useState, useEffect } from "react";
import { getAuthorized, getSchedules } from "../actions";
import { useRouter } from "next/navigation";

import ScheduleList from "../../components/ScheduleList";
import ScheduleForm from "../../components/ScheduleForm";
import TimeSlotList from "../../components/TimeSlotList";

import { createClient } from "@/utils/supabase/client";

export default function manage_schedules() {
  const supabase = createClient();
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  const [schedules, setSchedules] = useState([]);
  const [currentScheduleId, setCurrentScheduleId] = useState(null);
  const [currentScheduleToEditId, setCurrentScheduleToEditId] = useState(null);

  useEffect(() => {
    getAuthorized().then((auth) => {
      if (auth) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push("/");
      }
    });
    const getSchedules = async () => {
      const { data } = await supabase.from("Schedules").select();
      data.sort((a, b) => a.id - b.id);
      setSchedules(data);

      data.map(
        (schedule) => schedule.selected && setCurrentScheduleId(schedule.id)
      );
    };
    getSchedules();
  }, []);

  const addSchedule = async (schedule) => {
    setSchedules([...schedules, { ...schedule, id: Date.now() }]);
    setCurrentScheduleToEditId(Date.now());
    const { error } = await supabase
      .from("Schedules")
      .insert({ ...schedule, id: Date.now() });
  };

  const updateSchedule = async (id, updatedSchedule) => {
    setSchedules(
      schedules.map((schedule) =>
        schedule.id === id ? updatedSchedule : schedule
      )
    );

    const { error } = await supabase
      .from("Schedules")
      .update({
        timeslots: updatedSchedule.timeslots,
      })
      .eq("id", id);
  };

  const deleteSchedule = async (id) => {
    if (id == currentScheduleId) {
      alert("CANNOT DELETE CURRENT SCHEDULE");
    } else {
      const { error } = await supabase.from("Schedules").delete().eq("id", id);

      setSchedules(schedules.filter((schedule) => schedule.id !== id));
    }
  };

  const selectScheduleToEdit = (id) => {
    setCurrentScheduleToEditId(id);
  };

  const selectSchedule = async (id) => {
    setCurrentScheduleId(id);
    const { error } = await supabase
      .from("Schedules")
      .update({
        selected: false,
      })
      .neq("id", id);

    const { error2 } = await supabase
      .from("Schedules")
      .update({
        selected: true,
      })
      .eq("id", id);
  };

  if (!authorized) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Schedule Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ScheduleList
            schedules={schedules}
            deleteSchedule={deleteSchedule}
            selectSchedule={selectSchedule}
            currentScheduleId={currentScheduleId}
            currentScheduleToEditId={currentScheduleToEditId}
            selectScheduleToEdit={selectScheduleToEdit}
          />
          <ScheduleForm addSchedule={addSchedule} />
        </div>
        <div>
          {currentScheduleToEditId && (
            <TimeSlotList
              schedule={schedules.find(
                (schedule) => schedule.id === currentScheduleToEditId
              )}
              updateSchedule={updateSchedule}
            />
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <button
onClick={() => {
  deleteCookie("auth");
  router.push("/");
}}
>
log out!
</button> */
}
