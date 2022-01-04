# Embedding swimlanes.io diagrams

Just add a code block
    
    ```swimlanes-io
    title: {far-box} Embedded
    A -> B: Ping
    B --> A: Pong
    ```

```swimlanes-io
title: {far-box} Embedded
A -> B: Ping
B --> A: Pong
```

Alternatively use a `<swimlanes-io>` element. This is required if you want to render code blocks in the diagram. 

    <swimlanes-io>
    title: {far-box} Embedded
    A -> B: Ping
    note:
    ```
    {
        // code block
    }
    ```
    B --> A: Pong
    </swimlanes-io>

<swimlanes-io>
title: {far-box} Embedded
A -> B: Ping
note:
```
{
    // code block
}
```
B --> A: Pong
</swimlanes-io>
