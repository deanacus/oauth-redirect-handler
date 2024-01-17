# OAuth Redirect Handler

## What is it?

This is a tool to simplify the process of copying and pasting redirect query
params when you're working with an API that uses the OAuth authorization code
flow, but don't have a front end running.

## How do I use it

Just include the URL of the page as a redirect url for your application in the
dashboard for whichever API you're using, and pass it along when initiaiting the
authorization request as the redirect url, and when you follow the link, you
will end up on the page with each query param separated out on the page ready to
copy/paste into your server side code.

### Note:

This is **_not_** a replacement for standing up your own front end to handle
these values properly, just an early stage development helper.
