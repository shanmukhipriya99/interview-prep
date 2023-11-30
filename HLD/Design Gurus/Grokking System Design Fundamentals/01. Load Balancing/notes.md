### What is `load balancing`? Why do we need it?

`Load Balancing` is the process of distributing incoming requests and traffic evenly across multiple servers.

We use `Load Balancing` to ensure high `availability`, `performance`, and `reliability` by avoiding the overload of a single server and avoiding downtime.

### Where is the `load balancer` located in a system design?

The `load balancer` is typically located between the client and the server accepting incoming network and application traffic and then distributes it evenly across multiple backend servers using various algorithms.

### Does placing the `load balancer` between the client and the server achieve maximum benefit?

Not necessarily. To utilize full scalability and redundancy, we can place the `load balancers` in three places:

- Between the `client` and the `web server`
- Between the `web servers` and `application/cache servers`
- Between the `application/cache servers` and the `database servers`.

![Load Balancer Positioning](image.png)

### What is `Session Persistence`?

It is a technique used to ensure that subsequent requests made by the same client are always sent to the same backend server, maintaining session state and providing a consistent user experience.

### What is `SSL/TLS Termination`?

This is the process of decrypting `SSL/TLS encryption` at the load balancer layer to unburden the backend servers.

### How do `Load Balancers` work?

- The load balancer receives a request from a client or user.
- The load balancer evaluates the incoming request and determines which server or resource should handle the request. This is done based on a predefined load-balancing algorithm that takes into account factors such as server capacity, server response time, number of active connections, and geographic location.
- The load balancer forwards the incoming traffic to the selected server or resource.
- The server or resource processes the request and sends a response back to the load balancer.
- The load balancer receives the response from the server or resource and sends it to the client or user who made the request.

### What are some common uses of `load balancing`?

1. #### Improving website performance

   Load balancing can distribute incoming web traffic among multiple servers, reducing the load on individual servers and ensuring faster response times for end users.

   **Example**: An e-commerce website experiences a sudden surge in traffic during a holiday sale. A load balancer distributes incoming requests among multiple web servers, ensuring that each server handles a manageable number of requests, resulting in faster page load times for users

2. #### Ensuring high availability and reliability

   By distributing the workload among multiple servers, load balancing helps prevent single points of failure. If one server fails or experiences an issue, the load balancer can redirect traffic to other available servers, maintaining uptime and minimizing service disruptions.

   **Example**: A banking application relies on several servers to handle user transactions. The load balancer monitors the health of each server and, in the event of a server failure, redirects traffic to the remaining healthy servers, minimizing downtime and maintaining user access to the application.

3. #### Scalability

   Load balancing allows organizations to easily scale their infrastructure as traffic and demand increase. Additional servers can be added to the load balancing pool to accommodate increased demand, without the need for significant infrastructure changes.

   **Example**: A video streaming platform sees a steady increase in users as it gains popularity. To handle the growing demand, the platform adds new servers to the load balancing pool, allowing it to scale seamlessly without overloading existing infrastructure.

4. #### Redundancy

   Load balancing can be used to maintain redundant copies of data and services across multiple servers, reducing the risk of data loss or service outages due to hardware failure or other issues.

   **Example**: An online file storage service uses load balancing to maintain multiple copies of user data across different servers. If one server experiences a hardware failure, users can still access their data from the redundant copies stored on other servers.

5. #### Network optimization

   Load balancing can help optimize network traffic by distributing it across multiple paths or links, reducing congestion and improving overall network performance.

   **Example**: A large organization has multiple internet connections to handle its network traffic. A load balancer distributes the incoming and outgoing traffic across these connections, reducing congestion and improving overall network performance.

6. #### Geographic distribution
7. #### Application performance
8. #### Security
9. #### Cost savings
10. #### Content caching
