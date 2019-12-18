import { clientConversation } from "./clientConversation";
import { proConversation } from "./proConversation";

import { clientConversation2 } from "./clientConversation2";
import { proConversation2 } from "./proConversation2";

export const ticketInfo = {
  0: { clientConversation, proConversation },
  1: { clientConversation, proConversation },
  3: { clientConversation, proConversation },
  4: { clientConversation, proConversation },
  2: {
    clientConversation: clientConversation2,
    proConversation: proConversation2
  }
};
