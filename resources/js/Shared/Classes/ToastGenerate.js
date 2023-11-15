import { ToastsMessages } from "../Constants/toast-messages";

export class ToastGenerate{

    constructor(){}
  
    static gen(typeMessage){
      const message = ToastsMessages.find(m => m.title == typeMessage);
      return { severity: message?.severity, summary: message?.summary, detail: message?.detail, life: 3000 };
    }
    
  }