## Authorization

### Definition (What can you do?)

**Authorization** is the process of determining if a user is allowed to perform certain actions or access certain resources or data. For example, an airline needs to determine which people can come on board.

**Status Code:** `403 Forbidden`

### Why Is User Authorization Important?

- Protects SaaS applications by ensuring users have the right permissions
- Provides control to secure sensitive information and resources
  
**Least Privilege Principle:** Access control practice that grants users access to resources relevant to their job instead of granting flat access to all resources.

### Types of Authorization:
- Discretionary Access Control (DAC)‍ – DAC determines privileges depending on the specific user and their access groups. A DAC model allows every object in a system to be accessed by a particular group or identity. Those in charge of granting authorization can provide admin permission to other users.
- Mandatory Access Control (MAC) – MAC determines authorization of entities at the operating system level. MAC commonly governs permissions for threads and processes, defining which files and memory objects they can access. 
- Role-Based Access Control (RBAC) – RBAC is used to enforce access controls defined in the DAC or MAC model. RBAC builds on predefined roles and privileges, assigns users to roles, and configures a system so that only specific roles can access each object.
- Attribute-based Access Control (ABAC) – ABAC is used to enforce access controls in a policy-based manner. It uses attributes, which can be attached to a user, a resource, an object, or an entire environment. An entity is authorized if the authentication system finds that all the attributes defined in the policy are true.

### Permissions Commonly Used in Authorization
- Role-based permissions — grants permissions based on a group of users with a shared business role. Role-based permissions specify which resources that group is allowed to access. This permissions model supports the least privilege access principle, which states that a system should grant each user the minimal resources they need to perform their business role.
- Device permissions — grants permissions based on the device that is accessing the resource. This permission model might grant different permissions for trusted devices such as a corporate laptop, or non-trusted devices such as a personal mobile device. Authorization systems should adjust device permissions based on an evaluation of each device’s security posture.
- Location permissions — grants permissions based on the user or entity’s location. Authorization systems use this type of permission to limit access to sensitive resources for users connecting from home or other entities connecting remotely.