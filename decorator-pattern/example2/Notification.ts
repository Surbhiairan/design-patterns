interface Notifications {
    send(message: string): void
}

class EmailNotification implements Notifications {
    send(message: string) {
        console.log(`Email notification - ${message}`)
    }
}

class SMSNotification implements Notifications {
    send(message: string) {
        console.log(`SMS notification - ${message}`)
    }
}

// decorator class
abstract class NotificationDecorator implements Notifications {
    constructor(private notification: Notifications) {
    }

    send(message: string) {
        this.notification.send(message)
    }
}

class TimeStampDecorator extends NotificationDecorator {
   send(message: string) {
    const timestampedMessage = `[${new Date().toISOString()}] ${message}`;
    super.send(timestampedMessage)
   }
}

class LoggerDecorator extends NotificationDecorator {
    send(message: string) {
        console.log("[Log] Preparing to send notification...");
        super.send(message)
        console.log("[Log] Notification sent.");
    }
}

const newNotification = new LoggerDecorator(new EmailNotification())

console.log(newNotification.send('you have received an email'))