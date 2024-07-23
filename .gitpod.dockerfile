FROM gitpod/workspace-mysql

# Instalar Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN sudo apt-get install -y nodejs