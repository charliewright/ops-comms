const fromOps1 = {
  color: "#FAFCFF",
  sender: "Meghna",
  time: "12:15 PM",
  date: "Dec 12",
  comm: "Email",
  content: "Hey Anastasia, Thanks for chatting with me today! As discussed, I have attached the model numbers of the appliances that need to be repaired for our VIP client, Bruno, at 139 Mavety St & 242 Pacific Avenue. [insert photos of model #'s here]. I have also sent the PO's & scheduled these in for tomorrow with an arrival window between 12pm-4pm."
};

const fromPro1 = {
  color: "#ECEBF8",
  sender: "Alex MWAW",
  time: "12:45 PM",
  date: "Dec 12",
  comm: "Email",
  content: "Thanks Meghna. We will circle back with a report and next steps after the diagnostic visits."
};

const fromPro2 = {
  color: "#ECEBF8",
  sender: "Steve Hache",
  time: "2:45 PM",
  date: "Dec 12",
  comm: "SMS",
  content: "Hey team, I just finished up at 139 Mavety St & 242 Pacific Avenue. The report is as follows: Dryer at 139 Mavety St require new shocks and springs, as well as a new door boot. The issue with the unit is that it is shaking very much when accelerating, drum seems to be okay, but door boot is warped, shocks are in bad shape, and springs are in bad shape. You will be looking at $688 + HST for labour and materials. Washing Machine at 242 Pacific Avenue - we inspected it but weren't able to fully test the machine because the wiring harness in the door (that tells the machine it's closed) is melted. This issue prevents the washing machine from going into the high-speed spin portion of the cycle and therefore it can also not drain the water inside the tub. We do not recommend a repair as the cost of repair would be similar to the cost of replacement."
};

export const proConversation = [fromOps1, fromPro1, fromPro2];