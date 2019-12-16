const fromClient = {
    color: "",
    sender: "Client",
    time: "12:00 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Divy, appreciate blah blah blah"
  };
  
  const fromOps = {
    color: "lightblue",
    sender: "Divy",
    time: "12:00 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Client, appreciate blah blah blah"
  };
  
  export const clientConversation = [fromClient, fromOps, fromClient, fromOps];