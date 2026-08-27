import { business } from "@/data/business";

/**
 * Build a WhatsApp deep link with a pre-filled message.
 * The number is stored once in data/business and is never
 * exposed as plain text in the UI.
 */
export function waLink(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Hi OG Blanks! I'm interested in your products and would like to discuss a bulk/wholesale enquiry.",
  bulk:
    "Hi OG Blanks, I'd like to make a bulk/wholesale enquiry. Could you share pricing, available sizes and colours?",
  custom:
    "Hi OG Blanks, I'm interested in custom branding / white-label manufacturing for my brand. I'd like to know the process and minimum quantities.",
  wholesale:
    "Hi OG Blanks, I'm planning a wholesale/bulk order. I'd like to know more about your products and MOQ.",
};

export function productWaMessage(productName: string): string {
  return `Hi OG Blanks, I'm interested in the ${productName}. I'd like to know about bulk pricing, available colours and sizes.`;
}

export const waLinks = {
  general: waLink(waMessages.general),
  bulk: waLink(waMessages.bulk),
  custom: waLink(waMessages.custom),
  wholesale: waLink(waMessages.wholesale),
};
