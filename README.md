# http2-cors-testcase

This currently fails to reproduce [this Firefox bug][bug].

- `npm install`
- Add `127.0.0.1 http2-cors-testcase` to `/etc/hosts`
- Run `npm run start`
- Open the [server][server] and [client][client] hosts in Firefox and add security exceptions.
- Run the following code snippet from the [client][client] in the firefox dev console:

```js
fetch('https://http2-cors-testcase:8080/', { headers: { 'Authorization': 'boop' } })
```

[bug]: https://bugzilla.mozilla.org/show_bug.cgi?id=1225867
[server]: https://http2-cors-testcase:8080
[client]: https://http2-cors-testcase:8081
