terraform {
  backend "s3" {
    bucket = "spotify-share-music-generator.tfstate"
    region = "sa-east-1"
  }
}
