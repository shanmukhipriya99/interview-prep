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
