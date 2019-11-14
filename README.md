# progressive-santa-tasks

## How To

After each branch change restart server and open new browser instance

FYI - Chrome currently does not support the Push API in incognito mode

## Tasks

### Detect when our user is offline

This one is easy. We should setup icon in the page and listen to online and offline events on window object.
Based on that we should update the icon.

```
git checkout detect-offline
```

### Intercept styles request and generate your own (with a twist)

This is not so hard but it can prove difficult. We are waiting and intercepting styles file and insted of that one we should return custom styles.
This can also get done with sending another styles file, but we should prevent that and force them to use Request object.
For that to work Request object must be configured with header object and that one is the tricky part.


```
git checkout intercept-styles
```

### Handling API request race conditions

This one can be tricky. The idea is to artificially create request race. 
For instance we can tolerate 2 sec for response to come back. After that we are short circuiting and returing response from service worker.
This is a bit difficult to setup, so I am adding random delay to response comming from server - take a look at the code.


```
git checkout request-race
```

### Show install prompt

This is the simple one. To be able to prompt the user to install app - manifest file must have icons of proper size (among other requirements). I added only 72px size icon but it needs to be at least 192px which is conveniently added to images folder. User need to update manifest file with correct icon size (or something else). Extra points for adding simple analytics with window appinstalled event.

```
git checkout install-prompt
```