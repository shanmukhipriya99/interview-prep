### What is DNS (Domain Name System)?

DNS, or Domain Name System, is a system used to translate human-readable domain names (e.g., www.designgurus.com) into IP addresses (e.g., 198.47.25.1) that computers can understand.

### Domain names vs TLDs (Top-Level Domains) vs subdomains

- #### _Domain Names_
  A domain name is a human-readable address used to access a website or other resources on the internet. It consists of a series of character strings separated by dots, such as www.example.com. Domain names are easier to remember and use than IP addresses.
- #### _Top-Level Domains (TLDs)_
  A top-level domain (TLD) is the rightmost part of a domain name, such as ".com" in www.example.com. TLDs are managed by various organizations and can be divided into two categories: **generic TLDs (gTLDs)**, like .com, .org, or .net, and **country-code TLDs (ccTLDs)**, which represent specific countries or territories, like .us for the United States or .uk for the United Kingdom.
- #### _Subdomains_
  A subdomain is a subdivision of a domain name, allowing the creation of separate sections or areas within a website. Subdomains appear to the left of the main domain name, such as blog.example.com, where "blog" is the subdomain of example.com.

### Root servers vs TLD servers vs Authoritative Name Servers

![Root servers vs TLD servers vs Authoritative Name Servers](image.png)

- #### _Root Servers_
  Root servers are the highest level of DNS servers and are responsible for directing queries to the appropriate TLD servers. There are 13 root server clusters worldwide, managed by various organizations, each having multiple servers for redundancy and reliability.
- #### _TLD Servers_
  TLD servers store information about domain names within their specific TLD. When they receive a query, they direct it to the appropriate authoritative name server responsible for that domain.
- #### _Authoritative Name Servers_
  These servers hold the actual DNS records for a domain, including its IP address and other information. They provide the final answer to DNS queries, allowing users to access the desired website or resource.

### DNS resolvers vs Caching resolvers vs Forwarding resolvers

- #### _DNS resolvers_:

  Also known as recursive resolvers, DNS resolvers are usually provided by internet service providers (ISPs) or other organizations. They act as intermediaries between users and DNS servers, receiving DNS queries from users and sending them to the appropriate DNS servers to be resolved. Once the resolver receives the answer, it caches the information and returns it to the user.

- #### _Caching resolver_:

  A caching resolver stores previously resolved queries in its cache, speeding up the resolution process for future requests. If the requested information is available in the cache, the caching resolver returns the answer directly without contacting other DNS servers.

- #### _Forwarding resolver_:

  A forwarding resolver forwards DNS queries to another resolver, which is typically a caching resolver, instead of contacting DNS servers directly. This setup allows for better control, security, and performance.

### What is `DNS Resolution`?

DNS translates human-readable domain names into machine-readable IP addresses. This translation process is known as `DNS Resolution`. The DNS resolution process involves a series of recursive and iterative queries, utilizing a distributed and hierarchical infrastructure of DNS servers, resolvers, and caching mechanisms.

### What are `Recursive` and `Iterative` DNS queries?

- #### _Recursive query_:

  In a recursive query, the DNS resolver asks for the complete answer to a query from the DNS server. If the server has the answer, it responds with the required information. If not, the server takes responsibility for contacting other DNS servers to find the answer and then returns it to the resolver. Recursive queries put more responsibility on the DNS server to find the requested information.

- #### _Iterative query_:
  In an iterative query, the DNS resolver asks the DNS server for the best answer it has at the moment. If the server doesn't have the complete answer, it responds with a referral to another server that might have more information. The resolver then contacts that server with a new iterative query, repeating the process until it finds the complete answer. In iterative queries, the resolver takes on more responsibility for finding the requested information.

### What is `DNS caching` and `TTL (Time To Live)` w.r.t DNS Resolution?

To speed up the DNS resolution process, resolvers and servers cache the results of previous queries. When a resolver receives a query, it first checks its cache to see if the answer is already available. If it finds the cached information, it returns the answer without contacting other servers, saving time and reducing network traffic.

Each DNS record has an associated Time To Live (TTL) value, which specifies how long the record should be stored in the cache. TTL is measured in seconds, and once the TTL expires, the cached information is removed to ensure that outdated information is not used.

### What is `Negative caching` w.r.t DNS Resolution?

Negative caching is the process of caching the non-existence of a DNS record. When a resolver receives a query for a non-existent domain or record, it caches this information as a negative response, preventing repeated queries for the same non-existent resource. This reduces the load on DNS servers and improves overall performance.

### Can you list a few techniques that provide `DNS load balancing and high availability`?

- #### _Round-robin DNS_

  Round-robin DNS is a simple load balancing technique in which multiple IP addresses are associated with a single domain name. When a resolver queries the domain name, the DNS server responds with one of the available IP addresses, rotating through them in a round-robin fashion. This distributes the load among multiple servers or resources, improving the performance and availability of the website or service.

  However, round-robin DNS does not take into account the actual load on each server or the geographic location of the client, which can lead to uneven load distribution or increased latency in some cases.

- #### _Geographically distributed DNS servers_

  To improve the performance and availability of DNS services, operators can deploy DNS servers in multiple geographic locations. By distributing DNS servers across different regions, they can provide faster and more reliable DNS resolution for users located closer to a server.

  Geographically distributed servers also offer increased redundancy, reducing the impact of server failures or network outages. If one server becomes unreachable, users can still access the service through other available servers in different locations.

- #### _Anycast routing_

  Anycast routing is a networking technique that allows multiple servers to share the same IP address. When a resolver sends a query to an anycast IP address, the network routes the query to the nearest server, based on factors like network latency and server availability.

  Anycast provides several benefits for DNS:

  - Load balancing: Anycast distributes DNS queries among multiple servers, preventing any single server from becoming a bottleneck.
  - Reduced latency: By directing users to the nearest server, anycast can significantly reduce the time it takes for DNS resolution.
  - High availability: If a server fails or becomes unreachable, anycast automatically redirects queries to the next closest server, ensuring uninterrupted service.

- #### _Content Delivery Networks (CDNs) and their relation to DNS_

  A Content Delivery Network (CDN) is a network of distributed servers that cache and deliver web content to users based on their geographic location. CDNs help improve the performance, reliability, and security of websites and web services by distributing the load among multiple servers and serving content from the server closest to the user.

  DNS plays a crucial role in the functioning of CDNs. When a user requests content from a website using a CDN, the CDN's DNS server determines the best server to deliver the content based on the user's location and other factors. The DNS server then responds with the IP address of the chosen server, allowing the user to access the content quickly and efficiently.
