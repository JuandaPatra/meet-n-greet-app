import { schedules, Schedule } from "./schedule"

export type ScheduleByMember = Record<number, Schedule[]>

function buildScheduleByMember(data: Schedule[]): ScheduleByMember {
  const map: ScheduleByMember = {}

  data.forEach((item) => {
    if (!map[item.memberId]) {
      map[item.memberId] = []
    }

    map[item.memberId].push(item)
  })

  // optional: sort session biar rapi di UI
  Object.keys(map).forEach((key) => {
    map[Number(key)].sort((a, b) => a.session - b.session)
  })

  return map
}

export const scheduleByMember = buildScheduleByMember(schedules)