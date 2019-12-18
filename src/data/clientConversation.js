const fromOps1 = {
  color: "",
  sender: "Meghna",
  time: "12:00 PM",
  date: "Dec 12",
  comm: "IN APP",
  content:
    "Hey Bruno, this is Meghna. thanks for reaching out regarding your dryer and washing machine diagnostic at 139 Mavety St & 242 Pacific Avenue. We will be happy to take care of these for you! Can you confirm the make and model number of both appliances? Can you also provide your & your tenants availability for scheduling these in?"
};

const fromClient1 = {
  color: "lightblue",
  sender: "Bruno Soares",
  time: "12:05 PM",
  date: "Dec 12",
  comm: "IN APP",
  content:
    "Hey Meghna, thanks for your prompt response. My dryer is experiencing issues during the spin cycle (not functional). I'm available anytime tomorrow. As for the washing machine, it just doesn't turn on. My tenant is fairly flexible in terms of arranging a Pro to visit and diagnose issues & they can be reached at [insert fake # here]. I have also sent you a text with photos on the model numbers of my appliances."
};

const fromClient2 = {
  color: "lightblue",
  sender: "Bruno Soares",
  time: "12:07 PM",
  date: "Dec 12",
  comm: "SMS",
  content: "[appliance 1 model number] [appliance 2 model number]"
};

const fromOps2 = {
  color: "",
  sender: "Meghna",
  time: "1:00 PM",
  date: "Dec 12",
  comm: "IN APP",
  content:
    "Hey Bruno, thanks for sending over your model number information! Good news, we were able to arrange this for yourself & your tenant for tomorrow with an arrival window between 12pm-4pm. Since you have Setter Protection Plan for both your properties, you will be looking at an initial diagnostic fee of $50 + HST each."
};

const fromClient3 = {
  color: "lightblue",
  sender: "Bruno Soares",
  time: "1:15 PM",
  date: "Dec 12",
  comm: "IN APP",
  content: "Thanks Meghna. I have approved the quotes. Let me know how it goes!"
};

const fromOps3 = {
  color: "",
  sender: "Meghna",
  time: "3:00 PM",
  date: "Dec 12",
  comm: "IN APP",
  content:
    "Hey Bruno, we got a full report back from our Pro and we're going to take a look and get you some next steps to get your appliances back up and running. They look like fairly extensive repairs so we'll also take a look at replacement options in case you prefer to go that route. In either case, since you're covered under the Setter Protection Plan - that should makes things much easier for you! What's the best time to chat tomorrow?"
};

export const clientConversation = [
  fromOps1,
  fromClient1,
  fromClient2,
  fromOps2,
  fromClient3,
  fromOps3
];
