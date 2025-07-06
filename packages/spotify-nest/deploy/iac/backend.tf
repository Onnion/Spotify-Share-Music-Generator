terraform {
  backend "s3" {
    bucket  = "spotify-share-music-generator.tfstate"
    key     = "spotify-share-music-generator.tfstate/terraform.tfstate"
    region  = "sa-east-1"
    encrypt = true
  }
}
