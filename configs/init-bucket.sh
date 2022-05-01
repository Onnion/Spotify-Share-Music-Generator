#!/bin/bash
awslocal cloudformation deploy --stack-name ssmg --template-file "./infrastructure/infrastructure.yml"