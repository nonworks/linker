# Usage

```
npm install nonworks/linker
```

```
linker = require('linker');

linker({
    page: 'bookings', 
    resource: '123',
    action: 'create'
});

/* "/bookings/123/create" */

linker.setOrigin('example.com');

linker({
    page: 'bookings', 
    resource: '123',
    action: 'create',
    absolute: true
});

/* "example.com/bookings/123/create" */
```
