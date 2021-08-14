# NPM configuration

## Skip audit and fund actions in installation process

----
- See https://www.twitch.tv/videos/1112211463 (from 40:00ds )
----

Run theses commands to set these values to false. This action will skip these checks during dependencies installation.

### Local environment
Run these commands to get these values.

`npm config get audit`  
`npm config get fund`  

Run these commands to set these values to false.

`npm config set audit false`  
`npm config get fund false`  

### Remote environment
Define these flags to skip these actions

`npm install --no-audit --no-fund --no-optional`  

