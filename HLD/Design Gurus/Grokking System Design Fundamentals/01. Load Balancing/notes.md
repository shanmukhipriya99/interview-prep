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

### Can you list some common load balancing types?

Some common load balancing types are:

- Hardware Load Balancing
- Software Load Balancing
- Cloud-Based Load Balancing
- DNS Load Balancing
- Global Server Load Balancing (GSLB)
- Hybrid Load Balancing
- Layer 4 Load Balancing
- Layer 7 Load Balancing

### What is `Hardware Load Balancing`?

`Hardware load balancers` are physical devices designed specifically for load balancing tasks. They use specialized hardware components, such as Application-Specific Integrated Circuits (ASICs) or Field-Programmable Gate Arrays (FPGAs), to efficiently distribute network traffic.

Pros:

- High performance and throughput, as they are optimized for load balancing tasks.
- Often include built-in features for network security, monitoring, and management.
- Can handle large volumes of traffic and multiple protocols.

Cons:

- Can be expensive, especially for high-performance models.
- May require specialized knowledge to configure and maintain.
- Limited scalability, as adding capacity may require purchasing additional hardware.

**Example**: A large e-commerce company uses a hardware load balancer to distribute incoming web traffic among multiple web servers, ensuring fast response times and a smooth shopping experience for customers.

### What is `Software Load Balancing`?

`Software load balancers` are applications that run on general-purpose servers or virtual machines. They use software algorithms to distribute incoming traffic among multiple servers or resources.

Pros:

- Generally more affordable than hardware load balancers.
- Can be easily scaled by adding more resources or upgrading the underlying hardware.
- Provides flexibility, as they can be deployed on a variety of platforms and environments, including cloud-based infrastructure.

Cons:

- May have lower performance compared to hardware load balancers, especially under heavy loads.
- Can consume resources on the host system, potentially affecting other applications or services.
- May require ongoing software updates and maintenance.

**Example**: A startup with a growing user base deploys a software load balancer on a cloud-based virtual machine, distributing incoming requests among multiple application servers to handle increased traffic.

### What is `Cloud-Based Load Balancing`?

`Cloud-based load balancers` are provided as a service by cloud providers. They offer load balancing capabilities as part of their infrastructure, allowing users to easily distribute traffic among resources within the cloud environment.

Pros:

- Highly scalable, as they can easily accommodate changes in traffic and resource demands.
- Simplified management, as the cloud provider takes care of maintenance, updates, and security.
- Can be more cost-effective, as users only pay for the resources they use.

Cons:

- Reliance on the cloud provider for performance, reliability, and security.
- May have less control over configuration and customization compared to self-managed solutions.
- Potential vendor lock-in, as switching to another cloud provider or platform may require significant changes.

**Example**: A mobile app developer uses a cloud-based load balancer provided by their cloud provider to distribute incoming API requests among multiple backend servers, ensuring smooth app performance and quick response times.

### What is `DNS Load Balancing`?

`DNS (Domain Name System) load balancing` relies on the DNS infrastructure to distribute incoming traffic among multiple servers or resources. It works by resolving a domain name to multiple IP addresses, effectively directing clients to different servers based on various policies.

Pros:

- Relatively simple to implement, as it doesn't require specialized hardware or software.
- Provides basic load balancing and failover capabilities.
- Can distribute traffic across geographically distributed servers, improving performance for users in different regions.

Cons:

- Limited to DNS resolution time, which can be slow to update when compared to other load balancing techniques.
- No consideration for server health, response time, or resource utilization.
- May not be suitable for applications requiring session persistence or fine-grained load distribution.

**Example**: A content delivery network (CDN) uses DNS load balancing to direct users to the closest edge server based on their geographical location, ensuring faster content delivery and reduced latency.

### What is `Global Server Load Balancing`?

`Global Server Load Balancing (GSLB)` is a technique used to distribute traffic across geographically dispersed data centers. It combines `DNS load balancing` with health checks and other advanced features to provide a more intelligent and efficient traffic distribution method.

Pros:

- Provides load balancing and failover capabilities across multiple data centers or geographic locations.
- Can improve performance and reduce latency for users by directing them to the closest or best-performing data center.
- Supports advanced features, such as server health checks, session persistence, and custom routing policies.

Cons:

- Can be more complex to set up and manage than other load balancing techniques.
- May require specialized hardware or software, increasing costs.
- Can be subject to the limitations of DNS, such as slow updates and caching issues.

**Example**: A multinational corporation uses GSLB to distribute incoming requests for its web applications among several data centers around the world, ensuring high availability and optimal performance for users in different regions.

### What is `Hybrid Load Balancing`?

`Hybrid load balancing` combines the features and capabilities of multiple load balancing techniques to achieve the best possible performance, scalability, and reliability. It typically involves a mix of hardware, software, and cloud-based solutions to provide the most effective and flexible load balancing strategy for a given scenario.

Pros:

- Offers a high degree of flexibility, as it can be tailored to specific requirements and infrastructure.
- Can provide the best combination of performance, scalability, and reliability by leveraging the strengths of different load balancing techniques.
- Allows organizations to adapt and evolve their load balancing strategy as their needs change over time.

Cons:

- Can be more complex to set up, configure, and manage than single-technique solutions.
- May require a higher level of expertise and understanding of multiple load balancing techniques.
- Potentially higher costs, as it may involve a combination of hardware, software, and cloud-based services.

**Example**: A large-scale online streaming platform uses a hybrid load balancing strategy, combining hardware load balancers in their data centers for high-performance traffic distribution, cloud-based load balancers for scalable content delivery, and DNS load balancing for global traffic management. This approach ensures optimal performance, scalability, and reliability for their millions of users worldwide.

