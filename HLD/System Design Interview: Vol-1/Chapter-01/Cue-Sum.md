## Cues

1. What is the `request flow` in a single server setup?
2. How would you introduce a database in to the above setup? What are the advantages?
3. What are the 2 types of DB's? Examine their differences and provide some examples.
4. What are some situations where using NRDBMS is a right choice?
5. `Serialization` vs `Deserialization`?
6. `Vertical Scaling` VS `Horizontal Scaling`? Limitations of each?
7. What are some techniques for implementing `horizontal scaling`?
8. Why do we need to use a `load balancer`? What does it do? Pros & Cons?
9. Public IP vs Private IP?
10. Why do we need to use a `database replication`? What does it do? Pros & Cons?
11. What is the system design after adding a `load balancer` and `database replication`?
12. What is a `cache`?
13. What can you do to improve `load/response time`? What is that tier's request flow?
14. What are some things to keep in mind before using cache?
15. What is `cache eviction`?
16. What is a `CDN`?
17. What is the `CDN workflow`?
18. What are some things to keep in mind before using CDN?
19. What is the system design after adding a `CDN` and `cache`?
20. What is a stateless web tier?
21. `Stateful Architecture` vs `Stateless Architecture`?
22. System design of a stateless web server.
23. If your website is growing rapidly and attracts a significant number of users internationally. What can you do to improve availability and provide a better user experience?
24. What is `geoDNS`, and why is it important in the context of web services and content delivery?
25. Explain the concept of `virtualization` in data centers and its benefits.
26. Can you explain the key technical challenges and solutions involved in setting up a multi-data center infrastructure for a web application or service, focusing on traffic redirection, data synchronization, and test/deployment strategies?
27. What is a `message queue`?
28. What is the architecture of a message queue?
29. Consider the following use case: your application supports photo customization, including cropping, sharpening, blurring, etc. Those customization tasks take time to complete. How can you introduce `message queue` here to optimize the performance?
30. Why are `Logging`, `Metrics`, and `Automation` important? Updated system design including message queues?
31. What are the two approaches for `database scaling`?
32. Provide an example of how database sharding works.
33. What is the most important factor to consider when implementing a sharding strategy?
34. What are some complexities & challenges introduced by sharding?
35. System design with database sharding.

## Summary

We can scale our system to support millions of users by:
- Keep web tier stateless
- Build redundancy at every tier
- Cache data as much as you can
- Support multiple data centers
- Host static assets in CDN
- Scale your data tier by sharding
- Split tiers into individual services
- Monitor your system and use automation tools

## References

- [1] Hypertext Transfer Protocol: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
- [2] Should you go Beyond Relational Databases?:
https://blog.teamtreehouse.com/should-you-go-beyond-relational-databases
- [3] Replication: https://en.wikipedia.org/wiki/Replication_(computing)
- [4] Multi-master replication:
https://en.wikipedia.org/wiki/Multi-master_replication
- [5] NDB Cluster Replication: Multi-Master and Circular Replication:
https://dev.mysql.com/doc/refman/5.7/en/mysql-cluster-replication-multi-master.html
- [6] Caching Strategies and How to Choose the Right One:
https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/
- [7] R. Nishtala, "Facebook, Scaling Memcache at," 10th USENIX Symposium on Networked
Systems Design and Implementation (NSDI ’13).
- [8] Single point of failure: https://en.wikipedia.org/wiki/Single_point_of_failure
- [9] Amazon CloudFront Dynamic Content Delivery:
https://aws.amazon.com/cloudfront/dynamic-content/
- [10] Configure Sticky Sessions for Your Classic Load Balancer:
https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html
- [11] Active-Active for Multi-Regional Resiliency:
https://netflixtechblog.com/active-active-for-multi-regional-resiliency-c47719f6685b
- [12] Amazon EC2 High Memory Instances:
https://aws.amazon.com/ec2/instance-types/high-memory/
- [13] What it takes to run Stack Overflow:
http://nickcraver.com/blog/2013/11/22/what-it-takes-to-run-stack-overflow
- [14] What The Heck Are You Actually Using NoSQL For:
http://highscalability.com/blog/2010/12/6/what-the-heck-are-you-actually-using-nosqlfor.html