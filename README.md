docsify-swimlanes-io is a [docsify](https://github.com/docsifyjs/docsify/) plugin that let you render [swimlanes.io](https://swimlanes.io) sequence diagrams in docsify.

## How to use

Just add the plugin script:

```html
<script src="//unpkg.com/docsify-swimlanes-io@latest/dist/docsify-swimlanes-io.js"></script> 
```

And add the diagram text:

    ```swimlanes-io
    title: Simple example
    A -> B: Ping
    B --> A: Pong
    ```

See the swimlanes.io [syntax overview](https://swimlanes.io/gallery/full-syntax) for more details.