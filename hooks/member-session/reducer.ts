export type Action =
  | { type: "INCREMENT"; id: number }
  | { type: "DECREMENT"; id: number }
  | { type: "SET"; id: number; value: number }
  | { type: "INIT"; payload: SessionState[] }

  export type SessionState = {
  scheduleId: number
  session: number
  time: string
  lane: number
  tickets: number
  memberId: number
}

export function reducer(state: SessionState[], action: Action) {
  switch (action.type) {
    case "INIT":
      return action.payload

    case "INCREMENT":
      return state.map(s =>
        s.scheduleId === action.id
          ? { ...s, tickets: s.tickets + 1 }
          : s
      )

    case "DECREMENT":
      return state.map(s =>
        s.scheduleId === action.id
          ? { ...s, tickets: Math.max(0, s.tickets - 1) }
          : s
      )

    case "SET":
      return state.map(s =>
        s.scheduleId === action.id
          ? { ...s, tickets: Math.max(0, action.value) }
          : s
      )

    default:
      return state
  }
}