### What is `Layer 4 Load Balancing`?

`Layer 4 load balancing`, also known as `transport layer load balancing`, operates at the transport layer of the OSI model (the fourth layer). It distributes incoming traffic based on information from the TCP or UDP header, such as source and destination IP addresses and port numbers.

Pros:

- Fast and efficient, as it makes decisions based on limited information from the transport layer.
- Can handle a wide variety of protocols and traffic types.
- Relatively simple to implement and manage.

Cons:

- Lacks awareness of application-level information, which may limit its effectiveness in some scenarios.
- No consideration for server health, response time, or resource utilization.
- May not be suitable for applications requiring session persistence or fine-grained load distribution.

**Example**: An online gaming platform uses Layer 4 load balancing to distribute game server traffic based on IP addresses and port numbers, ensuring that players are evenly distributed among available game servers for smooth gameplay.

### What is `Layer 7 Load Balancing`?

`Layer 7 load balancing`, also known as `application layer load balancing`, operates at the application layer of the OSI model (the seventh layer). It takes into account application-specific information, such as HTTP headers, cookies, and URL paths, to make more informed decisions about how to distribute incoming traffic.

Pros:

- Provides more intelligent and fine-grained load balancing, as it considers application-level information.
- Can support advanced features, such as session persistence, content-based routing, and SSL offloading.
- Can be tailored to specific application requirements and protocols.

Cons:

- Can be slower and more resource-intensive compared to Layer 4 load balancing, as it requires deeper inspection of incoming traffic.
- May require specialized software or hardware to handle application-level traffic inspection and processing.
- Potentially more complex to set up and manage compared to other load balancing techniques.

**Example**: A web application with multiple microservices uses Layer 7 load balancing to route incoming API requests based on the URL path, ensuring that each microservice receives only the requests it is responsible for handling.

### What are `Stateless Load Balancers`?

`Stateless load balancers` operate without maintaining any information about the clients' session or connection state. They make routing decisions based solely on the incoming request data, such as the client's IP address, request URL, or other headers. Because stateless load balancers do not store session information, they can quickly and efficiently distribute incoming traffic without considering the clients' history or past interactions with the application.

**Example**: Consider a web application that enables users to search for products according to their location. A stateless load balancer can allocate requests to servers based on the user's geographic location, without retaining any session data.

### What are `Stateful Load Balancers`?

`Stateful load balancers` preserve session information between requests. The load balancer assigns a client to a specific server and ensures that all subsequent requests from the same client are directed to that server. This method is beneficial when requests pertain to a particular session and necessitate session data.

**Example**: Suppose a web application that requires users to log in to access their personal information. A stateful load balancer can guarantee that requests from the same user are routed to the same server, allowing session data such as login credentials to be available.

### Can `Stateful load balancing` be further categorized?

Yes, stateful load balancing can be categorized into two types:

- #### Source IP Affinity
  This form of stateful load balancing assigns a client to a specific server based on the client's IP address. While this approach ensures that requests from the same client consistently reach the same server, it may pose issues if the client's IP address frequently changes, such as in mobile networks.
- #### Session Affinity
  In this type of stateful load balancing, the load balancer allocates a client to a specific server based on a session identifier, such as a cookie or URL parameter. This method ensures that requests from the same client consistently reach the same server, regardless of the client's IP address.

### How can `redundancy` be achieved to ensure `high availability` and `fault tolerance` w.r.t `load balancers`?

To ensure `high availability` and `fault tolerance`, we need to design and deploy load balancers keeping redundancy in mind. As in, we should have multiple load balancers that can take over if one fails. We can use the following `failover strategies` to provide `redundancy`:

- #### Active-Passive Configuration

  In this setup, one load balancer (`the active instance`) handles all incoming traffic while the other (`the passive instance`) remains on standby. If the active load balancer fails, the passive instance takes over and starts processing requests. This configuration provides a simple and reliable failover mechanism but does not utilize the resources of the passive instance during normal operation.

- #### Active-Active Configuration
  In this setup, multiple load balancer instances actively process incoming traffic simultaneously. Traffic is distributed among the instances using methods such as DNS load balancing or an additional load balancer layer. If one instance fails, the others continue to process traffic with minimal disruption. This configuration provides better resource utilization and increased fault tolerance compared to the active-passive setup.

### Why are `health checks` and `monitoring` important for load balancers?

`Health checks` and `monitoring` are important for high availability and fault tolerance of load balancers.

Health checks are periodic tests performed by load balancers on the backend servers to determine their availability and performance. By monitoring the health of backend servers, load balancers can automatically remove unhealthy servers from the server pool and avoid sending traffic to them, ensuring a better user experience and preventing cascading failures.

Monitoring the load balancer itself is also crucial. By keeping track of performance metrics, such as response times, error rates, and resource utilization, we can detect potential issues and take corrective action before they lead to failures or service degradation.

### How can `Synchronization and State Sharing` be achieved when load balancers are using `active-active` or `active-passive` configurations?

It is crucial that the load balancer instances maintain a consistent view of the system's state, including the status of backend servers, session data, and other configuration settings. This can be achieved through various mechanisms, such as:

- #### Centralized configuration management
  Using a centralized configuration store (e.g., etcd, Consul, or ZooKeeper) to maintain and distribute configuration data among load balancer instances ensures that all instances are using the same settings and are aware of changes.
- #### State sharing and replication
  In scenarios where load balancers must maintain session data or other state information, it is crucial to ensure that this data is synchronized and replicated across instances. This can be achieved through database replication, distributed caching systems (e.g., Redis or Memcached), or built-in state-sharing mechanisms provided by the load balancer software or hardware.
