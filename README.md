# TicketHub - A Platform to Buy & Sell Tickets

## Overview

This is a microservices-based ticketing platform designed for buying and selling tickets for events such as concerts, sports, movies, and more. The application supports creating, viewing, updating, and deleting tickets, as well as managing orders and payments, ensuring high concurrency and data consistency across services.

NATS is utilized for event streaming, enabling real-time communication between services, while Stripe handles secure payment processing and transaction management.


## Architectural Diagram

![Architectural Diagram](Architecture%20Diagram.png)

### **Event Processing with NATS**

NATS is integrated as a robust event-streaming platform, facilitating real-time communication between services such as ticketing, orders, and payments. Below is the event flow diagram illustrating how events are published and consumed:

![NATS Event Flow Diagram](NATS%20Event%20Flow%20Diagram.png)

### Architecture

- **Frontend:** Built with **Next.js**, offering a responsive and dynamic user interface for seamless interactions.
- **Backend:** Developed using **TypeScript** and **Node.js** with **Express**, ensuring type safety and modular design for handling ticketing logic such as creation, updates, and queries.
- **Database:** **MongoDB** stores ticket data and user information, with **Redis** utilized for caching to optimize performance.
- **Queueing & Processing:** **Bull.js** manages asynchronous jobs and task processing, enhancing system efficiency.
- **Event Streaming:** **NATS** is integrated as a robust event-streaming platform, ensuring real-time communication between microservices and reliable data propagation.
- **Authentication:** **JWT (JSON Web Tokens)** ensures secure and scalable user authentication and authorization.
- **Testing:** Comprehensive unit and integration tests written using **Jest** and **Supertest**, ensuring high code quality.

### **Deployment Architecture**

Below is the diagram illustrating the internal communication between services within Kubernetes pods, leveraging **ClusterIP services** and **Nginx** for routing:

![Communication inside a k8s pod](Communication%20inside%20a%20k8s%20pod.png)

- **Containerization:** Services are containerized with **Docker** to ensure portability and consistency across environments.
- **Orchestration:** Managed and scaled using **Kubernetes (K8s)**, with **Skaffold** streamlining local development and deployment cycles.
- **Networking:** Inside the Kubernetes cluster, services communicate through **ClusterIP services**, with **Nginx** as an ingress controller for routing external traffic to internal services.
- **Cloud Deployment:** Deployed on **Google Cloud Platform (GCP)** for scalable and highly available performance.

### **Reusable Module**

A shared library, **`@fa1q2001/common`**, has been developed to encapsulate common functionality such as error handling, middleware, and utilities. This module can be installed via **npm** using:  
```bash
npm install @fa1q2001/common
```
The library is designed for reusability and is utilized across multiple microservices in the application.

### **Architectural Diagrams**

1. **Event Processing with NATS:** Demonstrates how **NATS** facilitates real-time event streaming by publishing and subscribing to events between services like ticketing, orders, and payments.
2. **Kubernetes Pod Communication:** Shows the internal communication structure within a **K8s pod**, highlighting **Nginx** for ingress routing and **ClusterIP services** for internal service discovery.

### **Process Flow**

1. **User Registration/Login:** Users can securely register or log in to create and manage their tickets.
2. **Create Ticket:** Allows users to create tickets for events, specifying details such as event type and pricing.
3. **Ticket Management:** Users can view, update, or delete their tickets. Admins can access all tickets with management capabilities.
4. **Order & Payment Management:** Secure and seamless order placement and payment handling integrated with **Stripe**.


## Output Screenshots

![Ticket Creation Screenshot](path_to_ticket_creation_screenshot.png)

![Ticket Management Screenshot](path_to_ticket_management_screenshot.png)

![Admin Panel Screenshot](path_to_admin_panel_screenshot.png)

## Getting Started

### Prerequisites

- Node.js
- MongoDB or MySQL (depending on your database choice)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your_username/ticketing-application.git
   cd ticketing-application
   ```
2. **Install dependencies:**

    ```bash
    Copy code
    npm install
    ```

3. **Start Contributing**
We welcome all contributions! If you'd like to contribute to this project, please follow these steps:

    * - Fork the repository. *

    * - Create a new branch, commit your changes and push it to the forked repository. *

    * - Create a pull request to the main branch of the original repository. *