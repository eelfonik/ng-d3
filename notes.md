## NgModule
- MgModule is a independent module (encapsulation), means it should be able to run all alone by itself:
  - `declarations` array is used to specify all the `component`, `pipe` or `directive` it needs
  - `imports` is a list of other **`modules`** it needs (those who contain `component`, `pipe` or `directive` this module need to use) 
  - `exports` is for interaction, states anything this module exposed to be used in other module (that's why the `imports` above works -- if the imported module exports nothing, you can use nothing 😂), and as you can imagine, the root module will never exports anything otherwise it won't be the root 👀.
  - `providers` is to list all the services this module needs
  
  N.B. but it's not encouraged to do this if possible, we can instead
  1. using `providedIn` in the `Injectable` decorator of service, which enables tree-shaking of unused service, and avoids possible multiple instance of the same service
  2. Use the `providers` inside component that need the service

  A detailed explaination of providers can be found [here](https://angular.io/guide/providers)

- `bootstrap` (only needed for the root module)
