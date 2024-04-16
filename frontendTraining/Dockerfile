# pull official base image
	FROM node:19-alpine3.15

	# set working directory
	WORKDIR /app

	# add `/app/node_modules/.bin` to $PATH
	ENV PATH /app/node_modules/.bin:$PATH

	# install app dependencies
	COPY package.json ./
	COPY package-lock.json ./
	RUN npm install

	# add app
	COPY . ./
	EXPOSE 3001
	# start app
	CMD ["npm", "run", "startprod"] 