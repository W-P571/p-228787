
export type NotificationChannel = "sms" | "whatsapp";

export interface OrderNotification {
  orderId: string;
  customerName: string;
  phoneNumber: string;
  totalAmount: number;
  trackingId: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  deliveryAddress?: string;
  deliveryDate?: string;
}

/**
 * Generate a unique tracking ID for an order
 * Format: MBEGU-YYYYMMDD-XXXX (where XXXX is a random number)
 */
export const generateTrackingId = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
  
  return `MBEGU-${year}${month}${day}-${random}`;
};

/**
 * Send order notification via SMS
 * This is a mock implementation - in production, this would integrate with an SMS API
 */
export const sendSmsNotification = async (notification: OrderNotification): Promise<boolean> => {
  console.log(`[SMS Notification] Sending to ${notification.phoneNumber}`);
  
  // In a real implementation, this would call an SMS API
  // For now, we'll simulate a successful response
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[SMS Notification] Successfully sent to ${notification.phoneNumber}`);
      console.log(`[SMS Notification] Content: Order #${notification.orderId} confirmed. Your tracking ID is ${notification.trackingId}`);
      resolve(true);
    }, 1000);
  });
};

/**
 * Send order notification via WhatsApp
 * This is a mock implementation - in production, this would integrate with the WhatsApp Business API
 */
export const sendWhatsAppNotification = async (notification: OrderNotification): Promise<boolean> => {
  console.log(`[WhatsApp Notification] Sending to ${notification.phoneNumber}`);
  
  // In a real implementation, this would call the WhatsApp Business API
  // For now, we'll simulate a successful response
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[WhatsApp Notification] Successfully sent to ${notification.phoneNumber}`);
      console.log(`[WhatsApp Notification] Content: Hello ${notification.customerName}, your order #${notification.orderId} has been confirmed. Your tracking ID is ${notification.trackingId}`);
      resolve(true);
    }, 1000);
  });
};

/**
 * Send notification through specified channels
 */
export const sendOrderNotification = async (
  notification: OrderNotification,
  channels: NotificationChannel[] = ["sms"]
): Promise<boolean> => {
  try {
    const results = await Promise.all(
      channels.map(channel => {
        if (channel === "sms") {
          return sendSmsNotification(notification);
        } else if (channel === "whatsapp") {
          return sendWhatsAppNotification(notification);
        }
        return Promise.resolve(false);
      })
    );
    
    return results.some(result => result);
  } catch (error) {
    console.error("Error sending order notification:", error);
    return false;
  }
};
