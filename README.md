# palm

Palm is an programming 
language compiled in the
web browser.

My goal is to make the most 
simple programming language 
for beginners !

## example

```
VAR:int __int-name__ = 0
VAR:string __string-name__ = "hello world"

EDIT __int-name__ = 5

REPETE 5 {
    PRINT __string-name__
}

```

## docs
 
Command | usage | parameters
--- | --- | ---
```ADD[:type] name = value``` | declaring a variable | types: string, int, bool and float
```EDIT name = value``` | editing an already existing variable | no params
```PRINT value``` | printing an object to the console (equal to ``` console.log(); ```) | value: the variable you want to print

