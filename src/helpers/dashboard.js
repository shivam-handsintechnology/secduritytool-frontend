import Userdata from "../components/Layout/Userdata"

const data = [
  {
    Category: <Userdata />,
    link: window.location.pathname,
    UseCases: []

  },
  {
    "Category": "Dashboard",
    "link": "/dashboard",
    "UseCases": []
  },
  {
    "Category": "Broken Authentication and Session Management",
    "link": "/Sessionnotexpire",
    "UseCases": [
      // {
      //   "label": "Session does not expire on closing the browser",
      //   "link":  "/Sessionnotexpire"
      // },

      // {
      //   "label": "Session time-out is high (or) not implemented.",
      //   "link":  "/Sessiontimeout"
      // },
      // {
      //   "label": "Session token being passed in other areas apart from cookie",
      //   "link":  "/Sessiontoken"
      // },
      // {
      //   "label": "An adversary can hijack user sessions by session fixation",
      //   "link":  "/Adversaryhijack"
      // },
      {
        "label": "Non-HTML contents directly accessible without logging-in",
        "link": "/NonHtmlContentAccess"
      },
      {
        "label": "Second factor authentication could be bypassed.",
        "link": "/SecondFactorAuth"
      },

    ]
  },
  {
    "Category": "Injection",
    "UseCases": [
      {
        "label": "Application is vulnerable to Command injection attack",
        "link": "/logs/commandline"
      },
      {
        "label": "Application is vulnerable to HTML injection attack",
        "link": "/logs/html"
      },
      {
        "label": "Application is vulnerable to iframe injection attack",
        "link": "/logs/iframe"
      },
      {
        "label": "Application is vulnerable to SQL Injection",
        "link": "/logs/Sql"
      },
      {
        "label": "Application is vulnerable to XML injection",
        "link": "/logs/xml"

      },
    ]
  },
  {
    "Category": "SSL",
    "link": "/SSLInformation",
    "UseCases": [
    ]
  },

  {
    "Category": "Error Message",
    "link": "/ServerErrorMessage",
    "UseCases": [

    ]
  },
  {
    "Category": "Insecure Direct Object References",
    "link": "/InsecureDirectObjectReferences",
    "UseCases": [
      // {
      //   "label": "Directory listing is enabled on the server",
      //   "link" : "/Directorylisting"
      // },
      // {
      //   "label": "Directory traversal attack"
      // },
      // {
      //   "label": "HTTP parameter pollution",
      //   "link" : "/HTTPparameterpollution"
      // },
      // {
      //   "label": "Non-HTML contents directly accessible without logging-in"
      // },
      // {
      //   "label": "Internal pages accessible without login"
      // },
      // {
      //   "label": "The remote server contains a 'robots.txt' file",
      //   "link" : "/Serverobotstxtfile"
      // }
    ]
  },
  {
    "Category": "Missing Function Level Access Control",
    "UseCases": [
      // {
      //   "label": "An adversary can change the password of other users"
      // },
      // {
      //   "label": "Improper access control implementation"
      // },
      {
        "label": "Management interface is not restricted for specific IPs",
        "link": "/Managementinterface"
      }
    ]
  },
  {
    "Category": "Security Misconfiguration",
    "UseCases": [
      {
        "label": "Application accepts arbitrary methods",
        "link": "/Arbitrarymethods"
      },

      // {
      //   "label": "Application displays runtime error message"
      // },
      // {
      //   "label": "File upload functionality flaw"
      // },
      {
        "label": "Application is allowing blank / invalid passwords",
        "link": "/BlankPassword"
      },
      {
        "label": "Application supports default usernames and passwords for logging in the application.",
        "link": "/DefaultUserNamesPassword"
      },

      {
        "label": "Dangerous HTTP methods are enabled on the server",
        "link": "/DangerousHTTPmethods"
      },
      {
        "label": "OPTIONS method enabled",
        "link": "/OPTIONSmethod"
      },
      {
        "label": "Others",
        "link": "/Olderserverversion"
      },
      // {
      //   "label": "Password is encrypted/encoded using weak algorithm",
      //   "link" : "/Weakalgorithm"
      // },
      // {
      //   "label": "Application database stores password in plain text",
      //   "link" : "/Passwordplaintext"
      // },
      // {
      //   "label": "Application supports older server version",
      //   "link" : "/Olderserverversion"
      // },
      // {
      //   "label": "Application is vulnerable to Local or remote file inclusion"
      // }
    ]
  },
  {
    "Category": "Sensitive Data Exposure",
    "UseCases": [
      // {
      //   "label": "An adversary can fingerprint the mail server version"
      // },
      {
        "label": "An adversary can fingerprint the web server from the HTTP responses",
        "link": "/Adversaryfingerprint"
      },
      // {
      //   "label": "An adversary can harvest email ids for spamming",
      //   "link" : "/Adversaryemailidsspaming"
      // },
      // {
      //   "label": "Application displays database server error message"
      // },
      {
        "label": "Application's server side source code disclosure",
        "link": "/Serversidesourcedisclosure"
      },
      // {
      //   "label": "ASP.NET version is revealed in X-AspNet-Version server response header"
      // },
      {
        "label": "Critical information in URL",
        "link": "/SensitiveData/url"
      },
      {
        "label": "Default web-page present in the server",
        "link": "/Defaultwebpageinserver"
      },
      {
        "label": "Physical server path disclosure",
        "link": "/PhysicalServerPathDisclousere"
      },
      {
        "label": "Private IP address disclosed",
        "link": "/PrivateIPaddressdisclosed"
      },
      // {
      //   "label": "Sensitive application configuration architecture files available at users machine in clear text"
      // },
      // {
      //   "label": "Sensitive data is accessible from cache",
      //   "link" : "/Sensitivedataaccessible"
      // },
      {
        "label": "Sensitive information revealed in HTTP response",
        "link": "/SensitiveData/response"
      },
      {
        "label": "Credentials are transmitted to server in plain text",
        "link": "/Credentialsplaintext"
      },
      {
        "label": "Sensitive data is transmitted to server in plain text",
        "link": "/Sensitivedataplain"
      },
      {
        "label": "Cleartext Password returned in login response",
        "link": "/Cleartextpassword"
      }
    ]
  },
  {
    "Category": "Unvalidated Redirects and Forwards",
    "link": "/URLredirection",
    "UseCases": [
    ]
  },
  {
    "Category": "Cross-Site Scripting (XSS)",
    "UseCases": [
      {
        "label": "Application is vulnerable to cross frame scripting",
        "link": "/logs/iframe"
      },
      {
        "label": "Application is vulnerable to Cross Site Scripting attack",
        "link": "/logs/xss"
      },
      {
        "label": "Application is vulnerable to stored Cross Site Scripting attack",
        "link": "/logs/xss"
      },
      {
        "label": "Is XSS possible via CSS injection?",
        "link": "/logs/css"
      }
    ]
  },
  {
    "Category": "Miscellaneous Attacks",
    "link": "/MiscellaneousAttacks",
    "UseCases": [

    ]
  },
  {
    "Category": "Sensitive Data stored in local storage",
    "UseCases": [
      {
        "label": "Is sensitive data or session token stored in local data storage of browser?",
        "link": "/Sensitivedatastored"
      }
    ]
  },
  {
    "Category": "Weak Cross domain policy",
    "link": "/WeakCrossDomainPolicy",
    "UseCases": [
      // {
      //   "label": "Is \"allow-access-from domain\" in cross-domain.xml policy file set to * or unauthorized domains?",
      //   "link" : "/Crossdomainpolicy"
      // },
      // {
      //   "label": "Is \"Origin\" header in client request validated at the server?",
      //   "link" : "/Originheader"
      // },
      // {
      //   "label": "Is \"Access-Control-Allow-Origin\" header in server response is set securely?",
      //   "link" : "/AccessControlAllowOrigin"
      // }
    ]
  },
  {
    "Category": "XML External Entity Attack",
    "UseCases": [
      {
        "label": "Is \"allow-access-from domain\" in cross-domain.xml policy file set to * or unauthorized domains?",
        "link": "/XXE"
      },
    ]
  },
  {
    "Category": "",
    "UseCases": [
      {
        "label": "",
        "link": ""
      }
    ]
  }
]
export default data