const passToCoordination = {
    type: "Hand off",
    label: "Pass to Coordination",
    action: () => console.log("pass to coordination")
}

const passToExecution = {
    type: "Hand off",
    label: "Pass to Execution",
    action: () => console.log("pass to Execution")
}

const autoquoteHomeConsult = {
    type: "Autoquote",
    label: "Home Consultation",
    action: () => console.log("autoquote home consultation")
}

export const hotkeyActions = [passToCoordination, passToExecution, autoquoteHomeConsult]