Hướng dẫn cài firebase package:
    sudo npm install -g firebase-tools  
    sudo chown -R 501:20 "/Users/huyentrang268/.npm"
    npm install
    npm audit fix

Hướng dẫn sử dụng firebase:

    sudo npm install -g firebase-tools
    firebase login
    firebase init
    firebase serve
    firebase database:remove    
    firebase hosting:disable                        

    Nếu gặp lỗi  firebase: command not found:
        alias firebase="`npm config get prefix`/bin/firebase"