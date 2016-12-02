# Usage

```bash
npm install nonworks/linker
```

```javascript
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
