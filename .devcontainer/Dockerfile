# Update the NODE_VERSION arg in docker-compose.yml to pick a Node version: 18, 16, 14
#FROM golang:1.18.3-bullseye

# Download Hugo
#RUN mkdir $HOME/src && \
#    cd $HOME/src && \
#    git clone https://github.com/gohugoio/hugo.git && \
#    cd hugo && \
#    go install --tags extended && \
#    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
#    cd / && apt-get install -y nodejs && npm install -g firebase-tools

# Hugo dev server port
#EXPOSE 1313

# Start with Hugo Docker image
FROM klakegg/hugo:0.93.2-ubuntu

# Download Curl, Node, NPM, and Firebase
RUN apt-get -y update && apt-get -y upgrade && \
    apt-get install -y curl nodejs npm && \
    npm install -g firebase-tools

# Hugo dev server port
EXPOSE 1313
