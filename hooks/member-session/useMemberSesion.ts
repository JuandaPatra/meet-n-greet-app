import { useReducer, useEffect } from "react";
import { reducer, SessionState } from "./reducer";

import { scheduleByMember } from "@/data/scheduleByMember";

export function useMemberSessionForm(memberId: number, existingSchedules: SessionState[] = []) {
  const [session, dispatch] = useReducer(reducer, []);

  useEffect(()=>{
    if(!memberId) return;

    if(existingSchedules.length > 0){
      return dispatch({ type: "INIT", payload: existingSchedules });
    }

    const schedules = scheduleByMember[memberId] || [];
    const mapped : SessionState[]= schedules.map(s =>({
        ...s,
        scheduleId:  Number(`${s.memberId}${s.session}${s.lane}`), // Assuming session is unique and can serve as an ID
        tickets : 0, // default tickets to 0
    }))

    dispatch({ type: "INIT", payload: mapped });
  }, [memberId])

  return { session, dispatch };

}
