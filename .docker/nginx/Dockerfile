FROM nginx:latest
COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "ngind", "-g", "deamon off;s" ]