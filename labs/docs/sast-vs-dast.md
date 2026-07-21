## SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing)

| **Aspect**                | **SAST (Static Application Security Testing)**                                 | **DAST (Dynamic Application Security Testing)**                                    |
| ------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **Definition**            | Analyzes source code, binaries, or bytecode without executing the application. | Analyzes the application during runtime by simulating attacks.                     |
| **Testing Method**        | White-box testing: examines the internal structure of the application.         | Black-box testing: interacts with the application externally as an attacker would. |
| **Purpose**               | Detect vulnerabilities in the codebase before the application is executed.     | Detect vulnerabilities that appear during the execution of the application.        |
| **Stage of Testing**      | Performed during the development or build phase.                               | Performed during the testing or staging phase on a deployed application.           |
| **Code Access**           | Requires access to the source code, binaries, or bytecode.                     | Does not require source code access; interacts with the application externally.    |
| **Vulnerabilities Found** | Code-level issues such as:                                                     | Runtime and environment-based issues such as:                                      |
|                           | - SQL injection, XSS, buffer overflows.                                        | - SQL injection, XSS, authentication flaws.                                        |
|                           | - Hardcoded secrets or credentials.                                            | - Session management flaws, misconfigured headers.                                 |
|                           | - Unused variables, uninitialized memory.                                      | - Runtime misconfigurations, server-side logic flaws.                              |
| **Examples**              | Finds vulnerabilities like unvalidated inputs in a login form.                 | Detects vulnerabilities like a login form bypass using crafted payloads.           |
| **Environment Required**  | No runtime environment needed; works on code.                                  | Requires a running application in a staging or production-like environment.        |
| **Integration**           | Easily integrates into CI/CD pipelines for early detection.                    | Usually integrated during functional testing or after deployment.                  |
| **Effectiveness**         | Effective for identifying code-based vulnerabilities early.                    | Effective for identifying runtime issues and server misconfigurations.             |
| **Output**                | Provides a detailed report of vulnerabilities in the source code.              | Reports vulnerabilities seen from an attacker’s perspective.                       |
| **Tool Setup**            | Relatively easier to set up within development environments.                   | Requires a fully operational application environment to test against.              |
| **False Positives**       | Higher likelihood of false positives (flagging non-issues).                    | Lower likelihood of false positives due to testing on the actual application.      |
| **False Negatives**       | May miss issues that occur only during runtime.                                | May miss code-level issues not exposed during runtime interactions.                |
| **Speed**                 | Typically faster as it doesn't require application execution.                  | Slower due to the need to execute and analyze the running application.             |
| **Cost**                  | Cost-effective in early stages of development.                                 | Can be costlier due to the need for a test environment and runtime analysis.       |
| **Examples of Tools**     | - CodeQL (GitHub)                                                              | - OWASP ZAP                                                                        |
|                           | - SonarQube                                                                    | - Burp Suite                                                                       |
|                           | - Checkmarx                                                                    | - Acunetix                                                                         |
|                           | - Veracode                                                                     | - Netsparker                                                                       |
| **Use Cases**             | - Detects insecure code practices during development.                          | - Identifies vulnerabilities in production-like environments.                      |
|                           | - Ensures compliance with secure coding standards (e.g., OWASP Top 10).        | - Simulates real-world attack scenarios (e.g., SQL injection testing).             |
| **Limitations**           | - Cannot identify runtime-specific issues like environment misconfigurations.  | - Cannot detect code-level issues like unused variables or hardcoded secrets.      |
|                           | - May require customization for precise vulnerability detection.               | - Requires more resources for testing in live environments.                        |

---

### **Example Scenario: Login Form Vulnerabilities**

| **Scenario**                      | **SAST**                                                 | **DAST**                                                                                 |
| --------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| SQL Injection in a Login Form     | Detects vulnerable query in the source code.             | Identifies SQL injection vulnerability when malicious input is submitted during runtime. |
| Hardcoded Password in Source Code | Flags hardcoded credentials in the codebase.             | Cannot detect, as it doesn't access source code.                                         |
| Missing Secure Cookie Flags       | Cannot detect, as this is a runtime configuration issue. | Identifies missing `HttpOnly` or `Secure` flags in cookies during runtime.               |

---

### **Conclusion**

- **SAST**: Best for detecting vulnerabilities early in the development lifecycle, especially code-related issues. It’s essential for developers to ensure secure coding practices.
- **DAST**: Best for identifying runtime vulnerabilities, misconfigurations, and environment-specific issues. It is crucial for assessing real-world security risks in a deployed application.

For a robust security strategy, **both SAST and DAST** should be employed to complement each other, ensuring comprehensive application security.
