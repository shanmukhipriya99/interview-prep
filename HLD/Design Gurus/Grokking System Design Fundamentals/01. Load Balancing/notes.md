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

### How does load balancing use the `Round Robin Algorithm`?

The `Round Robin` algorithm distributes incoming requests sequentially to available servers in a circular order.

Pros:

- Easy to implement and understand.
- Works well when servers have similar capacities.

Cons:

- May not perform optimally when servers have different capacities or varying workloads.
- No consideration for server health or response time.

**Example**: A website with three web servers receives requests in the order A, B, C, A, B, C, and so on, distributing the load evenly among the servers.

### How does load balancing use the `Least Connections Algorithm`?

The `Least Connections` algorithm directs incoming requests to the server with the lowest number of active connections. This approach accounts for the varying workloads of servers.

Pros:

- Adapts to differing server capacities and workloads.
- Balances load more effectively when dealing with requests that take a variable amount of time to process.

Cons:

- Requires tracking the number of active connections for each server, which can increase complexity.
- May not factor in server response time or health.

**Example**: An email service receives requests from users. The load balancer directs new requests to the server with the fewest active connections, ensuring that servers with heavier workloads are not overwhelmed.

### How does load balancing use the `Weighted Round Robin Algorithm`?

The `Weighted Round Robin` algorithm is an extension of the Round Robin algorithm that assigns different weights to servers based on their capacities. The load balancer distributes requests proportionally to these weights.

Pros:

- Accounts for different server capacities, balancing load more effectively.
- Simple to understand and implement.

Cons:

- Weights must be assigned and maintained manually.
- No consideration for server health or response time.

**Example**: A content delivery network has three servers with varying capacities. The load balancer assigns weights of 3, 2, and 1 to these servers, respectively, distributing requests in a 3:2:1 ratio.

### How does load balancing use the `Weighted Least Connections Algorithm`?

The `Weighted Least Connections` algorithm combines the Least Connections and Weighted Round Robin algorithms. It directs incoming requests to the server with the lowest ratio of active connections to assigned weight.

Pros:

- Balances load effectively, accounting for both server capacities and active connections.
- Adapts to varying server workloads and capacities.

Cons:

- Requires tracking active connections and maintaining server weights.
- May not factor in server response time or health.

**Example**: An e-commerce website uses three servers with different capacities and assigned weights. The load balancer directs new requests to the server with the lowest ratio of active connections to weight, ensuring an efficient distribution of load.

### How does load balancing use the `IP Hash Algorithm`?

The `IP Hash` algorithm determines the server to which a request should be sent based on the source and/or destination IP address. This method maintains session persistence, ensuring that requests from a specific user are directed to the same server.

Pros:

- Maintains session persistence, which can be useful for applications requiring a continuous connection with a specific server.
- Can distribute load evenly when using a well-designed hash function.
  
Cons:

- May not balance load effectively when dealing with a small number of clients with many requests.
- No consideration for server health, response time, or varying capacities.
  
**Example**: An online multiplayer game uses the IP Hash algorithm to ensure that all requests from a specific player are directed to the same server, maintaining a continuous connection for a smooth gaming experience.

### How does load balancing use the `Least Response Time Algorithm`?

The `Least Response Time` algorithm directs incoming requests to the server with the lowest response time and the fewest active connections. This method helps to optimize the user experience by prioritizing faster-performing servers.

Pros:

- Accounts for server response times, improving user experience.
- Considers both active connections and response times, providing effective load balancing.
  
Cons:

- Requires monitoring and tracking server response times and active connections, adding complexity.
- May not factor in server health or varying capacities.
  
**Example**: A video streaming service uses the Least Response Time algorithm to direct users to the server with the fastest response time, ensuring that videos start quickly and minimize buffering times.

### How does load balancing use the `Custom Load Algorithm`?

The `Custom Load` algorithm allows administrators to create their own load balancing algorithm based on specific requirements or conditions. This can include factors such as server health, location, capacity, and more.

Pros:

- Highly customizable, allowing for tailored load balancing to suit specific use cases.
- Can consider multiple factors, including server health, response times, and capacity.
  
Cons:

- Requires custom development and maintenance, which can be time-consuming and complex.
- May require extensive testing to ensure optimal performance.
  
**Example**: An organization with multiple data centers around the world develops a custom load balancing algorithm that factors in server health, capacity, and geographic location. This ensures that users are directed to the nearest healthy server with sufficient capacity, optimizing user experience and resource utilization.

### How does load balancing use the `Random Algorithm`?

The `Random` algorithm directs incoming requests to a randomly selected server from the available pool. This method can be useful when all servers have similar capacities and no session persistence is required.

Pros:

- Simple to implement and understand.
- Can provide effective load distribution when servers have similar capacities.

Cons:

- No consideration for server health, response times, or varying capacities.
- May not be suitable for applications requiring session persistence.

**Example**: A static content delivery network uses the Random algorithm to distribute requests for images, JavaScript files, and CSS stylesheets among multiple servers. This ensures an even distribution of load and reduces the chances of overloading any single server.

### How does load balancing use the `Least Bandwidth Algorithm`?

The `Least Bandwidth` algorithm directs incoming requests to the server currently utilizing the least amount of bandwidth. This approach helps to ensure that servers are not overwhelmed by network traffic.

Pros:

- Considers network bandwidth usage, which can be helpful in managing network resources.
- Can provide effective load balancing when servers have varying bandwidth capacities.

Cons:

- Requires monitoring and tracking server bandwidth usage, adding complexity.
- May not factor in server health, response times, or active connections.

**Example**: A file hosting service uses the Least Bandwidth algorithm to direct users to the server with the lowest bandwidth usage, ensuring that servers with high traffic are not overwhelmed and that file downloads are fast and reliable.