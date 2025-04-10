class Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}

class OrderService {
  constructor(private logger: Logger) {}

  placeOrder() {
    // logic
    this.logger.log("Order placed!");
  }
}

const logger = new Logger();
const service = new OrderService(logger);
service.placeOrder();
