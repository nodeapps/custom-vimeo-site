# Node Apps
## custom-vimeo-site

A simple web site that uses the Vimeo API to create a custom Vimeo home page

# Live demo

[http://nodetuts.nodejitsu.com/](http://nodetuts.nodejitsu.com/)

Sample custom Vimeo site using Vimeo videos from [http://nodetuts.com/](http://nodetuts.com/) by [Pedro Teixeira](http://github.com/pgte/)


![](https://github.com/nodeapps/custom-vimeo-site/raw/master/screenshots/custom-vimeo-site.png)

# Installation

    mkdir myapp
    cd myapp/
    jitsu install custom-vimeo-site

*If you do not have `jitsu` installed you can install it via `npm install jitsu -g`*

# Configuration

In order to run the `custom-vimeo-site` application, you will need to specify a channel ID in `config.json` file.

```js
{
  "sitename": "My Vimeo Site",
  "channel": "142981"
}
```

* **sitename:** *Title of the site*
* **channel:** *Channel ID to load videos from*

# Usage

### Starting locally

    node bin/server

*Now you can visit http://localhost:8080 to view your node apps*

### Deploy to nodejitsu

    jitsu deploy

*You will now be prompted for a `subdomain` to deploy your application on*


# License

(The MIT License)

Copyright (c) 2011 Nodejitsu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
