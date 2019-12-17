const fromClient = {
    color: "",
    sender: "Client",
    time: "12:00 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Meghna, appreciate blah blah blah"
  };
  
  const fromOps = {
    color: "lightblue",
    sender: "Meghna",
    time: "12:00 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Client, appreciate blah blah blah"
  };
  
  export const clientConversation = [fromClient, fromOps, fromClient, fromOps];