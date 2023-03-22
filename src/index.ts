interface BaseMessage {
    message: string;
    created_at: Date;
};

export interface EmailMessage extends BaseMessage {
    email: string;
};

export interface SmsMessage extends BaseMessage  {
    phone: string;
}