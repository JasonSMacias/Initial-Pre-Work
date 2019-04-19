# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

First, the browser checks to see if there is an IP address associated with the url https://www.techtonic.com/ on the local computer in the hosts file.  If not, the browser makes a UDP protocol request to the DNS server set in local preferences settings.  If that server doesn't have the required information in its cache, the server routes the request to another server higher in the hierarchy, and so on, up to the DNS Root system of servers.  If the request gets to the DNS Root, it will be forwarded to the appropriate top-level domain DNS server, which will then forward the request to an authoritative name server that will send the appropriate IP address to the requestin computer.
Next, the requesting computer will use the IP address to set up a TCP connection to the server that the address represents, and then it will send a HTTP GET request.  If that request is valid, the server will return a response with the appropriate information for the page requested to the requesting computer.

## From start to finish, how does data reach you to be rendered in the browser?

When a server sends data to a browser, it starts with a "200 OK" message if everything is okay, and then starts sending the appropriate files broken up into chunks called "packets" to the browser using TCP/IP protocol, directed to the appropriate port.

## What code is rendered in the browser?

The browser parses and renders primarily HTML and CSS code from files sent from a server, or possibly from the local computer, although it can usually also handle other file types.

## What is the server-side code’s main function?

Server-side code's main function is to await requests from clients or other servers, after which it responds with data from files or databases, and possibly process input from users or make changes to its files or databases.

## What is the client-side code’s main function?

The main function of client-side code is to interact with the browser DOM and to interact with servers according to user actions.

## What is runtime?

Runtime is the time during which a computer program is executing.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One for every client that accesses the assets, along with the one hosted on the server (this question was not clear to me, I hope this answers it).

## How many instances of the server-side code are available at any given time?

One at any given time.

## How many instances of the databases connected to the server application are created?

One instance.
